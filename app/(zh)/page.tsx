import { createHomeMetadata } from "@/app/seo";
import { HomePage } from "@/app/site";

export const metadata = createHomeMetadata("zh");

export default function Home() {
  return <HomePage locale="zh" />;
}
