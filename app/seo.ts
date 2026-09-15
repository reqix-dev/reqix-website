import type { Metadata, Viewport } from "next";
import {
  articlePaths,
  getArticle,
  localizePath,
  type ArticleId,
  type Locale,
} from "./site-content";

export const siteUrl = "https://reqix-dev.github.io/reqix-website";

const localeConfig = {
  zh: {
    htmlLang: "zh-CN",
    openGraphLocale: "zh_CN",
    alternateOpenGraphLocale: "en_US",
    homeTitle: "Reqix — 网络请求拦截与 API Mock",
    homeDescription:
      "在 Chrome 与 Edge 的 DevTools 中查看 Fetch/XHR，并快速创建 Mock、请求改写与重定向规则。",
    shareTitle: "Reqix — 拦截、改写与 Mock 网络请求",
    shareDescription:
      "从真实 Fetch/XHR 创建清晰、可控的请求拦截与 API Mock 规则。",
    imageAlt: "Reqix 网络请求拦截与 API Mock 工具",
  },
  en: {
    htmlLang: "en",
    openGraphLocale: "en_US",
    alternateOpenGraphLocale: "zh_CN",
    homeTitle: "Reqix — Network interception & API mocking",
    homeDescription:
      "Inspect Fetch/XHR in Chrome and Edge DevTools, then create precise mock, rewrite, redirect, and delay rules.",
    shareTitle: "Reqix — Intercept, rewrite, and mock network requests",
    shareDescription:
      "Turn real Fetch/XHR traffic into clear, controlled interception and API mocking rules.",
    imageAlt: "Reqix network interception and API mocking tool",
  },
} as const;

/** 将站内路由转换为带仓库子路径和尾斜杠的线上绝对地址。 */
export function absoluteUrl(path: string): string {
  if (path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path.replace(/\/$/, "")}/`;
}

/** 为同一内容的中英文路由生成 canonical 与 hreflang。 */
function createAlternates(path: string): Metadata["alternates"] {
  const zhUrl = absoluteUrl(path);
  const enUrl = absoluteUrl(localizePath("en", path));

  return {
    canonical: zhUrl,
    languages: {
      "zh-CN": zhUrl,
      en: enUrl,
      "x-default": zhUrl,
    },
  };
}

function localizedAlternates(locale: Locale, path: string): Metadata["alternates"] {
  const alternates = createAlternates(path);
  return {
    ...alternates,
    canonical: absoluteUrl(localizePath(locale, path)),
  };
}

function socialMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const config = localeConfig[locale];
  const image = {
    url: `${siteUrl}/og.png`,
    width: 1731,
    height: 909,
    alt: config.imageAlt,
  };

  return {
    openGraph: {
      type: "website",
      siteName: "Reqix",
      locale: config.openGraphLocale,
      alternateLocale: config.alternateOpenGraphLocale,
      title,
      description,
      url: absoluteUrl(localizePath(locale, path)),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

/** 根布局只提供语言级默认值；具体路由负责声明自己的 canonical。 */
export function createRootMetadata(locale: Locale): Metadata {
  const config = localeConfig[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    metadataBase: new URL(`${siteUrl}/`),
    applicationName: "Reqix",
    title: {
      default: config.homeTitle,
      template: "%s · Reqix",
    },
    description: config.homeDescription,
    icons: {
      icon: `${basePath}/reqix-icon.png`,
      shortcut: `${basePath}/reqix-icon.png`,
      apple: `${basePath}/reqix-icon.png`,
    },
  };
}

export function createHomeMetadata(locale: Locale): Metadata {
  const config = localeConfig[locale];
  return {
    title: { absolute: config.homeTitle },
    description: config.homeDescription,
    alternates: localizedAlternates(locale, "/"),
    ...socialMetadata(
      locale,
      "/",
      config.shareTitle,
      config.shareDescription,
    ),
  };
}

export function createArticleMetadata(
  locale: Locale,
  id: ArticleId,
): Metadata {
  const article = getArticle(locale, id);
  const path = articlePaths[id];
  const brandedTitle = article.title.startsWith("Reqix")
    ? article.title
    : `${article.title} · Reqix`;

  return {
    // 隐私政策等标题已经包含品牌名，避免生成 “Reqix … · Reqix” 的重复标题。
    title: { absolute: brandedTitle },
    description: article.description,
    alternates: localizedAlternates(locale, path),
    ...socialMetadata(
      locale,
      path,
      brandedTitle,
      article.description,
    ),
  };
}

export function htmlLang(locale: Locale): string {
  return localeConfig[locale].htmlLang;
}

export const siteViewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#171b19" },
  ],
};
