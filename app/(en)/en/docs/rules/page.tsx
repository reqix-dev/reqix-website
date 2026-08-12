import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "rules");

export default function RulesPage() {
  return <ArticlePage locale="en" id="rules" />;
}
