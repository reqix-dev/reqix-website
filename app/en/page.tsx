import type { Metadata } from "next";
import { HomePage } from "../site";

export const metadata: Metadata = {
  title: "Reqix — Network interception & API mocking",
  description:
    "Capture Fetch/XHR in Chrome and Edge DevTools, then create precise mock, rewrite, redirect, and delay rules.",
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
