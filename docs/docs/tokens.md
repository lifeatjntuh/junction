---
title: Tokens
description: Junction design tokens — core colours, pastels, fonts, radii and shadows, as CSS variables and typed TypeScript constants.
---

import { TokensDemo } from "@site/src/components/demos/tokens-demo";

# Tokens

<TokensDemo />

Tokens are a first-class API: the same values live as CSS variables in
the theme stylesheet and as typed constants in `src/tokens.ts`
(`@lifeatjntuh/junction/tokens`). Consumers never need to copy hex values.

```ts
import { tokens, colors, fonts } from "@lifeatjntuh/junction/tokens";

tokens.colors.hotPink; // "#f0208f"
tokens.fonts.app; // "Lexend"
```

## Core colours

| Token | Value | Use |
| --- | --- | --- |
| Plum | `#1f1235` | Text, dark panels |
| Cream | `#fff7ee` | Page background |
| Hot pink | `#f0208f` | Main buttons, highlights |
| Orange | `#ff6a1f` | Ticker, second accent |
| Violet | `#7b5cff` | Small accents only |

## Pastels

One pastel per panel or post — never two pastels fighting on one surface.

| Token | Value |
| --- | --- |
| Pink | `#ffc9e6` |
| Lime | `#dcf58a` |
| Blue | `#c9e0ff` |
| Yellow | `#fff27a` |
| Lavender | `#ddd2ff` |
| Peach | `#ffd6bd` |

## Fonts

| Token | Typeface | Use |
| --- | --- | --- |
| Heading | Fredoka 600–700 | Website headlines, sentence case |
| Social | Bricolage Grotesque, extra bold, condensed | Social headlines, all caps, under six words |
| Body | Plus Jakarta Sans 400 | Body text; 600–700 for buttons, chips, labels |
| App | Lexend | App screens (Event Tracker, Buddy apps) |

## Shapes

- **Panels and cards:** 32px corners (`radii.card: 2rem`).
- **Photos inside cards:** 16–24px corners (`radii.photo: 1.25rem`).
- **Buttons and chips:** fully round (`radii.pill: 999px`).
- **App cards:** 1rem (`radii.app`).
- No thick outlines, no hard offset shadows — soft shadows only.

## Shadows

Soft, wide shadows (`shadows.appXs`–`appXl`), plus a pink `glow` and
`action` shadow reserved for the one main button on a screen.

## Rules

- One pastel or one solid colour per post; hot pink is the highlight.
- Real campus photos always carry the photographer's credit.
- One 3D object per post at most.
- Sign every post with the @lifeatjntuh pill.
- Don't put text in the top 250px or bottom 300px of a story.
- Don't name admins — LifeOps credit goes to codenames.
