import React from "react";
import { Heading, Text, Panel } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function HeadingDemo() {
  return (
    <Stack>
      <Demo label="Fredoka (round) — website headlines, sentence case">
        <Stack>
          <Heading size="display">Find your people</Heading>
          <Heading size="xl">Section title</Heading>
          <Heading size="lg">Section title</Heading>
          <Heading size="md">Card title</Heading>
          <Heading size="sm">Card title</Heading>
          <Heading size="xs">Small title</Heading>
        </Stack>
      </Demo>
      <Demo label="Bricolage Grotesque (grotesk) — social headlines, all caps, under six words">
        <Stack>
          <Heading font="grotesk" size="lg">
            Open mic night
          </Heading>
          <Heading font="grotesk" size="sm">
            Creator shoutout
          </Heading>
        </Stack>
      </Demo>
    </Stack>
  );
}

export function TextDemo() {
  return (
    <Stack>
      <Demo label="Sizes and tones">
        <Stack>
          <Text size="lg">Large body text — club events, campus photos, creator shoutouts.</Text>
          <Text size="md">Medium body text — the default size for most copy.</Text>
          <Text size="sm">Small body text — helper copy and captions.</Text>
          <Text size="xs" tone="muted">
            Extra small, muted — timestamps and fine print.
          </Text>
        </Stack>
      </Demo>
      <Demo label="Inverse tones — for dark (plum) surfaces">
        <Panel color="dark">
          <Stack>
            <Text tone="inverse">Inverse text on plum.</Text>
            <Text tone="inverse-muted" size="sm">
              Inverse muted text on plum.
            </Text>
          </Stack>
        </Panel>
      </Demo>
    </Stack>
  );
}
