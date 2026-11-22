---
title: Button
description: Pill-shaped button with primary, secondary, dark, ghost, link, soft, google and danger variants, in web and app kits.
---

import { ButtonDemo } from "@site/src/components/demos/button-demo";

# Button

<ButtonDemo />

Pill-shaped button with no borders. The main action on a screen is
usually `primary` (hot pink with a soft pink shadow).

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `variant` | `primary \| secondary \| dark \| ghost \| link \| soft \| google \| danger` | `primary` | `google` is the white sign-in button; `soft` is pale pink |
| `size` | `xs \| sm \| md \| lg` | `md` | `xs` h-8, `sm` h-10, `md` h-12, `lg` h-14 |
| `kit` | `web \| app` | `web` | `app` is the Event Tracker / Buddy app look: Lexend, tap-shrink instead of lift, pink glow on primary |
| `asChild` | `boolean` | `false` | Render as the child element (for example an `<a>`) instead of a `<button>` |
| `disabled` | `boolean` | — | Standard HTML behaviour |
| `className` | `string` | — | Merged with `cn()`; wins over defaults |

`ButtonProps` and `buttonVariants` are exported. The component forwards
its ref. Icons inside a button are sized automatically (`[&_svg]:size-5`).

## Usage

```tsx
import { Button } from "@lifeatjntuh/junction";

<Button>Join LifeOps</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="dark">View events</Button>
<Button variant="ghost">Skip</Button>
```

## With an icon

```tsx
import { Button } from "@lifeatjntuh/junction";
import { ArrowRightIcon } from "@solar-icons/react/linear/arrow-right";

<Button>
  See all events <ArrowRightIcon />
</Button>
```

Icons are Solar, linear — see [Icons](../icons.md).

## buttonVariants

`buttonVariants` is the `class-variance-authority` recipe behind
`Button` — use it when you need the same button classes on a different
element (for example a link styled as a button without `asChild`):

```tsx
import { buttonVariants } from "@lifeatjntuh/junction";

<a href="/events" className={buttonVariants({ variant: "secondary", size: "sm" })}>
  Browse events
</a>;
```
