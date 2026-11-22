# Junction docs

Documentation site for `@lifeatjntuh/junction`, built with
[Docusaurus](https://docusaurus.io/) (React + MDX) and deployed to GitHub
Pages at https://lifeatjntuh.github.io/junction/ by
`.github/workflows/deploy-pages.yml`.

## Run it locally

```bash
cd docs
pnpm install
pnpm start   # http://localhost:3000/junction/
pnpm run build  # static site in docs/build
```

## LLM-friendly docs

Two published plugins (no custom copy code):

- [`docusaurus-plugin-llms`](https://www.npmjs.com/package/docusaurus-plugin-llms)
  — writes `llms.txt`, `llms-full.txt` and one `.md` copy of every docs
  page into the build output at build time.
- [`docusaurus-plugin-copy-page-button`](https://www.npmjs.com/package/docusaurus-plugin-copy-page-button)
  — adds a **Copy page as Markdown** button to every docs page, plus
  **Open in ChatGPT / Claude / Perplexity / Gemini** actions that point at
  the `.md` copies the llms plugin writes (`markdownUrl: true`).

After a build, check:

- `docs/build/llms.txt` — index of every page
- `docs/build/llms-full.txt` — the whole docs set in one file
- `docs/build/<page>.md` — one Markdown copy per page

## Editing docs

Docs live in `docs/docs/` as Markdown/MDX. The sidebar is defined in
`docs/sidebars.ts`. Keep each page's frontmatter `description` filled in —
it is what `llms.txt` shows for that page.

## Theming

The site uses Junction's own look (Plum `#1f1235`, Cream `#fff7ee`, Hot
pink `#f0208f`; Fredoka headlines, Plus Jakarta Sans body) in
`docs/src/css/custom.css`.
