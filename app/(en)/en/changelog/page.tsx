import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "changelog");

export default function ChangelogPage() {
  return <ArticlePage locale="en" id="changelog" />;
}
