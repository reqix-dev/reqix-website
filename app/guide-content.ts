import type { Article, Locale } from "./site-content";

// 中英文共用文档结构，示例文件与 Schema 保持独立、可下载。
export const guides = {
  "zh": {
    "ai": {
      "eyebrow": "AI 使用指南",
      "title": "让 AI 生成可导入的规则文件",
      "description": "把需求、完整模板和 JSON Schema 一起交给 AI，再在 Reqix 中导入、检查和启用。",
      "updated": "适用于配置格式 v1 · 2026-09-09",
      "sections": [
        {
          "title": "先下载三份参考材料",
          "paragraphs": [
            "Schema 约束字段和类型，模板展示完整文件，提示词说明如何生成。把三份文件作为附件交给 AI；如果 AI 无法读取链接，直接上传文件或粘贴内容。"
          ],
          "downloads": [
            {
              "label": "下载 JSON Schema",
              "href": "/schemas/reqix-config-v1.schema.json"
            },
            {
              "label": "下载完整 JSON 模板",
              "href": "/examples/zh/template.reqix.json"
            },
            {
              "label": "下载 AI 提示词",
              "href": "/examples/zh/ai-instructions.md"
            }
          ],
          "note": "这是借助外部 AI 工具的工作流，Reqix 本身不会替你调用 AI。分享给 AI 的资料只保留接口结构与虚构数据，先移除 Token、Cookie 和个人信息。"
        },
        {
          "title": "把需求说清楚",
          "table": {
            "headers": [
              "提供的信息",
              "示例与作用"
            ],
            "rows": [
              [
                "页面站点",
                "http://localhost:3000 — 限制哪些页面可触发规则"
              ],
              [
                "请求地址与 Method",
                "GET http://localhost:3000/api/users"
              ],
              [
                "匹配方式",
                "精确匹配；是否需要接受 Query 变化"
              ],
              [
                "目标行为",
                "正常列表、空列表、500 错误，各生成一条规则"
              ],
              [
                "响应契约",
                "状态码、Content-Type、字段名、字段类型与示例值"
              ],
              [
                "组织与开关",
                "分组名称，全部默认停用，逐条启用测试"
              ]
            ]
          }
        },
        {
          "title": "复制这段提示词",
          "paragraphs": [
            "下面可直接用于“用户列表的三种状态”。换成其它目标时，同时修改地址、方法和业务结构；保留生成约束。"
          ],
          "codeTitle": "AI 提示词",
          "code": "请根据附件 reqix-config-v1.schema.json 和 template.reqix.json，生成可直接导入 Reqix 的 users-demo.reqix.json。\n\n需求：\n- 页面站点：http://localhost:3000。\n- 请求：GET http://localhost:3000/api/users，精确匹配，不带 Query。\n- 创建一个“用户列表场景”分组，含三条互斥场景：200 正常列表（Avery、Riley 两位虚构用户）、200 空列表、500 服务异常。\n- 每个用户包含数字 id 和字符串 name，total 为数字。成功和空列表正文使用 {\"items\":[],\"total\":0} 的业务结构；异常使用 {\"code\":\"DEMO_SERVER_ERROR\",\"message\":\"Please try again\"}。\n\n生成约束：\n1. 根对象仅包含 format、version、exportedAt、groups、rules、pageScripts；format=\"reqix-config\"，version=1。即使为空也保留三个数组。不要在配置中添加 $schema。\n2. 按模板保留所有必填字段及 pipeline。所有分组、规则和页面脚本 enabled=false；规则 enabledIndex=0、hitCount=0、source=\"manual\"。\n3. 本文件的规则放在 groups[].rules，groupId 等于所在分组 id；顶层 rules=[]。ID 不重复，毫秒时间戳和 sort 为数字。\n4. pageScope=\"specified\"；pageUrlRules 使用 exact 匹配页面 origin http://localhost:3000。请求 url 与页面范围是不同字段。\n5. 静态 Mock：responseBodyMode=\"static\"，pipeline.response.mode=\"mock\"，route.mode=\"origin\"，其余 pipeline 开关为 false。\n6. responseBody 是序列化后的 JSON 字符串，不是对象；字符串里的双引号必须转义。不要生成真实凭证或用户数据。\n7. 不添加模板和 Schema 之外的字段、注释、尾逗号、占位省略号或未实现脚本。\n8. 如能执行校验，请按附件 Schema 校验，并检查 ID 唯一性、分组引用与开关一致性；不能执行时请如实说明，不能声称已通过。\n\n交付完整 JSON 文件；如果无法提供下载文件，输出完整 JSON 代码块，我会保存为 UTF-8 的 users-demo.reqix.json。不要只输出规则数组。校验状态另起一段说明，不能写进 JSON 文件。"
        },
        {
          "title": "导入并验证结果",
          "steps": [
            {
              "title": "获得完整文件",
              "body": "让 AI 提供 users-demo.reqix.json；也可以复制完整 JSON 保存为 UTF-8 文件。不要把 Markdown 围栏或说明文字保存进去。"
            },
            {
              "title": "在管理中心导入",
              "body": "打开 Reqix 管理中心的导入入口，选择 JSON 文件，在预览中勾选所需分组和规则后确认。只需体验时，可直接下载下面的已完成案例。"
            },
            {
              "title": "检查后只启用一个场景",
              "body": "核对 URL、页面范围和响应；开启对应站点的请求接管、案例分组及一条规则。三条规则匹配相同接口，测试下一条前先停用上一条。"
            },
            {
              "title": "重新触发接口",
              "body": "使用实战案例中的本地演示页，或自己的对应页面；刷新后触发 GET /api/users，检查页面收到的状态码和 JSON，再查看 Reqix 的命中记录。"
            }
          ],
          "downloads": [
            {
              "label": "下载已完成的三场景文件",
              "href": "/examples/zh/users-demo.reqix.json"
            }
          ],
          "note": "普通配置导入会保留文件里的 enabled 状态，并非自动全部停用。这里的模板与案例显式设置了 enabled=false。Schema 校验成功也不等于已验证实际请求效果。"
        },
        {
          "title": "让 AI 继续生成其它场景",
          "items": [
            "分页与筛选：提供 Query 名称、页大小和返回契约，参考动态分页案例。",
            "联调改写：提供要增删改的 Header 或 Query，或者完整替换的 JSON 请求体；保留 upstream 响应。",
            "异常测试：区分 HTTP 500 Mock、取消请求和延迟响应，它们触发的前端行为不同。",
            "环境切换：给出完整重定向目标和 Query 保留策略，不要要求重定向同时叠加 Mock。"
          ],
          "links": [
            {
              "label": "按场景下载完整案例",
              "href": "/docs/examples"
            }
          ]
        },
        {
          "title": "生成失败时怎么修正",
          "items": [
            "导入提示格式无效：检查是否为完整根对象、version 是否为数字 1、必填空数组是否保留，以及是否混入未知字段。",
            "responseBody 或 requestPayload 类型错误：先把业务对象序列化为字符串，不能直接嵌入对象。",
            "导入成功却没命中：核对页面站点与请求地址、Method、Query、站点接管和分组/规则开关；检查是否被排序靠前的规则先命中。",
            "把错误信息和去敏后的生成文件交给 AI，要求返回完整修正版；不要让 AI 靠删掉字段来绕过错误。"
          ],
          "links": [
            {
              "label": "查看格式约束与校验边界",
              "href": "/docs/config-format"
            }
          ]
        }
      ]
    },
    "examples": {
      "eyebrow": "实战案例",
      "title": "从正常响应到异常联调",
      "description": "11 条可导入规则和一个页面脚本，覆盖 Mock、动态响应、请求改写、响应头、延迟、重定向与取消。",
      "updated": "适用于配置格式 v1 · 2026-09-09",
      "sections": [
        {
          "title": "准备一个可验证的页面",
          "paragraphs": [
            "所有接口案例都限定在 http://localhost:3000。可使用你自己的本地应用；也可下载无需第三方依赖的演示服务，用已安装的 Node.js 运行下方命令，再打开 http://localhost:3000。演示服务会回显请求，便于验证真正到达服务端的数据。"
          ],
          "downloads": [
            {
              "label": "下载本地演示服务",
              "href": "/examples/demo-server.mjs"
            },
            {
              "label": "下载全部案例（11 条规则 + 1 个页面脚本）",
              "href": "/examples/zh/all-examples.reqix.json"
            }
          ],
          "codeTitle": "在下载文件所在目录运行",
          "code": "node demo-server.mjs",
          "steps": [
            {
              "title": "导入案例",
              "body": "在管理中心导入整个案例包，或下载下面任一单独案例。整个案例包放在一个停用的分组内；单独文件的规则位于根目录。"
            },
            {
              "title": "只启用当前案例",
              "body": "所有示例默认停用。打开站点请求接管和所需分组，再启用一条规则；多个案例使用相同 URL，同时启用时只会优先命中排序靠前的一条。"
            },
            {
              "title": "触发并观察",
              "body": "在演示页打开浏览器 DevTools，先打开 Reqix 面板，再刷新。在 Console 中执行对应片段，检查结果及 Reqix 命中记录。它们调用的是当前页面的 Fetch。"
            }
          ],
          "note": "修改成真实项目时，同时替换规则里的请求 URL、pageUrlRules 的页面站点以及 Redirect 目标。Mock 可以无需上游接口；Header、Query、Payload、上游延迟和 Redirect 则需要可访问的目标服务。"
        },
        {
          "title": "正常响应 Mock",
          "paragraphs": [
            "让后端尚未完成的用户列表先展示两条数据。启用本条后，GET /api/users 返回 200，items 含 Avery 和 Riley，total=2；不会访问上游接口。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/users-success.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "const response = await fetch(\"/api/users\");\nconsole.log(response.status, await response.json());"
        },
        {
          "title": "空数据状态",
          "paragraphs": [
            "切换到本条：相同接口返回 200、items=[]、total=0。用于检查空状态提示、隐藏分页或禁用下一页。先停用正常响应规则。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/users-empty.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "console.log(await (await fetch(\"/api/users\")).json());"
        },
        {
          "title": "HTTP 500 异常",
          "paragraphs": [
            "相同接口返回 500 和 DEMO_SERVER_ERROR。Fetch 仍会得到 Response，应用需要检查 response.ok 或 status；这与取消导致的网络错误不同。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/users-error.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "const response = await fetch(\"/api/users\");\nconsole.log(response.ok, response.status, await response.json());"
        },
        {
          "title": "动态响应与分页",
          "paragraphs": [
            "启用动态 Mock，并停用其它 /api/users 规则。正则允许 Query 变化；page=2 返回 id 为 3、4 的用户，page=3 仅返回 id=5，total 始终为 5。函数直接返回响应正文，状态码和响应头在规则字段中设置。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/dynamic-pagination.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "console.log(await (await fetch(\"/api/users?page=2\")).json());",
          "note": "下载文件包含完整 generateResponse(request) 脚本。request 提供 method、url、headers、query 和 payload。脚本运行环境不是页面 DOM；返回对象会序列化为 JSON，返回字符串则作为正文。不要返回 {status, body} 并期待它改变 HTTP 状态。"
        },
        {
          "title": "修改请求 Header",
          "paragraphs": [
            "请求继续访问真实服务。演示服务回显的 headers 中 x-demo-environment 为 staging，x-debug-trace 不存在。修改会覆盖同名值；删除会移除该字段。不要用这个案例注入真实鉴权凭证。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/request-headers.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "const response = await fetch(\"/api/echo\", {\n  headers: { \"X-Demo-Environment\": \"dev\", \"X-Debug-Trace\": \"demo\" }\n});\nconsole.log(await response.json());"
        },
        {
          "title": "增删改 Query 参数",
          "paragraphs": [
            "精确匹配原始 /api/echo?page=1&debug=1，再将 page 改为 2、添加 pageSize=20、删除 debug。回显 query 为 {page:\"2\",pageSize:\"20\"}。修改覆盖同名值，添加保留已有值并追加。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/query-params.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "console.log(await (await fetch(\"/api/echo?page=1&debug=1\")).json());"
        },
        {
          "title": "替换 JSON 请求体",
          "paragraphs": [
            "对 POST /api/echo 完整替换请求体，并设置 Content-Type。回显 payload 为 {name:\"Avery\",plan:\"demo\"}；原来的 old 字段消失。这是替换，不是字段合并；不要给 GET 添加请求体。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/request-payload.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "const response = await fetch(\"/api/echo\", {\n  method: \"POST\", headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ old: true })\n});\nconsole.log(await response.json());"
        },
        {
          "title": "修改响应 Header",
          "paragraphs": [
            "保留上游正文，页面读取到的 X-Demo-Response 为 reqix。该动作不能替代服务端 CORS 配置，也不能改变浏览器管理的 Cookie、CSP 或缓存传输语义。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/response-headers.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "const response = await fetch(\"/api/echo\");\nconsole.log(response.headers.get(\"X-Demo-Response\"), await response.json());"
        },
        {
          "title": "延迟响应与加载状态",
          "paragraphs": [
            "保留真实响应并额外延迟 2000 毫秒，便于观察 Loading 或按钮防重复提交。总耗时还包含原接口耗时，并不固定等于两秒；延迟本身不产生超时错误。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/delay.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "const started = performance.now();\nconst response = await fetch(\"/api/echo\");\nconsole.log(Math.round(performance.now() - started), await response.json());"
        },
        {
          "title": "重定向与 Query 策略",
          "paragraphs": [
            "把 /api/legacy?source=demo 转到同站点 /api/echo。默认保留原 Query，回显 path=/api/echo、query.source=demo。目标自带 Query 时完全以目标为准；目标无 Query 且开关关闭时不带原 Query。跨域目标需自行满足 CORS，并检查 Method 和请求体。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/redirect.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "console.log(await (await fetch(\"/api/legacy?source=demo\")).json());"
        },
        {
          "title": "取消请求",
          "paragraphs": [
            "取消 POST /api/analytics，用于测试埋点不可用等网络失败。Fetch 进入 catch，XHR 触发错误路径；不会得到人为构造的 500 响应。取消不可与延迟、Mock 或请求改写叠加。"
          ],
          "downloads": [
            {
              "label": "下载此案例 JSON",
              "href": "/examples/zh/cancel.reqix.json"
            }
          ],
          "codeTitle": "在演示页的 Console 中验证",
          "code": "try {\n  await fetch(\"/api/analytics\", { method: \"POST\", body: \"demo\" });\n} catch (error) {\n  console.log(\"Expected cancellation / 预期取消\", error.name);\n}"
        },
        {
          "title": "页面脚本：标记本地环境",
          "paragraphs": [
            "导入 JSON 后，在页面脚本中启用“本地演示环境”，按浏览器提示允许用户脚本并刷新 http://localhost:3000。右下角出现环境标记；重新加载不会重复创建。停用后刷新，标记消失。页面脚本与网络规则分别管理。"
          ],
          "downloads": [
            {
              "label": "下载页面脚本配置 JSON",
              "href": "/examples/zh/page-badge.reqix.json"
            },
            {
              "label": "下载 .user.js 版本",
              "href": "/examples/zh/page-badge.user.js"
            }
          ],
          "note": ".user.js 请使用页面脚本页的用户脚本导入入口。其 @match 使用浏览器匹配模式 http://localhost/*，覆盖 localhost 的不同端口；JSON 版的正则限制在 3000 端口。仅演示 @grant none，不依赖 GM_* API。"
        },
        {
          "title": "匹配、组合与排查",
          "items": [
            "请求 URL 的 exact 包含 Query；contains 会做子串匹配；regex 使用正则表达式（JSON 中反斜杠要转义）；wildcard 使用 * 通配。尽量从精确 URL 开始再扩大范围。",
            "页面范围按站点 origin（协议、主机、端口）匹配，不按页面路径区分。页面脚本的 URL 范围则可包含路径。",
            "请求 Header、Query 和 Payload 可以组合，并保留 upstream 响应；Mock 可组合响应 Header 与延迟。不要用多个匹配同一请求的规则来拼接动作。",
            "常规请求改写和 Mock 面向页面 Fetch/XHR。静态资源可使用 Redirect；不要把其它案例用于图片、脚本或 WebSocket 并期待同样效果。",
            "测试结束后停用规则或分组、停用页面脚本，刷新测试页，并用 Ctrl+C 停止演示服务。"
          ],
          "links": [
            {
              "label": "查看动作开关与 JSON 字段",
              "href": "/docs/config-format"
            },
            {
              "label": "查看 DevTools 使用流程",
              "href": "/docs/devtools"
            }
          ]
        }
      ]
    },
    "config-format": {
      "eyebrow": "JSON 格式",
      "title": "供 AI 与手工编写使用的 JSON 结构",
      "description": "完整可导入模板、字段说明和机器可读 Schema。按现有 v1 格式生成，避免省略必填字段或猜测动作配置。",
      "updated": "适用于配置格式 v1 · 2026-09-09",
      "sections": [
        {
          "title": "完整最小案例",
          "paragraphs": [
            "下面是一条停用的静态 Mock，根对象和规则字段完整，可保存成 .reqix.json 导入。业务响应放在 responseBody 字符串中；Schema 是单独提供给 AI 或校验工具的文件，不能作为配置导入。"
          ],
          "downloads": [
            {
              "label": "下载完整模板",
              "href": "/examples/zh/template.reqix.json"
            },
            {
              "label": "下载 JSON Schema",
              "href": "/schemas/reqix-config-v1.schema.json"
            }
          ],
          "codeTitle": "template.reqix.json",
          "code": "{\n  \"format\": \"reqix-config\",\n  \"version\": 1,\n  \"exportedAt\": 1788912000000,\n  \"groups\": [],\n  \"rules\": [\n    {\n      \"id\": \"example-users-success\",\n      \"groupId\": \"\",\n      \"name\": \"用户列表 · 正常\",\n      \"enabled\": false,\n      \"enabledIndex\": 0,\n      \"url\": \"http://localhost:3000/api/users\",\n      \"matchType\": \"exact\",\n      \"method\": \"GET\",\n      \"pageScope\": \"specified\",\n      \"pageUrlRules\": [\n        {\n          \"id\": \"page-local\",\n          \"matchType\": \"exact\",\n          \"value\": \"http://localhost:3000\"\n        }\n      ],\n      \"statusCode\": 200,\n      \"responseDelay\": 0,\n      \"responseBody\": \"{\\\"items\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"Avery\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Riley\\\"}],\\\"total\\\":2}\",\n      \"responseContentType\": \"application/json; charset=utf-8\",\n      \"responseBodyMode\": \"static\",\n      \"requestHeaderRules\": [],\n      \"queryParamRules\": [],\n      \"responseHeaderRules\": [],\n      \"preserveRedirectQuery\": true,\n      \"pipeline\": {\n        \"request\": {\n          \"headers\": false,\n          \"data\": false\n        },\n        \"route\": {\n          \"mode\": \"origin\"\n        },\n        \"response\": {\n          \"mode\": \"mock\",\n          \"headers\": false,\n          \"delay\": false\n        }\n      },\n      \"sort\": 0,\n      \"hitCount\": 0,\n      \"source\": \"manual\",\n      \"createTime\": 1788912000000,\n      \"updateTime\": 1788912000000\n    }\n  ],\n  \"pageScripts\": []\n}"
        },
        {
          "title": "主要字段",
          "table": {
            "headers": [
              "字段",
              "类型与约束"
            ],
            "rows": [
              [
                "format / version",
                "固定为 \"reqix-config\" / 数字 1"
              ],
              [
                "exportedAt / createTime / updateTime",
                "毫秒时间戳，数字；各对象按模板填写"
              ],
              [
                "groups / rules / pageScripts",
                "必填数组。分组内规则放 groups[].rules；根规则 groupId=\"\""
              ],
              [
                "id / groupId / parentId",
                "字符串 ID。规则 ID 在文件内唯一；groupId 与所在分组一致；parentId 可省略"
              ],
              [
                "name / sort / hitCount",
                "名称字符串、排序数字、命中数数字（新建填 0）"
              ],
              [
                "enabled / enabledIndex",
                "布尔开关；规则停用配 0，启用配 1。分组与脚本没有 enabledIndex"
              ],
              [
                "url / matchType / method",
                "请求地址；exact、contains、regex、wildcard；GET、POST、PUT、DELETE、PATCH、ALL"
              ],
              [
                "pageScope / pageUrlRules",
                "all 或 specified；站点条件数组 {id,matchType,value}，指定站点请至少填一项"
              ],
              [
                "responseBody / responseContentType",
                "均为字符串。JSON 正文也必须先序列化；Content-Type 示例 application/json; charset=utf-8"
              ],
              [
                "statusCode / responseDelay",
                "数字；使用有效 HTTP 状态码；延迟为非负毫秒，需开启 delay 才生效"
              ],
              [
                "responseBodyMode / responseScript",
                "static 或 dynamic；动态模式另填包含 generateResponse(request) 的脚本字符串"
              ],
              [
                "requestHeaderRules / queryParamRules / responseHeaderRules",
                "必填数组；操作项 {id,name,value,operation}，operation 为 add、modify、remove；remove 仍保留 value:\"\""
              ],
              [
                "requestPayload",
                "可选字符串；有效 JSON 请求体，完整替换原正文；不使用时省略"
              ],
              [
                "redirectUrl / preserveRedirectQuery",
                "Redirect 目标为完整 HTTP(S) 地址；保留 Query 是必填布尔值，通常设 true"
              ],
              [
                "pipeline",
                "决定哪些动作生效；必须保留 request、route、response 三个对象"
              ],
              [
                "source / draft / editorActionOrder",
                "可选字段。AI 新建用 manual；draft 为布尔值；编辑顺序不能代替 pipeline 开关"
              ]
            ]
          }
        },
        {
          "title": "动作与开关对照",
          "paragraphs": [
            "所有开关都必须出现；未使用的布尔项填 false。下表列出每个动作需要变化的部分，其余按完整模板填写。"
          ],
          "table": {
            "headers": [
              "动作",
              "pipeline",
              "动作数据"
            ],
            "rows": [
              [
                "静态 / 动态 Mock",
                "route.mode=origin; response.mode=mock",
                "responseBody 或 responseScript"
              ],
              [
                "请求 Header",
                "request.headers=true; response.mode=upstream",
                "requestHeaderRules"
              ],
              [
                "Query / Payload",
                "request.data=true; response.mode=upstream",
                "queryParamRules / requestPayload"
              ],
              [
                "响应 Header",
                "response.headers=true",
                "responseHeaderRules"
              ],
              [
                "延迟",
                "response.delay=true",
                "responseDelay"
              ],
              [
                "Redirect",
                "route.mode=redirect; response.mode=upstream",
                "redirectUrl / preserveRedirectQuery"
              ],
              [
                "取消",
                "route.mode=cancel; response.mode=upstream",
                "无额外数据"
              ]
            ]
          },
          "note": "Redirect 与取消必须关闭 request.headers、request.data、response.headers、response.delay。响应 Header / 延迟处理真实响应时用 upstream；与 Mock 组合时用 mock。请求改写案例使用 upstream 才会把改写结果发到服务端。"
        },
        {
          "title": "分组与页面脚本",
          "items": [
            "分组对象包含 id、name、enabled、sort、createTime、updateTime、rules，parentId 可选。最多三层；所有祖先分组都启用后，其中规则才可能执行。",
            "同一规则只放一处，不要同时写到根 rules 与分组 rules。导入会重新分配 ID，不要依靠导入文件 ID 来覆盖现有规则。",
            "页面脚本包含 id、name、description、enabled、includeUrlRules、excludeUrlRules、runAt、world、allFrames、code、source 和两个时间戳。includeUrlRules 至少一项。",
            "runAt：document_start、document_end、document_idle；world：USER_SCRIPT 或 MAIN；source：manual 或 userscript-import。完整字段可下载页面脚本案例查看。"
          ],
          "downloads": [
            {
              "label": "下载分组示例",
              "href": "/examples/zh/users-demo.reqix.json"
            },
            {
              "label": "下载页面脚本示例",
              "href": "/examples/zh/page-badge.reqix.json"
            }
          ]
        },
        {
          "title": "Schema 能检查什么",
          "paragraphs": [
            "Schema 使用 JSON Schema Draft 7，覆盖 v1 文件的字段、类型、枚举、必填项和主要开关互斥条件。它也允许插件导出的可选请求快照字段；AI 新建配置无需添加这些字段，更不要凭空编造快照。"
          ],
          "items": [
            "另行检查：ID 唯一性、分组引用与环路、三层深度、总规则数上限 20,000、分组数上限 5,000、页面脚本上限 100、文件不超过 20 MB。",
            "还需检查：正则和浏览器匹配模式有效性、HTTP(S) 目标是否有效、正文中的 JSON 与动态脚本是否有效，以及实际请求是否按预期生效。",
            "插件仍会在导入时进行自己的校验。Schema 通过不代表代码已执行、接口已命中或 CORS 已满足；如文件来自其它版本，优先用已安装版本导出的模板。"
          ],
          "links": [
            {
              "label": "返回 AI 生成流程",
              "href": "/docs/ai"
            }
          ]
        }
      ]
    }
  },
  "en": {
    "ai": {
      "eyebrow": "AI guide",
      "title": "Generate importable rules with AI",
      "description": "Give AI your requirements, a complete template and a JSON Schema, then import, review and enable the result in Reqix.",
      "updated": "Configuration format v1 · September 9, 2026",
      "sections": [
        {
          "title": "Download the three references",
          "paragraphs": [
            "The Schema defines fields and types, the template demonstrates a complete file, and the prompt explains generation. Attach all three files to your AI tool; upload or paste them if the tool cannot read links."
          ],
          "downloads": [
            {
              "label": "Download JSON Schema",
              "href": "/schemas/reqix-config-v1.schema.json"
            },
            {
              "label": "Download complete JSON template",
              "href": "/examples/en/template.reqix.json"
            },
            {
              "label": "Download AI instructions",
              "href": "/examples/en/ai-instructions.md"
            }
          ],
          "note": "This workflow uses an external AI tool; Reqix does not call AI for you. Share API structure and fictional data, removing tokens, cookies and personal information first."
        },
        {
          "title": "Describe the required behavior",
          "table": {
            "headers": [
              "Input",
              "Example and purpose"
            ],
            "rows": [
              [
                "Page site",
                "http://localhost:3000 — limits which pages may trigger the rule"
              ],
              [
                "Request URL and method",
                "GET http://localhost:3000/api/users"
              ],
              [
                "Match mode",
                "Exact match; specify whether query variations should match"
              ],
              [
                "Desired behavior",
                "One rule each for success, empty data and a 500 error"
              ],
              [
                "Response contract",
                "Status, content type, field names, types and example values"
              ],
              [
                "Organization and switches",
                "Group name; everything disabled until individually tested"
              ]
            ]
          }
        },
        {
          "title": "Copy this prompt",
          "paragraphs": [
            "Use this for three user-list states. For another use case, change the URL, method and business shape together while keeping the generation constraints."
          ],
          "codeTitle": "AI prompt",
          "code": "Using the attached reqix-config-v1.schema.json and template.reqix.json, generate users-demo.reqix.json that can be imported directly into Reqix.\n\nRequirements:\n- Page site: http://localhost:3000.\n- Request: GET http://localhost:3000/api/users, exact match with no query string.\n- Create one group named \"User list scenarios\" with three alternative rules: 200 with two fictional users (Avery and Riley), 200 with an empty list, and 500 server error.\n- Each user has a numeric id and string name; total is numeric. Success and empty bodies use the business shape {\"items\":[],\"total\":0}; the error uses {\"code\":\"DEMO_SERVER_ERROR\",\"message\":\"Please try again\"}.\n\nGeneration constraints:\n1. The root contains only format, version, exportedAt, groups, rules and pageScripts; format=\"reqix-config\" and version=1. Keep all three arrays even when empty. Do not add $schema to the configuration.\n2. Preserve all required template fields and pipeline. Set every group, rule and page script enabled=false; rules use enabledIndex=0, hitCount=0 and source=\"manual\".\n3. Store rules in groups[].rules with groupId equal to the containing group id; top-level rules=[]. Use unique IDs and numeric millisecond timestamps and sort values.\n4. Use pageScope=\"specified\" and pageUrlRules with an exact match for the page origin http://localhost:3000. The request URL and page scope are separate fields.\n5. Static mock: responseBodyMode=\"static\", pipeline.response.mode=\"mock\", route.mode=\"origin\"; all other pipeline flags are false.\n6. responseBody is a serialized JSON string, not an object. Escape quotes inside it. Do not generate real credentials or user data.\n7. Do not add fields outside the template and Schema, comments, trailing commas, placeholder ellipses or unfinished scripts.\n8. If you can execute validation, validate against the attached Schema and check unique IDs, group references and consistent enabled flags. If you cannot, say so; never claim validation ran.\n\nDeliver the complete JSON file. If file downloads are unavailable, return a complete JSON code block that I can save as UTF-8 users-demo.reqix.json. Do not return just an array of rules. State the validation status separately, outside the JSON file."
        },
        {
          "title": "Import and verify the result",
          "steps": [
            {
              "title": "Get the complete file",
              "body": "Ask AI for users-demo.reqix.json, or save the complete JSON as UTF-8. Do not include Markdown fences or explanatory prose."
            },
            {
              "title": "Import in the management center",
              "body": "Open Import in the Reqix management center, select the JSON file, choose the groups and rules in the preview, and confirm. Download the completed example below if you just want to try it."
            },
            {
              "title": "Review, then enable one scenario",
              "body": "Check the URL, page scope and response. Enable interception for the site, the example group and one rule. The three rules match the same API, so disable the current one before enabling the next."
            },
            {
              "title": "Trigger the API again",
              "body": "Use the local demo page from Worked examples or your matching application. Reload, trigger GET /api/users, inspect the status and JSON received by the page, and check the Reqix hit record."
            }
          ],
          "downloads": [
            {
              "label": "Download the completed three-scenario file",
              "href": "/examples/en/users-demo.reqix.json"
            }
          ],
          "note": "Normal configuration import preserves enabled values; it does not automatically disable everything. These templates and examples explicitly set enabled=false. Passing the Schema does not prove the request behavior works."
        },
        {
          "title": "Ask AI for other scenarios",
          "items": [
            "Pagination and filters: provide query names, page size and response shape; start from the dynamic pagination example.",
            "Integration rewrites: specify headers or query parameters to add, change or remove, or the full replacement JSON body; retain the upstream response.",
            "Failure testing: distinguish an HTTP 500 mock from cancellation and a delayed response; they trigger different application behavior.",
            "Environment changes: provide a full redirect target and query policy; do not combine redirect with a mock."
          ],
          "links": [
            {
              "label": "Download complete files by scenario",
              "href": "/docs/examples"
            }
          ]
        },
        {
          "title": "Troubleshoot generated files",
          "items": [
            "Invalid import format: check the complete root object, numeric version 1, required empty arrays and unknown fields.",
            "Wrong responseBody or requestPayload type: serialize the business object into a string instead of embedding an object.",
            "Import succeeds but no hit: check page origin, request URL, method, query, site interception and group/rule switches; check whether an earlier rule matches first.",
            "Give AI the error and sanitized generated file, requesting a complete corrected file; do not remove required fields to bypass errors."
          ],
          "links": [
            {
              "label": "Review format constraints and validation boundaries",
              "href": "/docs/config-format"
            }
          ]
        }
      ]
    },
    "examples": {
      "eyebrow": "Worked examples",
      "title": "From normal responses to failure testing",
      "description": "11 importable rules and a page script covering mock, dynamic responses, request rewrites, response headers, delay, redirect and cancellation.",
      "updated": "Configuration format v1 · September 9, 2026",
      "sections": [
        {
          "title": "Prepare a page you can verify",
          "paragraphs": [
            "All API examples are scoped to http://localhost:3000. Use your own local app or download the dependency-free demo server and run the command below with an installed Node.js runtime. Open http://localhost:3000. The server echoes requests so you can verify what actually reached it."
          ],
          "downloads": [
            {
              "label": "Download local demo server",
              "href": "/examples/demo-server.mjs"
            },
            {
              "label": "Download all examples (11 rules + 1 page script)",
              "href": "/examples/en/all-examples.reqix.json"
            }
          ],
          "codeTitle": "Run in the downloaded file’s directory",
          "code": "node demo-server.mjs",
          "steps": [
            {
              "title": "Import examples",
              "body": "Import the complete pack in the management center or download an individual example below. The pack uses one disabled group; individual files contain root-level rules."
            },
            {
              "title": "Enable only the current example",
              "body": "All examples are disabled. Enable site interception and any containing group, then one rule. Several examples share a URL; when multiple rules match, the earlier rule wins."
            },
            {
              "title": "Trigger and inspect",
              "body": "On the demo page, open DevTools and the Reqix panel before reloading. Run the snippet in Console, then inspect its result and Reqix hit record. The snippets use the page’s Fetch implementation."
            }
          ],
          "note": "For your own project, replace the request URL, page site in pageUrlRules and redirect target together. Mock needs no upstream API; header, query, payload, upstream delay and redirect examples need a reachable service."
        },
        {
          "title": "Success mock",
          "paragraphs": [
            "Build the user list before the backend is ready. GET /api/users returns 200, items contains Avery and Riley, and total=2. No upstream API request is sent."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/users-success.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "const response = await fetch(\"/api/users\");\nconsole.log(response.status, await response.json());"
        },
        {
          "title": "Empty state",
          "paragraphs": [
            "Switch to this rule: the same API returns 200, items=[] and total=0. Verify empty-state text, hidden pagination or a disabled next button. Disable the success rule first."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/users-empty.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "console.log(await (await fetch(\"/api/users\")).json());"
        },
        {
          "title": "HTTP 500 error",
          "paragraphs": [
            "The same API returns 500 and DEMO_SERVER_ERROR. Fetch still resolves with a Response, so the application must check response.ok or status. Cancellation instead causes a network error."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/users-error.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "const response = await fetch(\"/api/users\");\nconsole.log(response.ok, response.status, await response.json());"
        },
        {
          "title": "Dynamic response and pagination",
          "paragraphs": [
            "Enable the dynamic mock and disable other /api/users rules. The regex accepts changing queries. page=2 returns IDs 3 and 4; page=3 returns ID 5; total remains 5. The function returns the response body directly; status and headers are configured in rule fields."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/dynamic-pagination.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "console.log(await (await fetch(\"/api/users?page=2\")).json());",
          "note": "The download includes the full generateResponse(request) script. request provides method, url, headers, query and payload. It runs outside the page DOM. Returned objects are serialized as JSON; strings become body text. Returning {status, body} does not set the HTTP status."
        },
        {
          "title": "Modify request headers",
          "paragraphs": [
            "The request continues to the real service. In the echoed headers, x-demo-environment is staging and x-debug-trace is absent. Modify replaces an existing value; remove deletes the field. Use synthetic values for this example."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/request-headers.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "const response = await fetch(\"/api/echo\", {\n  headers: { \"X-Demo-Environment\": \"dev\", \"X-Debug-Trace\": \"demo\" }\n});\nconsole.log(await response.json());"
        },
        {
          "title": "Add, modify and remove query parameters",
          "paragraphs": [
            "Match the original /api/echo?page=1&debug=1 exactly, change page to 2, add pageSize=20 and remove debug. The echoed query is {page:\"2\",pageSize:\"20\"}. Modify replaces matching values; add appends and preserves existing values."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/query-params.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "console.log(await (await fetch(\"/api/echo?page=1&debug=1\")).json());"
        },
        {
          "title": "Replace a JSON request body",
          "paragraphs": [
            "Fully replace the body of POST /api/echo and set Content-Type. The echoed payload is {name:\"Avery\",plan:\"demo\"}; the original old field is gone. This is replacement, not a field merge. Do not add a body to GET."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/request-payload.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "const response = await fetch(\"/api/echo\", {\n  method: \"POST\", headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ old: true })\n});\nconsole.log(await response.json());"
        },
        {
          "title": "Modify response headers",
          "paragraphs": [
            "Keep the upstream body and expose X-Demo-Response: reqix to page code. This action does not replace server CORS configuration or change browser-managed cookie, CSP or network-cache behavior."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/response-headers.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "const response = await fetch(\"/api/echo\");\nconsole.log(response.headers.get(\"X-Demo-Response\"), await response.json());"
        },
        {
          "title": "Delay and loading states",
          "paragraphs": [
            "Keep the real response and add 2000 ms of delay to inspect loading and duplicate-submit prevention. Total duration also includes the upstream request and is not exactly two seconds. Delay alone does not produce a timeout error."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/delay.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "const started = performance.now();\nconst response = await fetch(\"/api/echo\");\nconsole.log(Math.round(performance.now() - started), await response.json());"
        },
        {
          "title": "Redirect and query handling",
          "paragraphs": [
            "Redirect /api/legacy?source=demo to /api/echo on the same site. Original queries are retained by default, so the echo shows path=/api/echo and query.source=demo. A target query takes precedence in full. With no target query and preservation disabled, no original query is sent. Cross-origin targets must satisfy CORS; verify method and body."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/redirect.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "console.log(await (await fetch(\"/api/legacy?source=demo\")).json());"
        },
        {
          "title": "Cancel a request",
          "paragraphs": [
            "Cancel POST /api/analytics to test network failures such as unavailable analytics. Fetch rejects and XHR follows its error path; there is no synthetic 500 response. Cancellation cannot be combined with delay, mock or request rewrites."
          ],
          "downloads": [
            {
              "label": "Download this example JSON",
              "href": "/examples/en/cancel.reqix.json"
            }
          ],
          "codeTitle": "Verify in the demo page Console",
          "code": "try {\n  await fetch(\"/api/analytics\", { method: \"POST\", body: \"demo\" });\n} catch (error) {\n  console.log(\"Expected cancellation / 预期取消\", error.name);\n}"
        },
        {
          "title": "Page script: label the local environment",
          "paragraphs": [
            "Import the JSON, enable “Local demo environment” in Page scripts, allow user scripts when the browser requests it, and reload http://localhost:3000. A badge appears at the bottom right without duplicates. Disable the script and reload to remove it. Page scripts are managed separately from network rules."
          ],
          "downloads": [
            {
              "label": "Download page script configuration JSON",
              "href": "/examples/en/page-badge.reqix.json"
            },
            {
              "label": "Download the .user.js version",
              "href": "/examples/en/page-badge.user.js"
            }
          ],
          "note": "Import .user.js through the userscript import entry on Page scripts. Its browser match pattern http://localhost/* covers different localhost ports; the JSON version limits the script to port 3000. It uses @grant none and does not rely on GM_* APIs."
        },
        {
          "title": "Matching, combinations and troubleshooting",
          "items": [
            "An exact request-URL match includes the query. contains uses a substring, regex uses a regular expression (escape backslashes in JSON), and wildcard accepts *. Start with an exact URL before broadening the match.",
            "Network rule page scope matches origins (scheme, host and port), not page paths. Page-script URL scopes can include paths.",
            "Request header, query and payload changes can be combined with an upstream response. Mock can combine response headers and delay. Do not stack separate matching rules to assemble a pipeline.",
            "Regular rewrites and mocks apply to page Fetch/XHR. Static resources can use Redirect; do not expect the other examples to work on images, scripts or WebSocket.",
            "When finished, disable rules or their group and page scripts, reload the test page, and stop the demo server with Ctrl+C."
          ],
          "links": [
            {
              "label": "See action switches and JSON fields",
              "href": "/docs/config-format"
            },
            {
              "label": "Read the DevTools workflow",
              "href": "/docs/devtools"
            }
          ]
        }
      ]
    },
    "config-format": {
      "eyebrow": "JSON format",
      "title": "JSON structure for AI and manual authoring",
      "description": "A complete importable template, field reference and machine-readable Schema for the existing v1 format. Preserve required fields and configure actions explicitly.",
      "updated": "Configuration format v1 · September 9, 2026",
      "sections": [
        {
          "title": "A complete single-rule example",
          "paragraphs": [
            "This disabled static mock includes the complete root object and required rule fields. Save it as .reqix.json and import it. The business response is a string in responseBody. The Schema is a separate file for AI or validators and is not an importable configuration."
          ],
          "downloads": [
            {
              "label": "Download complete template",
              "href": "/examples/en/template.reqix.json"
            },
            {
              "label": "Download JSON Schema",
              "href": "/schemas/reqix-config-v1.schema.json"
            }
          ],
          "codeTitle": "template.reqix.json",
          "code": "{\n  \"format\": \"reqix-config\",\n  \"version\": 1,\n  \"exportedAt\": 1788912000000,\n  \"groups\": [],\n  \"rules\": [\n    {\n      \"id\": \"example-users-success\",\n      \"groupId\": \"\",\n      \"name\": \"Users · success\",\n      \"enabled\": false,\n      \"enabledIndex\": 0,\n      \"url\": \"http://localhost:3000/api/users\",\n      \"matchType\": \"exact\",\n      \"method\": \"GET\",\n      \"pageScope\": \"specified\",\n      \"pageUrlRules\": [\n        {\n          \"id\": \"page-local\",\n          \"matchType\": \"exact\",\n          \"value\": \"http://localhost:3000\"\n        }\n      ],\n      \"statusCode\": 200,\n      \"responseDelay\": 0,\n      \"responseBody\": \"{\\\"items\\\":[{\\\"id\\\":1,\\\"name\\\":\\\"Avery\\\"},{\\\"id\\\":2,\\\"name\\\":\\\"Riley\\\"}],\\\"total\\\":2}\",\n      \"responseContentType\": \"application/json; charset=utf-8\",\n      \"responseBodyMode\": \"static\",\n      \"requestHeaderRules\": [],\n      \"queryParamRules\": [],\n      \"responseHeaderRules\": [],\n      \"preserveRedirectQuery\": true,\n      \"pipeline\": {\n        \"request\": {\n          \"headers\": false,\n          \"data\": false\n        },\n        \"route\": {\n          \"mode\": \"origin\"\n        },\n        \"response\": {\n          \"mode\": \"mock\",\n          \"headers\": false,\n          \"delay\": false\n        }\n      },\n      \"sort\": 0,\n      \"hitCount\": 0,\n      \"source\": \"manual\",\n      \"createTime\": 1788912000000,\n      \"updateTime\": 1788912000000\n    }\n  ],\n  \"pageScripts\": []\n}"
        },
        {
          "title": "Main fields",
          "table": {
            "headers": [
              "Field",
              "Type and constraints"
            ],
            "rows": [
              [
                "format / version",
                "Fixed: \"reqix-config\" / numeric 1"
              ],
              [
                "exportedAt / createTime / updateTime",
                "Numeric millisecond timestamps; include them on the objects shown in the template"
              ],
              [
                "groups / rules / pageScripts",
                "Required arrays. Grouped rules live in groups[].rules; root rules use groupId=\"\""
              ],
              [
                "id / groupId / parentId",
                "String IDs. Rule IDs are unique across the file; groupId matches its group; parentId is optional"
              ],
              [
                "name / sort / hitCount",
                "String name, numeric sort, numeric hit count (use 0 for new rules)"
              ],
              [
                "enabled / enabledIndex",
                "Boolean switch; disabled rules use 0, enabled rules 1. Groups and scripts have no enabledIndex"
              ],
              [
                "url / matchType / method",
                "Request URL; exact, contains, regex, wildcard; GET, POST, PUT, DELETE, PATCH, ALL"
              ],
              [
                "pageScope / pageUrlRules",
                "all or specified; site conditions {id,matchType,value}; provide at least one for specified scope"
              ],
              [
                "responseBody / responseContentType",
                "Both strings. Serialize JSON bodies first; example content type: application/json; charset=utf-8"
              ],
              [
                "statusCode / responseDelay",
                "Numbers; use a valid HTTP status; nonnegative delay in milliseconds requires the delay flag"
              ],
              [
                "responseBodyMode / responseScript",
                "static or dynamic; dynamic mode also needs a script string defining generateResponse(request)"
              ],
              [
                "requestHeaderRules / queryParamRules / responseHeaderRules",
                "Required arrays; entries {id,name,value,operation}; operation: add, modify, remove; keep value:\"\" for remove"
              ],
              [
                "requestPayload",
                "Optional string containing valid JSON; replaces the complete body; omit when unused"
              ],
              [
                "redirectUrl / preserveRedirectQuery",
                "Redirect target is a full HTTP(S) URL; the required preserve-query boolean is normally true"
              ],
              [
                "pipeline",
                "Determines active actions; keep all three objects: request, route, response"
              ],
              [
                "source / draft / editorActionOrder",
                "Optional. AI-created rules use manual; draft is boolean; editor order does not replace pipeline flags"
              ]
            ]
          }
        },
        {
          "title": "Actions and pipeline switches",
          "paragraphs": [
            "Include every switch and set unused booleans to false. The table shows changes for each action; use the complete template for the remaining fields."
          ],
          "table": {
            "headers": [
              "Action",
              "pipeline",
              "Action data"
            ],
            "rows": [
              [
                "Static / dynamic mock",
                "route.mode=origin; response.mode=mock",
                "responseBody or responseScript"
              ],
              [
                "Request headers",
                "request.headers=true; response.mode=upstream",
                "requestHeaderRules"
              ],
              [
                "Query / Payload",
                "request.data=true; response.mode=upstream",
                "queryParamRules / requestPayload"
              ],
              [
                "Response headers",
                "response.headers=true",
                "responseHeaderRules"
              ],
              [
                "Delay",
                "response.delay=true",
                "responseDelay"
              ],
              [
                "Redirect",
                "route.mode=redirect; response.mode=upstream",
                "redirectUrl / preserveRedirectQuery"
              ],
              [
                "Cancel",
                "route.mode=cancel; response.mode=upstream",
                "No extra data"
              ]
            ]
          },
          "note": "Redirect and cancel must disable request.headers, request.data, response.headers and response.delay. Use upstream for response headers or delay over a real response; use mock when combining with a mock. Request-rewrite examples use upstream to send their changes to the server."
        },
        {
          "title": "Groups and page scripts",
          "items": [
            "Groups contain id, name, enabled, sort, createTime, updateTime and rules, with optional parentId. Nest up to three levels; every ancestor group must be enabled for a contained rule to run.",
            "Place each rule once, not in both root rules and group rules. Import assigns new IDs; do not use file IDs to overwrite existing rules.",
            "Page scripts contain id, name, description, enabled, includeUrlRules, excludeUrlRules, runAt, world, allFrames, code, source and both timestamps. includeUrlRules needs at least one entry.",
            "runAt: document_start, document_end or document_idle; world: USER_SCRIPT or MAIN; source: manual or userscript-import. Download the page-script example for a complete object."
          ],
          "downloads": [
            {
              "label": "Download grouped example",
              "href": "/examples/en/users-demo.reqix.json"
            },
            {
              "label": "Download page-script example",
              "href": "/examples/en/page-badge.reqix.json"
            }
          ]
        },
        {
          "title": "What the Schema checks",
          "paragraphs": [
            "The JSON Schema Draft 7 file covers v1 fields, types, enums, required properties and main mutually exclusive switches. It also accepts optional request-snapshot fields in plugin exports. AI-created configurations do not need these fields and should not invent snapshots."
          ],
          "items": [
            "Also check unique IDs, group references and cycles, three-level depth, at most 20,000 total rules, 5,000 groups, 100 page scripts, and a file size no greater than 20 MB.",
            "Also validate regex and browser match patterns, valid HTTP(S) targets, JSON stored in strings, dynamic scripts and actual request behavior.",
            "Reqix still validates during import. Passing the Schema does not mean code ran, an API matched or CORS was satisfied. For another version, prefer a template exported by your installed version."
          ],
          "links": [
            {
              "label": "Return to the AI generation workflow",
              "href": "/docs/ai"
            }
          ]
        }
      ]
    }
  }
} satisfies Record<Locale, Record<"ai" | "examples" | "config-format", Article>>;

export const guideEntries = {
  "zh": {
    "title": "从案例或 AI 开始",
    "paragraphs": [
      "已有目标接口时，可以让 AI 按官方模板生成配置；想先体验功能，可以下载默认停用的案例包逐条验证。"
    ],
    "links": [
      {
        "label": "让 AI 生成可导入配置",
        "href": "/docs/ai"
      },
      {
        "label": "查看实战案例",
        "href": "/docs/examples"
      },
      {
        "label": "查询 JSON 结构与字段",
        "href": "/docs/config-format"
      }
    ]
  },
  "en": {
    "title": "Start with examples or AI",
    "paragraphs": [
      "For a known API, ask AI to generate a configuration from the official template. To explore the features, download the disabled example pack and try one rule at a time."
    ],
    "links": [
      {
        "label": "Generate importable configurations with AI",
        "href": "/docs/ai"
      },
      {
        "label": "Explore worked examples",
        "href": "/docs/examples"
      },
      {
        "label": "Read the JSON structure and fields",
        "href": "/docs/config-format"
      }
    ]
  }
};
