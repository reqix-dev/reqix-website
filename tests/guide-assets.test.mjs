import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import vm from "node:vm";
import test from "node:test";
import Ajv from "ajv";

const publicRoot = new URL("../public/", import.meta.url);
const load = async (path) => JSON.parse(await readFile(new URL(path, publicRoot), "utf8"));
const schema = await load("schemas/reqix-config-v1.schema.json");
const ajv = new Ajv({ allErrors: true, schemaId: "auto" });
const validate = ajv.compile(schema);

// Schema 负责结构；下载包还须验证文件级引用、默认开关和正文，避免“能解析但不能导入”。
test("中英文下载配置通过 Schema，且默认停用并保持完整引用", async () => {
  for (const locale of ["zh", "en"]) {
    const names = (await readdir(new URL(`examples/${locale}/`, publicRoot))).filter((name) => name.endsWith(".json"));
    assert.equal(names.length, 15);
    for (const name of names) {
      const config = await load(`examples/${locale}/${name}`);
      assert.ok(validate(config), `${locale}/${name}: ${ajv.errorsText(validate.errors)}`);
      const rules = [...config.rules, ...config.groups.flatMap((group) => group.rules)];
      assert.equal(new Set(rules.map((rule) => rule.id)).size, rules.length);
      assert.equal(new Set(config.groups.map((group) => group.id)).size, config.groups.length);
      assert.equal(new Set(config.pageScripts.map((script) => script.id)).size, config.pageScripts.length);
      for (const group of config.groups) {
        assert.equal(group.enabled, false);
        for (const rule of group.rules) assert.equal(rule.groupId, group.id);
      }
      for (const rule of rules) {
        assert.equal(rule.enabled, false);
        assert.equal(rule.enabledIndex, 0);
        assert.equal(rule.source, "manual");
        assert.equal(rule.pageScope, "specified");
        assert.equal(rule.pageUrlRules[0].value, "http://localhost:3000");
        assert.doesNotThrow(() => JSON.parse(rule.responseBody));
        if (rule.requestPayload !== undefined) assert.doesNotThrow(() => JSON.parse(rule.requestPayload));
        if (rule.matchType === "regex") assert.doesNotThrow(() => new RegExp(rule.url));
      }
      for (const script of config.pageScripts) {
        assert.equal(script.enabled, false);
        assert.doesNotThrow(() => new vm.Script(script.code));
      }
      assert.deepEqual(await readFile(new URL(`../out/examples/${locale}/${name}`, import.meta.url)), await readFile(new URL(`examples/${locale}/${name}`, publicRoot)));
    }
  }
});

test("Schema 拒绝常见 AI 生成错误和动作冲突", async () => {
  const template = await load("examples/en/template.reqix.json");
  const mutations = [
    (data) => { data.version = "1"; },
    (data) => { data.$schema = schema.$id; },
    (data) => { delete data.pageScripts; },
    (data) => { data.rules[0].responseBody = { items: [] }; },
    (data) => { data.rules[0].enabled = true; },
    (data) => { data.rules[0].groupId = "missing-group"; },
    (data) => { delete data.rules[0].pipeline; },
    (data) => { data.rules[0].pipeline.route.mode = "cancel"; },
    (data) => { data.rules[0].pipeline.route.mode = "redirect"; data.rules[0].redirectUrl = "http://localhost:3000/api/echo"; },
    (data) => { data.rules[0].requestHeaderRules.push({ id: "x", name: "X-Demo", operation: "set", value: "1" }); },
  ];
  for (const mutate of mutations) {
    const invalid = structuredClone(template);
    mutate(invalid);
    assert.equal(validate(invalid), false, mutate.toString());
  }
});

test("案例包覆盖所有主要动作，动态分页返回约定数据", async () => {
  for (const locale of ["zh", "en"]) {
    const pack = await load(`examples/${locale}/all-examples.reqix.json`);
    const rules = pack.groups[0].rules;
    assert.equal(rules.length, 11);
    assert.equal(pack.pageScripts.length, 1);
    const byId = (id) => rules.find((rule) => rule.id === `example-${id}`);
    assert.equal(JSON.parse(byId("users-success").responseBody).items.length, 2);
    assert.deepEqual(JSON.parse(byId("users-empty").responseBody), { items: [], total: 0 });
    assert.equal(byId("users-error").statusCode, 500);
    assert.ok(byId("request-headers").pipeline.request.headers);
    assert.ok(byId("query-params").pipeline.request.data);
    assert.ok(byId("request-payload").pipeline.request.data);
    assert.ok(byId("response-headers").pipeline.response.headers);
    assert.ok(byId("delay").pipeline.response.delay);
    assert.equal(byId("delay").responseDelay, 2000);
    assert.equal(byId("redirect").pipeline.route.mode, "redirect");
    assert.equal(byId("cancel").pipeline.route.mode, "cancel");
    for (const id of ["request-headers", "query-params", "request-payload", "response-headers", "delay", "redirect", "cancel"]) {
      assert.equal(byId(id).pipeline.response.mode, "upstream");
    }
    for (const [page, expectedIds] of [[1, [1, 2]], [2, [3, 4]], [3, [5]], [99, []]]) {
      const result = await vm.runInNewContext(`${byId("dynamic-pagination").responseScript}\ngenerateResponse({query:{page:"${page}"}})`, {}, { timeout: 1000 });
      assert.deepEqual(Array.from(result.items, (item) => item.id), expectedIds);
      assert.equal(result.total, 5);
    }
  }
});

function decodeHtml(value) {
  return value.replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&amp;", "&");
}

test("完整模板与提示词在页面和下载文件中一致，并使用正确的发布子路径", async () => {
  for (const locale of ["zh", "en"]) {
    const prefix = locale === "en" ? "en/" : "";
    const ai = await readFile(new URL(`../out/${prefix}docs/ai/index.html`, import.meta.url), "utf8");
    const format = await readFile(new URL(`../out/${prefix}docs/config-format/index.html`, import.meta.url), "utf8");
    const examples = await readFile(new URL(`../out/${prefix}docs/examples/index.html`, import.meta.url), "utf8");
    const json = decodeHtml(format.match(/<pre[^>]*><code>([\s\S]*?)<\/code><\/pre>/)[1]);
    assert.deepEqual(JSON.parse(json), await load(`examples/${locale}/template.reqix.json`));
    const prompt = decodeHtml(ai.match(/<pre[^>]*><code>([\s\S]*?)<\/code><\/pre>/)[1]);
    assert.ok((await readFile(new URL(`examples/${locale}/ai-instructions.md`, publicRoot), "utf8")).includes(prompt));
    for (const html of [ai, format, examples]) {
      assert.match(html, new RegExp(`/reqix-website/examples/${locale}/`));
      assert.doesNotMatch(html, /\/en\/examples\/|\/en\/schemas\//);
      assert.match(html, /<button type="button" aria-label="/);
    }
    assert.match(ai, /\/reqix-website\/schemas\/reqix-config-v1.schema.json/);
    assert.match(examples, /download=""/);
    const downloads = [...examples.matchAll(/href="([^"]+)" download=""/g)].map((match) => match[1]);
    assert.equal(downloads.length, 15);
    for (const download of downloads) {
      await readFile(new URL(`../out/${download.replace("/reqix-website/", "")}`, import.meta.url));
    }
  }
});
