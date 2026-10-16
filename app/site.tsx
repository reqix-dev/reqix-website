import type { ReactNode } from "react";
import Image from "next/image";
import { ProductPreview } from "./product-preview";
import { ThemeToggle, MobileMenu } from "./site-controls";
import {
  CHROME_WEB_STORE_URL,
  EDGE_ADDONS_URL,
  articleOrder,
  articlePaths,
  getArticle,
  localizePath,
  publicPath,
  ui,
  type ArticleId,
  type Locale,
} from "./site-content";

const COMMUNITY_URL = "https://github.com/reqix-dev/reqix/discussions";
const ISSUES_URL = "https://github.com/reqix-dev/reqix/issues";

function ReqixLogo() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark-wrap" aria-hidden="true">
        <Image
          src={publicPath("/reqix-logo.png")}
          alt=""
          width={36}
          height={36}
          className="brand-mark"
          priority
        />
      </span>
      <span className="brand-name">Reqix</span>
    </span>
  );
}

function switchLocalePath(locale: Locale, currentPath: string): string {
  if (locale === "zh") return `/en${currentPath === "/" ? "" : currentPath}`;
  return currentPath.replace(/^\/en(?=\/|$)/, "") || "/";
}

function SiteHeader({ locale, currentPath }: { locale: Locale; currentPath: string }) {
  const t = ui[locale].nav;
  const link = (path: string) => publicPath(localizePath(locale, path));
  const home = link("/");

  const nav = (
    <>
      <a href={`${home}#product`}>{t.product}</a>
      <a href={`${home}#workflow`}>{t.workflow}</a>
      <a href={COMMUNITY_URL}>{t.community}</a>
      <a href={link("/changelog")}>{t.changelog}</a>
    </>
  );

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand-link" href={home} aria-label={locale === "zh" ? "Reqix 首页" : "Reqix home"}>
          <ReqixLogo />
        </a>
        <nav className="desktop-nav" aria-label={locale === "zh" ? "主导航" : "Primary navigation"}>
          {nav}
        </nav>
        <div className="header-actions">
          <ThemeToggle label={t.theme} />
          <a className="language-link" href={publicPath(switchLocalePath(locale, currentPath))} hrefLang={locale === "zh" ? "en" : "zh-CN"}>
            <span className="language-icon" aria-hidden="true">↔</span>
            <span lang={locale === "zh" ? "en" : "zh-CN"}>{locale === "zh" ? "EN" : "中文"}</span>
          </a>
          <a className="button button-small button-primary desktop-download" href={link("/download")}>
            <span aria-hidden="true">↓</span>
            {t.download}
          </a>
          <MobileMenu label={locale === "zh" ? "导航菜单" : "Navigation menu"}>
            <nav aria-label={locale === "zh" ? "移动端导航" : "Mobile navigation"}>
              {nav}
              <a className="mobile-download-link" href={link("/download")}><span aria-hidden="true">↓</span> {t.download}</a>
            </nav>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale].footer;
  const path = (value: string) => publicPath(localizePath(locale, value));
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a className="brand-link" href={path("/")}><ReqixLogo /></a>
          <p>{t.tagline}</p>
          <div className="footer-status"><span></span> Chrome / Edge · MV3</div>
        </div>
        <div>
          <h2>{t.product}</h2>
          <a href={`${path("/")}#product`}>{ui[locale].nav.product}</a>
          <a href={`${path("/")}#workflow`}>{ui[locale].nav.workflow}</a>
        </div>
        <div>
          <h2>{t.resources}</h2>
          <a href={COMMUNITY_URL}>{t.community}</a>
          <a href={ISSUES_URL}>{t.issues}</a>
          <a href={path("/changelog")}>{t.changelog}</a>
        </div>
        <div>
          <h2>{t.legal}</h2>
          <a href={path("/permissions")}>{t.permissions}</a>
          <a href={path("/privacy")}>{t.privacy}</a>
          <a href={path("/download")}>{ui[locale].nav.download}</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Reqix</span>
        <span>{t.rights}</span>
      </div>
    </footer>
  );
}

function SiteShell({
  locale,
  currentPath,
  children,
}: {
  locale: Locale;
  currentPath: string;
  children: ReactNode;
}) {
  return (
    <div className="site-root" lang={locale === "zh" ? "zh-CN" : "en"}>
      <a className="skip-link" href="#main">{locale === "zh" ? "跳到主要内容" : "Skip to content"}</a>
      <SiteHeader locale={locale} currentPath={currentPath} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}

/** 商店地址与安装文档共用，避免首页与下载页出现不同的发布入口。 */
function DownloadActions({ locale }: { locale: Locale }) {
  const t = ui[locale].home;
  return (
    <div className="download-actions">
      <a className="button button-primary store-button" href={CHROME_WEB_STORE_URL}>
        <span aria-hidden="true">↓</span>{t.chromeDownload}<span className="store-arrow" aria-hidden="true">↗</span>
      </a>
      <a className="button button-secondary store-button" href={EDGE_ADDONS_URL}>
        <span aria-hidden="true">↓</span>{t.edgeDownload}<span className="store-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = ui[locale].home;
  const link = (path: string) => publicPath(localizePath(locale, path));

  return (
    <SiteShell locale={locale} currentPath={localizePath(locale, "/")}>
      <section className="hero-section">
        <div className="shell">
          <div className="hero-copy">
            <p className="hero-eyebrow">{t.badge}</p>
            <h1>{t.titleLead}<em>{t.titleAccent}</em></h1>
            <p className="hero-intro"><span className="hero-intro-lead">{t.intro}</span><span className="hero-intro-detail">{t.introDetail}</span></p>
            <DownloadActions locale={locale} />
            <div className="hero-facts"><span>{t.local}</span><span>{t.noAccount}</span><span>{t.browsers}</span></div>
            <a className="text-link hero-guide" href="#workflow">{t.primary}<span aria-hidden="true">→</span></a>
          </div>
          <ProductPreview locale={locale} />
        </div>
      </section>

      <section className="section capabilities" id="product">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="section-kicker">{t.capabilityKicker}</p><h2>{t.capabilityTitle}</h2></div>
            <p>{t.capabilityIntro}</p>
          </div>
          <div className="capability-grid">
            {t.cards.map((card, index) => (
              <article className="capability-card" key={card.title}>
                <div className="feature-heading"><span>{card.label}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
                <h3>{card.title}</h3><p>{card.body}</p>
                <div className="feature-example" aria-hidden="true">
                  {index === 0 && <><div><span>GET</span><code>/api/users/me</code></div><div><span className="example-tag">MOCK</span><code>200 OK · application/json</code></div></>}
                  {index === 1 && <><div><span>QUERY</span><code>page=1 → page=2</code></div><div><span>HEADER</span><code>X-Environment: staging</code></div></>}
                  {index === 2 && <><div><span>GET</span><code>/api/users/me</code></div><div><span className="example-tag">{t.previewMatched}</span><code>{t.previewRuleName}</code></div></>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-section" id="workflow">
        <div className="shell workflow-layout">
          <div className="section-heading workflow-copy">
            <p className="section-kicker">{t.workflowKicker}</p><h2>{t.workflowTitle}</h2><p>{t.workflowIntro}</p>
          </div>
          <ol className="workflow-list">
            {t.steps.map((step, index) => <li key={step.title}><span className="step-number">{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section use-cases-section">
        <div className="shell use-cases-layout">
          <div className="section-heading"><p className="section-kicker">{t.useCasesKicker}</p><h2>{t.useCasesTitle}</h2></div>
          <div className="use-case-grid">
            {t.useCases.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section local-section">
        <div className="shell local-layout">
          <div className="section-heading"><p className="section-kicker">{t.localKicker}</p><h2>{t.localTitle}</h2><p>{t.localBody}</p><a className="text-link" href={link("/permissions")}>{t.localLink}<span aria-hidden="true">↗</span></a></div>
          <dl className="privacy-facts">{t.privacyFacts.map(([title, body]) => <div key={title}><dt><span aria-hidden="true">✓</span>{title}</dt><dd>{body}</dd></div>)}</dl>
        </div>
      </section>

      <section className="final-cta-section" id="download">
        <div className="shell final-cta">
          <div><p className="section-kicker">{t.finalKicker}</p><h2>{t.finalTitle}</h2><p>{t.finalIntro}</p></div>
          <div><DownloadActions locale={locale} /><a className="text-link" href="#workflow">{t.primary}<span aria-hidden="true">→</span></a></div>
        </div>
      </section>
    </SiteShell>
  );
}

function articleLabel(locale: Locale, id: ArticleId): string {
  return getArticle(locale, id).eyebrow;
}

export function ArticlePage({ locale, id }: { locale: Locale; id: ArticleId }) {
  const article = getArticle(locale, id);
  const basePath = articlePaths[id];
  const currentPath = localizePath(locale, basePath);
  const currentIndex = articleOrder.indexOf(id);
  const previous = currentIndex > 0 ? articleOrder[currentIndex - 1] : null;
  const next = currentIndex < articleOrder.length - 1 ? articleOrder[currentIndex + 1] : null;
  const t = ui[locale].article;
  const link = (path: string) => publicPath(localizePath(locale, path));

  return (
    <SiteShell locale={locale} currentPath={currentPath}>
      <div className="docs-shell shell">
        <aside className="docs-sidebar">
          <div className="sidebar-label">{t.menu}</div>
          <nav aria-label={t.menu}>
            {articleOrder.map((item) => <a key={item} className={item === id ? "active" : ""} aria-current={item === id ? "page" : undefined} href={link(articlePaths[item])}>{articleLabel(locale, item)}</a>)}
          </nav>
        </aside>

        <article className="docs-article">
          <header className="article-header">
            <div className="article-eyebrow"><span></span>{article.eyebrow}</div>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            {article.updated && <div className="article-updated">{article.updated}</div>}
          </header>
          <div className="article-content">
            {article.sections.map((section, sectionIndex) => (
              <section key={section.title} id={`section-${sectionIndex + 1}`}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.links?.map((item) => <p className={id === "download" ? "article-download-action" : undefined} key={item.href}><a className={id === "download" ? "button button-primary article-download-link" : "text-link"} href={item.href}>{item.label}<span aria-hidden="true">→</span></a></p>)}
                {section.steps && <ol className="article-steps">{section.steps.map((step) => <li key={step.title}><span>{String(section.steps!.indexOf(step) + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>}
                {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.code && <div className="code-block"><div className="code-bar"><span></span><span></span><span></span><b>{locale === "zh" ? "终端 / 示例" : "Terminal / example"}</b></div><pre><code>{section.code}</code></pre></div>}
                {section.note && <aside className="article-note"><strong>{t.callout}</strong><p>{section.note}</p></aside>}
              </section>
            ))}
          </div>
          <footer className="article-footer">
            <div className="article-pager">
              {previous ? <a href={link(articlePaths[previous])}><span>← {t.previous}</span><strong>{articleLabel(locale, previous)}</strong></a> : <span></span>}
              {next ? <a className="next" href={link(articlePaths[next])}><span>{t.next} →</span><strong>{articleLabel(locale, next)}</strong></a> : <span></span>}
            </div>
          </footer>
        </article>

        <aside className="toc-sidebar">
          <div className="sidebar-label">{t.onThisPage}</div>
          <nav aria-label={t.onThisPage}>
            {article.sections.map((section, index) => <a key={section.title} href={`#section-${index + 1}`}>{section.title}</a>)}
          </nav>
        </aside>
      </div>
    </SiteShell>
  );
}
