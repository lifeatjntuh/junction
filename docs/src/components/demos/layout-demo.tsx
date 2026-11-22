import React from "react";
import { layoutScheduleEvents, type ScheduleEvent } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

const EVENTS: ScheduleEvent[] = [
  { id: "a", title: "Open mic", location: "Main stage", start: "2026-11-22T10:00:00", end: "2026-11-22T11:30:00" },
  { id: "b", title: "Photo walk", location: "Dome", start: "2026-11-22T10:30:00", end: "2026-11-22T11:00:00" },
  { id: "c", title: "Coding contest", location: "CSE block", start: "2026-11-22T12:00:00", end: "2026-11-22T13:00:00" },
];

// `layoutScheduleEvents` is a pure function — no UI, no state. This demo
// renders what it returns: overlapping events share the width in
// side-by-side columns, packed to the left.
export function LayoutDemo() {
  const placed = layoutScheduleEvents(EVENTS, { startHour: 9, hourHeight: 60 });
  return (
    <Demo label="Three events, two overlapping — the overlap shares the width">
      <div style={{ position: "relative", height: 260, border: "1px solid rgb(31 18 53 / 0.1)", borderRadius: 24, background: "#fff" }}>
        {placed.map(({ event, top, height, left, width }) => (
          <div
            key={event.id}
            style={{
              position: "absolute",
              top: top + 8,
              height,
              left: `${left}%`,
              width: `calc(${width}% - 4px)`,
              background: "#ffc9e6",
              borderRadius: 12,
              padding: 8,
              fontSize: 12,
              fontFamily: "Lexend, sans-serif",
              overflow: "hidden",
            }}
          >
            {event.title}
            <br />
            <span style={{ opacity: 0.7 }}>
              top {Math.round(top)}px · h {Math.round(height)}px · left {Math.round(left)}% · w {Math.round(width)}%
            </span>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, margin: "12px 0 0" }}>
        Open mic and Photo walk overlap, so each gets half the width. Coding contest stands alone at full width.
      </p>
    </Demo>
  );
}
