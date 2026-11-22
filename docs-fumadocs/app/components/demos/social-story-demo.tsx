import React from "react";
import { Panel, Heading, Text, Tag } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

// Small-scale previews of the story templates (1080×1920). Keep the top
// 250px and bottom 300px clear for app controls — the dashed boxes in the
// studio show where the real sticker goes.

function Story({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ width: 200, flexShrink: 0 }}>
      <div
        style={{
          aspectRatio: "1080 / 1920",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 24px 50px -28px rgb(31 18 53 / 0.45)",
        }}
      >
        {children}
      </div>
      <p style={{ fontSize: 13, margin: "8px 0 0", color: "#5a4b70" }}>{label}</p>
    </div>
  );
}

export function SocialStoryDemo() {
  return (
    <Demo label="Story templates — event, photo of the day, question, LifeOps role call">
      <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8 }}>
        <Story label="Event">
          <Panel color="pink" padding="lg" style={{ height: "100%" }}>
            <Tag tone="dark" size="sm">
              Sat, 7 AM
            </Tag>
            <Heading size="sm" className="mt-4">
              Photo walk
            </Heading>
            <Text size="sm" className="mt-2">
              Venue name
            </Text>
          </Panel>
        </Story>
        <Story label="Photo of the day">
          <Panel color="dark" padding="lg" style={{ height: "100%" }}>
            <Text size="sm" tone="inverse-muted">
              Look up once in a while.
            </Text>
            <Text size="xs" tone="inverse-muted" className="mt-3">
              Photo: Anonymous
            </Text>
          </Panel>
        </Story>
        <Story label="Question">
          <Panel color="lime" padding="lg" style={{ height: "100%" }}>
            <Heading size="sm">Best chai on campus?</Heading>
            <Text size="sm" className="mt-2">
              Drop your pick. We’ll share the top answers.
            </Text>
          </Panel>
        </Story>
        <Story label="LifeOps role call">
          <Panel color="lavender" padding="lg" style={{ height: "100%" }}>
            <Tag tone="dark" size="sm">
              Join LifeOps
            </Tag>
            <Heading size="sm" className="mt-4">
              Media Correspondent
            </Heading>
            <Text size="sm" tone="muted" className="mt-2">
              Pillar: Curate
            </Text>
          </Panel>
        </Story>
      </div>
    </Demo>
  );
}
