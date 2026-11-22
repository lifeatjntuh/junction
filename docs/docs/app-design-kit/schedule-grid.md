---
title: ScheduleGrid
description: Day schedule for Event Tracker style apps — hour rail, overlap layout, quick-view popups, now line and empty state.
---

import { ScheduleDemo } from "@site/src/components/demos/schedule-demo";

# ScheduleGrid

<ScheduleDemo />

Day schedule for Event Tracker style apps: scrollable hour rail with
faint hour lines, events placed by start/end time, overlapping events
side by side ([layoutScheduleEvents](../components/primitives/layout-schedule-events.md)),
pastel colours per category, hover/tap quick-view popups, optional now
line and empty state. Pure UI: pass events, categories, saved/going ids
and callbacks; filtering, days and data live in the app.

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `events` | `ScheduleEvent[]` | — | Each event: `id`, `title`, `location`, `start`, `end`, optional `category`, `description`, `imageUrl`, `venueDetail`, `goingCount`, `savedCount` |
| `categories` | `Record<string, ScheduleCategory>` | `DEFAULT_CATEGORIES` | Category key → `{ label, className }`; unknown keys use `default` |
| `savedIds` | `string[]` | `[]` | |
| `goingIds` | `string[]` | `[]` | |
| `getDetailsHref` | `(event: ScheduleEvent) => string \| undefined` | — | Builds the Details link; omit to hide Details |
| `onToggleSave` | `(id: string) => void` | — | |
| `onToggleGoing` | `(id: string) => void` | — | |
| `startHour` | `number` | `0` | |
| `endHour` | `number` | `24` | |
| `hourHeight` | `number` | `80` | Pixels per hour |
| `scrollToHour` | `number` | `8` | Hour to scroll to on mount |
| `now` | `Date` | — | Shows a pink "now" line when inside the grid |
| `empty` | `ReactNode` | — | Shown instead of the grid when there are no events |
| `className` | `string` | — | Classes for the scroll area — set its height here (default `h-[70vh]`) |

`DEFAULT_CATEGORIES` maps `cultural`, `music`, `technical`,
`workshops`, `sports`, `food` (plus `default`) to pastel block colours.
Icons are Solar: `bookmark` (linear + bold), `users-group-rounded`,
`check-circle`, `close-circle` (bold), `arrow-right`, `map-point`,
`clock-circle` (linear), `calendar` (bold-duotone).

## Usage

```tsx
import { ScheduleGrid, layoutScheduleEvents } from "@lifeatjntuh/junction";

const positioned = layoutScheduleEvents(events);
<ScheduleGrid events={events} startHour={9} endHour={18} />;
```
