import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "getting-started");

export default function GettingStartedPage() {
  return <ArticlePage locale="zh" id="getting-started" />;
}
