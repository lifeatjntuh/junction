import React from "react";
import { ThemeToggle, useTheme, Text } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function ThemeToggleDemo() {
  const { choice } = useTheme();
  return (
    <Demo label="Light / Dark / System — try it; it flips the Junction components on this page">
      <Stack>
        <ThemeToggle />
        <Text size="sm" tone="muted">
          Current choice: {choice} (saved to localStorage under “theme”; System clears it).
        </Text>
      </Stack>
    </Demo>
  );
}
