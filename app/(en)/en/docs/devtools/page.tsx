import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "devtools");

export default function DevtoolsPage() {
  return <ArticlePage locale="en" id="devtools" />;
}
