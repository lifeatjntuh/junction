import React from "react";
import { Button, useToast } from "@lifeatjntuh/junction";
import { Demo, Row } from "./Demo";

export function ToastDemo() {
  const toast = useToast();
  return (
    <Demo label="Tap a button — a toast slides up for 3.5 seconds">
      <Row>
        <Button
          kit="app"
          size="sm"
          variant="secondary"
          onClick={() => toast({ title: "Saved to your schedule", tone: "success" })}
        >
          Success toast
        </Button>
        <Button
          kit="app"
          size="sm"
          variant="secondary"
          onClick={() =>
            toast({ title: "Couldn't save", description: "Check your connection and try again.", tone: "error" })
          }
        >
          Error toast
        </Button>
        <Button kit="app" size="sm" variant="secondary" onClick={() => toast({ title: "New events this week" })}>
          Info toast
        </Button>
      </Row>
    </Demo>
  );
}
