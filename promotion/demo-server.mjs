import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

// 录屏使用独立本地接口；始终返回商品数据，空列表必须由真实 Reqix 规则产生。
const products = [
  { id: "P-1001", name: "Canvas backpack", category: "Bags", stock: 24, price: 89 },
  { id: "P-1002", name: "Everyday notebook", category: "Stationery", stock: 56, price: 29 },
  { id: "P-1003", name: "Ceramic mug", category: "Home", stock: 18, price: 49 },
];
const port = Number(process.env.REQIX_DEMO_PORT || 4318);
const server = createServer(async (request, response) => {
  const route = new URL(request.url || "/", "http://127.0.0.1").pathname;
  response.setHeader("Cache-Control", "no-store");
  if (route === "/api/products") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ products, total: products.length }));
    return;
  }
  const file = route === "/" ? new URL("./demo.html", import.meta.url)
    : route === "/reqix-logo.png" ? new URL("../public/reqix-logo.png", import.meta.url) : null;
  if (!file) { response.writeHead(404); response.end("Not found"); return; }
  try {
    const body = await readFile(file);
    response.writeHead(200, { "Content-Type": route.endsWith(".png") ? "image/png" : "text/html; charset=utf-8" });
    response.end(body);
  } catch { response.writeHead(500); response.end("Unable to load demo"); }
});
server.listen(port, "127.0.0.1", () => console.log(`Reqix recording demo: http://127.0.0.1:${port}/`));
