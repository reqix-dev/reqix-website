// ==UserScript==
// @name Local demo environment
// @match http://localhost/*
// @run-at document-idle
// @grant none
// ==/UserScript==

(() => {
  if (document.getElementById("reqix-demo-badge")) return;
  const badge = document.createElement("div");
  badge.id = "reqix-demo-badge";
  badge.textContent = "Local demo environment";
  badge.style.cssText = "position:fixed;bottom:16px;right:16px;z-index:2147483647;padding:8px 12px;background:#173e32;color:white;border-radius:6px;font:14px sans-serif;pointer-events:none";
  document.body.appendChild(badge);
})();
