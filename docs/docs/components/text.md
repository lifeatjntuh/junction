---
title: Text
description: Body text in Plus Jakarta Sans, in lg/md/sm/xs sizes and default, muted and inverse tones.
---

import { TextDemo } from "@site/src/components/demos/heading-text-demo";

# Text

<TextDemo />

Body text in Plus Jakarta Sans.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `size` | `lg \| md \| sm \| xs` | `md` | |
| `tone` | `default \| muted \| inverse \| inverse-muted` | `default` | `inverse` tones are for dark (plum) surfaces |
| `as` | `p \| span \| div` | `p` | Polymorphic tag |

## Usage

```tsx
import { Text } from "@lifeatjntuh/junction";

<Text>Club events, campus photos and buddy apps.</Text>
<Text tone="muted" size="sm">Updated 2 hours ago</Text>
```
