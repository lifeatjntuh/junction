---
title: Installation
description: Install @lifeatjntuh/junction with npm, import the theme, and render your first components.
---

# Installation

> **Status: 0.1.0, not published yet.** The package is set up to publish,
> but it has not been published to the npm registry. The name
> `@lifeatjntuh/junction` has not been checked against the registry —
> confirm it is free before the first publish. Until then, install from
> the repo (see below).

## Install

```bash
npm install @lifeatjntuh/junction
```

Peer dependencies (your app provides these): `react` ^19, `react-dom`
^19, `tailwindcss` ^4. The package bundles its other runtime dependencies
(Radix primitives, vaul, Solar icons, motion, cva/clsx/tailwind-merge), so
there is nothing else to install for the core components.

Optional: `blobmates` — only needed if you want the animated avatar in
`ProfileCard` / `BlobmateAvatar`. Without it, the avatar shows a pastel
placeholder instead.

## Use it

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

## Entry points

| Import | What it is |
| --- | --- |
| `@lifeatjntuh/junction` | Everything: all components, types, `cn`, tokens. Imports the theme CSS as a side effect. |
| `@lifeatjntuh/junction/theme` | The compiled theme stylesheet only (`dist/style.css`). |
| `@lifeatjntuh/junction/tokens` | Typed token constants only — no CSS side effect. |

## Before the first publish

Install from a local build instead:

```bash
git clone https://github.com/lifeatjntuh/junction.git
cd junction
npm install
npm run build:lib
npm pack   # then install the .tgz in your app
```
