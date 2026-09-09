import { createServer } from "node:http";

// 只监听本机。/api/echo 让读者核对实际收到的 URL、Header 与请求体。
createServer(async (request, response) => {
  if (request.url === "/favicon.ico") { response.writeHead(204).end(); return; }
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end('<!doctype html><html lang="en"><meta charset="utf-8"><title>Reqix local demo</title><body><h1>Reqix local demo / 本地演示</h1><p>Open DevTools and follow the examples. / 打开开发者工具，按案例触发请求。</p></body></html>');
    return;
  }
  const chunks = [];
  let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > 1048576) { response.writeHead(413).end(); return; }
    chunks.push(chunk);
  }
  const text = Buffer.concat(chunks).toString("utf8");
  let payload = text;
  try { payload = JSON.parse(text); } catch { /* 非 JSON 请求保留原文。 */ }
  const url = new URL(request.url, "http://localhost:3000");
  response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ source: "local-demo-server", method: request.method,
    path: url.pathname, query: Object.fromEntries(url.searchParams),
    headers: request.headers, payload }));
}).listen(3000, "localhost", () => {
  console.log("Reqix demo / 演示服务：http://localhost:3000 — Ctrl+C to stop / 停止");
});
