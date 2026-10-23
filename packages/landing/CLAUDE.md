# CLAUDE.md

Landing page for JustBlock Chrome extension. TanStack Start (prerendered SSG), Vite, Tailwind v4 (CSS-first config in `src/styles.css`, no tailwind.config) + shadcn/ui.

## Commands

- `pnpm run dev` - Dev server (port 11052)
- `pnpm run build` - Production build (prerendered static HTML + `sitemap.xml` in `dist/client/`)
- `pnpm run preview` - Serve the production build

## Notes

- Prerendered static site (GitHub Pages) — no server-side features. Pages are file routes in `src/routes/`; list new pages in `pages` in `vite.config.ts` for prerender + sitemap
- Path alias: `@/*` → `src/*`
- Shared config (pricing, links, etc.) is in `packages/api/shared` — import from `"@shared/config"`
