import React from "react";
import { EventCard } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function EventCardDemo() {
  return (
    <Stack>
      <Demo label="Stacked (default) — tags, Lexend title, place and time, description">
        <EventCard
          title="Open Mic Night"
          place="Main Auditorium"
          time="Sat, 22 Nov · 6 PM"
          description="An evening of music, poetry and terrible jokes — sign up at the door."
          category={{ label: "Music", tone: "pinkSoft" }}
          status="Going"
        />
      </Demo>
      <Demo label="Row — compact, for phone lists">
        <EventCard
          variant="row"
          title="Photo walk"
          place="JNTUH Dome"
          time="Sat, 7 AM"
          category={{ label: "Workshops", tone: "blue" }}
        />
      </Demo>
      <Demo label="Photo — full-bleed, text on a dark fade (pass image for a real photo)">
        <EventCard
          variant="photo"
          title="Founders' Night"
          place="Main stage"
          time="Today, 7:00 PM"
          description="Stories, music and food under the big tree."
          category={{ label: "Cultural", tone: "pinkSoft" }}
        />
      </Demo>
    </Stack>
  );
}
