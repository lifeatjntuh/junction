# Junction

Junction is the shared design system powering the digital products and experiences built by
**LifeatJNTUH**. It's shadcn/ui, run on the [Base UI](https://base-ui.com) primitive library
instead of Radix, wired to one set of Tailwind v4 design tokens.

This repo is both:
1. A **living style guide** you can run and click through (`npm run dev`).
2. A **component source** another coding agent can lift files from, or extend with the shadcn
   CLI, to build real Junction-branded product UI.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (no `tailwind.config.js` —
  everything lives in `src/styles/junction-theme.css`)
- [Base UI](https://base-ui.com) (`@base-ui-components/react`) as the headless component runtime
- [shadcn CLI](https://ui.shadcn.com) configured for the Base UI variant (`components.json`)
- Icons via [Iconify](https://iconify.design)'s Solar set, loaded as the `<iconify-icon>` web
  component — **not** `lucide-react`. `lucide-react` stays a dependency only because the shadcn
  CLI requires an `iconLibrary` value; don't import from it when writing Junction UI.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
```

## Adding more components

Install anything else from shadcn's registry (Base UI variant) straight into this repo:

```bash
npx shadcn@latest add <component>
```

`components.json` already points the CLI at `"base": "base-ui"` and at
`src/styles/junction-theme.css` as the token file, so new components land pre-wired to Junction's
palette, radii, and shadows — style the generated file's `className`s against the existing tokens
(`bg-card`, `text-muted-foreground`, `border-border`, `shadow-glow`, `rounded-lg`, …) rather than
hardcoding colors.

## Project structure

```
src/
  styles/junction-theme.css   # token source of truth (colors, radius, shadow, font, all oklch)
  lib/utils.ts                 # cn() — clsx + tailwind-merge
  components/ui/               # the component library (see COMPONENT-MANIFEST.md)
  sections/Showcase.tsx        # the style-guide page content
  App.tsx                      # header, hero, showcase, custom-pattern notes
COMPONENT-MANIFEST.md          # source pattern → shadcn component → Base UI primitive mapping
components.json                # shadcn CLI config (base-ui, new-york, this repo's token file)
```

Read **COMPONENT-MANIFEST.md** first if you're an agent picking this repo up — it tells you which
component and which custom variant to reach for instead of re-deriving Junction's design from
scratch, and lists the handful of patterns (bottom nav, countdown hero, masonry grid, schedule
timeline, carousel, auth/404 screens) that are intentionally kept as plain Tailwind because no
shadcn/Base UI component fits them.

## Known risk areas

Base UI is under active development. Two primitives in this library are newer / less settled and
are flagged inline in their source files as well:

- **`components/ui/toast.tsx`** — Base UI's Toast primitive only shipped in July 2026. Verify
  `Provider` / `Viewport` / `useToastManager()` against the current docs before shipping.
- **`components/ui/accordion.tsx`** — uses `data-panel-open` for the open-state selector; confirm
  that attribute name against base-ui.com before relying on it.

Run `npm install` before trusting any of this against real type definitions — `@base-ui-components/react`
is pinned to `latest` in `package.json` deliberately, since the API is still moving.

No `package-lock.json` is committed for the same reason: pinning `latest` and locking it
would defeat the point. CI runs `npm install` rather than `npm ci` as a result. Once you're ready
to stop tracking Base UI's latest release automatically, run `npm install` locally, pin
`@base-ui-components/react` to a real version, commit the generated `package-lock.json`, and
switch both workflow files back to `npm ci` for reproducible installs.

## Deploy

**GitHub Pages** — `.github/workflows/deploy-pages.yml` builds and deploys `main` automatically
once Pages is enabled for the repo (Settings → Pages → Source: GitHub Actions). If the repo is
served from a subpath (`https://<user>.github.io/<repo>/`), add `base: "/<repo>/"` to
`vite.config.ts`.

**Vercel / Netlify** — this is a standard Vite app: build command `npm run build`, output
directory `dist`, no extra configuration needed.

**Plain CI** — `.github/workflows/build.yml` installs and builds on every push/PR and uploads
`dist` as a build artifact, independent of where you deploy.

## License

MIT — see `LICENSE`.
