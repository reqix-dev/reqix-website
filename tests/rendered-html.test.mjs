import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Chinese product homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Reqix/);
  assert.match(html, /把真实请求/);
  assert.match(html, /DevTools/);
  assert.match(html, /本地优先/);
  assert.match(html, /Chrome \/ Edge 121\+/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("serves English, documentation, and privacy routes", async () => {
  const [english, docs, privacy] = await Promise.all([
    render("/en"),
    render("/docs"),
    render("/privacy"),
  ]);

  assert.equal(english.status, 200);
  assert.equal(docs.status, 200);
  assert.equal(privacy.status, 200);
  assert.match(await english.text(), /Turn real traffic/);
  assert.match(await docs.text(), /用 5 分钟创建第一条请求规则/);
  assert.match(await privacy.text(), /最近请求快照与命中日志超过 24 小时后自动清理/);
});

test("removes all disposable preview infrastructure", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /HomePage/);
  assert.match(layout, /reqix\.dev/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/reqix-logo.png", import.meta.url));
  await access(root);
});
