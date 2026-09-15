# Reqix 实操录屏演示 / Screen recording demo

## 启动 / Run

```sh
node promotion/demo-server.mjs
```

在 Chrome 或 Edge 中打开 <http://127.0.0.1:4318/>。默认中文，可通过页面右上角切换英文与明暗主题。所有数据都是虚构商品。服务仅绑定本机，不读取插件配置或用户数据。

Open the URL in Chrome or Edge. Use the header controls to switch language and theme. All products are fictional. The server listens only on localhost and never reads extension settings or user data.

## 实际录制步骤 / Recording sequence

1. 将 DevTools 停靠在浏览器右侧，打开 Reqix 面板，然后点击页面的「重新加载」。 / Dock DevTools on the right, open Reqix, then reload the products.
2. 在 `/api/products` 请求右侧新建响应 Mock 规则。 / Create a response mock from the request row.
3. 将规则限制在该本地演示地址，将响应正文改为 `{"products":[],"total":0}`。 / Scope the rule to the local demo endpoint and change its response body.
4. 保存并启用规则、所属分组和本地演示站点接管，再次加载页面。 / Save and enable the rule, its group, and interception for the local demo site; then reload the products.
5. 确认页面出现空状态，响应面板显示空数组。 / Verify the empty state and empty response array.
6. 点击浏览器右上角 Reqix 图标，保留弹窗与总开关的操作画面。关闭插件后重新加载，确认三条商品恢复；重新开启并加载，确认空状态再次出现。 / Open Reqix from the top-right browser toolbar and keep the popup and main switch in view. Turn the extension off and reload to restore three products, then turn it back on and reload to verify the empty state again.

本地服务器始终返回三条商品。页面没有模拟空状态的按钮，最终效果必须由真实插件处理请求产生。录制时保留创建与启用步骤；不得用动画代替实操，也不要记录真实业务请求。

The server always returns three products. There is no simulated empty-state control: the final result must come from the real extension processing the request. Record the actual creation and enabling steps without substituting animation or capturing real business traffic.

## 成片 / Finished video

- [41 秒实操视频 / 41-second screen recording](recordings/reqix-demo.zh-CN.mp4)
- [首帧封面 / Opening cover](recordings/reqix-demo-poster.jpg)
- [中文字幕 / Chinese captions](recordings/reqix-demo.zh-CN.srt)
- [英文字幕译稿 / English caption translation](recordings/reqix-demo.en.srt)

新版成片为 1920 × 1080、30 fps、H.264 MP4，无音轨，已嵌入中文字幕。视频从封面开始并停留 3 秒，封面使用现有 Reqix 标志与本次实录画面；JPEG 封面取自视频首帧。英文 SRT 是对应时间轴的翻译稿，录制界面与固定字幕仍为中文。

The revised video is a silent 1920 × 1080, 30 fps H.264 MP4 with burned-in Chinese captions. It opens with a three-second cover using the existing Reqix logo and a frame from this recording. The JPEG cover is extracted from the first video frame. The English SRT provides a timed translation; the recorded interface and burned-in captions remain Chinese.

素材来自 Chrome 中真实运行的 Reqix 1.0.1。DevTools 停靠在右侧，完整保留地址栏、右上角插件图标、弹窗和总开关。视频展示从请求行创建响应规则、编辑响应、开启规则并保存、重新加载验证，以及关闭和重新开启插件后的结果对比。

The footage shows Reqix 1.0.1 running in Chrome with DevTools docked on the right. The address bar, top-right extension icon, popup, and main switch remain visible. It demonstrates creating a response rule from a request row, editing the response, enabling and saving the rule, reloading to verify it, and comparing the results with the extension off and on.

演示服务器始终返回三条虚构商品，空数组由真实插件处理请求产生。录制后直接访问本地接口，仍返回三条商品；录屏也验证了关闭插件恢复商品、重新开启后恢复空状态。

The local server always returns three fictional products; the real extension supplies the empty response. A direct API check after recording still returned three products. The recording also verifies that disabling the extension restores the products and enabling it restores the empty state.

实操片段保持原速，只裁切画面、去除等待与无关操作，并添加字幕。系统菜单、标签栏和聊天窗口不进入成片，个人头像已遮挡。结尾对最后一帧停留 3.9 秒，展示安装地址。封面和结尾停留不替代实际操作，未经裁切的原片不入库。

The interaction footage plays at its original speed, with framing crops, trimmed pauses and unrelated actions, and captions. System menus, tab strips, and chat windows are excluded, and the profile avatar is obscured. The last frame is held for 3.9 seconds to show the installation URL. The cover and closing hold do not replace real interactions. Uncropped source recordings are not stored in this repository.

这些文件仅作为推广素材保存；不会自动嵌入官网或发布到社交平台。

These files are promotional assets; adding them does not embed the video in the website or publish it to social platforms.
