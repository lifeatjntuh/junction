# Junction docs — Fumadocs

The Junction docs site, built with [Fumadocs](https://fumadocs.dev) v16
on React Router 8 + Vite, scaffolded with `create-fumadocs-app`
(`react-router` template, pinned: `fumadocs-core`/`fumadocs-ui`
16.19.7, `fumadocs-mdx` 15.6.4).

All 44 docs pages: Brand guidelines first (Junction is the brand
design guidelines for LifeatJNTUH; the design system is one part of
it), Design System with a live demo on every component/primitive page,
Social Media Kit, App Design Kit, API reference — plus the footer link
index and `/docs/all-docs`. Live demos render the real components from
`@lifeatjntuh/junction`; `llms.txt` / `llms-full.txt` and per-page
Markdown are built in, and search indexes every page.

The theme is imported once in `app/root.tsx` and Fumadocs' own
variables are pointed at Junction tokens in `app/app.css`. Fumadocs UI
is Tailwind v4 and the Junction theme is Tailwind v4, so there is one
CSS system — no Infima, no preflight clash (the Docusaurus problem
this replaces).

## Run it

```bash
# from the repo root, build the library first (dist/ must exist):
pnpm install --frozen-lockfile
pnpm run build:lib

# then this app:
pnpm --dir docs-fumadocs install
pnpm --dir docs-fumadocs run dev      # dev server
pnpm --dir docs-fumadocs run build    # static prerendered build
pnpm --dir docs-fumadocs run start    # serve the build
```

## Deploy

GitHub Pages deploy is via `.github/workflows/deploy-pages-fumadocs.yml`
(added on the GitHub website — workflow files cannot be pushed through
the API; see the PR body). It builds the library, builds this app, and
uploads the static output. It replaces the Docusaurus deploy workflow
(`deploy-pages.yml`, which serves `docs/build`) once this is merged —
do not delete the Docusaurus workflow until the Fumadocs deploy is
verified live.

Deploy layout (why the workflow copies files): the prerender writes
pages under `build/client/junction/` (the router basename), while Vite
writes assets to `build/client/assets/` and `public/` files to
`build/client/`. GitHub Pages serves the uploaded directory at
`/junction/`, so the workflow copies `assets/`, `404.html`, `favicon.svg`
and `.nojekyll` into `build/client/junction/` and uploads that directory —
pages, assets, `llms.txt`, the search index (`api/search`) and the
per-page Markdown (`llms.mdx/...`) then all resolve under `/junction/`.
Search is static: the `/api/search` route exports the index at build
time (`staticGET`), so it runs in the browser with no server.

## Content

Pages live in `content/docs/` as MDX. Sidebar order comes from the
`meta.json` files (mirrors the old Docusaurus `sidebars.ts`; URLs are
unchanged — `/docs/installation`, `/docs/components/button`, etc.).
Live demos live in `app/components/demos/` and are registered globally
in `app/components/mdx.tsx`, so MDX pages use `<ButtonDemo />` with no
per-page import. The footer link index is `app/components/site-footer.tsx`.
