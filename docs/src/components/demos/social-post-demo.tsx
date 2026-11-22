import React from "react";
import { Panel, Heading, Text, Tag, Button } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

// Rendered mock-ups of the Social Media Kit templates (from social-studio
// and the website design system). These are small-scale previews drawn
// with real Junction components — the real templates live in the studio,
// where you swap in the real club, date, photo and credit and download
// the PNG at export size (1080×1080 for posts).

function PostFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 360 }}>
      <div
        style={{
          aspectRatio: "1 / 1",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 24px 50px -28px rgb(31 18 53 / 0.45)",
        }}
      >
        {children}
      </div>
      <p style={{ fontSize: 13, margin: "8px 0 0", color: "#5a4b70" }}>{label} · 1080 × 1080</p>
    </div>
  );
}

export function SocialPostDemo() {
  return (
    <Stack>
      <Demo label="Club event post">
        <PostFrame label="Event post">
          <Panel color="pink" padding="lg" style={{ height: "100%" }}>
            <Tag tone="dark" size="sm">
              Club name
            </Tag>
            <Heading size="md" className="mt-4">
              Open mic night
            </Heading>
            <Text size="sm" className="mt-2">
              Fri, 14 Nov · 5 PM · Venue name
            </Text>
          </Panel>
        </PostFrame>
      </Demo>
      <Demo label="Announcement post — grotesk headline, one highlight word">
        <PostFrame label="Announcement post">
          <Panel color="dark" padding="lg" style={{ height: "100%" }}>
            <Heading font="grotesk" size="md" className="text-white">
              Send us your photos
            </Heading>
            <Text size="sm" tone="inverse-muted" className="mt-3">
              Got a good campus shot? Send it in and we’ll post it with your name.
            </Text>
          </Panel>
        </PostFrame>
      </Demo>
      <Demo label="Creator shoutout — photo slot, handle, one line, credit">
        <PostFrame label="Creator shoutout">
          <Panel color="white" padding="lg" style={{ height: "100%" }}>
            <div style={{ height: 150, borderRadius: 16, background: "#c9e0ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Text size="sm" tone="muted">
                Photo goes here
              </Text>
            </div>
            <Heading size="sm" className="mt-4">
              @creator.handle
            </Heading>
            <Text size="sm" tone="muted" className="mt-1">
              Shoots campus events and fests. Go follow.
            </Text>
            <Text size="xs" tone="muted" className="mt-3">
              Photo: Anonymous
            </Text>
          </Panel>
        </PostFrame>
      </Demo>
      <Demo label="WhatsApp Channel digest — this week on campus">
        <PostFrame label="Channel digest">
          <Panel color="cream" padding="lg" style={{ height: "100%" }}>
            <Heading size="sm">This week on campus</Heading>
            <Stack>
              <Panel color="pink" padding="md">
                <Text size="sm">Open mic night · Club name · Fri, 5 PM</Text>
              </Panel>
              <Panel color="lime" padding="md">
                <Text size="sm">Photo walk · Club name · Sat, 7 AM</Text>
              </Panel>
            </Stack>
            <Button size="sm" className="mt-4">
              Forward to friends
            </Button>
          </Panel>
        </PostFrame>
      </Demo>
    </Stack>
  );
}
