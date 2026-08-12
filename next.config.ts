import type { NextConfig } from "next";

// GitHub Pages 的项目站点托管在 /reqix-website 下；本地开发与未来自定义域名仍使用根路径。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
