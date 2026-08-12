import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createRootMetadata, htmlLang, siteViewport } from "../seo";
import "../globals.css";

export const metadata: Metadata = createRootMetadata("zh");
export const viewport = siteViewport;

export default function ChineseRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang("zh")}>
      <body>{children}</body>
    </html>
  );
}
