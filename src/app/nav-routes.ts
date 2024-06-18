import { extensionLink } from "@/lib/config";

export const navRoutes = [
  {
    href: "/",
    isSmHidden: true,
    label: "Main",
  },
  {
    href: extensionLink,
    label: "Chrome extension",
  },
];
