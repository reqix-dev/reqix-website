import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "devtools");

export default function DevtoolsPage() {
  return <ArticlePage locale="zh" id="devtools" />;
}
