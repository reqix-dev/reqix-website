import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "config-format");

export default function GuidePage() {
  return <ArticlePage locale="zh" id="config-format" />;
}
