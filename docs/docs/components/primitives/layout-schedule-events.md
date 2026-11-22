---
title: layoutScheduleEvents
description: Pure function that places events on a vertical day timeline — overlapping events share the width in side-by-side columns.
---

import { LayoutDemo } from "@site/src/components/demos/layout-demo";

# layoutScheduleEvents

<LayoutDemo />

Places events on a vertical day timeline. Overlapping events form a
cluster and share its width in side-by-side columns, packed to the
left. Pure function: no state, no UI — safe to call on every render.
[ScheduleGrid](../../app-design-kit/schedule-grid.md) uses it
internally, and you can use it on its own.

## API

```ts
layoutScheduleEvents(events, { startHour?, hourHeight?, minHeight? }?): PositionedEvent[]
```

| Input | Type | Default | Notes |
| --- | --- | --- | --- |
| `events` | `ScheduleEvent[]` | — | Each event: `id`, `title`, `location`, `start`, `end` (Date or ISO string), optional `category`, `description`, `imageUrl`, `venueDetail`, `goingCount`, `savedCount` |
| `startHour` | `number` | `0` | Hour the timeline starts at |
| `hourHeight` | `number` | `80` | Pixels per hour |
| `minHeight` | `number` | `30` | Minimum block height in pixels |

Each returned `PositionedEvent` is `{ event, top, height, left, width }`
— `top`/`height` in pixels, `left`/`width` as percentages of the events
column.

## Usage

```tsx
import { layoutScheduleEvents, type ScheduleEvent } from "@lifeatjntuh/junction";

const positioned = layoutScheduleEvents(events, { startHour: 9, hourHeight: 80 });
// positioned[0] = { event, top: 60, height: 120, left: 0, width: 50 }
```
