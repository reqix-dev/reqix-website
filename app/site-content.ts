export type Locale = "zh" | "en";

const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/reqix-intercept-modify-mo/jglhpmlcngcdkkdfjphlgfgbdabckfji";

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
  links?: Array<{ label: string; href: string }>;
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
      changelog: "更新记录",
      community: "社区讨论",
      download: "获取 Reqix",
      menu: "打开导航",
    },
    home: {
      badge: "Chrome · Edge · Manifest V3",
      titleLead: "把真实请求，",
      titleAccent: "变成可控规则。",
      intro:
        "在 DevTools 中查看当前页面的 Fetch/XHR，并从真实请求创建规则草稿。支持 Mock、请求改写、重定向、取消与响应延迟。",
      primary: "约 1 分钟快速开始",
      secondary: "了解权限",
      local: "本地优先",
      noAccount: "无需账号",
      browsers: "Chrome / Edge 138+",
      previewKicker: "Reqix DevTools",
      previewLive: "实时查看",
      previewSearch: "搜索 URL / 路径 / 名称",
      previewRequests: "请求",
      previewDetail: "规则预览",
      previewRule: "已匹配：用户资料 Mock",
      previewCreate: "创建规则",
      capabilityKicker: "一条完整、可理解的请求处理链",
      capabilityTitle: "从真实请求到规则，不需要重复录入。",
      capabilityIntro:
        "Reqix 围绕真实联调过程设计。先保留现场，再决定怎样处理请求，而不是让你从空表单开始猜。",
      cards: [
        {
          index: "01",
          title: "查看真实 Fetch/XHR",
          body: "在 Reqix DevTools 面板查看 URL、Method、Query、Payload、Header 与可读取的响应。",
        },
        {
          index: "02",
          title: "选择兼容的处理动作",
          body: "按目标组合请求改写与响应处理；Redirect 和取消属于互斥路由，不能再叠加请求或响应动作。",
        },
        {
          index: "03",
          title: "检查规则处理预览",
          body: "命中规则的请求会显示对应规则与可确定性计算的处理预览；动态脚本和延迟不会在预览中执行。",
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
        "Reqix 不设账号、云同步或插件遥测。规则与页面脚本保存在扩展本地；最近请求快照和命中日志超过 24 小时后，会在下一次存储维护时清理。",
      localLink: "查看隐私与权限说明",
      useCasesKicker: "面向真实开发场景",
      useCasesTitle: "少一点等待，多一点确定性。",
      useCases: [
        ["后端尚未完成", "用静态或动态响应先打通界面与异常状态。"],
        ["联调环境不稳定", "保留真实响应，复现一次难得出现的边界条件。"],
        ["需要切换环境", "改写 Query、Header、Payload，或重定向到目标服务。"],
        ["重复页面调试", "按 URL 与生命周期运行页面脚本，不侵入业务仓库。"],
      ],
      finalKicker: "准备好查看第一个请求了吗？",
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
      community: "论坛讨论",
      issues: "问题反馈",
      rights: "Reqix 是一个本地优先的开发者工具。",
    },
    article: {
      menu: "文档导航",
      onThisPage: "本页内容",
      previous: "上一篇",
      next: "下一篇",
      callout: "重要说明",
    },
  },
  en: {
    nav: {
      product: "Product",
      workflow: "How it works",
      docs: "Docs",
      privacy: "Privacy",
      changelog: "Changelog",
      community: "Community",
      download: "Get Reqix",
      menu: "Open navigation",
    },
    home: {
      badge: "Chrome · Edge · Manifest V3",
      titleLead: "Turn real traffic into ",
      titleAccent: "rules you control.",
      intro:
        "Inspect Fetch/XHR from the current page in DevTools and create rule drafts from real requests. Mock, rewrite, redirect, cancel, and delay responses in one explicit pipeline.",
      primary: "About a 1-minute quick start",
      secondary: "Review permissions",
      local: "Local-first",
      noAccount: "No account",
      browsers: "Chrome / Edge 138+",
      previewKicker: "Reqix DevTools",
      previewLive: "Live requests",
      previewSearch: "Search URL / path / name",
      previewRequests: "Requests",
      previewDetail: "Rule preview",
      previewRule: "Matched: User profile mock",
      previewCreate: "Create rule",
      capabilityKicker: "One complete, understandable request pipeline",
      capabilityTitle: "From real request to rule, without entering it twice.",
      capabilityIntro:
        "Reqix follows the way integration work actually happens: preserve the real request first, then decide what should happen to it.",
      cards: [
        {
          index: "01",
          title: "Inspect real Fetch/XHR",
          body: "View URL, method, query, payload, headers, and readable responses in the Reqix DevTools panel.",
        },
        {
          index: "02",
          title: "Choose a compatible pipeline",
          body: "Combine request rewrites with response handling as needed. Redirect and cancel are exclusive routes and cannot be layered with request or response actions.",
        },
        {
          index: "03",
          title: "Inspect the rule preview",
          body: "Matched requests show the responsible rule and deterministic processing preview. Dynamic scripts and delays do not run in the preview.",
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
        "Reqix has no account, cloud sync, or extension telemetry. Rules and page scripts stay in extension storage; request snapshots and hit logs older than 24 hours are removed during the next storage-maintenance run.",
      localLink: "Read privacy and permission details",
      useCasesKicker: "Built for real development work",
      useCasesTitle: "Less waiting. More certainty.",
      useCases: [
        ["The backend is not ready", "Use static or dynamic responses to finish UI and error states first."],
        ["The test environment is unstable", "Preserve a real response and replay a hard-to-reproduce edge case."],
        ["Traffic needs another target", "Rewrite query, headers, payload, or redirect to another service."],
        ["Page debugging repeats", "Run URL-scoped page scripts without changing the application repository."],
      ],
      finalKicker: "Ready to inspect your first request?",
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
      community: "Discussions",
      issues: "Report an issue",
      rights: "Reqix is a local-first developer tool.",
    },
    article: {
      menu: "Documentation",
      onThisPage: "On this page",
      previous: "Previous",
      next: "Next",
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
    title: "安装后，约 1 分钟创建第一条请求规则",
    description:
      "已完成安装后，从一条真实 Fetch/XHR 创建停用的规则草稿，再启用并验证。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "安装 Reqix",
        paragraphs: [
          "Reqix 已在 Chrome Web Store 正式发布。Chrome 用户可以通过官方商店页面直接安装；Edge 商店版本将在后续提供。",
        ],
        links: [{ label: "前往 Chrome Web Store 安装 Reqix", href: CHROME_WEB_STORE_URL }],
        items: [
          "Google Chrome 138 及以上版本可通过官方商店安装。",
          "Edge 版本将在 Chrome 首发流程稳定后跟进。",
          "不要从非官方镜像下载或安装 Reqix。",
        ],
      },
      {
        title: "打开 DevTools 面板",
        steps: [
          { title: "打开目标网页", body: "进入你准备联调或 Mock 的页面。" },
          { title: "先打开 Reqix", body: "打开浏览器 DevTools，并切换到 Reqix 面板。" },
          { title: "重新触发请求", body: "刷新网页或执行对应操作，让面板显示新完成的 Fetch/XHR。" },
        ],
        note: "Reqix 面板当前只显示 Fetch/XHR。请先打开面板，再刷新页面或重新触发接口。",
      },
      {
        title: "从真实请求创建规则",
        paragraphs: [
          "选中目标请求后，选择 Mock、请求修改、重定向、取消或延迟。Reqix 会按所选场景预填能够复用的请求数据；保存前请检查生成的匹配条件与动作。",
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
          { title: "启用规则", body: "开启当前网站或全站接管并启用规则；规则位于分组内时，还要启用它所在的每一级分组。" },
          { title: "重新发起请求", body: "返回页面触发接口，在 Popup 查看实际命中，或在 DevTools 检查规则匹配预览。" },
        ],
      },
    ],
  },
  devtools: {
    eyebrow: "核心工作流",
    title: "用 DevTools 从真实请求创建规则",
    description:
      "Reqix 面板显示当前调试页面的 Fetch/XHR，并把所选请求数据带入单条或批量规则草稿。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "开始查看",
        paragraphs: [
          "打开 DevTools 的 Reqix 面板后，再刷新页面或触发接口。面板通过浏览器 DevTools API 显示当前调试页面已完成的 Fetch/XHR；仅打开面板不会修改请求，也不要求先开启请求接管。",
        ],
        items: ["搜索范围是 URL、路径和请求名称。", "选择请求查看基本信息、Query、Payload、Header 与响应正文。", "清空只会移除当前面板中的列表，不会删除规则或扩展存储中的其它数据。"],
      },
      {
        title: "单条创建",
        paragraphs: [
          "选择一条请求后，按目标场景创建规则。生成的规则是停用草稿，需要在编辑器中检查并主动启用。",
        ],
        items: ["Mock：对正常响应预填可读取的状态码、内容类型和响应正文；错误响应等场景仍需检查草稿内容。", "请求修改：从现有 Query、Payload 或 Header 开始编辑。", "Redirect：浏览器保留原 Method 与请求体，并按规则设置处理 Query。", "取消或延迟：终止请求，或延后向页面交付真实或 Mock 响应。"],
      },
      {
        title: "批量创建",
        paragraphs: [
          "一次最多选择 50 个请求。Reqix 会为每个选中请求创建一条停用草稿，再由你统一检查名称、分组、适用网站和处理动作。",
        ],
      },
      {
        title: "查看匹配规则与处理预览",
        paragraphs: [
          "请求匹配到已启用规则时，面板会标记规则名称，并根据面板中的请求数据和当前规则配置计算静态、可确定的处理预览。预览不会执行动态响应脚本或模拟延迟，也不等同于浏览器最终网络结果；可从入口直接打开对应规则。",
        ],
      },
      {
        title: "用 Popup 录制一组请求",
        paragraphs: [
          "先为当前网站开启请求接管，再从 Popup 的创建菜单开始录制。触发需要保留的接口后结束录制，Reqix 会把支持的响应转换为规则，并放入一个默认停用的新分组中。",
        ],
        items: ["刷新页面会重置本次录制中已经保留的请求。", "单次录制上限为 10 分钟、100 条请求或 50 MB，达到任一上限后只使用已保留的数据。", "没有可用响应等不支持的记录会被跳过；启用生成分组前应检查规则和冲突提示。"],
      },
    ],
  },
  rules: {
    eyebrow: "规则模型",
    title: "理解匹配范围与请求处理链",
    description:
      "一条 Reqix 规则由匹配条件和处理动作组成，并按固定阶段处理请求。",
    updated: "适用于 Reqix 1.0",
    sections: [
      {
        title: "匹配条件",
        items: ["HTTP Method。", "URL 的精确、包含、通配符或正则匹配。", "适用于所有网站，或仅适用于指定页面来源。", "规则按当前顺序匹配，第一条命中的规则优先。"],
      },
      {
        title: "启用关系",
        items: ["当前网站或全站请求接管必须开启，规则本身也必须启用。", "根层级规则不需要分组即可生效。", "规则位于分组内时，它所在的分组及所有上级分组都必须启用。"],
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
        note: "Content-Length、Content-Encoding、Set-Cookie、Transfer-Encoding 等由浏览器或网络栈管理的响应 Header 不会被可靠改写。编辑器会阻止保存不支持的修改，并说明具体原因和动作冲突。",
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
        title: "运行环境",
        paragraphs: ["默认的隔离环境可以操作 DOM，但不能直接读取网页自身的 JavaScript 变量。只有确实需要访问页面变量、对象或函数时才使用 MAIN world；在 MAIN world 中，网站也可以读取或干扰脚本。"],
        note: "无论使用哪种环境，都只运行你自己创建或主动导入的可信代码。",
      },
      {
        title: "可用 API",
        paragraphs: ["Reqix.script 是当前脚本的只读信息对象；Reqix.addStyle、Reqix.sleep 和 Reqix.ready 分别用于添加样式、等待和等待 DOMContentLoaded。"],
        code: "console.log(Reqix.script.name)\nReqix.addStyle('body { outline: 2px solid #6c5ce7; }')\nawait Reqix.sleep(300)\nawait Reqix.ready()",
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
      { title: "<all_urls>", paragraphs: ["允许请求规则在用户选择的 HTTP(S) 网站上工作。默认的跟随站点模式不会在安装后自动接管所有网页；用户需开启当前网站和目标规则，分组内规则还需开启所在分组。"], note: "权限覆盖范围很大，是因为接口联调目标无法预先枚举。Reqix 只把访问用于用户主动配置的网络调试能力。" },
      { title: "网页可访问资源", paragraphs: ["interceptor 与 sandbox 资源需要被目标页面加载，用于桥接页面上下文中的 Fetch/XHR 和隔离执行动态响应逻辑。生产包不加载远程代码。"] },
    ],
  },
  privacy: {
    eyebrow: "隐私政策",
    title: "Reqix 隐私政策",
    description:
      "Reqix 是本地优先的浏览器开发者工具。本政策说明扩展处理哪些数据、为什么处理，以及你如何控制和删除它们。",
    updated: "生效日期：2026 年 8 月 10 日 · 最后更新：2026 年 8 月 13 日",
    sections: [
      { title: "1. 适用范围与用途", paragraphs: ["本政策适用于 Reqix Chrome 与 Edge 扩展及官方 Reqix 网站。扩展用于用户主动控制的网络请求调试、API Mock 和页面脚本，不要求账号，不提供云同步、广告或用户画像。"] },
      { title: "2. 扩展处理的数据", items: ["规则、分组、页面脚本、站点开关和界面偏好等配置。", "Fetch/XHR 的 URL、Method、Query、请求与响应 Header、文本请求体与响应正文、状态码、大小、耗时和发起时间。", "规则命中记录、当前标签页运行状态和用户主动开始的录制状态。", "用户选择导入或导出的配置和脚本。"] },
      { title: "3. 何时处理数据", paragraphs: ["用户创建、编辑、导入或录制规则与页面脚本时，Reqix 会保存相应配置。首次开启某个网站或全站请求接管前，Reqix 会披露处理范围并要求明确确认；确认后，内容脚本才会在已开启的网站中观察和处理 Fetch/XHR。", "用户主动打开 Reqix DevTools 面板时，浏览器 DevTools API 会把当前调试页面已完成的 Fetch/XHR 提供给面板。这一查看能力独立于请求接管开关，不会注入或修改请求；面板最多保留 500 条列表记录，清空列表或关闭 DevTools 会移除面板内存中的记录。只有用户创建规则时，选中请求中的相关数据才会保存为规则配置。"] },
      { title: "4. 本地存储与保留", paragraphs: ["Reqix 使用扩展空间中的 IndexedDB、chrome.storage.local、chrome.storage.session 和扩展页面 localStorage，不使用 Chrome Sync。规则、分组和页面脚本保留至用户删除或卸载 Reqix；站点开关和偏好设置保留至用户修改或卸载。localStorage 仅保存主题、导航视图和编辑器高度等界面偏好。", "最近请求快照每个标签页最多 100 条、20 MB，全部标签页合计最多 80 MB。请求体仅在可以转换为文本且不超过 1 MB 时可能保留；文本响应正文最多保留 1 MB，二进制响应正文不保存。快照和按日命中日志超过 24 小时后，会在扩展下一次执行存储维护时清理，因此浏览器关闭或扩展未运行时可能延后。", "用户主动开始的单次录制最多持续 10 分钟，并最多保留 100 条请求或 50 MB。结束录制后，支持的请求会转换为可编辑规则；未完成的录制会在浏览器下次启动或扩展安装、更新时丢弃。当前标签页命中摘要保存在会话空间，并在导航、关闭标签页或会话结束后清除。Reqix 不对本地配置额外加密。"] },
      { title: "5. 传输与共享", paragraphs: ["Reqix 没有接收规则、请求快照、页面脚本或使用行为的后端服务，也不包含插件遥测、广告或第三方分析 SDK。这些本地数据不会自动发送给 Reqix 开发者。", "未被 Mock、重定向或取消的请求仍会访问网页原本的服务器；重定向会访问用户指定的目标；页面脚本和动态响应代码也可能按用户编写的代码内容发起受浏览器安全策略约束的网络访问。配置文件只在用户主动导出后由用户自行保存或分享。"] },
      { title: "6. 脚本与安全边界", paragraphs: ["动态响应代码在独立的扩展 Sandbox Worker 中运行，不能访问 Chrome 扩展 API 或页面 DOM。页面脚本默认在隔离环境运行；选择 MAIN world 后，脚本可以读取或修改网页自身的 JavaScript 对象，同时网页也可以读取或干扰脚本。Reqix 不从开发者服务器下载代码，执行的动态响应代码和页面脚本均来自用户创建或主动导入的内容。", "请求数据和导出文件可能包含 Authorization、Cookie、Token、个人信息或业务数据。只在可信设备和网站使用包含敏感内容的规则，并只导入、分享可信配置和脚本。"] },
      { title: "7. 用户控制与删除", items: ["在 Popup 中关闭当前网站或全站请求接管。", "在管理中心逐项停用或删除规则、分组和页面脚本。", "在导出前取消选择不希望写入文件的规则、分组或页面脚本。", "在浏览器中限制 Reqix 的站点访问权限；这不会删除已经保存的本地数据。", "卸载 Reqix，由浏览器删除该扩展的本地数据。"], note: "Reqix 没有服务器端副本，因此不存在需要向 Reqix 申请删除的云端数据。" },
      { title: "8. 官方网站", paragraphs: ["官方 Reqix 网站是托管在 GitHub Pages 上的静态网站，不设账号或自建分析服务。访问 GitHub Pages 时，GitHub 会为安全目的记录并存储访问者的 IP 地址，也可能按其隐私声明处理请求时间、设备或浏览器信息等服务使用数据。"], links: [{ label: "查看 GitHub Pages 数据收集说明", href: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" }, { label: "查看 GitHub 隐私声明", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" }] },
      { title: "9. 儿童隐私与政策变更", paragraphs: ["Reqix 面向开发者和测试人员，不以儿童为目标用户，也不会故意收集儿童个人信息。数据处理方式发生实质变化时，本页会更新日期，并按适用的商店政策提供显著说明和必要同意。"] },
      { title: "10. 联系方式与 Limited Use", paragraphs: ["如对本政策、权限或数据处理方式有疑问，请通过 Reqix GitHub Discussions 联系维护者。Reqix 对从浏览器和相关 API 获得的信息的使用，将遵守 Chrome Web Store User Data Policy，包括 Limited Use 要求；这些数据仅用于提供或改进本政策所述的单一用途和用户可见功能。"], links: [{ label: "前往 Reqix GitHub Discussions", href: "https://github.com/reqix-dev/reqix/discussions" }, { label: "查看 Chrome Web Store Limited Use 政策", href: "https://developer.chrome.com/docs/webstore/program-policies/limited-use" }] },
    ],
  },
  changelog: {
    eyebrow: "更新记录",
    title: "Reqix 的变化，保持透明",
    description: "记录用户可感知的新增能力、行为调整和重要修复。",
    updated: "当前发布通道：Chrome Web Store",
    sections: [
      { title: "1.0.0 · 已发布", items: ["DevTools 查看 Fetch/XHR 详情，并按 URL、路径或名称搜索，支持单条与批量创建规则。", "统一的请求匹配、请求修改、Redirect、取消、响应 Mock、Header 修改和延迟处理链。", "Popup 提供网站或全站开关、命中规则、页面脚本、快捷创建和请求录制入口。", "首次开启请求接管前披露本地数据处理范围并要求明确确认。", "页面脚本支持 URL、生命周期和运行环境设置，并提供导入、导出与权限指引。", "配置导入导出、匹配冲突提示、本地隐私说明与中英文界面。"], links: [{ label: "在 Chrome Web Store 查看 Reqix", href: CHROME_WEB_STORE_URL }] },
      { title: "发布原则", paragraphs: ["Reqix 已公开发布。后续涉及规则格式、存储结构或消息协议的调整，会同步评估已发布配置的兼容性和升级路径。"] },
    ],
  },
  download: {
    eyebrow: "获取 Reqix",
    title: "选择你的 Chromium 浏览器",
    description: "Reqix 已在 Chrome Web Store 正式发布。请通过官方商店页面安装，避免来源不明的分发包。",
    updated: "支持 Chrome 138+ 与 Edge 138+",
    sections: [
      { title: "Chrome Web Store", paragraphs: ["Chrome 版本已正式发布，可通过下方官方商店页面安装并接收后续更新。"], links: [{ label: "前往 Chrome Web Store 安装 Reqix", href: CHROME_WEB_STORE_URL }], note: "已发布" },
      { title: "Microsoft Edge Add-ons", paragraphs: ["Edge 使用相同的 Chromium Manifest V3 实现。Edge 商店链接会在 Chrome 首发流程稳定后补充。"], note: "计划跟进" },
      { title: "安装安全", items: ["只使用本页公布的 Chrome Web Store 或 Microsoft Edge Add-ons 正式链接。", "不要从第三方镜像、网盘或非官方安装包获取 Reqix。", "目前公开安装入口为上方 Chrome Web Store 页面；Edge 商店链接尚未提供。"] },
      { title: "平台范围", paragraphs: ["Reqix 只对现代 Google Chrome 与 Microsoft Edge 提供正式兼容保证。Firefox、Safari、Brave、Opera 及其它浏览器当前不在支持范围内。"] },
    ],
  },
};

const enArticles: Record<ArticleId, Article> = {
  "getting-started": {
    eyebrow: "Quick start",
    title: "After installation, create your first rule in about a minute",
    description:
      "Once Reqix is installed, create a disabled draft from a real Fetch/XHR request, then enable and verify it.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "Install Reqix", paragraphs: ["Reqix is now available on the Chrome Web Store. Chrome users can install it from the official listing; the Edge store version will follow."], links: [{ label: "Install Reqix from the Chrome Web Store", href: CHROME_WEB_STORE_URL }], items: ["Google Chrome 138 or newer can install Reqix from the official store.", "The Edge release will follow after the Chrome launch flow is stable.", "Do not install Reqix from unofficial mirrors or packages."] },
      { title: "Open the DevTools panel", steps: [{ title: "Open the target page", body: "Navigate to the application you want to integrate or mock." }, { title: "Open Reqix first", body: "Open browser DevTools and select the Reqix panel." }, { title: "Trigger the request again", body: "Reload the page or repeat the action so the panel can display newly completed Fetch/XHR." }], note: "Reqix currently shows Fetch/XHR only. Open the panel before reloading or triggering the request." },
      { title: "Create a rule from real traffic", paragraphs: ["Select a request and choose mock, request rewrite, redirect, cancel, or delay. Reqix pre-fills the request data that applies to the selected scenario; review every generated match condition and action before saving."], items: ["Single-create opens the rule editor for immediate review.", "Batch-created rules are disabled drafts by default.", "A request that already matched a rule links directly to that rule instead."] },
      { title: "Save, enable, and verify", steps: [{ title: "Review match scope", body: "Check the URL, method, and page scope." }, { title: "Configure actions", body: "Enable only the request, route, and response stages you need." }, { title: "Enable the rule", body: "Enable interception for the current site or all sites and enable the rule. If it is inside a group, every group in its path must also be enabled." }, { title: "Request again", body: "Return to the page and check the actual hit in Popup, or inspect the rule-match preview in DevTools." }] },
    ],
  },
  devtools: {
    eyebrow: "Core workflow",
    title: "Create rules from real requests in DevTools",
    description: "The Reqix panel displays Fetch/XHR from the inspected page and carries selected request data into single or batch rule drafts.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "Start capturing", paragraphs: ["Open the Reqix panel before reloading or triggering the API. The panel uses the browser DevTools API to display completed Fetch/XHR from the inspected page. Opening it does not modify traffic and does not require request interception to be enabled."], items: ["Search by URL, path, or request name.", "Select a request to inspect general data, query, payload, headers, and response body.", "Clear removes only the current panel list; it does not delete rules or other extension data."] },
      { title: "Create one rule", paragraphs: ["Choose a scenario for the selected request. The generated rule is a disabled draft that must be reviewed and explicitly enabled."], items: ["Mock: for a normal response, pre-fill the readable status, content type, and body; error responses and other edge cases still require review.", "Request rewrite: start from the current query, payload, or headers.", "Redirect: the browser preserves method and body, while Reqix applies the configured query behavior.", "Cancel or delay: stop the request or delay delivery of a real or mocked response."] },
      { title: "Create in batches", paragraphs: ["Select up to 50 requests at once. Reqix creates one disabled draft for each selection; review the names, group, page scope, and actions before enabling them."] },
      { title: "Inspect matched rules and the processing preview", paragraphs: ["When a request matches an enabled rule, the panel shows the rule name and computes a static, deterministic preview from the request data in the panel and current rule configuration. The preview does not execute dynamic response scripts or simulate delays and is not proof of the browser's final network result. Use the link to open the responsible rule directly."] },
      { title: "Record a request set from Popup", paragraphs: ["Enable request interception for the current site, then start recording from Popup's create menu. Trigger the APIs you want to keep and finish recording. Reqix converts supported responses into rules inside a new group that is disabled by default."], items: ["Reloading the page resets requests already retained in the current recording.", "One recording is limited to 10 minutes, 100 requests, or 50 MB. After a limit is reached, only retained data is used.", "Unsupported records such as requests without a usable response are skipped. Review generated rules and conflict warnings before enabling the group."] },
    ],
  },
  rules: {
    eyebrow: "Rule model",
    title: "Understand match scope and the request pipeline",
    description: "A Reqix rule combines match conditions with actions that run through a fixed request pipeline.",
    updated: "For Reqix 1.0",
    sections: [
      { title: "Match conditions", items: ["HTTP method.", "Exact, contains, wildcard, or regular-expression URL matching.", "All pages or a specified set of page origins.", "The first matching rule in the current order wins."] },
      { title: "Enablement", items: ["Request interception must be enabled for the current site or all sites, and the rule itself must be enabled.", "A root-level rule does not need a group.", "For a grouped rule, its group and every parent group must be enabled."] },
      { title: "Request stage", paragraphs: ["Rewrite query, payload, and headers that browser extensions are allowed to modify before delivery. Browser-managed headers are not forged."] },
      { title: "Route stage", paragraphs: ["Continue, redirect, or cancel. Redirect cooperates with the native network layer and cannot be combined with incompatible request or response actions."], items: ["If the target URL has a query, the target query wins.", "If it has no query and Preserve original request query is on, Reqix appends the original query.", "If it has no query and the switch is off, the original query is omitted."] },
      { title: "Response stage", items: ["Return the upstream response.", "Return a static status, headers, and body.", "Generate response data with a dynamic script.", "Rewrite response headers or delay delivery."], note: "Browser- or network-managed response headers such as Content-Length, Content-Encoding, Set-Cookie, and Transfer-Encoding cannot be rewritten reliably. The editor blocks unsupported changes from being saved and explains the reason and any action conflicts." },
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
      { title: "Execution world", paragraphs: ["The default isolated world can modify the DOM but cannot directly read the page's own JavaScript variables. Use MAIN world only when direct access to page variables, objects, or functions is required; in MAIN world, the website can also inspect or interfere with the script."], note: "In either world, run only code you created or intentionally imported from a trusted source." },
      { title: "Available API", paragraphs: ["Reqix.script is a read-only information object for the current script. Reqix.addStyle, Reqix.sleep, and Reqix.ready add styles, wait, and wait for DOMContentLoaded respectively."], code: "console.log(Reqix.script.name)\nReqix.addStyle('body { outline: 2px solid #6c5ce7; }')\nawait Reqix.sleep(300)\nawait Reqix.ready()" },
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
      { title: "<all_urls>", paragraphs: ["Lets request rules work on HTTP(S) sites selected by the user. The default per-site mode does not take over every page after installation. Users must enable the current site and target rule; grouped rules also require their groups to be enabled."], note: "The scope is broad because API integration targets cannot be enumerated in advance. Access is used only for user-configured network debugging." },
      { title: "Web-accessible resources", paragraphs: ["The interceptor and sandbox resources bridge Fetch/XHR in the page context and isolate dynamic response logic. Production builds do not load remote code."] },
    ],
  },
  privacy: {
    eyebrow: "Privacy policy",
    title: "Reqix Privacy Policy",
    description: "Reqix is a local-first browser developer tool. This policy explains the data it handles, why, and how you control or delete it.",
    updated: "Effective August 10, 2026 · Last updated August 13, 2026",
    sections: [
      { title: "1. Scope and purpose", paragraphs: ["This policy applies to the Reqix Chrome and Edge extension and the official Reqix website. The extension provides user-controlled network debugging, API mocking, and page scripts. It requires no account and provides no cloud sync, advertising, or user profiling."] },
      { title: "2. Data handled by the extension", items: ["Rules, groups, page scripts, per-site switches, and interface preferences.", "Fetch/XHR URL, method, query, request and response headers, textual request and response bodies, status, size, duration, and start time.", "Rule-hit records, current-tab runtime state, and recording state when the user explicitly starts a recording.", "Configuration and scripts that the user chooses to import or export."] },
      { title: "3. When data is processed", paragraphs: ["Reqix saves configuration when a user creates, edits, imports, or records rules and page scripts. Before request interception is enabled for a site or for all sites for the first time, Reqix discloses the processing scope and requires explicit confirmation. Only after confirmation do content scripts observe and process Fetch/XHR on enabled sites.", "When the user opens the Reqix DevTools panel, the browser DevTools API supplies completed Fetch/XHR from the inspected page to the panel. This viewer is independent of the request-interception switch and does not inject into or modify traffic. The panel keeps up to 500 rows in memory; clearing the list or closing DevTools removes them from panel memory. Selected request data is saved as configuration only when the user creates a rule."] },
      { title: "4. Local storage and retention", paragraphs: ["Reqix uses IndexedDB, chrome.storage.local, chrome.storage.session, and extension-page localStorage. It does not use Chrome Sync. Rules, groups, and page scripts remain until the user deletes them or uninstalls Reqix; per-site switches and preferences remain until the user changes them or uninstalls. localStorage holds interface preferences only, such as theme, navigation view, and editor height.", "Recent snapshots are limited to 100 entries and 20 MB per tab, and 80 MB across all tabs. A request body may be retained only when it can be converted to text and is no larger than 1 MB. Textual response bodies are limited to 1 MB, and binary response bodies are not stored. Snapshots and daily hit logs older than 24 hours are removed the next time extension storage maintenance runs, so removal may be delayed while the browser is closed or the extension is inactive.", "An explicitly started recording is limited to 10 minutes, 100 requests, or 50 MB. Finishing it converts supported requests into editable rules. Unfinished recordings are discarded on the next browser startup or extension install or update. Current-tab hit summaries use session storage and are cleared on navigation, tab close, or session end. Reqix does not add encryption to local configuration."] },
      { title: "5. Transfer and sharing", paragraphs: ["Reqix has no backend that receives rules, request snapshots, page scripts, or usage behavior, and it contains no extension telemetry, advertising, or third-party analytics SDK. This local data is not sent automatically to Reqix developers.", "Requests that are not mocked, redirected, or canceled still reach the page's original server. Redirects reach a target chosen by the user. Page scripts and dynamic response code may also initiate network access according to user-authored code and subject to browser security policies. Exported files are saved or shared only by the user after an explicit export."] },
      { title: "6. Scripts and security boundaries", paragraphs: ["Dynamic response code runs in a dedicated extension Sandbox Worker without access to Chrome extension APIs or the page DOM. Page scripts use an isolated world by default. In MAIN world they can read or modify the page's JavaScript objects, and the page can inspect or interfere with the script. Reqix does not download code from a developer server; dynamic response code and page scripts come from content the user creates or intentionally imports.", "Request data and export files may contain Authorization values, cookies, tokens, personal information, or business data. Use sensitive rules only on trusted devices and sites, and import or share only trusted configurations and scripts."] },
      { title: "7. User controls and deletion", items: ["Disable request interception for the current site or all sites from Popup.", "Disable or delete individual rules, groups, and page scripts in the management center.", "Deselect rules, groups, or page scripts that should not be included before exporting.", "Restrict Reqix site access in the browser; this does not delete data already stored locally.", "Uninstall Reqix so the browser removes the extension's local data."], note: "Reqix keeps no server-side copy, so there is no cloud data that users need to ask Reqix to delete." },
      { title: "8. Official website", paragraphs: ["The official Reqix website is a static site hosted on GitHub Pages. It has no account system or developer-operated analytics. When a GitHub Pages site is visited, GitHub logs and stores the visitor's IP address for security purposes and may process service-usage data such as request time, device, or browser information under its privacy statement."], links: [{ label: "Read GitHub Pages data-collection details", href: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" }, { label: "Read the GitHub Privacy Statement", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" }] },
      { title: "9. Children's privacy and policy changes", paragraphs: ["Reqix is intended for developers and testers, is not directed to children, and does not knowingly collect children's personal information. If data practices change materially, this page's date will be updated and Reqix will provide prominent disclosure and consent where applicable store policies require it."] },
      { title: "10. Contact and Limited Use", paragraphs: ["For questions about this policy, permissions, or data handling, contact the maintainers through Reqix GitHub Discussions. Reqix's use of information received from browsers and related APIs will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements; the data is used only to provide or improve the single purpose and user-visible features described in this policy."], links: [{ label: "Open Reqix GitHub Discussions", href: "https://github.com/reqix-dev/reqix/discussions" }, { label: "Read the Chrome Web Store Limited Use policy", href: "https://developer.chrome.com/docs/webstore/program-policies/limited-use" }] },
    ],
  },
  changelog: {
    eyebrow: "Changelog",
    title: "Reqix changes, recorded clearly",
    description: "User-visible capabilities, behavior changes, and important fixes.",
    updated: "Release channel: Chrome Web Store",
    sections: [
      { title: "1.0.0 · Released", items: ["Inspect Fetch/XHR details in DevTools, search by URL, path, or name, and create one rule or a batch.", "One pipeline for matching, request rewrites, redirects, cancellation, response mocks, header changes, and delays.", "A lightweight Popup for per-site or all-site state, matched rules, page scripts, quick creation, and request recording.", "Local-data disclosure and explicit confirmation before request interception is enabled for the first time.", "Page scripts with URL, lifecycle, and execution-world settings plus import, export, and permission guidance.", "Configuration import and export, match-conflict warnings, local privacy information, and Chinese/English UI."], links: [{ label: "View Reqix on the Chrome Web Store", href: CHROME_WEB_STORE_URL }] },
      { title: "Release principle", paragraphs: ["Reqix is publicly available. Future changes to rule formats, storage structures, or message protocols will account for compatibility and upgrade paths for published configurations."] },
    ],
  },
  download: {
    eyebrow: "Get Reqix",
    title: "Choose your Chromium browser",
    description: "Reqix is now available on the Chrome Web Store. Install it from the official listing and avoid untrusted packages.",
    updated: "Supports Chrome 138+ and Edge 138+",
    sections: [
      { title: "Chrome Web Store", paragraphs: ["The Chrome version is officially available. Install it from the verified store listing below to receive future updates."], links: [{ label: "Install Reqix from the Chrome Web Store", href: CHROME_WEB_STORE_URL }], note: "Available" },
      { title: "Microsoft Edge Add-ons", paragraphs: ["Edge uses the same Chromium Manifest V3 implementation. Its store listing will follow after the Chrome release flow is stable."], note: "Planned" },
      { title: "Installation safety", items: ["Use only the official Chrome Web Store or Microsoft Edge Add-ons links published on this page.", "Do not download Reqix from third-party mirrors, file-sharing services, or unofficial packages.", "The Chrome Web Store listing above is the current public installation channel; an Edge store link is not yet available."] },
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

/**
 * 为 GitHub Pages 项目站点补齐仓库子路径。
 * 本地开发时保持根路径，避免开发服务器出现多余前缀。
 */
export function publicPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}` || "/";
}
