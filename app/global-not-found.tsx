import type { Metadata } from "next";
import { publicPath } from "./site-content";
import "./globals.css";

export const metadata: Metadata = {
  title: { absolute: "页面未找到 / Page not found · Reqix" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="zh-CN">
      <body>
        <main className="not-found-page">
          <p className="section-kicker">404 / NOT FOUND</p>
          <h1>没有找到这个页面</h1>
          <p>你访问的页面不存在，或已被移动。</p>
          <h2 lang="en">Page not found</h2>
          <p lang="en">The page you requested does not exist or has moved.</p>
          <a className="button button-primary" href={publicPath("/")}>
            <span aria-hidden="true">←</span>
            返回 Reqix 首页 / <span lang="en">Reqix home</span>
          </a>
        </main>
      </body>
    </html>
  );
}
