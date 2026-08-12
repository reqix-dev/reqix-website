import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function readRoute(pathname = "/") {
  const relativePath = pathname === "/" ? "index.html" : `${pathname.replace(/^\//, "")}/index.html`;
  return readFile(new URL(`../out/${relativePath}`, import.meta.url), "utf8");
}

test("静态导出中文产品首页", async () => {
  const html = await readRoute("/");
  assert.match(html, /Reqix/);
  assert.match(html, /把真实请求/);
  assert.match(html, /DevTools/);
  assert.match(html, /本地优先/);
  assert.match(html, /Chrome \/ Edge 138\+/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("静态导出英文、文档和隐私路由", async () => {
  const [english, docs, privacy] = await Promise.all([
    readRoute("/en"),
    readRoute("/docs"),
    readRoute("/privacy"),
  ]);

  assert.match(english, /Turn real traffic/);
  assert.match(docs, /用 5 分钟创建第一条请求规则/);
  assert.match(privacy, /最近请求快照与命中日志超过 24 小时后自动清理/);
  assert.match(privacy, /首次开启请求接管前/);
  assert.match(privacy, /github\.com\/reqix-dev\/reqix\/discussions/);
  assert.match(privacy, /GitHub Pages/);
  assert.doesNotMatch(privacy, /reqix\.dev/);
});

test("全站导航提供社区入口且页脚不再重复链接", async () => {
  const [html, siteSource] = await Promise.all([
    readRoute("/"),
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(html, /https:\/\/github\.com\/reqix-dev\/reqix\/discussions/);
  assert.match(html, /https:\/\/github\.com\/reqix-dev\/reqix\/issues/);
  const footerSource = siteSource.slice(
    siteSource.indexOf("function SiteFooter"),
    siteSource.indexOf("function SiteShell"),
  );
  assert.equal((footerSource.match(/path\("\/changelog"\)/g) || []).length, 1);
  assert.equal((footerSource.match(/path\("\/download"\)/g) || []).length, 1);
  assert.doesNotMatch(footerSource, /t\.source/);
});

test("GitHub Pages 构建使用仓库子路径", async () => {
  const html = await readRoute("/");
  assert.match(html, /\/reqix-website\/_next\/static\//);
  assert.match(html, /href="\/reqix-website\/docs"/);
  assert.match(html, /src="\/reqix-website\/reqix-logo\.png"/);
  assert.match(html, /href="\/reqix-website\/reqix-icon\.png"/);
  assert.match(html, /https:\/\/reqix-dev\.github\.io\/reqix-website\/og\.png/);
});

test("removes all disposable preview infrastructure", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /HomePage/);
  assert.match(layout, /reqix-dev\.github\.io\/reqix-website/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/reqix-logo.png", import.meta.url));
  await access(new URL("../out/404.html", import.meta.url));
  await access(new URL("../out/.nojekyll", import.meta.url));
  await access(root);
});
