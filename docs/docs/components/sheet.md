---
title: Sheet
description: Vaul bottom sheet for filters, details and actions on small screens.
---

# Sheet

Vaul bottom sheet — the panel that slides up from the bottom of the
screen for filters, details and actions.

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetClose, Button } from "@lifeatjntuh/junction";

<Sheet>
  <SheetTrigger asChild>
    <Button variant="secondary">Filters</Button>
  </SheetTrigger>
  <SheetContent title="Filters" description="Narrow down the list">
    …
    <SheetClose asChild>
      <Button>Apply</Button>
    </SheetClose>
  </SheetContent>
</Sheet>
```

## Props

| Component | Prop | Type | Notes |
| --- | --- | --- | --- |
| `SheetContent` | `title` | `string` | Sheet heading |
| `SheetContent` | `description` | `string` | Optional subheading |
