# Reqix AI 配置生成提示

请根据附件 reqix-config-v1.schema.json 和 template.reqix.json，生成可直接导入 Reqix 的 users-demo.reqix.json。

需求：
- 页面站点：http://localhost:3000。
- 请求：GET http://localhost:3000/api/users，精确匹配，不带 Query。
- 创建一个“用户列表场景”分组，含三条互斥场景：200 正常列表（Avery、Riley 两位虚构用户）、200 空列表、500 服务异常。
- 每个用户包含数字 id 和字符串 name，total 为数字。成功和空列表正文使用 {"items":[],"total":0} 的业务结构；异常使用 {"code":"DEMO_SERVER_ERROR","message":"Please try again"}。

生成约束：
1. 根对象仅包含 format、version、exportedAt、groups、rules、pageScripts；format="reqix-config"，version=1。即使为空也保留三个数组。不要在配置中添加 $schema。
2. 按模板保留所有必填字段及 pipeline。所有分组、规则和页面脚本 enabled=false；规则 enabledIndex=0、hitCount=0、source="manual"。
3. 本文件的规则放在 groups[].rules，groupId 等于所在分组 id；顶层 rules=[]。ID 不重复，毫秒时间戳和 sort 为数字。
4. pageScope="specified"；pageUrlRules 使用 exact 匹配页面 origin http://localhost:3000。请求 url 与页面范围是不同字段。
5. 静态 Mock：responseBodyMode="static"，pipeline.response.mode="mock"，route.mode="origin"，其余 pipeline 开关为 false。
6. responseBody 是序列化后的 JSON 字符串，不是对象；字符串里的双引号必须转义。不要生成真实凭证或用户数据。
7. 不添加模板和 Schema 之外的字段、注释、尾逗号、占位省略号或未实现脚本。
8. 如能执行校验，请按附件 Schema 校验，并检查 ID 唯一性、分组引用与开关一致性；不能执行时请如实说明，不能声称已通过。

交付完整 JSON 文件；如果无法提供下载文件，输出完整 JSON 代码块，我会保存为 UTF-8 的 users-demo.reqix.json。不要只输出规则数组。校验状态另起一段说明，不能写进 JSON 文件。

配套 Schema：https://reqix-dev.github.io/reqix-website/schemas/reqix-config-v1.schema.json
