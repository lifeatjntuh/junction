---
title: AppShell
description: Phone-width app column with sticky top bar, bottom tab bar and settings rows — AppShell, AppTopBar, AppBottomNav, AppMenuRow and AppIconButton.
---

import { AppShellDemo, AppMenuRowDemo } from "@site/src/components/demos/app-shell-demo";

# AppShell

<AppShellDemo />

`AppShell` is the phone-width app column on the cream background:
optional top bar, content capped at max-w-3xl even on desktop, and
bottom padding that clears `AppBottomNav`. Use it as the page wrapper
for Event Tracker and Buddy app screens.

## AppTopBar

Sticky blurred header: optional leading slot (logo or back button),
Lexend title, optional trailing slot (icon buttons). Sits inside
`AppShell`'s phone-width column.

| Prop | Type | Notes |
| --- | --- | --- |
| `title` | `string` | Lexend title — required |
| `leading` | `ReactNode` | Leading slot |
| `trailing` | `ReactNode` | Trailing slot (usually `AppIconButton`s) |
| `className` | `string` | Merged with `cn()` |

## AppBottomNav

Fixed bottom tab bar: 3–5 items with a Solar icon and Lexend label; the
active item gets a pale pink pill behind its icon. Clears the iPhone
home bar (`pb-safe`).

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `items` | `AppNavItem[]` | — | Each item: `{ label, href, icon }` |
| `active` | `string` | — | href of the active item |
| `fixed` | `boolean` | `true` | `false` renders it in place (for previews) |
| `className` | `string` | — | Merged with `cn()` |

## AppMenuRow

<AppMenuRowDemo />

Full-width settings row: icon in a pastel circle, Lexend label,
optional hint, chevron on the right. Stack several inside a white
rounded card for Settings, Tickets or Notifications menus. Renders a
link when `href` is set, else a button.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `icon` | `ComponentType<{ className?: string }>` | — | Solar icon — required |
| `label` | `string` | — | Required |
| `hint` | `string` | — | Optional right-side hint |
| `href` | `string` | — | Renders a link when set |
| `onClick` | `() => void` | — | Button click handler |
| `tint` | `string` | `var(--panel-pink)` | Pastel circle background |

## AppIconButton

Round 40px icon-only button for app bars and cards; white with a soft
shadow, tap-shrink feedback. `label` is required for screen readers.

## Usage

```tsx
import {
  AppShell,
  AppTopBar,
  AppBottomNav,
  AppMenuRow,
  AppIconButton,
} from "@lifeatjntuh/junction";

<AppShell
  topBar={<AppTopBar title="Events" />}
  bottomNav={<AppBottomNav active="/events" items={[{ label: "Home", href: "/", icon: HomeIcon }]} />}
>
  {/* screen content */}
</AppShell>;
```
