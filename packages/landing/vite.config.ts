import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { websiteUrl } from "../api/shared/config.ts";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: { port: 11052 },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        autoSubfolderIndex: false,
        failOnError: true,
      },
      pages: [
        { path: "/", sitemap: { changefreq: "daily", priority: 0.7 } },
        {
          path: "/en/upgrade",
          sitemap: { changefreq: "daily", priority: 0.7 },
        },
        {
          path: "/en/blog/how-to-block-websites-on-chrome",
          sitemap: { changefreq: "daily", priority: 0.7 },
        },
        { path: "/en/welcome", sitemap: { exclude: true } },
        { path: "/404", sitemap: { exclude: true } },
        // Static HTML from public/, listed only for the sitemap
        {
          path: "/privacy-policy.html",
          prerender: { enabled: false },
          sitemap: { changefreq: "monthly", priority: 0.7 },
        },
        {
          path: "/terms-of-service.html",
          prerender: { enabled: false },
          sitemap: { changefreq: "monthly", priority: 0.7 },
        },
      ],
      sitemap: {
        enabled: true,
        host: websiteUrl,
      },
    }),
    viteReact(),
  ],
});
