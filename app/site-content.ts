export type Locale = "zh" | "en";

export const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/reqix-intercept-modify-mo/jglhpmlcngcdkkdfjphlgfgbdabckfji";
export const EDGE_ADDONS_URL =
  "https://microsoftedge.microsoft.com/addons/detail/reqix%EF%BC%9A%E6%8B%A6%E6%88%AA%E3%80%81%E4%BF%AE%E6%94%B9%E4%B8%8E-mock-http-%E8%AF%B7%E6%B1%82/jaiphjpnbgpfgnikcpbpaceojfggdcii";

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
      privacy: "隐私",
      changelog: "更新记录",
      community: "社区讨论",
      download: "下载 Reqix",
      theme: "切换主题",
      menu: "打开导航",
    },
    home: {
      badge: "浏览器里的 API 调试工具",
      titleLead: "Mock 接口响应，",
      titleAccent: "修改与重定向请求。",
      intro: "改写参数、Header 与请求体，切换接口环境，模拟异常与延迟。",
      introDetail: "在 DevTools 中选择请求，直接创建调试规则。",
      chromeDownload: "安装到 Chrome",
      edgeDownload: "安装到 Edge",
      primary: "看看如何开始",
      local: "本地优先",
      noAccount: "无需账号",
      browsers: "Chrome / Edge 138+",
      previewAlt: "Reqix DevTools 界面示意：筛选 Fetch/XHR 后显示四条虚构请求，每行右侧提供新建规则；已命中的用户资料请求提供编辑规则，右侧展示静态处理预览。两条请求已勾选，搜索框旁提供批量操作；顶部提供清空、保留日志和管理中心入口。",
      previewExample: "界面示意",
      previewKeepLog: "保留日志",
      previewManagement: "管理中心",
      previewSearch: "搜索 URL / 路径 / 名称",
      previewClear: "清空网络请求",
      previewAll: "全部",
      previewBatch: "批量操作",
      previewColumns: ["名称", "地址", "方法", "类型", "操作"],
      previewTabs: ["Headers", "Payload", "Response"],
      previewRuleName: "用户资料 Mock",
      previewMatched: "已匹配",
      previewCreate: "新建规则",
      previewEdit: "编辑规则",
      previewClose: "关闭请求详情",
      previewNotice: "当前展示的是根据规则“用户资料 Mock”静态推算的处理预览",
      previewCaption: "从一次真实请求，开始你的第一条规则。",
      previewGuide: "查看使用流程",
      capabilityKicker: "为日常调试准备",
      capabilityTitle: "接口怎么返回，\n由你来决定。",
      capabilityIntro: "不用搭建 Mock 服务，也不用修改业务代码。在你熟悉的浏览器里，处理联调中的那些小麻烦。",
      cards: [
        { label: "响应 Mock", title: "让接口返回你需要的数据", body: "用静态 JSON 或动态脚本生成响应，配置状态码和延迟，调试正常、异常和等待状态。" },
        { label: "请求改写", title: "调整请求，少改一次代码", body: "改写 Query、Header 和 Payload，或将请求重定向到目标服务，方便切换环境与复现问题。" },
        { label: "DevTools", title: "从请求现场直接创建规则", body: "查看真实 Fetch/XHR，单条或批量生成规则草稿。请求命中后，可直接打开对应规则继续编辑。" },
      ],
      workflowKicker: "从安装到第一条规则",
      workflowTitle: "沿着熟悉的\n调试流程开始。",
      workflowIntro: "打开页面、触发请求，再决定怎样处理它。请求里的信息已经准备好了。",
      steps: [
        { title: "打开 Reqix 面板", body: "安装插件后打开浏览器开发者工具，切到 Reqix 面板，再刷新页面或触发一次 Fetch/XHR。" },
        { title: "选择请求，生成规则", body: "查看请求详情，单条或批量创建规则。生成的规则默认停用，可以先确认匹配范围和响应内容。" },
        { title: "启用规则，验证结果", body: "开启站点接管与相关开关后，再次触发请求。查看命中规则与处理预览，需要调整时直接进入编辑。" },
      ],
      useCasesKicker: "少一点来回，多一点进展",
      useCasesTitle: "那些打断开发的时刻，\n有了更顺手的解法。",
      useCases: [
        ["后端还没准备好", "先用 Mock 响应完成页面，把空列表、长文本和错误提示一并调好。"],
        ["偶发问题难以复现", "根据捕获的请求和响应创建规则，把边界条件留在本地反复验证。"],
        ["联调需要切换环境", "调整请求参数或重定向到目标服务，减少临时修改业务代码的次数。"],
        ["同一段调试代码反复粘贴", "将它保存为页面脚本，按 URL 范围和执行时机运行。"],
      ],
      localKicker: "数据留在本地",
      localTitle: "你的调试现场，\n留在你的浏览器。",
      localBody: "规则和页面脚本保存在扩展本地，不需要注册账号。Reqix 不提供云同步，也不收集插件遥测。",
      localLink: "查看隐私与权限说明",
      privacyFacts: [
        ["无需账号", "安装后即可在本地配置和使用。"],
        ["没有插件遥测", "不收集使用分析，也不上传你的规则。"],
        ["临时记录定期清理", "超过 24 小时的请求快照与命中日志，在下一次存储维护时清理。"],
      ],
      finalKicker: "给下一次调试，准备一个顺手的工具",
      finalTitle: "装好 Reqix，\n继续你的开发。",
      finalIntro: "支持 Chrome 与 Edge，直接从官方扩展商店安装。",
    },
    footer: {
      tagline: "面向 Chrome 与 Edge 的网络请求拦截与 API Mock 工具。",
      product: "产品",
      resources: "资源",
      legal: "信任",
      permissions: "权限说明",
      privacy: "隐私政策",
      changelog: "更新记录",
      community: "论坛讨论",
      issues: "问题反馈",
      rights: "Reqix 是一个本地优先的开发者工具。",
    },
    article: {
      menu: "网站导航",
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
      privacy: "Privacy",
      changelog: "Changelog",
      community: "Community",
      download: "Get Reqix",
      theme: "Switch theme",
      menu: "Open navigation",
    },
    home: {
      badge: "API debugging, right in your browser",
      titleLead: "Mock API responses.",
      titleAccent: "Modify and redirect requests.",
      intro: "Rewrite parameters, headers, and payloads. Switch API endpoints. Simulate errors and delays.",
      introDetail: "Start with a request in DevTools and create a rule in a few clicks.",
      chromeDownload: "Add to Chrome",
      edgeDownload: "Add to Edge",
      primary: "See how it works",
      local: "Local-first",
      noAccount: "No account",
      browsers: "Chrome / Edge 138+",
      previewAlt: "Illustrative Reqix DevTools interface with four fictional requests filtered by Fetch/XHR. Each row has a new-rule action on the right; the matched profile request has an edit action and a static processing preview. Two requests are checked for batch actions beside search. The top toolbar includes clear, Keep log, and Management Center.",
      previewExample: "Interface preview",
      previewKeepLog: "Keep log",
      previewManagement: "Management Center",
      previewSearch: "Search URL / Path / Name",
      previewClear: "Clear network requests",
      previewAll: "All",
      previewBatch: "Batch actions",
      previewColumns: ["Name", "URL", "Method", "Type", "Actions"],
      previewTabs: ["Headers", "Payload", "Response"],
      previewRuleName: "User profile mock",
      previewMatched: "MATCHED",
      previewCreate: "New rule",
      previewEdit: "Edit rule",
      previewClose: "Close request details",
      previewNotice: 'Showing a static processing preview computed from rule "User profile mock"',
      previewCaption: "Your first rule starts with a real request.",
      previewGuide: "See the workflow",
      capabilityKicker: "Made for everyday debugging",
      capabilityTitle: "The response you need.\nWhenever you need it.",
      capabilityIntro: "No mock server to set up. No application code to change. Handle the small integration problems right in the browser you already use.",
      cards: [
        { label: "Response mocking", title: "Make your API return what you need", body: "Generate responses with static JSON or dynamic scripts. Set status codes and delays to test success, error, and loading states." },
        { label: "Request rewriting", title: "Adjust the request, keep your code", body: "Rewrite query parameters, headers, and payloads, or redirect to another service to switch environments and reproduce issues." },
        { label: "DevTools", title: "Create rules where requests happen", body: "Inspect real Fetch/XHR traffic and create one or many rule drafts. Open the matching rule directly when a request needs another adjustment." },
      ],
      workflowKicker: "From install to your first rule",
      workflowTitle: "Fits the way\nyou already debug.",
      workflowIntro: "Open the page, trigger a request, then decide what to do with it. The request details are already there.",
      steps: [
        { title: "Open the Reqix panel", body: "Install the extension, open browser developer tools, and select Reqix. Then refresh the page or trigger a Fetch/XHR request." },
        { title: "Pick a request and create a rule", body: "Inspect the details and create one or many rules. New rules are disabled by default, so you can review the scope and response first." },
        { title: "Enable the rule and check the result", body: "Enable site takeover and the relevant switches, then trigger the request again. Inspect the matched rule and processing preview, or jump back into editing." },
      ],
      useCasesKicker: "Less back-and-forth. More progress.",
      useCasesTitle: "For the moments\nthat interrupt your flow.",
      useCases: [
        ["The backend is not ready", "Build the page with mock responses. Get empty lists, long text, and error messages right while you wait."],
        ["An issue is hard to reproduce", "Create a rule from a captured request and response, then keep the edge case locally for repeated testing."],
        ["You need another environment", "Adjust request parameters or redirect to a target service without repeatedly editing application code."],
        ["You keep pasting the same snippet", "Save it as a page script and run it within a URL scope at the right point in the page lifecycle."],
      ],
      localKicker: "Local by design",
      localTitle: "Your debugging data.\nYour browser.",
      localBody: "Rules and page scripts stay in extension storage. There is no account to create, no cloud sync, and no extension telemetry.",
      localLink: "Read about privacy and permissions",
      privacyFacts: [
        ["No account needed", "Install, configure, and use Reqix locally."],
        ["No extension telemetry", "No usage analytics or uploads of your rules."],
        ["Temporary records are cleaned up", "Request snapshots and hit logs older than 24 hours are removed during the next storage-maintenance run."],
      ],
      finalKicker: "A handy tool for your next debugging session",
      finalTitle: "Add Reqix.\nGet back to building.",
      finalIntro: "Available for Chrome and Edge from their official extension stores.",
    },
    footer: {
      tagline: "Network request interception and API mocking for Chrome and Edge.",
      product: "Product",
      resources: "Resources",
      legal: "Trust",
      permissions: "Permissions",
      privacy: "Privacy policy",
      changelog: "Changelog",
      community: "Discussions",
      issues: "Report an issue",
      rights: "Reqix is a local-first developer tool.",
    },
    article: {
      menu: "On this site",
      onThisPage: "On this page",
      previous: "Previous",
      next: "Next",
      callout: "Important",
    },
  },
} as const;

/** 官网仅发布信任、版本和安装信息；产品指南内容保留为草稿，不注册公开路由。 */
export const articleOrder: ArticleId[] = [
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
          "Reqix 已在 Chrome Web Store 和 Microsoft Edge Add-ons 正式发布，请根据当前浏览器选择对应的官方商店安装。",
        ],
        links: [
          { label: "前往 Chrome Web Store 安装 Reqix", href: CHROME_WEB_STORE_URL },
          { label: "前往 Microsoft Edge Add-ons 安装 Reqix", href: EDGE_ADDONS_URL },
        ],
        items: [
          "Google Chrome 138 及以上版本可通过官方商店安装。",
          "Microsoft Edge 138 及以上版本可通过官方商店安装。",
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
    updated: "最后更新：2026 年 10 月 11 日",
    sections: [
      { title: "版本适用说明", paragraphs: ["本页分别说明已发布的 1.0.1 与待发布的 1.0.2。标注 1.0.2 的行为仅在安装该版本后适用；更新本网站不会改变已安装扩展的行为。"] },
      { title: "storage", paragraphs: ["用于保存本地通知偏好、临时命中摘要和存储维护状态；主要规则、分组、页面脚本和请求调试数据存于本地 IndexedDB。1.0.2（待发布）还在 chrome.storage.local 中保存使用日期及评价邀请状态和偏好，不记录评价内容，不进入配置导出。Reqix 不使用账号，也不通过浏览器同步配置。"] },
      { title: "tabs", paragraphs: ["识别当前标签页与站点，更新插件图标、管理按站点开关、打开扩展管理页面，并在标签页导航或关闭时清除临时状态。Reqix 不申请 history 权限，也不把标签页信息发送给开发者服务器。"] },
      { title: "scripting", paragraphs: ["向需要运行请求接管的页面及其 frame 注入扩展自带的 Fetch/XHR 拦截逻辑，用于执行用户配置的请求修改、Mock、延迟和取消。是否接管由全局或按站点开关控制；不同版本的默认状态见下方网站访问权限说明。"] },
      { title: "userScripts", paragraphs: ["注册和运行用户自己创建或主动导入的页面脚本。Chrome / Edge 需要另外开启“允许用户脚本”；用户可随时停用脚本或关闭该权限。"] },
      { title: "webRequest", paragraphs: ["1.0.1：只读观察请求完成、失败和重定向事件，维护本地近期请求记录并核对原生重定向命中。", "1.0.2（待发布）：仅只读观察 onBeforeRedirect 事件，核对用户配置的原生 Redirect 规则并记录命中；不再通过完成或失败事件维护全站近期请求列表。不用此权限阻塞或修改请求，也不读取响应正文。"] },
      { title: "declarativeNetRequestWithHostAccess", paragraphs: ["执行用户配置的浏览器原生 URL 重定向，并为跨域重定向设置必要的 CORS 响应 Header。规则受全局或站点开关以及规则、分组的启用状态控制。"] },
      { title: "<all_urls>", paragraphs: ["让用户在任意 HTTP(S) 网站、本地开发服务和测试接口上使用请求规则与页面脚本。接口联调目标无法预先枚举，因此需要广泛的网站访问范围。", "1.0.1：首次安装默认关闭请求接管并采用按站点模式，首次开启时需要明确确认。1.0.2（待发布）：首次安装默认全局开启请求接管；用户可随时关闭或改为按站点控制。升级到 1.0.2 会保留原有开关设置，不强制改为全局开启。", "规则还须自身启用，分组内规则还须启用所在分组。浏览器的网站访问限制也仍然有效。"], note: "网站访问仅用于公开说明的请求调试、API Mock 和用户控制的页面脚本，不用于广告、用户画像或向开发者传输浏览活动。" },
      { title: "网页可访问资源", paragraphs: ["interceptor 与 sandbox 资源用于桥接页面上下文中的 Fetch/XHR 和隔离执行动态响应逻辑。扩展自身代码随安装包提供，不从开发者服务器下载执行代码。用户创建或导入的脚本及动态响应代码可能按其内容访问网络。"] },
    ],
  },
  privacy: {
    eyebrow: "隐私政策",
    title: "Reqix 隐私政策",
    description:
      "Reqix 是本地优先的浏览器开发者工具。本政策说明扩展处理哪些数据、为什么处理，以及你如何控制和删除它们。",
    updated: "生效日期：2026 年 8 月 10 日 · 最后更新：2026 年 10 月 11 日",
    sections: [
      { title: "版本适用说明", paragraphs: ["本页分别说明已发布的 1.0.1 与待发布的 1.0.2。标注 1.0.2 的行为仅在安装该版本后适用；更新本网站不会改变已安装扩展的行为。"] },
      { title: "1. 适用范围与用途", paragraphs: ["本政策说明 Reqix 在 Microsoft Edge 中的数据处理及用户控制，也适用于采用相同数据处理方式的 Chrome 版本；官方网站的数据处理见第 8 节。扩展用于用户主动控制的网络请求调试、API Mock 和页面脚本，不要求账号，不提供云同步、广告或用户画像。"] },
      { title: "2. 扩展处理的数据", items: ["规则、分组、页面脚本、站点开关和界面偏好等配置。", "网络请求的 URL、Method、资源类型、状态码和时间；Fetch/XHR 还可能包含 Query、请求与响应 Header、文本请求体与响应正文、大小及耗时。这些内容可能包含身份信息、鉴权信息、Cookie、业务数据或其它敏感信息；Reqix 不识别、分析或用于其它目的。", "规则命中记录、当前标签页运行状态和用户主动开始的录制状态；1.0.2（待发布）还在本地保存使用日期、评价邀请展示状态与“不再提醒”等偏好，不包含访问网址、规则内容或评价内容。", "用户选择导入或导出的配置和脚本。"] },
      { title: "3. 何时处理数据", paragraphs: ["用户创建、编辑、导入或录制规则与页面脚本时，Reqix 会保存相应配置。", "1.0.1：首次安装默认关闭请求接管并采用按站点模式。首次开启某个网站或全站请求接管前，Reqix 会披露处理范围并要求明确确认；确认后，内容脚本才会在已开启的网站中观察和处理 Fetch/XHR。", "1.0.2（待发布）：首次安装默认全局开启请求接管，用于匹配和执行规则；用户可以随时关闭或切换为按站点控制。升级保留已有开关设置。未命中规则且未主动录制时，不复制请求与响应正文，也不保存近期请求快照。", "用户主动打开 Reqix DevTools 面板时，浏览器 DevTools API 向面板提供当前调试页面已完成的请求：1.0.1 显示 Fetch/XHR；1.0.2（待发布）可查看所有网络资源类型。这一查看能力独立于请求接管开关，不会注入或修改请求；面板最多保留 500 条列表记录，清空列表或关闭 DevTools 会移除面板内存中的记录。只有用户创建规则时，选中请求中的相关数据才会保存为规则配置。"] },
      { title: "4. 本地存储与保留", paragraphs: ["Reqix 使用扩展空间中的 IndexedDB、chrome.storage.local、chrome.storage.session 和扩展页面 localStorage，不通过浏览器同步这些数据。规则、分组和页面脚本保留至用户删除或卸载 Reqix；站点开关和偏好设置保留至用户修改或卸载。localStorage 仅保存主题、导航视图和编辑器高度等界面偏好。", "1.0.1：最近请求快照每个标签页最多 100 条、20 MB，全部标签页合计最多 80 MB。请求体仅在可以转换为文本且不超过 1 MB 时可能保留；文本响应正文最多保留 1 MB，二进制响应正文不保存。快照和按日命中日志超过 24 小时后，会在扩展下一次执行存储维护时清理，因此浏览器关闭或扩展未运行时可能延后。", "1.0.2（待发布）：不再维护 Popup 近期请求缓存；升级时删除旧版临时近期请求表，保留规则、分组、页面脚本、设置和其它业务表。主动录制时仍只保存受支持的文本请求体（不超过 1 MB）与文本响应正文（最多 1 MB），不保存二进制响应正文。按日命中日志超过 24 小时后，在下一次存储维护时清理。评价邀请仅在 chrome.storage.local 保存使用日期、展示状态与提醒偏好，保留至卸载；选择“不再提醒”会保留关闭状态以避免再次提示。", "用户主动开始的单次录制最多持续 10 分钟，并最多保留 100 条请求或 50 MB；结束录制后，支持的请求会转换为可编辑规则。1.0.1 会在浏览器下次启动或扩展安装、更新时丢弃未完成录制。1.0.2（待发布）在浏览器下次启动时丢弃未完成录制，扩展更新会保留现有录制数据。当前标签页命中摘要保存在会话空间，并在导航、关闭标签页或会话结束后清除。Reqix 不对本地配置额外加密。"] },
      { title: "5. 传输与共享", paragraphs: ["Reqix 没有接收规则、请求快照、页面脚本或使用行为的后端服务，也不包含插件遥测、广告或第三方分析 SDK。这些本地数据不会自动发送给 Reqix 开发者。", "未被 Mock、重定向或取消的请求仍会访问网页原本的服务器；重定向会访问用户指定的目标；页面脚本和动态响应代码也可能按用户编写的代码内容发起受浏览器安全策略约束的网络访问。配置文件只在用户主动导出后由用户自行保存或分享。"] },
      { title: "6. 脚本与安全边界", paragraphs: ["动态响应代码在独立的扩展 Sandbox Worker 中运行，不能访问浏览器扩展 API 或页面 DOM。页面脚本默认在隔离环境运行；选择 MAIN world 后，脚本可以读取或修改网页自身的 JavaScript 对象，同时网页也可以读取或干扰脚本。Reqix 不从开发者服务器下载代码，执行的动态响应代码和页面脚本均来自用户创建或主动导入的内容。", "请求数据和导出文件可能包含 Authorization、Cookie、Token、个人信息或业务数据。只在可信设备和网站使用包含敏感内容的规则，并只导入、分享可信配置和脚本。"] },
      { title: "7. 用户控制与删除", items: ["在 Popup 中关闭当前网站或全站请求接管。", "在管理中心逐项停用或删除规则、分组和页面脚本。", "在导出前取消选择不希望写入文件的规则、分组或页面脚本。", "在浏览器中限制 Reqix 的站点访问权限；这不会删除已经保存的本地数据。", "卸载 Reqix，由浏览器删除该扩展的本地数据。"], note: "Reqix 没有服务器端副本，因此不存在需要向 Reqix 申请删除的云端数据。" },
      { title: "8. 官方网站", paragraphs: ["官方 Reqix 网站是托管在 GitHub Pages 上的静态网站，不设账号或自建分析服务。网站仅在浏览器 localStorage 中保存你手动选择的明暗主题；清除本站浏览数据即可重置，该偏好不会发送到服务器，也不会读取插件数据。访问 GitHub Pages 时，GitHub 会为安全目的记录并存储访问者的 IP 地址，也可能按其隐私声明处理请求时间、设备或浏览器信息等服务使用数据。"], links: [{ label: "查看 GitHub Pages 数据收集说明", href: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" }, { label: "查看 GitHub 隐私声明", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" }] },
      { title: "9. 儿童隐私与政策变更", paragraphs: ["Reqix 面向开发者和测试人员，不以儿童为目标用户，也不会故意收集儿童个人信息。数据处理方式发生实质变化时，本页会更新日期，并按适用的商店政策提供显著说明和必要同意。"] },
      { title: "10. 联系方式与商店数据使用要求", paragraphs: ["如对本政策、权限或数据处理方式有疑问，请通过 Reqix GitHub Discussions 联系维护者。", "Microsoft Edge 版按照 Microsoft Edge Add-ons 开发者政策中有关个人信息、权限和数据使用的要求处理数据。数据仅用于提供或改进本政策所述的单一用途和用户可见功能。", "Chrome 版对从浏览器和相关 API 获得的信息的使用，同时遵守 Chrome Web Store User Data Policy，包括 Limited Use 要求。"], links: [{ label: "前往 Reqix GitHub Discussions", href: "https://github.com/reqix-dev/reqix/discussions" }, { label: "查看 Microsoft Edge Add-ons 隐私与数据政策", href: "https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies#15-personal-information" }, { label: "查看 Chrome 版适用的 Limited Use 政策", href: "https://developer.chrome.com/docs/webstore/program-policies/limited-use" }] },
    ],
  },
  changelog: {
    eyebrow: "更新记录",
    title: "Reqix 的变化，保持透明",
    description: "记录用户可感知的新增能力、行为调整和重要修复。",
    updated: "当前发布通道：Chrome Web Store · Microsoft Edge Add-ons",
    sections: [
      { title: "1.0.0 · 已发布", items: ["DevTools 查看 Fetch/XHR 详情，并按 URL、路径或名称搜索，支持单条与批量创建规则。", "统一的请求匹配、请求修改、Redirect、取消、响应 Mock、Header 修改和延迟处理链。", "Popup 提供网站或全站开关、命中规则、页面脚本、快捷创建和请求录制入口。", "首次开启请求接管前披露本地数据处理范围并要求明确确认。", "页面脚本支持 URL、生命周期和运行环境设置，并提供导入、导出与权限指引。", "配置导入导出、匹配冲突提示、本地隐私说明与中英文界面。"], links: [{ label: "在 Chrome Web Store 查看 Reqix", href: CHROME_WEB_STORE_URL }, { label: "在 Microsoft Edge Add-ons 查看 Reqix", href: EDGE_ADDONS_URL }] },
      { title: "发布原则", paragraphs: ["Reqix 已公开发布。后续涉及规则格式、存储结构或消息协议的调整，会同步评估已发布配置的兼容性和升级路径。"] },
    ],
  },
  download: {
    eyebrow: "获取 Reqix",
    title: "选择你的 Chromium 浏览器",
    description: "Reqix 已在 Chrome Web Store 和 Microsoft Edge Add-ons 正式发布。请选择当前浏览器对应的官方商店安装。",
    updated: "支持 Chrome 138+ 与 Edge 138+",
    sections: [
      { title: "Chrome Web Store", paragraphs: ["使用 Google Chrome 时，通过 Chrome Web Store 安装 Reqix，并自动接收后续版本更新。"], links: [{ label: "在 Chrome Web Store 下载 Reqix", href: CHROME_WEB_STORE_URL }] },
      { title: "Microsoft Edge Add-ons", paragraphs: ["使用 Microsoft Edge 时，通过 Edge 扩展商店安装 Reqix，并自动接收后续版本更新。"], links: [{ label: "在 Microsoft Edge Add-ons 下载 Reqix", href: EDGE_ADDONS_URL }] },
      { title: "安装安全", items: ["只使用本页公布的 Chrome Web Store 或 Microsoft Edge Add-ons 正式链接。", "不要从第三方镜像、网盘或非官方安装包获取 Reqix。", "根据当前浏览器选择对应商店，避免安装来源不明或未经验证的版本。"] },
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
      { title: "Install Reqix", paragraphs: ["Reqix is officially available on the Chrome Web Store and Microsoft Edge Add-ons. Choose the official store for your current browser."], links: [{ label: "Install Reqix from the Chrome Web Store", href: CHROME_WEB_STORE_URL }, { label: "Install Reqix from Microsoft Edge Add-ons", href: EDGE_ADDONS_URL }], items: ["Google Chrome 138 or newer can install Reqix from the official store.", "Microsoft Edge 138 or newer can install Reqix from the official store.", "Do not install Reqix from unofficial mirrors or packages."] },
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
    updated: "Last updated: October 11, 2026",
    sections: [
      { title: "Version applicability", paragraphs: ["This page distinguishes the published 1.0.1 release from the upcoming 1.0.2 release. Behavior labeled 1.0.2 applies only after that version is installed; updating this website does not change an installed extension."] },
      { title: "storage", paragraphs: ["Stores local notification preferences, temporary hit summaries, and storage-maintenance state. Primary rules, groups, page scripts, and request-debugging data use local IndexedDB. Version 1.0.2 (upcoming) also stores usage dates and review-invitation state and preferences in chrome.storage.local; it does not record review content or include this state in configuration exports. Reqix has no accounts and does not sync configuration through browser sync services."] },
      { title: "tabs", paragraphs: ["Identifies the current tab and site, updates the extension icon, manages per-site switches, opens extension management pages, and clears temporary state on navigation or tab closure. Reqix does not request the history permission or send tab information to a developer server."] },
      { title: "scripting", paragraphs: ["Injects Reqix’s bundled Fetch/XHR interception code into pages and frames where request handling must run, enabling configured request rewrites, mocks, delays, and cancellation. Global or per-site controls determine whether handling runs; version-specific defaults are described under host access below."] },
      { title: "userScripts", paragraphs: ["Registers and runs page scripts that the user creates or intentionally imports. Chrome and Edge require the separate “Allow user scripts” setting; users can disable individual scripts or revoke this permission at any time."] },
      { title: "webRequest", paragraphs: ["Version 1.0.1: observes completion, failure, and redirect events read-only to maintain local recent-request records and verify native redirect hits.", "Version 1.0.2 (upcoming): observes only onBeforeRedirect events read-only to verify user-configured native Redirect rules and record hits. It no longer maintains a site-wide recent-request list from completion or failure events. This permission does not block or modify requests or read response bodies."] },
      { title: "declarativeNetRequestWithHostAccess", paragraphs: ["Applies user-configured native URL redirects and the CORS response-header adjustments needed for cross-origin redirects. Rules are subject to global or per-site controls and the enabled state of rules and groups."] },
      { title: "<all_urls>", paragraphs: ["Allows request rules and page scripts on arbitrary HTTP(S) sites, local development servers, and test APIs. These debugging targets cannot be enumerated in advance, which requires broad host access.", "Version 1.0.1: request handling is off on first install and uses per-site mode, with explicit confirmation before first enablement. Version 1.0.2 (upcoming): request handling is on globally on first install; users can turn it off or choose per-site controls. Upgrading to 1.0.2 preserves existing switch settings instead of forcing global enablement.", "Individual rules and their groups must also be enabled. Browser-level site-access restrictions remain in effect."], note: "Host access is used only for disclosed request debugging, API mocking, and user-controlled page scripts, not advertising, profiling, or sending browsing activity to the developer." },
      { title: "Web-accessible resources", paragraphs: ["The interceptor and sandbox resources bridge Fetch/XHR in the page context and isolate dynamic response logic. Reqix’s own code is bundled with the extension, not downloaded for execution from a developer server. User-created or imported scripts and dynamic response code may access the network according to their content."] },
    ],
  },
  privacy: {
    eyebrow: "Privacy policy",
    title: "Reqix Privacy Policy",
    description: "Reqix is a local-first browser developer tool. This policy explains the data it handles, why, and how you control or delete it.",
    updated: "Effective August 10, 2026 · Last updated October 11, 2026",
    sections: [
      { title: "Version applicability", paragraphs: ["This page distinguishes the published 1.0.1 release from the upcoming 1.0.2 release. Behavior labeled 1.0.2 applies only after that version is installed; updating this website does not change an installed extension."] },
      { title: "1. Scope and purpose", paragraphs: ["This policy explains data handling and user controls for Reqix in Microsoft Edge. The same practices apply to the Chrome version; section 8 covers the official Reqix website. The extension provides user-controlled network debugging, API mocking, and page scripts. It requires no account and provides no cloud sync, advertising, or user profiling."] },
      { title: "2. Data handled by the extension", items: ["Rules, groups, page scripts, per-site switches, and interface preferences.", "Network-request URLs, methods, resource types, status codes, and times. Fetch/XHR may also include query parameters, request and response headers, textual request and response bodies, sizes, and durations. This content may include identity or authentication information, cookies, business data, or other sensitive content; Reqix does not identify, analyze, or use it for a secondary purpose.", "Rule-hit records, current-tab runtime state, and recording state when the user explicitly starts a recording. Version 1.0.2 (upcoming) also stores local usage dates, review-invitation display state, and preferences such as “Don’t ask again”; this invitation state contains no visited URLs, rule contents, or review contents.", "Configuration and scripts that the user chooses to import or export."] },
      { title: "3. When data is processed", paragraphs: ["Reqix saves configuration when a user creates, edits, imports, or records rules and page scripts.", "Version 1.0.1: request handling is off on first install and uses per-site mode. Before request interception is enabled for a site or for all sites for the first time, Reqix discloses the processing scope and requires explicit confirmation. Only after confirmation do content scripts observe and process Fetch/XHR on enabled sites.", "Version 1.0.2 (upcoming): request handling is enabled globally on first install to match and apply rules. Users can turn it off or choose per-site controls. Upgrades preserve existing switch settings. When no rule matches and recording has not been started, Reqix does not copy request or response bodies or save recent-request snapshots.", "When the user opens the Reqix DevTools panel, the browser DevTools API supplies completed requests from the inspected page. Version 1.0.1 displays Fetch/XHR; version 1.0.2 (upcoming) can display all network resource types. This viewer is independent of the request-interception switch and does not inject into or modify traffic. The panel keeps up to 500 rows in memory; clearing the list or closing DevTools removes them from panel memory. Selected request data is saved as configuration only when the user creates a rule."] },
      { title: "4. Local storage and retention", paragraphs: ["Reqix uses IndexedDB, chrome.storage.local, chrome.storage.session, and extension-page localStorage. It does not sync this data through browser sync services. Rules, groups, and page scripts remain until the user deletes them or uninstalls Reqix; per-site switches and preferences remain until the user changes them or uninstalls. localStorage holds interface preferences only, such as theme, navigation view, and editor height.", "Version 1.0.1: recent snapshots are limited to 100 entries and 20 MB per tab, and 80 MB across all tabs. A request body may be retained only when it can be converted to text and is no larger than 1 MB. Textual response bodies are limited to 1 MB, and binary response bodies are not stored. Snapshots and daily hit logs older than 24 hours are removed the next time extension storage maintenance runs, so removal may be delayed while the browser is closed or the extension is inactive.", "Version 1.0.2 (upcoming): the Popup recent-request cache is removed. Upgrading deletes the old temporary recent-request table while preserving rules, groups, page scripts, settings, and other application tables. Explicit recording still retains only supported textual request bodies of up to 1 MB and textual response bodies of up to 1 MB; binary response bodies are not stored. Daily hit logs older than 24 hours are cleared during the next storage maintenance. Review invitations store only usage dates, display state, and reminder preferences in chrome.storage.local until uninstall; choosing “Don’t ask again” preserves the suppressed state to avoid further prompts.", "An explicitly started recording is limited to 10 minutes, 100 requests, or 50 MB. Finishing it converts supported requests into editable rules. Version 1.0.1 discards unfinished recordings on the next browser startup or extension install or update. Version 1.0.2 (upcoming) discards unfinished recordings on the next browser startup but preserves existing recording data during extension updates. Current-tab hit summaries use session storage and are cleared on navigation, tab close, or session end. Reqix does not add encryption to local configuration."] },
      { title: "5. Transfer and sharing", paragraphs: ["Reqix has no backend that receives rules, request snapshots, page scripts, or usage behavior, and it contains no extension telemetry, advertising, or third-party analytics SDK. This local data is not sent automatically to Reqix developers.", "Requests that are not mocked, redirected, or canceled still reach the page's original server. Redirects reach a target chosen by the user. Page scripts and dynamic response code may also initiate network access according to user-authored code and subject to browser security policies. Exported files are saved or shared only by the user after an explicit export."] },
      { title: "6. Scripts and security boundaries", paragraphs: ["Dynamic response code runs in a dedicated extension Sandbox Worker without access to browser extension APIs or the page DOM. Page scripts use an isolated world by default. In MAIN world they can read or modify the page's JavaScript objects, and the page can inspect or interfere with the script. Reqix does not download code from a developer server; dynamic response code and page scripts come from content the user creates or intentionally imports.", "Request data and export files may contain Authorization values, cookies, tokens, personal information, or business data. Use sensitive rules only on trusted devices and sites, and import or share only trusted configurations and scripts."] },
      { title: "7. User controls and deletion", items: ["Disable request interception for the current site or all sites from Popup.", "Disable or delete individual rules, groups, and page scripts in the management center.", "Deselect rules, groups, or page scripts that should not be included before exporting.", "Restrict Reqix site access in the browser; this does not delete data already stored locally.", "Uninstall Reqix so the browser removes the extension's local data."], note: "Reqix keeps no server-side copy, so there is no cloud data that users need to ask Reqix to delete." },
      { title: "8. Official website", paragraphs: ["The official Reqix website is a static site hosted on GitHub Pages. It has no account system or developer-operated analytics. The site stores only your manually selected color theme in browser localStorage. Clearing site data resets this preference; it is not sent to a server and does not access extension data. When a GitHub Pages site is visited, GitHub logs and stores the visitor's IP address for security purposes and may process service-usage data such as request time, device, or browser information under its privacy statement."], links: [{ label: "Read GitHub Pages data-collection details", href: "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection" }, { label: "Read the GitHub Privacy Statement", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" }] },
      { title: "9. Children's privacy and policy changes", paragraphs: ["Reqix is intended for developers and testers, is not directed to children, and does not knowingly collect children's personal information. If data practices change materially, this page's date will be updated and Reqix will provide prominent disclosure and consent where applicable store policies require it."] },
      { title: "10. Contact and store data-use requirements", paragraphs: ["For questions about this policy, permissions, or data handling, contact the maintainers through Reqix GitHub Discussions.", "The Microsoft Edge version handles data in accordance with the personal-information, permission, and data-use requirements of the Microsoft Edge Add-ons developer policies. Data is used only to provide or improve the single purpose and user-visible features described in this policy.", "For the Chrome version, Reqix's use of information received from browsers and related APIs will also adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements."], links: [{ label: "Open Reqix GitHub Discussions", href: "https://github.com/reqix-dev/reqix/discussions" }, { label: "Read the Microsoft Edge Add-ons privacy and data policies", href: "https://learn.microsoft.com/en-us/legal/microsoft-edge/extensions/developer-policies#15-personal-information" }, { label: "Read the Limited Use policy for the Chrome version", href: "https://developer.chrome.com/docs/webstore/program-policies/limited-use" }] },
    ],
  },
  changelog: {
    eyebrow: "Changelog",
    title: "Reqix changes, recorded clearly",
    description: "User-visible capabilities, behavior changes, and important fixes.",
    updated: "Release channels: Chrome Web Store · Microsoft Edge Add-ons",
    sections: [
      { title: "1.0.0 · Released", items: ["Inspect Fetch/XHR details in DevTools, search by URL, path, or name, and create one rule or a batch.", "One pipeline for matching, request rewrites, redirects, cancellation, response mocks, header changes, and delays.", "A lightweight Popup for per-site or all-site state, matched rules, page scripts, quick creation, and request recording.", "Local-data disclosure and explicit confirmation before request interception is enabled for the first time.", "Page scripts with URL, lifecycle, and execution-world settings plus import, export, and permission guidance.", "Configuration import and export, match-conflict warnings, local privacy information, and Chinese/English UI."], links: [{ label: "View Reqix on the Chrome Web Store", href: CHROME_WEB_STORE_URL }, { label: "View Reqix on Microsoft Edge Add-ons", href: EDGE_ADDONS_URL }] },
      { title: "Release principle", paragraphs: ["Reqix is publicly available. Future changes to rule formats, storage structures, or message protocols will account for compatibility and upgrade paths for published configurations."] },
    ],
  },
  download: {
    eyebrow: "Get Reqix",
    title: "Choose your Chromium browser",
    description: "Reqix is officially available on the Chrome Web Store and Microsoft Edge Add-ons. Choose the official store for your current browser.",
    updated: "Supports Chrome 138+ and Edge 138+",
    sections: [
      { title: "Chrome Web Store", paragraphs: ["If you use Google Chrome, install Reqix from the Chrome Web Store to receive future updates automatically."], links: [{ label: "Download Reqix from the Chrome Web Store", href: CHROME_WEB_STORE_URL }] },
      { title: "Microsoft Edge Add-ons", paragraphs: ["If you use Microsoft Edge, install Reqix from the Edge Add-ons store to receive future updates automatically."], links: [{ label: "Download Reqix from Microsoft Edge Add-ons", href: EDGE_ADDONS_URL }] },
      { title: "Installation safety", items: ["Use only the official Chrome Web Store or Microsoft Edge Add-ons links published on this page.", "Do not download Reqix from third-party mirrors, file-sharing services, or unofficial packages.", "Choose the store for your current browser and avoid unverified distributions."] },
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
