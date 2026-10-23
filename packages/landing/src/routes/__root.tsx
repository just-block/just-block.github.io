import type { ReactNode } from "react";
import {
  createRootRoute,
  HeadContent,
  Scripts,
  useMatches,
} from "@tanstack/react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NotFoundPage } from "@/components/not-found-page";
import appCss from "../styles.css?url";

const googleAnalyticsId = "G-4HE30WL8HN";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#faf6eb" },
      { title: "JustBlock" },
      {
        name: "keywords",
        content: "block websites chrome, block websites, chrome extension",
      },
      {
        name: "description",
        content:
          "Chrome extension to block websites. Block websites and get free time for what truly matters",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/icon.png", type: "image/png" },
    ],
    scripts: import.meta.env.PROD
      ? [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
            async: true,
          },
          {
            children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`,
          },
        ]
      : [],
  }),
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  // GitHub Pages serves 404.html for unknown paths, so hydrating it would mismatch the router's not-found match
  const isStaticNotFoundPage = useMatches({
    select: (matches) => matches.some((match) => match.routeId === "/404"),
  });

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased relative">
        <Header />
        {children}
        <Footer />
        {!isStaticNotFoundPage && <Scripts />}
      </body>
    </html>
  );
}
