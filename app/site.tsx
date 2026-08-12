import type { ReactNode } from "react";
import {
  articleOrder,
  articlePaths,
  getArticle,
  localizePath,
  ui,
  type ArticleId,
  type Locale,
} from "./site-content";

function ReqixLogo() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark-wrap" aria-hidden="true">
        <img src="/reqix-logo.png" alt="" className="brand-mark" />
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
  const home = localizePath(locale, "/");
  const docs = localizePath(locale, "/docs");
  const privacy = localizePath(locale, "/privacy");
  const download = localizePath(locale, "/download");

  const nav = (
    <>
      <a href={`${home}#product`}>{t.product}</a>
      <a href={`${home}#workflow`}>{t.workflow}</a>
      <a href={docs}>{t.docs}</a>
      <a href={privacy}>{t.privacy}</a>
      <a href={localizePath(locale, "/changelog")}>{t.changelog}</a>
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
          <a className="language-link" href={switchLocalePath(locale, currentPath)} hrefLang={locale === "zh" ? "en" : "zh-CN"}>
            <span aria-hidden="true">◎</span>
            {locale === "zh" ? "EN" : "中文"}
          </a>
          <a className="button button-small button-primary desktop-download" href={download}>
            <span aria-hidden="true">↓</span>
            {t.download}
          </a>
          <details className="mobile-menu">
            <summary aria-label={t.menu}>
              <span></span><span></span>
            </summary>
            <nav aria-label={locale === "zh" ? "移动端导航" : "Mobile navigation"}>
              {nav}
              <a className="mobile-download-link" href={download}>{t.download}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ locale }: { locale: Locale }) {
  const t = ui[locale].footer;
  const path = (value: string) => localizePath(locale, value);
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
          <a href={path("/docs")}>{t.docs}</a>
          <a href={path("/docs/devtools")}>{t.devtools}</a>
          <a href={path("/docs/rules")}>{t.rules}</a>
          <a href={path("/docs/page-scripts")}>{t.scripts}</a>
        </div>
        <div>
          <h2>{t.resources}</h2>
          <a href={path("/changelog")}>{t.changelog}</a>
          <a href={path("/download")}>{ui[locale].nav.download}</a>
          <a href={path("/download")}>{t.source}</a>
        </div>
        <div>
          <h2>{t.legal}</h2>
          <a href={path("/permissions")}>{t.permissions}</a>
          <a href={path("/privacy")}>{t.privacy}</a>
          <a href={path("/changelog")}>{t.changelog}</a>
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

function ProductPreview({ locale }: { locale: Locale }) {
  const t = ui[locale].home;
  const requests = [
    ["GET", "/api/users/me", "200", "48 ms"],
    ["POST", "/api/orders", "201", "126 ms"],
    ["GET", "/api/plans", "200", "31 ms"],
    ["PATCH", "/api/profile", "204", "74 ms"],
  ];
  return (
    <div className="product-preview" aria-label={locale === "zh" ? "Reqix DevTools 产品界面示意" : "Reqix DevTools product preview"}>
      <div className="preview-window-bar">
        <div className="window-dots" aria-hidden="true"><i></i><i></i><i></i></div>
        <span>{t.previewKicker}</span>
        <div className="live-state"><i></i>{t.previewLive}</div>
      </div>
      <div className="preview-toolbar">
        <div className="preview-search"><span aria-hidden="true">⌕</span>{t.previewSearch}</div>
        <button type="button" tabIndex={-1}><span aria-hidden="true">＋</span>{t.previewCreate}</button>
      </div>
      <div className="preview-body">
        <div className="request-pane">
          <div className="pane-title"><span>{t.previewRequests}</span><b>12</b></div>
          <div className="request-head"><span>Method</span><span>URL</span><span>Status</span><span>Time</span></div>
          {requests.map((request, index) => (
            <div className={`request-row ${index === 0 ? "is-selected" : ""}`} key={request[1]}>
              <span className={`method method-${request[0].toLowerCase()}`}>{request[0]}</span>
              <span>{request[1]}</span>
              <span className="status-code"><i></i>{request[2]}</span>
              <span>{request[3]}</span>
            </div>
          ))}
        </div>
        <div className="detail-pane">
          <div className="pane-title"><span>{t.previewDetail}</span><b>JSON</b></div>
          <div className="matched-rule"><span aria-hidden="true">↳</span>{t.previewRule}</div>
          <div className="detail-tabs"><span className="active">Response</span><span>Headers</span><span>Timing</span></div>
          <pre aria-hidden="true"><code>{`{
  "id": "usr_2841",
  "name": "Ada Chen",
  "role": "developer",
  "plan": "team",
  "features": [
    "request-rewrite",
    "response-mock"
  ]
}`}</code></pre>
        </div>
      </div>
      <div className="preview-pipeline" aria-hidden="true">
        <span className="active">MATCH</span><i></i><span>REQUEST</span><i></i><span>ROUTE</span><i></i><span className="active">RESPONSE</span>
      </div>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = ui[locale].home;
  const homePath = localizePath(locale, "/");
  const docsPath = localizePath(locale, "/docs");
  const devtoolsPath = localizePath(locale, "/docs/devtools");
  const privacyPath = localizePath(locale, "/permissions");

  return (
    <SiteShell locale={locale} currentPath={homePath}>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="shell hero-layout">
          <div className="hero-copy">
            <div className="eyebrow-chip"><span></span>{t.badge}</div>
            <h1>{t.titleLead}<em>{t.titleAccent}</em></h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={docsPath}><span aria-hidden="true">→</span>{t.primary}</a>
              <a className="button button-secondary" href={privacyPath}><span aria-hidden="true">◎</span>{t.secondary}</a>
            </div>
            <div className="hero-facts">
              <span><i>✓</i>{t.local}</span>
              <span><i>✓</i>{t.noAccount}</span>
              <span><i>✓</i>{t.browsers}</span>
            </div>
          </div>
          <div className="hero-preview-wrap"><ProductPreview locale={locale} /></div>
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
              <article className={`capability-card card-${index + 1}`} key={card.index}>
                <span className="card-index">{card.index}</span>
                <div className={`feature-visual feature-visual-${index + 1}`} aria-hidden="true">
                  {index === 0 && <><i></i><span>GET</span><b>/api/users/me</b><em>200</em></>}
                  {index === 1 && <><span>Q</span><i></i><span>R</span><i></i><span>M</span></>}
                  {index === 2 && <><b>✓</b><span>Matched rule</span><em>48 ms</em></>}
                </div>
                <h3>{card.title}</h3><p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pipeline-section" id="workflow">
        <div className="shell pipeline-layout">
          <div className="pipeline-copy section-heading">
            <p className="section-kicker">{t.pipelineKicker}</p>
            <h2>{t.pipelineTitle}</h2>
            <p>{t.pipelineIntro}</p>
            <a className="text-link" href={localizePath(locale, "/docs/rules")}>{ui[locale].footer.rules}<span aria-hidden="true">→</span></a>
          </div>
          <div className="pipeline-list">
            {t.pipeline.map((item, index) => (
              <div className="pipeline-item" key={item.label}>
                <div className="pipeline-number">{String(index + 1).padStart(2, "0")}</div>
                <div><span>{item.label}</span><h3>{item.title}</h3><p>{item.body}</p></div>
                <div className="pipeline-state">{index === 0 || index === 3 ? "ON" : "OPTIONAL"}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section local-section">
        <div className="shell local-card">
          <div className="privacy-orbit" aria-hidden="true"><span></span><i></i><b></b></div>
          <div>
            <p className="section-kicker">LOCAL-FIRST / NO TELEMETRY</p>
            <h2>{t.localTitle}</h2>
            <p>{t.localBody}</p>
            <a className="text-link" href={privacyPath}>{t.localLink}<span aria-hidden="true">→</span></a>
          </div>
          <div className="local-stats" aria-label={locale === "zh" ? "隐私摘要" : "Privacy summary"}>
            <div><strong>0</strong><span>{locale === "zh" ? "云端账号" : "cloud accounts"}</span></div>
            <div><strong>0</strong><span>{locale === "zh" ? "遥测 SDK" : "telemetry SDKs"}</span></div>
            <div><strong>24h</strong><span>{locale === "zh" ? "临时记录保留" : "temporary retention"}</span></div>
          </div>
        </div>
      </section>

      <section className="section use-cases-section">
        <div className="shell">
          <div className="section-heading centered-heading"><p className="section-kicker">{t.useCasesKicker}</p><h2>{t.useCasesTitle}</h2></div>
          <div className="use-case-grid">
            {t.useCases.map(([title, body], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell final-cta">
          <p className="section-kicker">{t.finalKicker}</p>
          <h2>{t.finalTitle}</h2>
          <div className="hero-actions">
            <a className="button button-primary" href={docsPath}><span aria-hidden="true">→</span>{t.finalPrimary}</a>
            <a className="button button-secondary" href={devtoolsPath}><span aria-hidden="true">⌁</span>{t.finalSecondary}</a>
          </div>
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

  return (
    <SiteShell locale={locale} currentPath={currentPath}>
      <div className="docs-shell shell">
        <aside className="docs-sidebar">
          <div className="sidebar-label">{t.menu}</div>
          <nav aria-label={t.menu}>
            {articleOrder.slice(0, 4).map((item) => <a key={item} className={item === id ? "active" : ""} href={localizePath(locale, articlePaths[item])}>{articleLabel(locale, item)}</a>)}
            <div className="sidebar-label sidebar-group">{locale === "zh" ? "信任与发布" : "Trust & release"}</div>
            {articleOrder.slice(4).map((item) => <a key={item} className={item === id ? "active" : ""} href={localizePath(locale, articlePaths[item])}>{articleLabel(locale, item)}</a>)}
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
                {section.steps && <ol className="article-steps">{section.steps.map((step) => <li key={step.title}><span>{String(section.steps!.indexOf(step) + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}</ol>}
                {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.code && <div className="code-block"><div className="code-bar"><span></span><span></span><span></span><b>{locale === "zh" ? "终端 / 示例" : "Terminal / example"}</b></div><pre><code>{section.code}</code></pre></div>}
                {section.note && <aside className="article-note"><strong>{t.callout}</strong><p>{section.note}</p></aside>}
              </section>
            ))}
          </div>
          <footer className="article-footer">
            <div className="article-pager">
              {previous ? <a href={localizePath(locale, articlePaths[previous])}><span>← {t.previous}</span><strong>{articleLabel(locale, previous)}</strong></a> : <span></span>}
              {next ? <a className="next" href={localizePath(locale, articlePaths[next])}><span>{t.next} →</span><strong>{articleLabel(locale, next)}</strong></a> : <span></span>}
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
