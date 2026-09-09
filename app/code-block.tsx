"use client";

import { useState } from "react";
import type { Locale } from "./site-content";

/** 只复制原始内容，避免把提示、语言标签或 Markdown 围栏带进配置文件。 */
export function CodeBlock({ locale, title, code }: { locale: Locale; title: string; code: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const label = locale === "zh"
    ? { idle: "复制", copied: "已复制", failed: "复制失败，请手动选择内容" }
    : { idle: "Copy", copied: "Copied", failed: "Copy failed; select the content manually" };
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setState("copied");
    } catch {
      // 权限受限时保留原文可选，不把失败伪装成复制成功。
      setState("failed");
    }
  }
  return <div className="code-block">
    <div className="code-bar"><b>{title}</b><button type="button" onClick={copy} aria-label={`${label.idle}: ${title}`}><span aria-hidden="true">⧉</span>{label.idle}</button></div>
    {state !== "idle" && <div className="code-feedback" role="status">{label[state]}</div>}
    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- 可滚动示例需要键盘焦点，并通过区域名称说明内容。 */}
    <pre role="region" tabIndex={0} aria-label={title}><code>{code}</code></pre>
  </div>;
}
