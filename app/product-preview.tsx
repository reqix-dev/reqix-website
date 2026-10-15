import { localizePath, publicPath, ui, type Locale } from "./site-content";
import "./product-preview.css";

/** 官网独立绘制公开交互示意；仅使用虚构请求，不引入插件实现或存储数据。 */
const sampleRequests = [
  { name: "me", url: "https://api.example.com/users/me", matched: true, checked: false },
  { name: "orders", url: "https://api.example.com/orders", matched: false, checked: true },
  { name: "plans", url: "https://api.example.com/plans", matched: false, checked: true },
  { name: "profile", url: "https://api.example.com/profile", matched: false, checked: false },
];
const sampleResponse = { id: "usr_2841", name: "Ada Chen", role: "developer", plan: "team", active: true };

/** 复用 Ant Design 的公开图标素材，以 CSS 蒙版跟随官网明暗主题。 */
function PreviewIcon({ name }: { name: "file-add" | "edit" | "clear" | "appstore" }) {
  return <span className="devtools-icon" aria-hidden="true" style={{ maskImage: `url(${publicPath(`/icons/ant-design/${name}.svg`)})` }} />;
}

export function ProductPreview({ locale }: { locale: Locale }) {
  const t = ui[locale].home;
  const selectedCount = sampleRequests.filter((request) => request.checked).length;
  return (
    <figure className="product-figure">
      <div className="devtools-preview" role="img" aria-label={t.previewAlt}>
        <div className="devtools-browser-tabs" aria-hidden="true">
          <span>Elements</span><span>Console</span><span>Sources</span><span>Network</span><span className="is-active">Reqix</span>
          <span className="devtools-example">{t.previewExample}</span>
        </div>
        {/* 公开界面示意：保留日志默认未勾选，管理中心入口位于工具栏右侧。 */}
        <div className="devtools-controls">
          <span className="devtools-clear"><PreviewIcon name="clear" />{t.previewClear}</span>
          <span className="devtools-keep-log"><span className="devtools-check" />{t.previewKeepLog}</span>
          <span className="devtools-management" title={t.previewManagement}><PreviewIcon name="appstore" /><span>{t.previewManagement}</span></span>
        </div>
        <div className="devtools-toolbar">
          <div className="devtools-search-row">
            <div className="devtools-search">{t.previewSearch}</div>
            <span className="devtools-batch">{t.previewBatch} ({selectedCount})<span aria-hidden="true">⌄</span></span>
          </div>
          <div className="devtools-type-filters">
            {[t.previewAll, "Fetch/XHR", "JS", "CSS", "Img", "Media", "Font", "Doc", "WS", "Wasm", "Manifest", "Other"].map((type) => <span className={type === "Fetch/XHR" ? "is-active" : ""} key={type}>{type}</span>)}
          </div>
        </div>
        <div className="devtools-content">
          <div className="devtools-requests">
            <table className="devtools-request-table">
              <colgroup><col className="devtools-check-column" /><col className="devtools-name-column" /><col className="devtools-url-column" /><col className="devtools-method-column" /><col className="devtools-type-column" /><col className="devtools-action-column" /></colgroup>
              <thead><tr><th><span className="devtools-check is-mixed">−</span></th>{t.previewColumns.map((column, index) => <th className={["", "devtools-url-cell", "devtools-method-cell", "devtools-type-cell", ""][index]} key={column}>{column}</th>)}</tr></thead>
              <tbody>{sampleRequests.map((request) => (
                <tr className={request.matched ? "is-selected" : ""} key={request.name}>
                  <td><span className={`devtools-check ${request.checked ? "is-checked" : ""}`}>{request.checked ? "✓" : ""}</span></td>
                  <td className="devtools-request-name">{request.name}</td>
                  <td className="devtools-request-url devtools-url-cell" title={request.url}>{request.url}</td>
                  <td className="devtools-method-cell">GET</td>
                  <td className="devtools-type-cell">Fetch/XHR</td>
                  <td>
                    <span className={`devtools-row-action ${request.matched ? "is-edit" : "is-create"}`} data-preview-action={request.matched ? "edit" : "create"} title={request.matched ? t.previewEdit : t.previewCreate}>
                      <PreviewIcon name={request.matched ? "edit" : "file-add"} />
                      <span className="devtools-action-tooltip">{request.matched ? t.previewEdit : t.previewCreate}</span>
                    </span>
                  </td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <div className="devtools-divider" aria-hidden="true" />
          <div className="devtools-detail">
            <div className="devtools-detail-toolbar">
              <div className="devtools-rule-notice"><span className="devtools-info" aria-hidden="true">i</span><p>{t.previewNotice}</p><span className="devtools-notice-edit">{t.previewEdit}</span></div>
              <span className="devtools-close" title={t.previewClose} aria-hidden="true">×</span>
            </div>
            <div className="devtools-detail-tabs">{t.previewTabs.map((tab, index) => <span className={index === 2 ? "is-active" : ""} key={tab}>{tab}</span>)}</div>
            <div className="devtools-response">
              <pre><code>{JSON.stringify(sampleResponse, null, 2)}</code></pre>
            </div>
          </div>
        </div>
      </div>
      <figcaption><span>{t.previewCaption}</span><a href={publicPath(localizePath(locale, "/docs/devtools"))}>{t.previewGuide}<span aria-hidden="true">↗</span></a></figcaption>
    </figure>
  );
}
