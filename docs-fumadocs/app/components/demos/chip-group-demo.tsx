import React, { useState } from "react";
import { ChipGroup, Text } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function ChipGroupDemo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Demo label="Try picking a filter — the selected chip turns plum">
      <Stack>
        <ChipGroup
          label="Filter by category"
          allLabel="All events"
          options={["Music", "Workshops", "Sports", "Food"]}
          value={value}
          onChange={setValue}
        />
        <Text size="sm" tone="muted">
          Selected: {value ?? "all"}
        </Text>
      </Stack>
    </Demo>
  );
}
