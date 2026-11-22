---
title: App Design Kit
description: The app parts of Junction — AppShell, AppState, EventCard, ProfileCard and ScheduleGrid — plus the app-kit guidance: Lexend, softer shadows, tap feedback, Solar icons, phone-width layouts.
---

# App Design Kit

Parts for Event Tracker, Buddy apps and anything else shipped as an
app. Same colours and pills as the website, with Lexend, softer
shadows and tap feedback. Icons are Solar (linear) everywhere.

## The app look

- **Type:** Lexend for app screens — headings, buttons, tabs, labels.
  Body copy inside app screens is still Plus Jakarta Sans.
- **Shadows:** soft, plum-tinted app shadows (`shadows.appXs`–`appXl`),
  plus a pink `glow` / `action` shadow reserved for the one main button.
- **Feedback:** tap-shrink (`press-effect`) instead of the website's
  lift on hover; buttons and chips stay fully round.
- **Layout:** phone-width column (max 3xl) even on desktop, with a
  sticky top bar and a fixed bottom tab bar that clears the iPhone home
  bar (`pb-safe`).
- **Icons:** Solar, linear, everywhere.

## The parts

| Component | What it is |
| --- | --- |
| [AppShell](./app-shell.md) | Phone-width app column, top bar, bottom tab bar, settings rows |
| [AppState and Skeleton](./app-state.md) | Empty / error states and loading placeholders |
| [EventCard](./event-card.md) | Responsive card for events, stalls and listings |
| [ProfileCard](./profile-card.md) | Community profile card with blobmate avatar |
| [BlobmateAvatar](./blobmate-avatar.md) | Animated avatar (optional `blobmates` peer) |
| [ScheduleGrid](./schedule-grid.md) | Day timeline with overlap layout and quick-view popups |
| [EventQuickCard](./schedule-primitives.md) | Compact event preview used by the schedule popups |

## Usage

```tsx
import { AppShell, AppTopBar, AppBottomNav, EventCard } from "@lifeatjntuh/junction";

<AppShell topBar={<AppTopBar title="Events" />}>
  <EventCard title="Open Mic Night" place="Main Auditorium" time="Sat, 6 PM" />
</AppShell>;
```
