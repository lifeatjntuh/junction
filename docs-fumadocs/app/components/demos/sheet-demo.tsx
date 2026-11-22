import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger, Button, Text } from "@lifeatjntuh/junction";
import { Demo } from "./Demo";

export function SheetDemo() {
  return (
    <Demo label="Tap the button — a bottom sheet slides up">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">Filters</Button>
        </SheetTrigger>
        <SheetContent title="Filters" description="Narrow down the list">
          <Text size="sm">Pick a category, then tap Apply. Swipe down or tap outside to close.</Text>
          <div style={{ marginTop: 16 }}>
            <SheetClose asChild>
              <Button>Apply</Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </Demo>
  );
}
