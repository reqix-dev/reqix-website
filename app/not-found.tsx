import type { Metadata } from "next";
import { publicPath } from "./site-content";

export const metadata: Metadata = {
  title: "页面未找到 / Page not found",
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="section-kicker">404 / NOT FOUND</p>
      <h1>没有找到这个页面</h1>
      <p>The page you requested does not exist or has moved.</p>
      <a className="button button-primary" href={publicPath("/")}>
        <span aria-hidden="true">←</span>
        返回 Reqix 首页
      </a>
    </main>
  );
}
