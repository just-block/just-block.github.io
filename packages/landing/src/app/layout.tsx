import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "JustBlock",
  keywords: "block websites chrome, block websites, chrome extension",
  description:
    "Chrome extension to block websites. Block websites and get free time for what truly matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-4HE30WL8HN" />
      )}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
