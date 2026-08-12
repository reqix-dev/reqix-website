import { createArticleMetadata } from "@/app/seo";
import { ArticlePage } from "@/app/site";

export const metadata = createArticleMetadata("en", "permissions");

export default function PermissionsPage() {
  return <ArticlePage locale="en" id="permissions" />;
}
