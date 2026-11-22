import React from "react";
import { Button } from "@lifeatjntuh/junction";
import { ArrowRightIcon } from "@solar-icons/react/linear/arrow-right";
import { Demo, Row, Stack } from "./Demo";

export function ButtonDemo() {
  return (
    <Stack>
      <Demo label="Variants">
        <Row>
          <Button>Join LifeOps</Button>
          <Button variant="secondary">Learn more</Button>
          <Button variant="dark">View events</Button>
          <Button variant="soft">Share</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="link">Text link</Button>
          <Button variant="danger">Delete</Button>
          <Button variant="google">Sign in with Google</Button>
        </Row>
      </Demo>
      <Demo label="Sizes">
        <Row>
          <Button size="xs">Extra small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Row>
      </Demo>
      <Demo label="With an icon, disabled, and app kit">
        <Row>
          <Button>
            See all events <ArrowRightIcon />
          </Button>
          <Button disabled>Disabled</Button>
          <Button kit="app">App primary</Button>
          <Button kit="app" variant="secondary">
            App secondary
          </Button>
        </Row>
      </Demo>
    </Stack>
  );
}
