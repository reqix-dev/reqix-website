import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "rules");

export default function RulesPage() {
  return <ArticlePage locale="zh" id="rules" />;
}
