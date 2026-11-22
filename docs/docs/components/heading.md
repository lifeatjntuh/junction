---
title: Heading
description: Brand headings in Fredoka (round) or Bricolage Grotesque (grotesk), from display size down to xs.
---

import { HeadingDemo } from "@site/src/components/demos/heading-text-demo";

# Heading

<HeadingDemo />

Brand heading. `font="round"` (default) is the bubbly Fredoka used
across the website; `font="grotesk"` is condensed extra-bold uppercase
Bricolage Grotesque for social media and loud one-off moments — keep
grotesk headlines under six words.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `font` | `round \| grotesk` | `round` | `round` is Fredoka (website headlines, sentence case); `grotesk` is Bricolage Grotesque, extra bold, condensed, all caps |
| `size` | `display \| xl \| lg \| md \| sm \| xs` | `lg` | `display` is the hero size |
| `as` | `h1 \| h2 \| h3 \| h4 \| p` | `h2` | Polymorphic tag — size and tag are independent |

## Usage

```tsx
import { Heading } from "@lifeatjntuh/junction";

<Heading size="lg">Find your people</Heading>
<Heading size="display" font="grotesk">FEST SEASON</Heading>
```

## headingVariants

`headingVariants` is the `class-variance-authority` recipe behind
`Heading` — use it when you need the same heading classes on an element
that isn't a `Heading`:

```tsx
import { headingVariants } from "@lifeatjntuh/junction";

<p className={headingVariants({ size: "md", font: "grotesk" })}>OPEN MIC NIGHT</p>;
```
