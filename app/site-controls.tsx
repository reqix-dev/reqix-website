"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** 默认跟随系统；手动选择仅保存在此官网，不与插件设置通信。 */
export function ThemeToggle({ label }: { label: string }) {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("reqix-site-theme", next);
    } catch {
      // 隐私模式禁用存储时，仍允许切换当前页面的外观。
    }
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme}><span aria-hidden="true">◐</span><span>{label}</span></button>;
}

/** 保留原生菜单的键盘操作；页内跳转、点击外部或 Escape 后关闭遮挡层。 */
export function MobileMenu({ label, children }: { label: string; children: ReactNode }) {
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    function closeOnClick(event: MouseEvent) {
      if (!menu || !(event.target instanceof Element)) return;
      if (!menu.contains(event.target) || event.target.closest("a")) menu.open = false;
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("click", closeOnClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return <details className="mobile-menu" ref={menuRef}><summary aria-label={label}><span></span><span></span></summary>{children}</details>;
}
