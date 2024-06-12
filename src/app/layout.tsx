import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "JustBlock",
  description: "Block websites and get free time for what truly matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId="G-4HE30WL8HN" />
      )}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
