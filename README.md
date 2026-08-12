# Reqix Website

Reqix 官方产品网站与用户文档，包含中英文首页、快速开始、DevTools 指南、规则模型、页面脚本、隐私政策、权限说明和更新记录。

## 本地开发

项目使用 Node.js 22：

```bash
nvm use 22
npm install
npm run dev
```

## 验证

```bash
npm run build
npm test
```

网站代码位于 `app/`，部署配置位于 `.openai/hosting.json`。
