---
title: Logo
description: The @lifeatjntuh wordmark in Fredoka with a pink @, in light and dark tones, with an optional mark image.
---

import { LogoDemo } from "@site/src/components/demos/logo-demo";

# Logo

<LogoDemo />

The @lifeatjntuh logo: the pink `@` ring mark plus the "lifeatjntuh"
wordmark in Fredoka with a pink `@`.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `tone` | `light \| dark` | `light` | `light` is plum text for cream/pastel backgrounds; `dark` is white text for plum surfaces and photos |
| `markSrc` | `string` | — | URL of the logo mark image. The website keeps its mark as a local media asset, so the package does not bundle one — pass your own mark URL. When omitted, only the wordmark renders, so the logo never shows a broken image |
| `className` | `string` | — | Merged with `cn()` |

## Usage

```tsx
import { Logo } from "@lifeatjntuh/junction";

<Logo />
<Logo tone="dark" markSrc="/mark.png" />
```
