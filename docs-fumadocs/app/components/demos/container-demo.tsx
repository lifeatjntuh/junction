import React from "react";
import { Container, Panel, Heading, Text } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

export function ContainerDemo() {
  return (
    <Demo label="A page-width wrapper (max 1320px) — the panel inside is capped by it">
      <Container>
        <Panel color="lime">
          <Heading size="sm">Inside a Container</Heading>
          <Text size="sm">Side padding grows on bigger screens; content never stretches past 1320px.</Text>
        </Panel>
      </Container>
    </Demo>
  );
}
