---
title: ThemeToggle
description: Light / Dark / System theme switcher, saved to localStorage, with Solar sun, moon and monitor icons.
---

# ThemeToggle

Light / Dark / System theme switcher. The choice is saved to
`localStorage` under `"theme"`.

```tsx
import { ThemeToggle, useTheme } from "@lifeatjntuh/junction";

<ThemeToggle />;

const { theme, setTheme } = useTheme(); // theme: ThemeChoice
```

`ThemeChoice` is `"light" | "dark" | "system"`. Icons are Solar, linear:
`sun`, `moon`, `monitor`.
