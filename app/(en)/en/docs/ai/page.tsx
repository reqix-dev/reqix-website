import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "ai");

export default function GuidePage() {
  return <ArticlePage locale="en" id="ai" />;
}
