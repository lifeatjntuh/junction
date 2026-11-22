import React from "react";
import { ProfileCard, BlobmateAvatar } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function ProfileCardDemo() {
  return (
    <Stack>
      <Demo label="Card (default) — blobmate stage, vibe badge, tags, stats, Add Mate">
        <div style={{ maxWidth: 420 }}>
          <ProfileCard
            name="Ananya"
            handle="@ananya.shoots"
            vibeStatus={{ icon: "solar:cup-hot-bold", text: "Canteen run" }}
            badge={{ label: "Campus Creator", tone: "pinkSoft" }}
            bio="Shoots campus events and fests. Always up for a photo walk."
            tags={["photography", "fests", "chai"]}
            stats={{ mates: 42, events: 12, karma: "4.9" }}
          />
        </div>
      </Demo>
      <Demo label="Compact — a row for friend lists and directories">
        <div style={{ maxWidth: 560 }}>
          <ProfileCard variant="compact" name="Rahul" handle="@rahul.codes" branch="ECE '27" />
        </div>
      </Demo>
    </Stack>
  );
}

export function BlobmateAvatarDemo() {
  return (
    <Demo label="BlobmateAvatar on its own — without the optional blobmates peer installed it shows this pastel placeholder with initials">
      <div style={{ maxWidth: 320 }}>
        <BlobmateAvatar seed="ananya" />
      </div>
    </Demo>
  );
}
