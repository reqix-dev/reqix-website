import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "page-scripts");

export default function PageScriptsPage() {
  return <ArticlePage locale="en" id="page-scripts" />;
}
