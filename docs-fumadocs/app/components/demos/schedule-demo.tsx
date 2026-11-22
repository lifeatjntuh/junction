import React, { useState } from "react";
import { ScheduleGrid, type ScheduleEvent } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

const EVENTS: ScheduleEvent[] = [
  {
    id: "1",
    title: "Open mic",
    location: "Main stage",
    start: "2026-11-22T10:00:00",
    end: "2026-11-22T11:30:00",
    category: "music",
    description: "Sign up at the door.",
    goingCount: 42,
    savedCount: 18,
  },
  {
    id: "2",
    title: "Photo walk",
    location: "Dome",
    start: "2026-11-22T10:30:00",
    end: "2026-11-22T11:00:00",
    category: "workshops",
    goingCount: 12,
    savedCount: 5,
  },
  {
    id: "3",
    title: "Coding contest",
    location: "CSE block",
    start: "2026-11-22T13:00:00",
    end: "2026-11-22T15:00:00",
    category: "technical",
    description: "Bring your laptop.",
    goingCount: 87,
    savedCount: 30,
  },
];

export function ScheduleDemo() {
  const [saved, setSaved] = useState<string[]>(["1"]);
  const [going, setGoing] = useState<string[]>([]);
  return (
    <Demo label="A day timeline — overlapping events sit side by side; hover or tap a block for the quick view">
      <ScheduleGrid
        events={EVENTS}
        startHour={9}
        endHour={16}
        savedIds={saved}
        goingIds={going}
        onToggleSave={(id) => setSaved((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))}
        onToggleGoing={(id) => setGoing((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))}
        className="h-[420px]"
      />
    </Demo>
  );
}
