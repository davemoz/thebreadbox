# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev        # Start Next.js dev server (localhost:3000)
pnpm build      # Production build via Next.js
pnpm start      # Run production build locally via Next.js
pnpm preview    # Build for Cloudflare + run via Wrangler dev
pnpm deploy     # Build for Cloudflare + deploy via Wrangler
pnpm lint       # ESLint
pnpm typecheck  # TypeScript type check (tsc --noEmit)
```

Dev server runs at <http://localhost:3000>. There are no tests configured yet.

## Architecture

**The Bread Box** is a recipe management app built on:

- **Next.js 16 App Router** deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`
- **Supabase Auth** for authentication (email/password) via `@supabase/ssr`
- **Supabase** for the data layer (auth is wired up; recipe data is currently hardcoded)

### Request flow

- **Dev**: `next dev` handles all requests directly.
- **Production**: OpenNext compiles the Next.js build into a Cloudflare Worker (`wrangler.toml` points to `.open-next/worker.js`). Static assets are served from the ASSETS binding.

### Auth model

- `middleware.ts` runs on every non-static request and calls `supabase.auth.getUser()` to refresh the session cookie. Next.js 16 deprecates this filename in favour of `proxy.ts` — rename when convenient.
- `app/lib/supabase.server.ts` — creates a server-side Supabase client backed by `next/headers` cookies; use this in Server Components and Server Actions.
- `app/actions/auth.ts` — Server Actions for `loginAction`, `signupAction`, and `signoutAction`.

### Routing conventions

Uses Next.js App Router file-system routing under `app/`:

- `app/page.tsx` — homepage
- `app/account/login/page.tsx` — login page
- `app/account/signup/page.tsx` — signup page
- `app/recipes/page.tsx` — recipe list
- `app/recipes/[slug]/page.tsx` — individual recipe

### Styling

CSS files live in `app/styles/` (reset, Homepage, RecipesPage, Account) and colocated with components (e.g. `app/components/Sidebar.css`). They are imported directly in page and component files — no CSS-in-JS or Tailwind.

### Path aliases

`@/*` maps to `app/*` (configured in `tsconfig.json`).

### Data layer

`app/data/index.ts` holds shared TypeScript types (currently just `RecipeRecord`). Supabase auth is fully wired up; recipe data in routes is currently hardcoded placeholder content.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key |

- **Local dev**: set in `.env.local` (not committed; `.dev.vars` is Wrangler-only and not read by `next dev`).
- **Cloudflare production**: set via `wrangler secret put <NAME>` or in `wrangler.toml` `[vars]`.
