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

## 成片 / Finished video

- [40 秒实操视频 / 40-second screen recording](recordings/reqix-demo.zh-CN.mp4)
- [视频封面 / Video poster](recordings/reqix-demo-poster.jpg)
- [中文字幕 / Chinese captions](recordings/reqix-demo.zh-CN.srt)
- [英文字幕译稿 / English caption translation](recordings/reqix-demo.en.srt)

成片为 1920 × 1080、30 fps、H.264 MP4，无音轨，已嵌入中文字幕。英文 SRT 是对应时间轴的翻译稿；视频中的插件界面与固定字幕仍为中文。

The video is a silent 1920 × 1080, 30 fps H.264 MP4 with burned-in Chinese captions. The English SRT provides a timed translation; the recorded interface and burned-in captions remain Chinese.

素材来自 Chrome 中真实运行的 Reqix 1.0.1：从请求行创建响应规则、编辑响应、开启规则并保存、开启插件、重新加载并验证空状态。演示服务器始终返回三条虚构商品，空数组由插件处理请求产生。录制完成后直接访问本地接口，仍返回三条商品。

The footage shows Reqix 1.0.1 running in Chrome: creating a response rule from a request row, editing the response, enabling and saving the rule, turning on the extension, and reloading to verify the empty state. The local server always returns three fictional products; Reqix supplies the empty response. A direct API check after recording still returned three products.

后期仅裁切、去除等待、拼接真实录屏并添加字幕；插件弹窗操作按 0.75 倍速播放，方便看清开关。保存成功片段仅保留演示规则所在区域。浏览器标签、地址栏、系统菜单、聊天窗口和无关规则均未包含在成片中，未使用合成界面或步骤动画。未经裁切的原片不入库。

Editing consists of cropping, removing pauses, joining real screen captures, and adding captions. The popup segment plays at 0.75× speed for readability. The save confirmation shot is cropped to the demo rule. Browser tabs, the address bar, system menus, chat windows, and unrelated rules are excluded. No synthetic interface or step animation replaces the recording. Uncropped source recordings are not stored in this repository.

这些文件仅作为推广素材保存；不会自动嵌入官网或发布到社交平台。

These files are promotional assets; adding them does not embed the video in the website or publish it to social platforms.
