# Junction — LifeatJNTUH Design System

Junction is the shared design system powering the digital products and
experiences built by LifeatJNTUH. It is the design system from the
@lifeatjntuh website, packaged as an npm package:

- **Source:** `lifeatjntuh-admin/website` — `src/styles/globals.css` and
  `src/components/pages/design-system/page.tsx` (+ `app-kit.tsx`), and the
  website's `src/components/ui/` and `src/components/app/` components.
- **Live reference:** https://lifeatjntuh.web.app/design-system
- **Look:** Plum `#1f1235`, Cream `#fff7ee`, Hot pink `#f0208f`, Orange
  `#ff6a1f`, Violet `#7b5cff`; pastels Pink, Lime, Blue, Yellow, Lavender,
  Peach. Fredoka for website headlines, Bricolage Grotesque for social
  headlines, Plus Jakarta Sans for body, Lexend for app screens. 32px panel
  corners, fully round buttons and chips, soft shadows.

> **Status: 0.1.0, not published yet.** The package is set up to publish
> (`npm publish` from this repo after a build), but it has not been
> published to the npm registry. The name `@lifeatjntuh/junction` has not
> been checked against the registry — confirm it is free before the first
> publish.

## Install

```bash
npm install @lifeatjntuh/junction
```

Peer dependencies (your app provides these): `react` ^19, `react-dom` ^19,
`tailwindcss` ^4. The package bundles its other runtime dependencies
(Radix primitives, vaul, Solar icons, motion, cva/clsx/tailwind-merge), so
there is nothing else to install for the core components.

Optional: `blobmates` — only needed if you want the animated avatar in
`ProfileCard` / `BlobmateAvatar`. Without it, the avatar shows a pastel
placeholder instead.

## Usage

```tsx
import "@lifeatjntuh/junction/theme";
import { Button, Panel, Tag, Heading, Text } from "@lifeatjntuh/junction";

export function Hero() {
  return (
    <Panel color="pink">
      <Heading size="lg">Find your people</Heading>
      <Text tone="muted">Club events, campus photos and buddy apps.</Text>
      <Button>Join LifeOps</Button>
      <Tag tone="dark">Music</Tag>
    </Panel>
  );
}
```

Load the fonts in your HTML (the package does not bundle fonts):

```html
<link
  href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75,800&family=Fredoka:wght@600;700&family=Lexend:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Your Tailwind v4 setup must process the theme stylesheet — importing
`@lifeatjntuh/junction/theme` (or the main entry, which imports it as a
side effect) is enough in a Vite + `@tailwindcss/vite` app.

### App screens

```tsx
import { Button, Field, Input, Tabs, TabsList, TabsTrigger, ChipGroup } from "@lifeatjntuh/junction";
import { AppShell, AppTopBar, AppBottomNav, ScheduleGrid } from "@lifeatjntuh/junction";

<Button kit="app">Register</Button>
```

`kit="app"` on `Button` and `Tag` switches to the app look: Lexend,
tap-shrink instead of lift, pink glow on primary buttons.

### Toasts

```tsx
import { ToastProvider, useToast } from "@lifeatjntuh/junction";

function Screen() {
  const toast = useToast();
  return <Button onClick={() => toast({ title: "Saved!", tone: "success" })}>Save</Button>;
}

// Wrap the app (or the screen) in <ToastProvider> first.
```

### Tokens in code

```ts
import { tokens, colors, fonts } from "@lifeatjntuh/junction/tokens";

tokens.colors.hotPink; // "#f0208f"
tokens.fonts.app; // "Lexend"
```

The `tokens` subpath has no CSS side effect. The same values live as CSS
variables in the theme stylesheet — use the variables in stylesheets and
these constants in JS/TS (chart colours, canvas, `theme-color`).

## API design

### Entry points

| Import | What it is |
| --- | --- |
| `@lifeatjntuh/junction` | Everything: all components, types, `cn`, tokens. Imports the theme CSS as a side effect. |
| `@lifeatjntuh/junction/theme` | The compiled theme stylesheet only (`dist/style.css`). |
| `@lifeatjntuh/junction/tokens` | Typed token constants only — no CSS side effect. |

One main entry point, plus subpaths where they help. No internal files
leak into the public surface: `src/lib/utils.ts` exposes only `cn`,
`src/lib/schedule-layout.ts` exposes the layout helper and its types, and
component internals are not exported.

### Builds

- ESM (`dist/junction.js`) and CJS (`dist/junction.cjs`) from the same
  source, plus a separate `dist/tokens.js` / `dist/tokens.cjs`.
- TypeScript declarations (`.d.ts`) for every export, emitted by
  `tsc -p tsconfig.lib.json` into `dist/types/`.
- Tree-shakeable: named ESM exports, `sideEffects: ["*.css"]` (only the
  theme CSS has side effects), React/React DOM external as peers.
- `exports` map with `types` / `import` / `require` conditions, so
  bundlers and Node both resolve correctly.

### Prop conventions

Consistent across all components, following the website components:

- `variant` — the main visual variant (`Button`, `EventCard`, `TabsList`).
- `size` — `xs | sm | md | lg` (or the component's own scale), with a
  sensible default (`md` for buttons, `lg` for headings).
- `tone` — colour intent where the component is a label or chip
  (`Tag`, `Text`, `AppState`).
- `kit` — `"web" | "app"` on `Button` and `Tag`; `"app"` is the Event
  Tracker / Buddy app look.
- `as` — polymorphic tag where it fits (`Heading as="h1"`, `Text as="span"`).
- `asChild` — render as the child element on `Button` (Radix Slot).
- `disabled`, `className` — standard HTML behaviour everywhere; `className`
  always merges with `cn()` and wins over defaults.
- Every component's props type is exported (`ButtonProps`, `TagProps`,
  `EventCardProps`, …) and documented with TSDoc.
- `forwardRef` on components that wrap a DOM element (`Button`, `Input`,
  `Textarea`).

Stable, semantic props: no renames were made to the website components'
props in this port, except `Logo`, which gained an optional `markSrc`
(see below). One-off prop names were not introduced.

### Theme and tokens

Tokens are a first-class API: `src/tokens.ts` exports typed `colors`,
`pastels`, `fonts`, `radii`, `shadows` and the combined `tokens` object,
and the theme CSS defines the same values as variables. Consumers never
need to copy hex values.

### Accessibility

Components keep the website's behaviour: correct semantics (`button`,
`radiogroup`/`radio` in `ThemeToggle`, `role="group"` in `ChipGroup`,
`aria-pressed` on toggle chips and save/going buttons, `aria-live="polite"`
on toasts, `aria-invalid` + `aria-describedby` wired by `Field`), visible
focus rings, keyboard support from Radix primitives (`Tabs`, popovers in
the schedule), and reduced-motion handling in the theme.

## Components

Website parts (`src/components/ui/`): `Button`, `Panel`, `Tag`, `Heading`,
`Text`, `Field` (+ `Input`, `Textarea`), `Tabs`, `Sheet`, `Toast`
(`ToastProvider`, `useToast`), `ThemeToggle` (`useTheme`), `Logo`,
`Container`, `ChipGroup`, `Reveal`.

App kit (`src/components/app/`): `AppShell`, `AppTopBar`, `AppIconButton`,
`AppBottomNav`, `AppMenuRow`, `AppState`, `Skeleton`, `EventCard`,
`ProfileCard` (+ `BlobmateAvatar`), `ScheduleGrid`, `ScheduleEventBlock`,
`EventQuickCard`, `layoutScheduleEvents`, `DEFAULT_CATEGORIES`.

See `COMPONENT-MANIFEST.md` for the full list with props and status.

## Demo

The demo site in this repo (`src/App.tsx`, `src/sections/Showcase.tsx`)
is **not** part of the published package — it only shows the components
working. Run it with:

```bash
npm install
npm run dev        # demo site
npm run build:lib  # build the package into dist/
npm run build:demo # type-check + build the demo site
npm pack --dry-run # inspect what would be published (dist/ only)
```

> Build note: the library build was not verified in the environment that
> prepared this change (local clone/build was blocked by an execution-risk
> check, and the branch was created through the GitHub API). Run
> `npm run build:lib` and `npm run build:demo` locally before merging,
> and regenerate the lockfile (`pnpm install` / `npm install`) — the old
> `pnpm-lock.yaml` still lists the removed Base UI / shadcn dependencies.

## Breaking changes from the old Junction (0.1.0, pre-release)

This is a full replacement, not a migration — the old API is gone:

- **Removed:** shadcn/ui on Base UI. All old components are deleted:
  `Accordion`, `Badge`, `Card`, `Dialog`, `Menu`, `Popover`, `Skeleton`
  (old), `ToggleGroup`, and the shadcn `components.json` config.
  `Field` in the new system is the website's form-field wrapper, not the
  old one; `Sheet`, `Tabs` and `Toast` are the website's versions (vaul /
  Radix Tabs / context toasts), not the old Base UI ones.
- **Renamed package:** `junction-design-system` (private) →
  `@lifeatjntuh/junction` (publishable, `private` removed).
- **Tokens replaced:** the old oklch shadcn token set is gone. The new
  tokens are the website's Plum/Cream/Hot pink system; class names such as
  `bg-card`, `text-muted-foreground` and `shadow-glow` (old blue glow) no
  longer exist — use `bg-ploy-*` / `text-ploy-*` classes and the new
  `shadow-glow` (pink).
- **Fonts replaced:** Inter/Lexend/JetBrains Mono → Fredoka, Bricolage
  Grotesque, Plus Jakarta Sans, Lexend.
- **Icons:** `<iconify-icon>` / Iconify Solar web component is gone.
  Components use `@solar-icons/react` (bundled); `ProfileCard` uses
  `@iconify/react` for vibe icons.
- **Logo:** the website's `Logo` used a local media asset for its mark.
  The package version takes an optional `markSrc` prop instead; without
  it, only the wordmark renders.
- **`.prose` styles removed:** the Tailwind typography plugin (and
  `tw-animate-css`) are not dependencies of this package, so the `.prose`
  block from the website stylesheet was dropped.

## Versioning

Semver, starting at `0.1.0` (pre-release: breaking changes are expected
before 1.0). See `CHANGELOG.md`.
