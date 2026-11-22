# Junction docs — Fumadocs prototype

PROTOTYPE ONLY. Four pages: home, Brand colours, Button (live demo),
API reference. Built with [Fumadocs](https://fumadocs.dev) v16 on
React Router 8 + Vite, scaffolded with `create-fumadocs-app`
(`react-router` template, pinned: `fumadocs-core`/`fumadocs-ui`
16.19.7, `fumadocs-mdx` 15.6.4).

The live docs site is still Docusaurus in `docs/`. This folder exists
to answer one question: does Fumadocs solve the preflight clash
structurally? It should — Fumadocs UI is Tailwind v4 and the Junction
theme is Tailwind v4, so there is one CSS system, no Infima, no
specificity war. The theme is imported once in `app/root.tsx` and
Fumadocs' own variables are pointed at Junction tokens in `app/app.css`.

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

## What is NOT in the prototype

The other 40 docs pages, search (the route exists but only indexes
these 4 pages), the footer link index / all-docs page, and any deploy
workflow. Nothing here is live on GitHub Pages — the Docusaurus site
keeps serving until the user decides on a full migration.
