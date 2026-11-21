---
title: App kit
description: AppShell, AppTopBar, AppBottomNav, AppState, EventCard, ProfileCard and ScheduleGrid for Event Tracker and Buddy apps.
---

# App kit

Parts for Event Tracker, Buddy apps and anything else shipped as an app.
Same colours and pills as the website, with Lexend, softer shadows and
tap feedback. Icons are Solar, linear, everywhere.

## AppShell, AppTopBar, AppBottomNav, AppMenuRow

Phone-width app column with a sticky header, bottom tab bar and settings
rows.

```tsx
import {
  AppShell,
  AppTopBar,
  AppBottomNav,
  AppMenuRow,
} from "@lifeatjntuh/junction";

<AppShell>
  <AppTopBar title="Events" />
  {/* screen content */}
  <AppBottomNav
    items={[
      { label: "Home", icon: "solar:home-linear", active: true },
      { label: "Events", icon: "solar:calendar-linear" },
    ]}
  />
</AppShell>;

<AppMenuRow label="Notifications" hint="On" />;
```

`AppIconButton` is the round icon button used in the top bar.

## AppState and Skeleton

Empty / error states and loading placeholders.

```tsx
import { AppState, Skeleton } from "@lifeatjntuh/junction";

<AppState tone="empty" title="No events yet" description="Check back after the fest list drops." />;
<Skeleton />;
```

`AppState` tone is `empty | error`.

## EventCard

```tsx
import { EventCard } from "@lifeatjntuh/junction";

<EventCard
  variant="stacked"
  title="Open Mic Night"
  category="Music"
  date="Sat, 22 Nov · 6 PM"
  venue="Main Auditorium"
  status="going"
/>;
```

`variant` is `stacked | row | photo`. Category and status render as
tags. Icons are Solar: `clock-circle`, `map-point` (linear),
`check-circle` (bold).

## ProfileCard and BlobmateAvatar

```tsx
import { ProfileCard } from "@lifeatjntuh/junction";

<ProfileCard
  variant="card"
  name="Ananya"
  role="Campus Creator"
  vibe={{ icon: "solar:cup-hot-bold", text: "Canteen run" }}
/>;
```

`variant` is `card | compact | hero`. The animated avatar
(`BlobmateAvatar`) needs the optional `blobmates` peer dependency —
without it, a pastel placeholder shows instead. Vibe icons are Solar by
name (`solar:eye-linear`, `solar:star-fall-bold`,
`solar:hand-shake-linear` / `solar:hand-shake-bold`).

## ScheduleGrid

Day timeline with overlap layout and a hover/tap quick view.

```tsx
import {
  ScheduleGrid,
  ScheduleEventBlock,
  EventQuickCard,
  DEFAULT_CATEGORIES,
  layoutScheduleEvents,
} from "@lifeatjntuh/junction";

const positioned = layoutScheduleEvents(events);
<ScheduleGrid events={positioned} />;
```

`layoutScheduleEvents` is a pure function (`ScheduleEvent` →
`PositionedEvent`) you can also use on its own. Icons are Solar:
`bookmark` (linear + bold), `users-group-rounded`, `check-circle`,
`close-circle` (bold), `arrow-right`, `map-point`, `clock-circle`
(linear), `calendar` (bold-duotone).
