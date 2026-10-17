<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Reqix 官网协作约束

- Reqix 插件本体是闭源产品。官网仓库只存放公开网站、用户文档、隐私与权限说明、发布记录和公开素材，不得复制插件源码、内部协议、密钥、未公开路线图或用户数据。
- 插件核心实现归属私有产品仓库；公开社区内容归属 <https://github.com/reqix-dev/reqix>；官网与公开产品资料归属本仓库。本机目录与私有仓库位置仅在本地或私有协作资料中维护。
- 公开文件、示例、截图、提交说明和提交元数据不得包含维护者真实姓名、个人邮箱、本机用户名、绝对文件路径或私有仓库地址。公开提交使用项目身份及不含个人信息的邮箱，提交和推送前检查作者与提交者信息，避免沿用本机全局个人身份。
- 官网地址为 <https://reqix-dev.github.io/reqix-website/>；推送 `main` 后由 GitHub Actions 验证并部署。
- 公开文档必须同时维护中文与英文，并与插件当前实现、私有产品仓库中的隐私说明和商店提交材料保持一致。无法从源码确认的能力、限制、时限或上线承诺不要写入官网。
- 本仓库统一使用 Node.js 22。修改后至少运行 `npm run verify:lockfile`、`npm run lint` 和 `npm test`。
- 每次对话产生代码、测试、配置或文档修改时，在验证并检查 diff 后自动创建本地 Git commit；除非用户明确要求，不自动 push 或部署。
