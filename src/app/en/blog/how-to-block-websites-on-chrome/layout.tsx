import Script from "next/script";
import React, { ReactNode } from "react";
import { websiteUrl } from "@/shared/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JustBlock",
  keywords: "block websites chrome, block websites, chrome extension",
  description:
    "Learn how to block websites on Chrome. Block websites and get free time for what truly matters.",
};

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: websiteUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "How to block websites on Chrome",
              item: `${websiteUrl}/en/blog/how-to-block-websites-on-chrome`,
            },
          ],
        })}
      </Script>
      {props.children}
    </>
  );
}
