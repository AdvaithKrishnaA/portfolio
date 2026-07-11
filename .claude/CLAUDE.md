# CLAUDE

Project-specific guidance for AI coding agents.

## Stack
- React 19 + Vite 8 (TypeScript), deployed as a static site to Cloudflare Workers
  via `@cloudflare/vite-plugin` (static assets only — no worker script).
- Tailwind CSS v4 (`@tailwindcss/vite`) + shadcn/ui (Rhea preset, `base` library).
- `motion` for animation. Default font: Hanken Grotesk (Google Fonts).
- Node 24 (nvm). Run commands with Node 24 selected.

## Conventions
- UI primitives live in `src/components/ui` (shadcn). Add more with
  `npx shadcn@latest add <name>`. Path alias `@/` → `src/`.
- Dark mode via a class-based `ThemeProvider` (`.dark` on the root element);
  see `src/components/theme-provider.tsx`.
