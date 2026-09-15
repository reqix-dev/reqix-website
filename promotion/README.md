# Reqix 实操录屏演示 / Screen recording demo

## 启动 / Run

```sh
node promotion/demo-server.mjs
```

在 Chrome 或 Edge 中打开 <http://127.0.0.1:4318/>。默认中文，可通过页面右上角切换英文与明暗主题。所有数据都是虚构商品。服务仅绑定本机，不读取插件配置或用户数据。

Open the URL in Chrome or Edge. Use the header controls to switch language and theme. All products are fictional. The server listens only on localhost and never reads extension settings or user data.

## 实际录制步骤 / Recording sequence

1. 打开 Reqix DevTools 面板，然后点击页面的「重新加载」。 / Open Reqix in DevTools, then reload the products.
2. 在 `/api/products` 请求右侧新建响应 Mock 规则。 / Create a response mock from the request row.
3. 将规则限制在该本地演示地址，将响应正文改为 `{"products":[],"total":0}`。 / Scope the rule to the local demo endpoint and change its response body.
4. 保存并启用规则、所属分组和本地演示站点接管，再次加载页面。 / Save and enable the rule, its group, and interception for the local demo site; then reload the products.
5. 确认页面出现空状态，响应面板显示空数组。 / Verify the empty state and empty response array.

本地服务器始终返回三条商品。页面没有模拟空状态的按钮，最终效果必须由真实插件处理请求产生。录制时保留创建与启用步骤；不得用动画代替实操，也不要记录真实业务请求。

The server always returns three products. There is no simulated empty-state control: the final result must come from the real extension processing the request. Record the actual creation and enabling steps without substituting animation or capturing real business traffic.
