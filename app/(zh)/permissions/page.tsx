import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("zh", "permissions");

export default function PermissionsPage() {
  return <ArticlePage locale="zh" id="permissions" />;
}
