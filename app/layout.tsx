import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reqix.dev"),
  title: {
    default: "Reqix — Network interception & API mocking",
    template: "%s · Reqix",
  },
  description:
    "Capture Fetch/XHR in DevTools and turn real traffic into precise request interception and API mocking rules.",
  icons: {
    icon: "/reqix-icon.png",
    shortcut: "/reqix-icon.png",
    apple: "/reqix-icon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Reqix",
    title: "Reqix — Intercept. Rewrite. Mock.",
    description:
      "Turn real Fetch/XHR traffic into precise interception and API mocking rules.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 921,
        alt: "Reqix — Intercept. Rewrite. Mock.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reqix — Intercept. Rewrite. Mock.",
    description:
      "Turn real Fetch/XHR traffic into precise interception and API mocking rules.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#07101d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
