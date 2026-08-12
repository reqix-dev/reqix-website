import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: "Reqix — 网络请求拦截与 API Mock",
  description:
    "在 Chrome 与 Edge 的 DevTools 中捕获 Fetch/XHR，并快速创建 Mock、请求改写与重定向规则。",
};

export default function Home() {
  return <HomePage locale="zh" />;
}
