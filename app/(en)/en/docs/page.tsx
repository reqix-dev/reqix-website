import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "getting-started");

export default function GettingStartedPage() {
  return <ArticlePage locale="en" id="getting-started" />;
}
