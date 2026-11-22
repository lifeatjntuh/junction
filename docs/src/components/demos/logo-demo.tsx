import React from "react";
import { Logo, Panel } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function LogoDemo() {
  return (
    <Stack>
      <Demo label="Light tone — for cream and pastel backgrounds">
        <Logo />
      </Demo>
      <Demo label="Dark tone — for plum surfaces and photos">
        <Panel color="dark">
          <Logo tone="dark" />
        </Panel>
      </Demo>
    </Stack>
  );
}
