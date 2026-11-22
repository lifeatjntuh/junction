import React from "react";
import { Reveal, Panel, Heading, Text } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

export function RevealDemo() {
  return (
    <Demo label="Scroll this panel into view — it fades and rises once">
      <Reveal>
        <Panel color="lavender">
          <Heading size="sm">Revealed on scroll</Heading>
          <Text size="sm">Wrap a heading block, panel or card. Never nest reveals.</Text>
        </Panel>
      </Reveal>
    </Demo>
  );
}
