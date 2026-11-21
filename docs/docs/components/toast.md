---
title: Toast
description: Context toasts with success, error and info tones, announced with aria-live.
---

# Toast

Context toasts. Wrap the app (or the screen) in `ToastProvider` first,
then call `useToast()` anywhere inside it.

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

## API

`toast({ title, description?, tone? })` — `tone` is `success | error |
info`, default `info`. Toasts show for 3.5 seconds and are announced
with `aria-live="polite"`. Icons are Solar, linear
(`check-circle`, `danger-triangle`, `info-circle`).
