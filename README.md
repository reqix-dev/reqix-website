# Reqix Website

Reqix 官方产品网站与用户文档，包含中英文首页、快速开始、DevTools 指南、规则模型、页面脚本、隐私政策、权限说明和更新记录。网站使用 Next.js 静态导出并部署到 GitHub Pages。

## 本地开发

项目使用 Node.js 22：

```bash
nvm use 22
npm ci
npm run dev
```

## 验证

```bash
npm run build
npm test
```

`npm run build` 生成根路径版本，`npm run build:pages` 生成带 `/reqix-website` 前缀的 GitHub Pages 版本。

网站代码位于 `app/`，静态导出配置位于 `next.config.ts`。

## GitHub Pages 部署

推送到 `main` 后，`.github/workflows/deploy-pages.yml` 会自动构建并发布 `out/` 目录。

首次部署前，在 GitHub 仓库中进入 `Settings → Pages`，将 `Build and deployment` 的来源设置为 `GitHub Actions`。默认访问地址为：

```text
https://reqix-dev.github.io/reqix-website/
```
