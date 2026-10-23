import { extensionLink } from "@shared/config";

export const navRoutes = [
  {
    href: "/en/blog/how-to-block-websites-on-chrome",
    label: "How to use",
  },
  {
    href: extensionLink,
    label: "Chrome extension",
    // The hero's "Get Chrome Extension" button covers it on phones, keeping the header on one row
    isSmHidden: true,
  },
];
