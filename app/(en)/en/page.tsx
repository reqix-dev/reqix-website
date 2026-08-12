import { createHomeMetadata } from "@/app/seo";
import { HomePage } from "@/app/site";

export const metadata = createHomeMetadata("en");

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
