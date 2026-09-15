import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createRootMetadata, htmlLang, siteViewport } from "../seo";
import "../globals.css";
import { themeScript } from "../theme-script";

export const metadata: Metadata = createRootMetadata("en");
export const viewport = siteViewport;

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang("en")} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
