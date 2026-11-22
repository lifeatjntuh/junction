---
title: EventQuickCard and ScheduleEventBlock
description: The schedule's quick-view popup card and the positioned event block — EventQuickCard and ScheduleEventBlock.
---

import { EventQuickCardDemo } from "@site/src/components/demos/schedule-primitives-demo";

# EventQuickCard and ScheduleEventBlock

<EventQuickCardDemo />

`EventQuickCard` is the event preview card [ScheduleGrid](./schedule-grid.md)
shows in a popover on hover/tap — it also works on its own anywhere a
compact event preview fits: photo header with dark fade, category pill
and title over the image (calendar placeholder when no image), time and
place row, optional description, then Save (with count), Going (with
count) and Details actions. Fully controlled: `saved`/`going` flags and
`onToggleSave`/`onToggleGoing` callbacks; no data logic inside. Optional
`onClose` shows a close button.

## EventQuickCard props

| Prop | Type | Notes |
| --- | --- | --- |
| `event` | `ScheduleEvent` | Required |
| `category` | `ScheduleCategory` | `{ label, className }` |
| `saved` / `going` | `boolean` | Controlled flags |
| `onToggleSave` / `onToggleGoing` | `(id: string) => void` | |
| `detailsHref` | `string` | Link for the Details button; omit to hide it |
| `onClose` | `() => void` | Shows a close button |
| `showDescription` | `boolean` | Default `true` |
| `className` | `string` | Merged with `cn()` |

`ScheduleEventActions` is the shared action-props type
(`saved`, `going`, `onToggleSave`, `onToggleGoing`, `detailsHref`).

## ScheduleEventBlock

One event block on the grid, absolutely positioned by it. Adapts to its
width: full (title, place, time, counts), narrow (title only, counts),
very narrow (title turned sideways). Hovering with a mouse opens
`EventQuickCard` in a popover after a short delay; tap or click toggles
it on touch. Props: `event`, `category`, `style`, `height`,
`hoverDelay` (default `180`) plus the `ScheduleEventActions`.

## Usage

```tsx
import { EventQuickCard, DEFAULT_CATEGORIES } from "@lifeatjntuh/junction";

<EventQuickCard
  event={event}
  category={DEFAULT_CATEGORIES.music}
  saved={saved}
  going={going}
  onToggleSave={toggleSave}
  onToggleGoing={toggleGoing}
  detailsHref="/events/open-mic"
/>;
```
