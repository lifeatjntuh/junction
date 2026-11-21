/** One event on the schedule. Dates may be Date objects or ISO strings. */
export interface ScheduleEvent {
  id: string;
  title: string;
  location: string;
  start: Date | string;
  end: Date | string;
  /** Key into the grid's category map (colors and label). */
  category?: string;
  description?: string;
  imageUrl?: string;
  /** Secondary venue line, e.g. "CSE block, Room 204". */
  venueDetail?: string;
  goingCount?: number;
  savedCount?: number;
}

export interface PositionedEvent<E extends ScheduleEvent = ScheduleEvent> {
  event: E;
  /** px from the top of the grid */
  top: number;
  /** px */
  height: number;
  /** % of the events column */
  left: number;
  /** % of the events column */
  width: number;
}

export interface ScheduleLayoutOptions {
  startHour?: number;
  hourHeight?: number;
  minHeight?: number;
}

const ms = (d: Date | string) => (typeof d === "string" ? new Date(d) : d).getTime();
const hourOf = (d: Date | string) => {
  const x = typeof d === "string" ? new Date(d) : d;
  return x.getHours() + x.getMinutes() / 60;
};

/**
 * Places events on a vertical day timeline. Overlapping events form a cluster
 * and share its width in side-by-side columns, packed to the left.
 * Pure function: no state, safe to call on every render.
 */
export function layoutScheduleEvents<E extends ScheduleEvent>(
  events: E[],
  { startHour = 0, hourHeight = 80, minHeight = 30 }: ScheduleLayoutOptions = {},
): PositionedEvent<E>[] {
  const items = [...events]
    .sort((a, b) => ms(a.start) - ms(b.start) || ms(b.end) - ms(b.start) - (ms(a.end) - ms(a.start)))
    .map((event) => ({
      event,
      s: ms(event.start),
      e: ms(event.end),
      top: (hourOf(event.start) - startHour) * hourHeight,
      height: Math.max((hourOf(event.end) - hourOf(event.start)) * hourHeight, minHeight),
      col: 0,
      left: 0,
      width: 100,
    }));

  const clusters: (typeof items)[] = [];
  let cur: typeof items = [];
  let curEnd = -Infinity;
  for (const it of items) {
    if (cur.length && it.s >= curEnd) {
      clusters.push(cur);
      cur = [];
      curEnd = -Infinity;
    }
    cur.push(it);
    curEnd = Math.max(curEnd, it.e);
  }
  if (cur.length) clusters.push(cur);

  for (const cluster of clusters) {
    const cols: number[] = [];
    for (const it of cluster) {
      const free = cols.findIndex((end) => end <= it.s);
      it.col = free === -1 ? cols.length : free;
      cols[it.col] = it.e;
    }
    for (const clusterItem of cluster) {
      clusterItem.width = 100 / cols.length;
      clusterItem.left = clusterItem.col * clusterItem.width;
    }
  }

  return items.map(({ event, top, height, left, width }) => ({ event, top, height, left, width }));
}
