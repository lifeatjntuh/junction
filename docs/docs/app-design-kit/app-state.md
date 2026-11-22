---
title: AppState and Skeleton
description: Empty / error states and loading placeholders for app lists — AppState and Skeleton.
---

import { AppStateDemo, SkeletonDemo } from "@site/src/components/demos/app-state-demo";

# AppState and Skeleton

<AppStateDemo />

`AppState` is the empty or error message for app lists. `tone="empty"`
is a pastel lavender circle; `tone="error"` is a pale pink circle. It
takes an optional 3D object image or icon, a Lexend title, one line of
help and an optional action (usually a `Button kit="app"`).

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `title` | `string` | — | Required |
| `body` | `string` | — | One line of help |
| `icon` | `ComponentType<{ className?: string }>` | — | Solar icon in the circle |
| `image` | `string` | — | 3D object image URL (shown instead of the icon) |
| `action` | `ReactNode` | — | Usually a Button |
| `tone` | `empty \| error` | `empty` | `error` adds `role="alert"` |
| `className` | `string` | — | Merged with `cn()` |

## Skeleton

<SkeletonDemo />

Loading placeholder: a soft pulsing cream block. Size it with
`className` (`h-*`, `w-*`, `rounded-*`) to match the content it stands
in for.

## Usage

```tsx
import { AppState, Skeleton, Button } from "@lifeatjntuh/junction";

<AppState
  tone="empty"
  title="No events yet"
  body="Check back after the fest list drops."
  action={<Button kit="app" size="sm">Browse all</Button>}
/>;

<Skeleton className="h-24 w-full" />;
```
