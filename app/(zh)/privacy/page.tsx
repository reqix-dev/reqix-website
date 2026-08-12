import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "privacy");

export default function PrivacyPage() {
  return <ArticlePage locale="zh" id="privacy" />;
}
