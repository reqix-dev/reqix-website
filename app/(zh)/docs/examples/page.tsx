import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "examples");

export default function GuidePage() {
  return <ArticlePage locale="zh" id="examples" />;
}
