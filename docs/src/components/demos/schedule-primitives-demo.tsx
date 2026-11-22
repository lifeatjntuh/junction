import React, { useState } from "react";
import { EventQuickCard, DEFAULT_CATEGORIES, type ScheduleEvent } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

const EVENT: ScheduleEvent = {
  id: "1",
  title: "Open mic",
  location: "Main stage",
  start: "2026-11-22T10:00:00",
  end: "2026-11-22T11:30:00",
  category: "music",
  description: "An evening of music, poetry and terrible jokes — sign up at the door.",
  venueDetail: "Main Auditorium, JNTUH",
  goingCount: 42,
  savedCount: 18,
};

// EventQuickCard is the popup ScheduleGrid shows on hover/tap — it also
// works on its own anywhere a compact event preview fits.
export function EventQuickCardDemo() {
  const [saved, setSaved] = useState(false);
  const [going, setGoing] = useState(false);
  return (
    <Demo label="EventQuickCard — Save and Going are fully controlled; try them">
      <EventQuickCard
        event={EVENT}
        category={DEFAULT_CATEGORIES.music}
        saved={saved}
        going={going}
        onToggleSave={() => setSaved((s) => !s)}
        onToggleGoing={() => setGoing((g) => !g)}
        detailsHref="#"
      />
    </Demo>
  );
}
