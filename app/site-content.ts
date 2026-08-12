export type Locale = "zh" | "en";

export type ArticleId =
  | "getting-started"
  | "devtools"
  | "rules"
  | "page-scripts"
  | "privacy"
  | "permissions"
  | "changelog"
  | "download";

export interface ArticleSection {
  title: string;
  paragraphs?: string[];
  items?: string[];
  steps?: Array<{ title: string; body: string }>;
  code?: string;
  note?: string;
}

export interface Article {
  eyebrow: string;
  title: string;
  description: string;
  updated?: string;
  sections: ArticleSection[];
}

export const ui = {
  zh: {
    nav: {
      product: "产品",
      workflow: "工作方式",
      docs: "文档",
      privacy: "隐私",
      github: "GitHub",
      download: "获取 Reqix",
      menu: "打开导航",
    },
    home: {
      badge: "Chrome · Edge · Manifest V3",
      titleLead: "把真实请求，",
      titleAccent: "变成可控规则。",
      intro:
        "在 DevTools 中捕获 Fetch/XHR，把请求、响应和匹配条件直接带入规则。Mock、改写、重定向与延迟，都在一个清晰的处理链里完成。",
      primary: "5 分钟快速开始",
      secondary: "查看源码",
      local: "本地优先",
      noAccount: "无需账号",
      browsers: "Chrome / Edge 121+",
      previewKicker: "Reqix DevTools",
      previewLive: "实时捕获",
      previewSearch: "筛选 Fetch/XHR",
      previewRequests: "请求",
      previewDetail: "最终数据",
      previewRule: "已匹配：用户资料 Mock",
      previewCreate: "创建规则",
      capabilityKicker: "一条完整、可理解的请求处理链",
      capabilityTitle: "从捕获到命中，不需要重复录入。",
      capabilityIntro:
        "Reqix 围绕真实联调过程设计。先保留现场，再决定怎样处理请求，而不是让你从空表单开始猜。",
      cards: [
        {
          index: "01",
          title: "捕获真实 Fetch/XHR",
          body: "自动带入 Method、URL、Query、请求体、Header、状态码与响应内容。",
        },
        {
          index: "02",
          title: "组合需要的处理动作",
          body: "修改请求、重定向或取消，再选择真实响应、静态 Mock、动态脚本和延迟。",
        },
        {
          index: "03",
          title: "直接检查最终结果",
          body: "命中规则的请求显示处理后的最终数据，并可直接返回对应规则继续编辑。",
        },
      ],
      pipelineKicker: "规则处理模型",
      pipelineTitle: "每一步都知道发生了什么。",
      pipelineIntro:
        "启用当前规则真正需要的阶段。冲突动作会在保存前说明原因，不靠隐藏优先级制造意外。",
      pipeline: [
        { label: "MATCH", title: "匹配", body: "Method · URL · 页面范围" },
        { label: "REQUEST", title: "请求", body: "Query · Payload · Headers" },
        { label: "ROUTE", title: "路由", body: "继续 · Redirect · 取消" },
        { label: "RESPONSE", title: "响应", body: "真实 · Mock · Headers · 延迟" },
      ],
      localTitle: "请求数据不必离开你的浏览器。",
      localBody:
        "Reqix 不设账号、云同步或插件遥测。规则与页面脚本保存在扩展本地；最近请求快照和命中日志会在 24 小时后自动清理。",
      localLink: "查看隐私与权限说明",
      useCasesKicker: "面向真实开发场景",
      useCasesTitle: "少一点等待，多一点确定性。",
      useCases: [
        ["后端尚未完成", "用静态或动态响应先打通界面与异常状态。"],
        ["联调环境不稳定", "保留真实响应，复现一次难得出现的边界条件。"],
        ["需要切换环境", "改写 Query、Header、Payload，或重定向到目标服务。"],
        ["重复页面调试", "按 URL 与生命周期运行页面脚本，不侵入业务仓库。"],
      ],
      finalKicker: "准备好捕获第一个请求了吗？",
      finalTitle: "从真实流量开始，而不是从空白表单开始。",
      finalPrimary: "阅读快速开始",
      finalSecondary: "了解 DevTools 面板",
    },
    footer: {
      tagline: "面向 Chrome 与 Edge 的网络请求拦截与 API Mock 工具。",
      product: "产品",
      resources: "资源",
      legal: "信任",
      docs: "快速开始",
      devtools: "DevTools 指南",
      rules: "规则模型",
      scripts: "页面脚本",
      permissions: "权限说明",
      privacy: "隐私政策",
      changelog: "更新记录",
      source: "源代码",
      rights: "Reqix 是一个本地优先的开源开发者工具。",
    },
    article: {
      menu: "文档导航",
      onThisPage: "本页内容",
      previous: "上一篇",
      next: "下一篇",
      edit: "在 GitHub 查看源码",
      callout: "重要说明",
    },
  },
  en: {
    nav: {
      product: "Product",
      workflow: "How it works",
      docs: "Docs",
      privacy: "Privacy",
      github: "GitHub",
      download: "Get Reqix",
      menu: "Open navigation",
    },
    home: {
      badge: "Chrome · Edge · Manifest V3",
      titleLead: "Turn real traffic into ",
      titleAccent: "rules you control.",
      intro:
        "Capture Fetch/XHR in DevTools and carry the request, response, and match conditions straight into a rule. Mock, rewrite, redirect, and delay in one explicit pipeline.",
      primary: "5-minute quick start",
      secondary: "View source",
      local: "Local-first",
      noAccount: "No account",
      browsers: "Chrome / Edge 121+",
      previewKicker: "Reqix DevTools",
      previewLive: "Live capture",
      previewSearch: "Filter Fetch/XHR",
      previewRequests: "Requests",
      previewDetail: "Final data",
      previewRule: "Matched: User profile mock",
      previewCreate: "Create rule",
      capabilityKicker: "One complete, understandable request pipeline",
      capabilityTitle: "From capture to match, without entering it twice.",
      capabilityIntro:
        "Reqix follows the way integration work actually happens: preserve the real request first, then decide what should happen to it.",
      cards: [
        {
          index: "01",
          title: "Capture real Fetch/XHR",
          body: "Bring in method, URL, query, payload, headers, status, and response content automatically.",
        },
        {
          index: "02",
          title: "Compose the actions you need",
          body: "Rewrite the request, redirect or cancel it, then choose upstream data, static mock, dynamic script, and delay.",
        },
        {
          index: "03",
          title: "Inspect the final result",
          body: "Matched requests show the processed data and link directly back to the responsible rule.",
        },
      ],
      pipelineKicker: "Rule processing model",
      pipelineTitle: "Know exactly what happens at every stage.",
      pipelineIntro:
        "Enable only the stages a rule needs. Reqix explains conflicting actions before save instead of relying on hidden precedence.",
      pipeline: [
        { label: "MATCH", title: "Match", body: "Method · URL · Page scope" },
        { label: "REQUEST", title: "Request", body: "Query · Payload · Headers" },
        { label: "ROUTE", title: "Route", body: "Continue · Redirect · Cancel" },
        { label: "RESPONSE", title: "Response", body: "Upstream · Mock · Headers · Delay" },
      ],
      localTitle: "Your request data does not need to leave the browser.",
      localBody:
        "Reqix has no account, cloud sync, or extension telemetry. Rules and page scripts stay in extension storage; recent request snapshots and hit logs are cleared after 24 hours.",
      localLink: "Read privacy and permission details",
      useCasesKicker: "Built for real development work",
      useCasesTitle: "Less waiting. More certainty.",
      useCases: [
        ["The backend is not ready", "Use static or dynamic responses to finish UI and error states first."],
        ["The test environment is unstable", "Preserve a real response and replay a hard-to-reproduce edge case."],
        ["Traffic needs another target", "Rewrite query, headers, payload, or redirect to another service."],
        ["Page debugging repeats", "Run URL-scoped page scripts without changing the application repository."],
      ],
      finalKicker: "Ready to capture your first request?",
      finalTitle: "Start from real traffic, not an empty form.",
      finalPrimary: "Read the quick start",
      finalSecondary: "Explore the DevTools panel",
    },
    footer: {
      tagline: "Network request interception and API mocking for Chrome and Edge.",
      product: "Product",
      resources: "Resources",
      legal: "Trust",
      docs: "Quick start",
      devtools: "DevTools guide",
      rules: "Rule model",
      scripts: "Page scripts",
      permissions: "Permissions",
      privacy: "Privacy policy",
      changelog: "Changelog",
      source: "Source code",
      rights: "Reqix is a local-first open-source developer tool.",
    },
    article: {
      menu: "Documentation",
      onThisPage: "On this page",
      previous: "Previous",
      next: "Next",
      edit: "View source on GitHub",
      callout: "Important",
    },
  },
} as const;

export const articleOrder: ArticleId[] = [
  "getting-started",
  "devtools",
  "rules",
  "page-scripts",
  "permissions",
  "privacy",
  "changelog",
  "download",
];

export const articlePaths: Record<ArticleId, string> = {
  "getting-started": "/docs",
  devtools: "/docs/devtools",
  rules: "/docs/rules",
  "page-scripts": "/docs/page-scripts",
  privacy: "/privacy",
  permissions: "/permissions",
  changelog: "/changelog",
  download: "/download",
};

const zhArticles: Record<ArticleId, Article> = {
  "getting-started": {
    eyebrow: "快速开始",
    title: "用 5 分钟创建第一条请求规则",
    description:
      "从安装 Reqix 到捕获真实 Fetch/XHR，再到验证 Mock 是否命中，完整走一遍最短路径。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "安装 Reqix",
        paragraphs: [
          "Reqix 当前处于首次商店发布准备阶段。你可以先从 GitHub 构建并在 Chrome 或 Edge 中加载解压后的扩展。正式商店链接上线后，本页会替换为一键安装入口。",
        ],
        code: "nvm use\nnpm ci\nnpm run build",
        items: [
          "打开 chrome://extensions 或 edge://extensions。",
          "启用开发者模式，选择“加载已解压的扩展程序”。",
          "选择 Reqix 仓库构建得到的 dist 目录。",
        ],
      },
      {
        title: "打开 DevTools 面板",
        steps: [
          { title: "打开目标网页", body: "进入你准备联调或 Mock 的页面。" },
          { title: "先打开 Reqix", body: "打开浏览器 DevTools，并切换到 Reqix 面板。" },
          { title: "重新触发请求", body: "刷新网页或执行对应操作，让面板捕获 Fetch/XHR。" },
        ],
        note: "Reqix 当前只收集 Fetch/XHR。请先打开面板，再刷新页面或重新触发接口。",
      },
      {
        title: "从真实请求创建规则",
        paragraphs: [
          "选中目标请求后，可以创建 Mock、请求修改、重定向、取消或延迟等规则。Method、URL、Query、Payload、Header 与响应内容会按场景自动带入。",
        ],
        items: [
          "单条创建会打开规则编辑器，方便立即检查匹配范围和动作。",
          "批量创建会生成停用的规则草稿，避免新规则未经确认就影响页面。",
          "如果请求已经命中某条规则，入口会变为直接编辑该规则。",
        ],
      },
      {
        title: "保存、启用并验证",
        steps: [
          { title: "检查匹配范围", body: "确认 URL、Method 和适用网站不会误伤其它请求。" },
          { title: "配置处理动作", body: "启用真正需要的请求、路由或响应阶段。" },
          { title: "启用规则", body: "确保 Reqix 总开关、所在分组和规则本身都已启用。" },
          { title: "重新发起请求", body: "返回页面触发接口，在 Popup 或 DevTools 中确认命中结果。" },
        ],
      },
    ],
  },
  devtools: {
    eyebrow: "核心工作流",
    title: "用 DevTools 从真实请求创建规则",
    description:
      "Reqix 面板捕获当前调试页面的 Fetch/XHR，并把真实数据带入单条或批量规则草稿。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "开始捕获",
        paragraphs: [
          "打开 DevTools 的 Reqix 面板后，再刷新页面或触发接口。捕获在当前调试上下文中完成，不展示图片、字体、脚本等静态资源。",
        ],
        items: ["按 Method、URL 或状态搜索筛选。", "选择请求查看 Query、Payload、Header、响应与时间信息。", "清空列表不会删除任何规则。"],
      },
      {
        title: "单条创建",
        paragraphs: [
          "选择一条请求后，按目标场景创建规则。Reqix 会尽可能复用现场数据，但不会自动启用新规则。",
        ],
        items: ["Mock：使用捕获的状态码、Header 和响应正文。", "请求修改：从现有 Query、Payload 或 Header 开始编辑。", "Redirect：保留原 Method 与请求体，并遵循统一的 Query 语义。", "延迟：延后向页面交付真实或 Mock 响应。"],
      },
      {
        title: "批量创建",
        paragraphs: [
          "勾选多个请求，可以一次生成一组规则。批量生成的规则默认停用，便于先统一整理名称、分组和适用网站。",
        ],
        note: "响应正文为空或无法安全复用的请求可能被跳过，完成提示会显示创建与跳过数量。",
      },
      {
        title: "查看已处理请求",
        paragraphs: [
          "请求命中规则后，面板会标记规则名称并展示处理后的最终数据。点击规则入口即可回到管理中心继续编辑，无需再次搜索。",
        ],
      },
    ],
  },
  rules: {
    eyebrow: "规则模型",
    title: "理解匹配范围与请求处理链",
    description:
      "一条 Reqix 规则由匹配条件和处理动作组成；只有总开关、分组和规则本身同时启用时才参与匹配。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "匹配条件",
        items: ["HTTP Method。", "URL 的精确、包含、通配符或正则匹配。", "适用于所有网站，或仅适用于指定页面来源。", "规则按当前顺序匹配，第一条命中的规则优先。"],
      },
      {
        title: "请求阶段",
        paragraphs: ["在请求发出前修改 Query、Payload 和允许由浏览器扩展修改的 Header。浏览器或网络栈管理的受限 Header 不会被伪造。"],
      },
      {
        title: "路由阶段",
        paragraphs: ["请求可以继续、重定向或取消。Redirect 与原生网络层协同工作，不能与不兼容的请求或响应动作组合。"],
        items: ["目标 URL 自带 Query 时，以目标 Query 为准。", "目标 URL 没有 Query 且“保留原请求 Query 参数”开启时，拼接原 Query。", "目标 URL 没有 Query 且开关关闭时，不携带原 Query。"],
      },
      {
        title: "响应阶段",
        items: ["返回真实上游响应。", "返回静态状态码、Header 与响应正文。", "通过动态脚本生成响应内容。", "修改响应 Header，或延迟向页面交付响应。"],
        note: "取消请求会立即结束处理；DNR Redirect 独立运行。编辑器会在保存前解释动作冲突和替换结果。",
      },
      {
        title: "匹配冲突",
        paragraphs: ["保存规则时，如果已有规则可能匹配相同请求，Reqix 会显示冲突提醒。继续保存不会删除或覆盖原规则；运行时仍以当前顺序中的第一条匹配规则为准。"],
      },
    ],
  },
  "page-scripts": {
    eyebrow: "页面脚本",
    title: "把重复调试逻辑放进页面脚本",
    description:
      "页面脚本按 URL 与生命周期运行，适合注入调试样式、辅助函数或轻量自动化，不与请求规则耦合。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "首次授权",
        paragraphs: ["Chrome 与 Edge 要求用户明确允许扩展运行用户脚本。Reqix 会在页面脚本页面检查权限并给出浏览器内的开启指引。"],
        note: "页面脚本只执行你自己创建或主动导入的代码。不要导入来源不可信的脚本。",
      },
      {
        title: "匹配与生命周期",
        items: ["使用 URL 条件限定脚本运行的网站。", "选择适合的页面生命周期，避免过早读取尚未存在的 DOM。", "脚本可以单独启用或停用，并在 Popup 中查看当前站点适用项。"],
      },
      {
        title: "可用 API",
        paragraphs: ["页面脚本通过 Reqix 命名空间使用脚本注入、样式、等待和页面就绪能力。"],
        code: "Reqix.script(...)\nReqix.addStyle(...)\nawait Reqix.sleep(300)\nawait Reqix.ready()",
      },
      {
        title: "导入与导出",
        paragraphs: ["可以导入 Reqix 页面脚本包或受支持的用户脚本格式，并选择需要导入的条目。导入界面会展示兼容性警告和剩余数量限制。"],
      },
    ],
  },
  permissions: {
    eyebrow: "信任中心",
    title: "Reqix 为什么需要这些浏览器权限",
    description:
      "请求拦截工具需要在你选择的网站上观察和修改网络请求。这里逐项说明 Manifest V3 权限与对应功能。",
    updated: "最后更新：2026 年 8 月 12 日",
    sections: [
      { title: "storage", paragraphs: ["在扩展本地保存规则、分组、设置、页面脚本、最近请求快照和命中日志。Reqix 不使用账号或自建云端同步。"] },
      { title: "tabs", paragraphs: ["识别当前标签页与站点，保持 Popup、DevTools、内容脚本和后台状态一致。Reqix 不把浏览历史发送给开发者服务器。"] },
      { title: "scripting", paragraphs: ["在用户允许的页面中注入请求拦截桥接逻辑，并同步规则运行状态。这是页面 Fetch/XHR 拦截链路的一部分。"] },
      { title: "userScripts", paragraphs: ["注册和运行用户自己创建或主动导入的页面脚本。页面脚本功能需要浏览器额外授权，并可随时关闭。"] },
      { title: "declarativeNetRequestWithHostAccess", paragraphs: ["在 Chromium 的原生网络层实现受支持的重定向和 Header 处理，满足 Manifest V3 对扩展网络修改的限制。"] },
      { title: "<all_urls>", paragraphs: ["允许请求规则在用户选择的网站上工作。默认站点模式不会在安装后自动接管所有网页；用户仍需启用 Reqix、分组和规则。"], note: "权限覆盖范围很大，是因为接口联调目标无法预先枚举。Reqix 只把访问用于用户主动配置的网络调试能力。" },
      { title: "网页可访问资源", paragraphs: ["interceptor 与 sandbox 资源需要被目标页面加载，用于桥接页面上下文中的 Fetch/XHR 和隔离执行动态响应逻辑。生产包不加载远程代码。"] },
    ],
  },
  privacy: {
    eyebrow: "隐私政策",
    title: "Reqix 隐私政策",
    description:
      "Reqix 是本地优先的浏览器开发者工具。本政策说明扩展处理哪些数据、为什么处理，以及你如何控制和删除它们。",
    updated: "生效日期：2026 年 8 月 10 日 · 最后更新：2026 年 8 月 12 日",
    sections: [
      { title: "1. 适用范围与产品目的", paragraphs: ["本政策适用于 Reqix Chrome 与 Edge 扩展及 reqix.dev 网站。扩展的单一用途是为用户提供网络请求拦截、API Mock、请求调试和直接相关的页面调试能力。"] },
      { title: "2. 扩展处理的数据", items: ["用户创建或导入的规则、分组、页面脚本与设置。", "捕获的 Fetch/XHR URL、Method、Query、Header、请求体、状态码与响应内容。", "规则命中记录、当前标签页站点和运行状态。", "导入、导出文件中由用户选择包含的数据。"] },
      { title: "3. 数据如何产生", paragraphs: ["数据来自用户主动配置、导入，或在 Reqix 已启用并运行于目标页面时产生。请求快照仅用于在 Popup、DevTools 和管理中心中帮助用户创建、检查和验证规则。"] },
      { title: "4. 本地存储与保留期限", paragraphs: ["规则、分组、设置和页面脚本保存在浏览器扩展本地存储中，直至用户删除、清除扩展数据或卸载扩展。最近请求快照与命中日志超过 24 小时后自动清理。"] },
      { title: "5. 传输、共享与遥测", paragraphs: ["Reqix 不设账号、云同步、广告或插件遥测，不将规则、页面脚本、捕获的请求和响应发送到 Reqix 开发者服务器或第三方分析服务。用户访问 reqix.dev 或 GitHub 时，相应平台可能按其自身政策记录常规访问日志。"] },
      { title: "6. 敏感信息", paragraphs: ["请求快照与导出文件可能包含认证 Header、Cookie、业务请求体或响应内容。请在启用、导出、共享或导入前检查数据，只导入可信来源的配置和脚本。"] },
      { title: "7. 动态代码与安全边界", paragraphs: ["Reqix 不从远程服务器下载或执行代码。动态响应脚本和页面脚本来自用户创建或主动导入的内容，并在扩展为该功能设置的隔离边界内运行。"] },
      { title: "8. 用户控制与删除", items: ["在管理中心停用或删除规则、分组和页面脚本。", "清理最近请求、命中日志或全部扩展数据。", "在浏览器扩展设置中限制站点访问或卸载 Reqix。", "在导出前取消选择不希望包含的数据。"] },
      { title: "9. 儿童隐私", paragraphs: ["Reqix 面向软件开发与调试用途，不以儿童为目标用户，也不会主动收集用于识别儿童身份的信息。"] },
      { title: "10. 政策变更", paragraphs: ["当产品数据处理方式发生实质变化时，我们会更新本页，并按 Chrome Web Store 政策在产品内提供必要的显著说明。"] },
      { title: "11. 联系方式与 Limited Use", paragraphs: ["问题与反馈请通过项目 GitHub Discussions 提交。Reqix 对浏览器数据的使用仅限于提供和改进用户可见的网络调试功能，并遵守 Chrome Web Store User Data Policy（包括 Limited Use 要求）。"] },
    ],
  },
  changelog: {
    eyebrow: "更新记录",
    title: "Reqix 的变化，保持透明",
    description: "记录用户可感知的新增能力、行为调整和重要修复。",
    updated: "当前发布通道：首次正式版准备中",
    sections: [
      { title: "1.0.0 · 即将发布", items: ["DevTools 捕获 Fetch/XHR，支持详情查看、搜索筛选、单条与批量创建规则。", "统一的请求匹配、请求修改、Redirect、取消、响应 Mock、Header 修改和延迟处理链。", "Popup 提供插件开关、站点模式、命中规则、页面脚本和常用创建入口。", "页面脚本支持 URL 与生命周期匹配，并提供导入、导出与权限指引。", "配置导入导出、冲突提示、本地隐私说明与中英文界面。", "完整 Chrome 扩展 E2E 覆盖真实 dist Manifest V3 运行链路。"] },
      { title: "发布原则", paragraphs: ["Reqix 尚未正式上线，因此 1.0 以前只维护清晰的当前数据模型和消息协议，不保留未发布内部版本的兼容分支。"] },
    ],
  },
  download: {
    eyebrow: "获取 Reqix",
    title: "选择你的 Chromium 浏览器",
    description: "Reqix 正在准备首次商店发布。正式链接上线前，可以从源码构建并本地加载。",
    updated: "支持 Chrome 121+ 与 Edge 121+",
    sections: [
      { title: "Chrome Web Store", paragraphs: ["商店页面正在准备中。审核通过后，这里会提供正式安装按钮；不会使用来源不明的分发包。"], note: "发布准备中" },
      { title: "Microsoft Edge Add-ons", paragraphs: ["Edge 使用相同的 Chromium Manifest V3 实现。Edge 商店链接会在 Chrome 首发流程稳定后补充。"], note: "计划跟进" },
      { title: "从源码安装", code: "git clone <private-product-repository>.git\ncd private-product-repository\nnvm use\nnpm ci\nnpm run build", items: ["打开 chrome://extensions 或 edge://extensions。", "启用开发者模式。", "选择“加载已解压的扩展程序”，并选择 dist 目录。"] },
      { title: "平台范围", paragraphs: ["Reqix 只对现代 Google Chrome 与 Microsoft Edge 提供正式兼容保证。Firefox、Safari、Brave、Opera 及其它浏览器当前不在支持范围内。"] },
    ],
  },
};

const enArticles: Record<ArticleId, Article> = {
  "getting-started": {
    eyebrow: "Quick start",
    title: "Create your first request rule in 5 minutes",
    description:
      "Install Reqix, capture a real Fetch/XHR request, and verify a mock through the shortest complete workflow.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "Install Reqix", paragraphs: ["Reqix is preparing its first store release. Until the official links are available, build the extension from GitHub and load the unpacked dist directory in Chrome or Edge."], code: "nvm use\nnpm ci\nnpm run build", items: ["Open chrome://extensions or edge://extensions.", "Enable Developer mode and choose Load unpacked.", "Select the dist directory produced by the Reqix build."] },
      { title: "Open the DevTools panel", steps: [{ title: "Open the target page", body: "Navigate to the application you want to integrate or mock." }, { title: "Open Reqix first", body: "Open browser DevTools and select the Reqix panel." }, { title: "Trigger the request again", body: "Reload the page or repeat the action so Reqix can capture Fetch/XHR." }], note: "Reqix currently collects Fetch/XHR only. Open the panel before reloading or triggering the request." },
      { title: "Create a rule from real traffic", paragraphs: ["Select a request and choose a mock, request rewrite, redirect, cancel, or delay scenario. Reqix carries the relevant method, URL, query, payload, headers, and response into the draft."], items: ["Single-create opens the rule editor for immediate review.", "Batch-created rules are disabled drafts by default.", "A request that already matched a rule links directly to that rule instead."] },
      { title: "Save, enable, and verify", steps: [{ title: "Review match scope", body: "Check the URL, method, and page scope." }, { title: "Configure actions", body: "Enable only the request, route, and response stages you need." }, { title: "Enable the rule", body: "The global switch, group, and rule must all be enabled." }, { title: "Request again", body: "Return to the page and verify the match in Popup or DevTools." }] },
    ],
  },
  devtools: {
    eyebrow: "Core workflow",
    title: "Create rules from real requests in DevTools",
    description: "The Reqix panel captures Fetch/XHR from the inspected page and carries the data into single or batch rule drafts.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "Start capturing", paragraphs: ["Open the Reqix panel before reloading or triggering the API. Capture stays in the current inspected context and excludes static assets such as images, fonts, and scripts."], items: ["Filter by method, URL, or status.", "Inspect query, payload, headers, response, and timing.", "Clearing the request list does not delete rules."] },
      { title: "Create one rule", paragraphs: ["Choose the desired scenario for a selected request. Reqix reuses the captured data where appropriate but never enables a new rule automatically."], items: ["Mock from the captured status, headers, and body.", "Start a request rewrite from current query, payload, or headers.", "Redirect while preserving method, body, and the documented query behavior.", "Delay delivery of a real or mocked response."] },
      { title: "Create in batches", paragraphs: ["Select multiple requests to generate a set of disabled drafts. Review names, grouping, and page scope before enabling them."], note: "Requests without a reusable response body may be skipped; the completion message reports both created and skipped counts." },
      { title: "Inspect processed traffic", paragraphs: ["A matched request shows the responsible rule and the final processed data. Follow the rule link to continue editing without searching again."] },
    ],
  },
  rules: {
    eyebrow: "Rule model",
    title: "Understand match scope and the request pipeline",
    description: "A Reqix rule combines match conditions with processing actions. The global switch, group, and rule must all be enabled to participate.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "Match conditions", items: ["HTTP method.", "Exact, contains, wildcard, or regular-expression URL matching.", "All pages or a specified set of page origins.", "The first matching rule in the current order wins."] },
      { title: "Request stage", paragraphs: ["Rewrite query, payload, and headers that browser extensions are allowed to modify before delivery. Browser-managed headers are not forged."] },
      { title: "Route stage", paragraphs: ["Continue, redirect, or cancel. Redirect cooperates with the native network layer and cannot be combined with incompatible request or response actions."], items: ["If the target URL has a query, the target query wins.", "If it has no query and Preserve original request query is on, Reqix appends the original query.", "If it has no query and the switch is off, the original query is omitted."] },
      { title: "Response stage", items: ["Return the upstream response.", "Return a static status, headers, and body.", "Generate response data with a dynamic script.", "Rewrite response headers or delay delivery."], note: "Cancel ends processing immediately, while DNR redirect runs independently. The editor explains conflicts before save." },
      { title: "Potential conflicts", paragraphs: ["Reqix warns when another rule may match the same request. Saving does not delete or overwrite existing rules; the first match in the current order still wins at runtime."] },
    ],
  },
  "page-scripts": {
    eyebrow: "Page scripts",
    title: "Move repeatable debugging logic into page scripts",
    description: "Run debugging styles, helpers, or lightweight automation by URL and lifecycle without coupling them to request rules.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "First-time permission", paragraphs: ["Chrome and Edge require explicit user permission before an extension can register user scripts. Reqix checks availability and shows an in-browser guide."], note: "Page scripts execute only code you create or intentionally import. Never import scripts from an untrusted source." },
      { title: "Matching and lifecycle", items: ["Limit execution with URL conditions.", "Choose a lifecycle that does not read the DOM too early.", "Enable scripts individually and review scripts for the current site in Popup."] },
      { title: "Available API", paragraphs: ["Page scripts use the Reqix namespace for script injection, styles, waiting, and page readiness."], code: "Reqix.script(...)\nReqix.addStyle(...)\nawait Reqix.sleep(300)\nawait Reqix.ready()" },
      { title: "Import and export", paragraphs: ["Import Reqix page-script bundles or supported userscript formats, select individual entries, and review compatibility warnings before saving."] },
    ],
  },
  permissions: {
    eyebrow: "Trust center",
    title: "Why Reqix needs browser permissions",
    description: "A request interception tool needs to observe and modify traffic on websites you choose. Every Manifest V3 permission maps to a current feature.",
    updated: "Last updated: August 12, 2026",
    sections: [
      { title: "storage", paragraphs: ["Stores rules, groups, settings, page scripts, recent request snapshots, and hit logs inside extension storage. Reqix has no account or developer-operated cloud sync."] },
      { title: "tabs", paragraphs: ["Identifies the current tab and site so Popup, DevTools, content scripts, and background state agree. Browsing history is not sent to Reqix servers."] },
      { title: "scripting", paragraphs: ["Injects the request interception bridge and synchronizes rule runtime state on pages the user allows."] },
      { title: "userScripts", paragraphs: ["Registers and runs page scripts that the user creates or intentionally imports. The feature requires additional browser authorization and can be disabled."] },
      { title: "declarativeNetRequestWithHostAccess", paragraphs: ["Implements supported redirects and header handling in Chromium's native network layer under Manifest V3 constraints."] },
      { title: "<all_urls>", paragraphs: ["Lets request rules work on websites selected by the user. Default site mode does not take over every page after installation; the user must still enable Reqix, its group, and the rule."], note: "The scope is broad because API integration targets cannot be enumerated in advance. Access is used only for user-configured network debugging." },
      { title: "Web-accessible resources", paragraphs: ["The interceptor and sandbox resources bridge Fetch/XHR in the page context and isolate dynamic response logic. Production builds do not load remote code."] },
    ],
  },
  privacy: {
    eyebrow: "Privacy policy",
    title: "Reqix Privacy Policy",
    description: "Reqix is a local-first browser developer tool. This policy explains the data it handles, why, and how you control or delete it.",
    updated: "Effective August 10, 2026 · Last updated August 12, 2026",
    sections: [
      { title: "1. Scope and purpose", paragraphs: ["This policy applies to the Reqix Chrome and Edge extension and reqix.dev. The extension's single purpose is network request interception, API mocking, request debugging, and directly related page debugging."] },
      { title: "2. Data handled by the extension", items: ["Rules, groups, page scripts, and settings created or imported by the user.", "Captured Fetch/XHR URLs, methods, query, headers, request bodies, status codes, and response content.", "Rule-hit records, current-tab site, and runtime status.", "Data included by the user in import and export files."] },
      { title: "3. How data is produced", paragraphs: ["Data comes from user configuration or import, and from requests made while Reqix is enabled on a target page. Snapshots exist only to help create, inspect, and verify rules in Popup, DevTools, and the console."] },
      { title: "4. Local storage and retention", paragraphs: ["Rules, groups, settings, and page scripts remain in browser extension storage until deleted, extension data is cleared, or Reqix is uninstalled. Recent request snapshots and hit logs are automatically cleared after 24 hours."] },
      { title: "5. Transfer, sharing, and telemetry", paragraphs: ["Reqix has no account, cloud sync, advertising, or extension telemetry. It does not send rules, page scripts, captured requests, or responses to Reqix developer servers or third-party analytics. Visits to reqix.dev or GitHub may produce ordinary access logs under those platforms' own policies."] },
      { title: "6. Sensitive information", paragraphs: ["Snapshots and exports may contain authentication headers, cookies, business payloads, or response content. Review data before enabling, exporting, sharing, or importing, and import configuration only from trusted sources."] },
      { title: "7. Dynamic code and security boundary", paragraphs: ["Reqix does not download or execute remote code. Dynamic response scripts and page scripts are created or intentionally imported by the user and run within the extension's boundaries for those features."] },
      { title: "8. User controls and deletion", items: ["Disable or delete rules, groups, and page scripts.", "Clear recent requests, hit logs, or all extension data.", "Restrict site access or uninstall Reqix in browser extension settings.", "Exclude data before exporting."] },
      { title: "9. Children's privacy", paragraphs: ["Reqix is intended for software development and debugging, is not directed to children, and does not intentionally collect information to identify children."] },
      { title: "10. Policy changes", paragraphs: ["If data handling changes materially, this page will be updated and Reqix will provide any prominent in-product disclosure required by Chrome Web Store policy."] },
      { title: "11. Contact and Limited Use", paragraphs: ["Use GitHub Discussions for questions and feedback. Reqix uses browser data only to provide or improve visible network-debugging features and complies with the Chrome Web Store User Data Policy, including Limited Use requirements."] },
    ],
  },
  changelog: {
    eyebrow: "Changelog",
    title: "Reqix changes, recorded clearly",
    description: "User-visible capabilities, behavior changes, and important fixes.",
    updated: "Release channel: preparing the first public version",
    sections: [
      { title: "1.0.0 · Upcoming", items: ["Capture Fetch/XHR in DevTools with details, search, filtering, and single or batch rule creation.", "One pipeline for matching, request rewrites, redirects, cancellation, response mocks, header changes, and delays.", "A lightweight Popup for extension state, site mode, matched rules, page scripts, and common creation flows.", "URL- and lifecycle-aware page scripts with import, export, and permission guidance.", "Configuration transfer, conflict warnings, local privacy information, and Chinese/English UI.", "Real dist Manifest V3 Chrome E2E coverage for critical extension workflows."] },
      { title: "Release principle", paragraphs: ["Because Reqix has not shipped publicly yet, pre-1.0 development maintains one clear current data model and protocol without compatibility branches for unreleased internal versions."] },
    ],
  },
  download: {
    eyebrow: "Get Reqix",
    title: "Choose your Chromium browser",
    description: "Reqix is preparing its first store release. Until the official links are live, build and load it locally from source.",
    updated: "Supports Chrome 121+ and Edge 121+",
    sections: [
      { title: "Chrome Web Store", paragraphs: ["The store listing is in preparation. This page will link to the verified listing after approval; Reqix will not distribute builds through untrusted mirrors."], note: "Preparing release" },
      { title: "Microsoft Edge Add-ons", paragraphs: ["Edge uses the same Chromium Manifest V3 implementation. Its store listing will follow after the Chrome release flow is stable."], note: "Planned" },
      { title: "Install from source", code: "git clone <private-product-repository>.git\ncd private-product-repository\nnvm use\nnpm ci\nnpm run build", items: ["Open chrome://extensions or edge://extensions.", "Enable Developer mode.", "Choose Load unpacked and select the dist directory."] },
      { title: "Platform scope", paragraphs: ["Reqix formally supports modern Google Chrome and Microsoft Edge only. Firefox, Safari, Brave, Opera, and other browsers are currently outside the support scope."] },
    ],
  },
};

export function getArticle(locale: Locale, id: ArticleId): Article {
  return locale === "zh" ? zhArticles[id] : enArticles[id];
}

export function localizePath(locale: Locale, path: string): string {
  return locale === "en" ? `/en${path === "/" ? "" : path}` : path;
}
