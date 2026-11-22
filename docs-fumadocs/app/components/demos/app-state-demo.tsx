import React from "react";
import { AppState, Skeleton, Button } from "@lifeatjntuh/junction";
import { Demo, Stack } from "./Demo";

export function AppStateDemo() {
  return (
    <Stack>
      <Demo label="Empty state — with an action">
        <AppState
          title="No events yet"
          body="Check back after the fest list drops."
          action={
            <Button kit="app" size="sm">
              Browse all
            </Button>
          }
        />
      </Demo>
      <Demo label="Error state">
        <AppState tone="error" title="Couldn't load events" body="Check your connection and try again." />
      </Demo>
    </Stack>
  );
}

export function SkeletonDemo() {
  return (
    <Demo label="Loading placeholders — size them to match the content they stand in for">
      <Stack>
        <Skeleton className="h-6 w-2/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-6 w-1/2" />
      </Stack>
    </Demo>
  );
}
