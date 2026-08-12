import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "page-scripts");

export default function PageScriptsPage() {
  return <ArticlePage locale="zh" id="page-scripts" />;
}
