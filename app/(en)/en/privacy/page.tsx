import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "privacy");

export default function PrivacyPage() {
  return <ArticlePage locale="en" id="privacy" />;
}
