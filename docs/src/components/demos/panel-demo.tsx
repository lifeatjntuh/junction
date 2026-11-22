import React from "react";
import { Panel, Heading, Text } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

const COLOURS = ["white", "cream", "pink", "lime", "blue", "yellow", "lavender", "peach", "hot", "orange", "dark"] as const;

export function PanelDemo() {
  return (
    <Stack>
      <Demo label="Every panel colour — one pastel or one solid colour per panel">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: 12,
          }}
        >
          {COLOURS.map((color) => (
            <Panel key={color} color={color} padding="md">
              <Text size="sm">{color}</Text>
            </Panel>
          ))}
        </div>
      </Demo>
      <Demo label="Panels hold content — 32px corners, no border">
        <Panel color="pink">
          <Heading size="md">Curate</Heading>
          <Text>Club events, campus photos and buddy apps. All in one place.</Text>
        </Panel>
      </Demo>
    </Stack>
  );
}
