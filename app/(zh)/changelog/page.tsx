import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "changelog");

export default function ChangelogPage() {
  return <ArticlePage locale="zh" id="changelog" />;
}
