import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "config-format");

export default function GuidePage() {
  return <ArticlePage locale="en" id="config-format" />;
}
