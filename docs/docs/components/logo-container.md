---
title: Logo and Container
description: The @lifeatjntuh wordmark (with an optional mark image) and the 1320px page-width container.
---

# Logo and Container

## Logo

The @lifeatjntuh wordmark. The website's mark is a local media asset
and is not bundled with the package — pass it as `markSrc` when you have
it; without it, only the wordmark renders.

```tsx
import { Logo } from "@lifeatjntuh/junction";

<Logo />
<Logo tone="dark" markSrc="/mark.png" />
```

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `tone` | `light \| dark` | `light` | `dark` is for plum surfaces |
| `markSrc` | `string` | — | Optional mark image URL |

## Container

Max 1320px page-width wrapper.

```tsx
import { Container } from "@lifeatjntuh/junction";

<Container>
  <Heading>Page content</Heading>
</Container>;
```
