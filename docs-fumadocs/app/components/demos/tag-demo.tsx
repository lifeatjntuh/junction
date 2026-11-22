import React from "react";
import { Tag } from "@lifeatjntuh/junction";
import { Demo, Row, Stack } from "./Demo";

const TONES = ["white", "dark", "pink", "glass", "pinkSoft", "lime", "blue", "yellow", "lavender", "peach", "muted", "role"] as const;

export function TagDemo() {
  return (
    <Stack>
      <Demo label="Tones">
        <Row>
          {TONES.map((tone) => (
            <Tag key={tone} tone={tone}>
              {tone}
            </Tag>
          ))}
        </Row>
      </Demo>
      <Demo label="Sizes and app kit">
        <Row>
          <Tag size="xs">Extra small</Tag>
          <Tag size="sm">Small</Tag>
          <Tag size="md">Medium</Tag>
          <Tag kit="app" tone="pink">
            App tag
          </Tag>
          <Tag tone="role">Organizer</Tag>
          <Tag tone="muted">Draft</Tag>
        </Row>
      </Demo>
    </Stack>
  );
}
