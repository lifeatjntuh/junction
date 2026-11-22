---
title: Heading and Text
description: Headings in Fredoka or Bricolage Grotesque, and body text in Plus Jakarta Sans with tone and size options.
---

# Heading and Text

## Heading

```tsx
import { Heading } from "@lifeatjntuh/junction";

<Heading size="lg">Find your people</Heading>
<Heading size="display" font="grotesk">FEST SEASON</Heading>
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `font` | `round \| grotesk` | `round` | `round` is Fredoka (website headlines, sentence case); `grotesk` is Bricolage Grotesque, extra bold, condensed, all caps (social headlines, under six words) |
| `size` | `display \| xl \| lg \| md \| sm \| xs` | `lg` | |
| `as` | `h1 \| h2 \| h3 \| h4 \| p` | `h2` | Polymorphic tag |

## Text

```tsx
import { Text } from "@lifeatjntuh/junction";

<Text>Club events, campus photos and buddy apps.</Text>
<Text tone="muted" size="sm">Updated 2 hours ago</Text>
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `size` | `lg \| md \| sm \| xs` | `md` | |
| `tone` | `default \| muted \| inverse \| inverse-muted` | `default` | `inverse` tones are for dark (plum) surfaces |
| `as` | `p \| span \| div` | `p` | Polymorphic tag |
