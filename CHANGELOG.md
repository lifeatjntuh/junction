# Changelog

All notable changes to Junction. Format follows Keep a Changelog; versioning
follows semver (0.x is pre-release — breaking changes may land in minor
releases until 1.0).

## Unreleased

### Changed

- Switched the package manager from npm to pnpm, pinned to 11.28.13 in
  `packageManager` in `package.json` and `docs/package.json`. Install
  with `pnpm install`, run scripts with `pnpm run <script>`, and add
  the package with `pnpm add @lifeatjntuh/junction`.
- Regenerated the root `pnpm-lock.yaml` from the current dependencies
  (it still listed the removed shadcn / Base UI packages). The docs app
  now has its own `docs/pnpm-lock.yaml` and its `docs/package-lock.json`
  is removed.
- `.github/workflows/build.yml` now installs with
  `pnpm install --frozen-lockfile` and also runs `pnpm run build:demo`
  in CI, not just the library build.
- `.github/workflows/deploy-pages.yml` now deploys the Docusaurus docs
  in `docs/` to GitHub Pages (it previously deployed the old Vite demo
  with npm). Both workflow files must be added via the GitHub web UI —
  the GitHub App token cannot write `.github/workflows/` (403); see the
  README "Docs" section.
- Added `pnpm-workspace.yaml` (root) and `docs/pnpm-workspace.yaml`:
  pnpm 11 blocks dependency install scripts by default, so the root
  file allows `esbuild` (Vite needs its platform binary) and the docs
  file explicitly denies `core-js` (its postinstall only prints a
  banner). Without these, `pnpm install --frozen-lockfile` fails.

### Fixed

- Two build issues the strict pnpm layout exposed (both passed under
  npm's flat `node_modules`): `SheetTrigger` / `SheetClose` in
  `src/components/ui/sheet.tsx` now have explicit `typeof Drawer.*`
  annotations, so declaration emit no longer needs the undeclared
  transitive `@radix-ui/react-dialog` types (TS2742); and
  `@types/node` is now a dev dependency, since `vite.config.ts` uses
  `node:path` and `__dirname` (TS2307/TS2304).

## 0.1.0 — 2026-11-21

### Changed — full replacement with the website design system

- Replaced the whole Junction codebase with the design system from
  `lifeatjntuh-admin/website` (`src/styles/globals.css`,
  `src/components/pages/design-system/page.tsx`, `app-kit.tsx`,
  `src/components/ui/`, `src/components/app/`).
- Tokens are now Plum `#1f1235`, Cream `#fff7ee`, Hot pink `#f0208f`,
  Orange `#ff6a1f`, Violet `#7b5cff`, with pastels Pink `#ffc9e6`, Lime
  `#dcf58a`, Blue `#c9e0ff`, Yellow `#fff27a`, Lavender `#ddd2ff`, Peach
  `#ffd6bd`; fonts Fredoka, Bricolage Grotesque, Plus Jakarta Sans, Lexend;
  32px panel corners, fully round buttons/chips, soft plum shadows with a
  pink glow for main actions.
- Package renamed `junction-design-system` (private) →
  `@lifeatjntuh/junction`, publishable (not yet published; name not checked
  against the registry).
- Library build added: ESM + CJS, TypeScript declarations, exports map
  (`.`, `./theme`, `./tokens`), `sideEffects: ["*.css"]`, React/React DOM
  and Tailwind v4 as peers. Entry points and prop conventions are
  documented in the README ("API design").
- Added typed tokens API (`src/tokens.ts`, `@lifeatjntuh/junction/tokens`).
- Added app kit: `AppShell`, `AppTopBar`, `AppIconButton`, `AppBottomNav`,
  `AppMenuRow`, `AppState`, `Skeleton`, `EventCard`, `ProfileCard`,
  `ScheduleGrid` and friends.
- Demo site rewritten against the new components; it is not part of the
  published package.
- Docs site added in `docs/`, built with Docusaurus and deployed to GitHub
  Pages at https://lifeatjntuh.github.io/junction/ (see
  `.github/workflows/deploy-pages.yml`). Every docs page has a Copy as
  Markdown button and the site serves `llms.txt` / `llms-full.txt`.
- Icons are Solar, linear, throughout (`@solar-icons/react` and
  `@iconify/react` with `solar:` icons) — no Lucide or other icon set.

### Removed (breaking)

- shadcn/ui on Base UI, and all old components: `Accordion`, `Badge`,
  `Card`, `Dialog`, `Menu`, `Popover`, old `Skeleton`, `ToggleGroup`,
  `components.json`.
- Old oklch token set and old class names (`bg-card`,
  `text-muted-foreground`, …); old blue glow shadow.
- Inter / JetBrains Mono fonts and the `<iconify-icon>` web component.
- Tailwind typography plugin and `tw-animate-css` (and the `.prose`
  styles that depended on them).

### Notes

- `Logo` takes an optional `markSrc` prop — the website's logo mark is a
  local media asset and is not bundled in the package.
- `blobmates` is an optional peer dependency for the animated avatar in
  `ProfileCard`; without it, a pastel placeholder renders.
- The library build was not verified locally when this change was prepared;
  run `npm run build:lib` and regenerate the lockfile before merging.
