---
title: cn
description: Class-name merging helper — cn() merges classes with clsx and lets the last conflicting Tailwind class win (tailwind-merge).
---

import { CnDemo } from "@site/src/components/demos/cn-demo";

# cn

<CnDemo />

`cn` merges class names: `clsx` for conditional joining, then
`tailwind-merge` so the last conflicting Tailwind class wins. Every
component in the package merges its `className` prop with `cn()` — that
is why a `className` you pass always wins over the component's defaults.

It has no UI of its own — the demo above shows what it returns and what
it does to a real button.

## API

```ts
cn(...inputs: ClassValue[]): string
```

`ClassValue` is the `clsx` input type: strings, arrays, objects,
`false` / `null` / `undefined` (ignored).

## Usage

```tsx
import { cn } from "@lifeatjntuh/junction";

cn("px-4 py-2", isActive && "bg-ploy-accent-primary", className);
```
