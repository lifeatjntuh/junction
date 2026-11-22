---
title: Icons
description: Junction uses Solar icons (linear) everywhere, via @solar-icons/react and @iconify/react. No Lucide, no other icon set.
---

# Icons

Junction uses **Solar icons, linear**, everywhere — that is the rule in
the website design system, and this package keeps it. There is no Lucide
and no other icon set in the package, the docs or the demo.

Two packages provide the icons, both bundled with Junction:

| Package | Use it for |
| --- | --- |
| `@solar-icons/react` | Icons in components: `import { SunIcon } from "@solar-icons/react/linear/sun"` |
| `@iconify/react` | Icons by name: `<Icon icon="solar:eye-linear" />` |

## Using an icon

Solar icons come in styles — **linear** is the default for Junction.
Bold and bold-duotone exist for a few places where the website design
system uses them (for example a filled bookmark, or a calendar icon).

```tsx
import { SunIcon } from "@solar-icons/react/linear/sun";
import { MoonIcon } from "@solar-icons/react/linear/moon";
import { BookmarkIcon } from "@solar-icons/react/linear/bookmark";
import { BookmarkIcon as BookmarkFilledIcon } from "@solar-icons/react/bold/bookmark";

<SunIcon />
<BookmarkFilledIcon /> // saved state
```

Or by name, with Iconify (handy for data-driven icons such as a vibe
badge on a profile card):

```tsx
import { Icon } from "@iconify/react";

<Icon icon="solar:eye-linear" />
<Icon icon="solar:star-fall-bold" />
<Icon icon="solar:hand-shake-linear" />
```

## Icon names

Iconify names follow the pattern `solar:<name>-<style>`:

- `solar:eye-linear`, `solar:hand-shake-linear` — linear (default)
- `solar:star-fall-bold`, `solar:hand-shake-bold` — bold
- `solar:calendar-bold-duotone` — bold-duotone

## Where icons are used in the package

| Component | Icons |
| --- | --- |
| Toast | `check-circle`, `danger-triangle`, `info-circle` (linear) |
| ThemeToggle | `sun`, `moon`, `monitor` (linear) |
| EventCard | `clock-circle`, `map-point` (linear), `check-circle` (bold) |
| AppShell | `alt-arrow-right`, `users-group-rounded` (linear) |
| ProfileCard | `solar:eye-linear`, `solar:star-fall-bold`, `solar:hand-shake-linear/bold` |
| Schedule | `bookmark` (linear + bold), `users-group-rounded`, `check-circle`, `close-circle` (bold), `arrow-right`, `map-point`, `clock-circle` (linear), `calendar` (bold-duotone) |

## Rules

- Use **linear** Solar icons unless the website design system already
  uses bold/bold-duotone for that exact icon.
- Do not introduce Lucide or another icon set — if a new icon is needed,
  find its Solar equivalent first.
- Icons inside buttons and chips are sized by the component (`[&_svg]:size-5`
  on Button) — don't set sizes by hand unless the design needs it.
