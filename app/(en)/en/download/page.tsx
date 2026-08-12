import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "download");

export default function DownloadPage() {
  return <ArticlePage locale="en" id="download" />;
}
