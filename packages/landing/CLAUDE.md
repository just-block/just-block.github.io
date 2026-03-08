# CLAUDE.md

Landing page for JustBlock Chrome extension. Next.js 14, static export, Tailwind + shadcn/ui.

## Commands

- `npm run dev` - Dev server (port 11052)
- `npm run build` - Production build (static export to `out/`, runs next-sitemap post-build)
- `npm run lint` - ESLint

## Notes

- Static export (`output: 'export'`) — no server-side features
- Path alias: `@/*` → `src/*`
- Shared config (pricing, links, etc.) is in `packages/shared` — import from `"shared"` (npm workspaces)
