# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for JustBlock - a Chrome extension that blocks distracting websites. Built with Next.js 14 using static export for GitHub Pages hosting.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (outputs to `out/` directory, runs next-sitemap post-build)
- `npm run lint` - Run ESLint
- `npm run build-and-serve` - Build and serve the static export locally

## Architecture

- **Static Export**: Configured with `output: 'export'` in next.config.mjs for GitHub Pages deployment
- **Path Alias**: Use `@/*` to import from `src/*`
- **Styling**: Tailwind CSS with shadcn/ui components (Radix UI primitives)
- **Font**: Roboto loaded via next/font/google

### Key Directories

- `src/app/` - Next.js App Router pages
- `src/components/` - React components (includes `ui/` for shadcn components)
- `src/shared/` - Shared utilities and configuration
- `src/lib/` - Utility functions (cn helper, custom hooks)

### Configuration

Global config values (support email, extension link, pricing) are centralized in `src/shared/config.ts`.
