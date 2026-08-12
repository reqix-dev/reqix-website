import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "download");

export default function DownloadPage() {
  return <ArticlePage locale="zh" id="download" />;
}
