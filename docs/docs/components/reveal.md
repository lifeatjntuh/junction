---
title: Reveal
description: Scroll fade-and-rise animation wrapper with an optional delay.
---

# Reveal

Scroll fade-and-rise animation wrapper (motion). Wrap content that
should animate in as the user scrolls to it.

```tsx
import { Reveal } from "@lifeatjntuh/junction";

<Reveal>
  <Panel color="lime">…</Panel>
</Reveal>;

<Reveal delay={0.15}>…</Reveal>;
```

| Prop | Type | Notes |
| --- | --- | --- |
| `delay` | `number` | Animation delay in seconds |
| `children` | `ReactNode` | Content to reveal |

Reduced-motion preferences are respected by the theme.
