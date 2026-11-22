---
title: Toast
description: Context toasts with success, error and info tones — ToastProvider and useToast.
---

import { ToastDemo } from "@site/src/components/demos/toast-demo";

# Toast

<ToastDemo />

Context toasts. Wrap the app (or the screen) in `ToastProvider` first,
then call `useToast()` anywhere inside it. Deep plum pill-cards slide
up above the bottom nav and hide after 3.5 seconds.

## API

`ToastProvider` — props: `children`, `offset` (default `96`, the
distance from the bottom of the screen in pixels).

`useToast()` returns a function — call it as
`toast({ title, description?, tone? })`. `tone` is
`success | error | info` (default `info`). Toasts are announced with
`aria-live="polite"`. Icons are Solar, linear (`check-circle`,
`danger-triangle`, `info-circle`).

## Usage

```tsx
import { ToastProvider, useToast, Button } from "@lifeatjntuh/junction";

function Screen() {
  const toast = useToast();
  return (
    <Button onClick={() => toast({ title: "Saved!", tone: "success" })}>
      Save
    </Button>
  );
}

export function App() {
  return (
    <ToastProvider>
      <Screen />
    </ToastProvider>
  );
}
```
