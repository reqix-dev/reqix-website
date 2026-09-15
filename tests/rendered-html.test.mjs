import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function readRoute(pathname = "/") {
  const relativePath = pathname === "/" ? "index.html" : `${pathname.replace(/^\//, "")}/index.html`;
  return readFile(new URL(`../out/${relativePath}`, import.meta.url), "utf8");
}

const publishedOrigin = "https://reqix-dev.github.io/reqix-website";

const localizedRoutes = [
  ["/", "/en"],
  ["/docs", "/en/docs"],
  ["/docs/devtools", "/en/docs/devtools"],
  ["/docs/rules", "/en/docs/rules"],
  ["/docs/page-scripts", "/en/docs/page-scripts"],
  ["/permissions", "/en/permissions"],
  ["/privacy", "/en/privacy"],
  ["/changelog", "/en/changelog"],
  ["/download", "/en/download"],
];

function publishedUrl(pathname) {
  return pathname === "/" ? `${publishedOrigin}/` : `${publishedOrigin}${pathname}/`;
}

async function exportedHtmlFiles(directory = new URL("../out/", import.meta.url)) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const url = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) return exportedHtmlFiles(url);
    return entry.name.endsWith(".html") ? [url] : [];
  }));
  return nested.flat();
}

function resolveExportedTarget(sourceFile, rawHref) {
  const href = rawHref.split("#")[0].split("?")[0];
  if (!href || href.startsWith("https://") || href.startsWith("http://") || href.startsWith("mailto:")) return null;

  const withoutBasePath = href.startsWith("/reqix-website")
    ? href.slice("/reqix-website".length) || "/"
    : href;
  if (withoutBasePath.startsWith("/")) {
    if (path.extname(withoutBasePath)) {
      return new URL(`../out/${withoutBasePath.replace(/^\//, "")}`, import.meta.url);
    }
    return withoutBasePath === "/"
      ? new URL("../out/index.html", import.meta.url)
      : new URL(`../out/${withoutBasePath.replace(/^\//, "").replace(/\/$/, "")}/index.html`, import.meta.url);
  }

  return new URL(path.join(path.dirname(sourceFile.pathname), withoutBasePath), "file://");
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
  const [english, docs, privacy, englishPrivacy] = await Promise.all([
    readRoute("/en"),
    readRoute("/docs"),
    readRoute("/privacy"),
    readRoute("/en/privacy"),
  ]);

  assert.match(english, /Turn real traffic/);
  assert.match(docs, /安装后，约 1 分钟创建第一条请求规则/);
  assert.match(privacy, /快照和按日命中日志超过 24 小时后/);
  assert.match(privacy, /首次开启某个网站或全站请求接管前/);
  assert.match(privacy, /主动打开 Reqix DevTools 面板/);
  assert.doesNotMatch(privacy, /清理最近请求、命中日志或全部扩展数据/);
  assert.doesNotMatch(privacy, /浏览器清除扩展数据/);
  assert.match(privacy, /限制 Reqix 的站点访问权限；这不会删除已经保存的本地数据/);
  assert.match(privacy, /二进制响应正文不保存/);
  assert.doesNotMatch(privacy, /二进制正文不保存/);
  assert.match(privacy, /页面脚本和动态响应代码也可能/);
  assert.match(englishPrivacy, /dynamic response code may also initiate network access/);
  assert.doesNotMatch(englishPrivacy, /browser clears extension data/);
  assert.match(privacy, /github\.com\/reqix-dev\/reqix\/discussions/);
  assert.match(privacy, /GitHub Pages/);
  assert.doesNotMatch(privacy, /reqix\.dev/);
});

test("中英文安装文档指向已发布的 Chrome 与 Edge 商店页面", async () => {
  const chromeStorePath = "reqix-intercept-modify-mo/jglhpmlcngcdkkdfjphlgfgbdabckfji";
  const edgeStorePath = "jaiphjpnbgpfgnikcpbpaceojfggdcii";
  const [docs, englishDocs, download, englishDownload] = await Promise.all([
    readRoute("/docs"),
    readRoute("/en/docs"),
    readRoute("/download"),
    readRoute("/en/download"),
  ]);

  for (const html of [docs, englishDocs, download, englishDownload]) {
    assert.match(html, new RegExp(chromeStorePath));
    assert.match(html, new RegExp(edgeStorePath));
    assert.doesNotMatch(html, /等待 Chrome Web Store|Wait for the official Chrome|商店页面正在准备|store listing is in preparation|计划跟进|Planned|尚未提供|not yet available/i);
  }

  for (const html of [download, englishDownload]) {
    assert.equal((html.match(/class="button button-primary article-download-link"/g) || []).length, 2);
    assert.doesNotMatch(html, /class="article-note"/);
  }
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

test("桌面端和移动端获取入口打开浏览器下载选择页", async () => {
  const html = await readRoute("/");
  const downloadUrl = "/reqix-website/download";
  const downloadLinks = html.match(new RegExp(`href="${downloadUrl}"`, "g")) || [];

  assert.equal(downloadLinks.length, 3);
  assert.match(html, /class="[^"]*desktop-download[^"]*" href="\/reqix-website\/download"/);
  assert.match(html, /class="mobile-download-link" href="\/reqix-website\/download"/);
});

test("GitHub Pages 构建使用仓库子路径", async () => {
  const html = await readRoute("/");
  assert.match(html, /\/reqix-website\/_next\/static\//);
  assert.match(html, /href="\/reqix-website\/docs"/);
  assert.match(html, /src="\/reqix-website\/reqix-logo\.png"/);
  assert.match(html, /href="\/reqix-website\/reqix-icon\.png"/);
  assert.match(html, /https:\/\/reqix-dev\.github\.io\/reqix-website\/og\.png/);
});

test("静态导出中的站内页面链接和锚点均有目标", async () => {
  const files = await exportedHtmlFiles();

  for (const file of files) {
    const html = await readFile(file, "utf8");
    const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
    const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);

    for (const href of hrefs) {
      if (href.startsWith("#")) {
        assert.ok(ids.has(href.slice(1)), `${file.pathname} 缺少锚点 ${href}`);
        continue;
      }
      const target = resolveExportedTarget(file, href);
      if (target) await access(target);
    }
  }
});

test("所有内容页提供独立 canonical、hreflang 与分享地址", async () => {
  const titles = new Set();

  for (const [zhRoute, enRoute] of localizedRoutes) {
    const zhUrl = publishedUrl(zhRoute);
    const enUrl = publishedUrl(enRoute);

    for (const [route, lang, canonical] of [
      [zhRoute, "zh-CN", zhUrl],
      [enRoute, "en", enUrl],
    ]) {
      const html = await readRoute(route);
      const title = html.match(/<title>(.*?)<\/title>/)?.[1];

      assert.match(html, new RegExp(`<html lang="${lang}"`));
      assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
      assert.match(html, new RegExp(`<link rel="alternate" hrefLang="zh-CN" href="${zhUrl}"`));
      assert.match(html, new RegExp(`<link rel="alternate" hrefLang="en" href="${enUrl}"`));
      assert.match(html, new RegExp(`<link rel="alternate" hrefLang="x-default" href="${zhUrl}"`));
      assert.match(html, new RegExp(`<meta property="og:url" content="${canonical}"`));
      assert.match(html, /<meta property="og:image:width" content="1731"/);
      assert.match(html, /<meta property="og:image:height" content="909"/);
      assert.ok(title, `${route} 应具有标题`);
      assert.equal(titles.has(title), false, `${route} 不应与其它页面共用标题`);
      titles.add(title);
    }
  }

  assert.equal(titles.size, localizedRoutes.length * 2);
});

test("站点地图包含全部中英文正式路由", async () => {
  const sitemap = await readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8");

  for (const pair of localizedRoutes) {
    for (const route of pair) {
      assert.match(sitemap, new RegExp(`<loc>${publishedUrl(route)}</loc>`));
    }
  }

  assert.equal((sitemap.match(/<url>/g) || []).length, localizedRoutes.length * 2);
  assert.match(sitemap, /hreflang="x-default"/);
});

test("404 页面使用自定义双语提示并禁止索引", async () => {
  const html = await readFile(new URL("../out/404.html", import.meta.url), "utf8");
  assert.match(html, /<html[^>]+lang="zh-CN"/);
  assert.match(html, /没有找到这个页面/);
  assert.match(html, /Page not found/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
});

test("removes all disposable preview infrastructure", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/(zh)/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/(zh)/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /HomePage/);
  assert.match(layout, /createRootMetadata/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/reqix-logo.png", import.meta.url));
  await access(new URL("../out/404.html", import.meta.url));
  await access(new URL("../out/.nojekyll", import.meta.url));
  await access(root);
});

test("中英文首屏与页尾直接提供两个官方商店入口", async () => {
  for (const route of ["/", "/en"]) {
    const html = await readRoute(route);
    const hero = html.slice(html.indexOf('<section class="hero-section">'), html.indexOf('<figure class="product-figure">'));
    const finalCta = html.slice(html.indexOf('<section class="final-cta-section"'), html.indexOf('<footer class="site-footer"'));
    for (const section of [hero, finalCta]) {
      assert.match(section, /href="https:\/\/chromewebstore\.google\.com\/detail\/reqix-intercept-modify-mo\/jglhpmlcngcdkkdfjphlgfgbdabckfji"/);
      assert.match(section, /href="https:\/\/microsoftedge\.microsoft\.com\/addons\/detail\/[^" ]+\/jaiphjpnbgpfgnikcpbpaceojfggdcii"/);
      assert.match(section, route === "/" ? /安装到 Chrome/ : /Add to Chrome/);
      assert.match(section, route === "/" ? /安装到 Edge/ : /Add to Edge/);
    }
  }
});

test("首页上手引导保留真实捕获顺序和草稿默认停用说明", async () => {
  const chinese = await readRoute("/");
  const english = await readRoute("/en");
  assert.match(chinese, /再刷新页面或触发一次 Fetch\/XHR/);
  assert.match(chinese, /生成的规则默认停用/);
  assert.match(english, /Then refresh the page or trigger a Fetch\/XHR request/);
  assert.match(english, /New rules are disabled by default/);
  assert.match(chinese, /界面示意/);
  assert.match(english, /Interface preview/);
});
