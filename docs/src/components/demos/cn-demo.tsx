import React from "react";
import { cn, Button } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

// `cn` merges class names and lets the last conflicting Tailwind class win
// (clsx + tailwind-merge). It has no UI of its own — this demo shows what
// it returns and what it does to a real component.
export function CnDemo() {
  const merged = cn("bg-ploy-accent-primary text-white", "bg-ploy-background-inverse");
  return (
    <Stack>
      <Demo label="What cn() returns">
        <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 14, margin: 0 }}>
          cn("bg-ploy-accent-primary text-white", "bg-ploy-background-inverse")
        </p>
        <p style={{ fontFamily: "ui-monospace, monospace", fontSize: 14, margin: "8px 0 0" }}>= “{merged}”</p>
        <p style={{ fontSize: 14, margin: "8px 0 0" }}>
          The second background wins — tailwind-merge drops the conflicting first one.
        </p>
      </Demo>
      <Demo label="The same idea on a real button — className always wins over defaults">
        <Button className={cn("shadow-none", "bg-ploy-background-inverse")}>Customised button</Button>
      </Demo>
    </Stack>
  );
}
