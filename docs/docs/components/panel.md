---
title: Panel
description: Big soft rounded block in the pastel palette or a solid colour, for cards and full-width sections.
---

# Panel

Big soft rounded block with no border, in the pastel panel palette or a
solid colour. Used for cards and full-width section panels.

```tsx
import { Panel, Heading, Text } from "@lifeatjntuh/junction";

<Panel color="pink">
  <Heading size="md">Curate</Heading>
  <Text> campus stories worth keeping.</Text>
</Panel>
```

## Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `color` | `white \| cream \| pink \| lime \| blue \| yellow \| lavender \| peach \| hot \| orange \| dark` | `white` | Pastels are `var(--panel-*)`; `hot` is hot pink, `orange` is orange, `dark` is plum |
| `padding` | `none \| md \| lg` | `md` | `md` p-6 md:p-8, `lg` p-7 md:p-12 lg:p-16 |

Panels are 32px corners (`rounded-card`). One pastel per panel — never
two pastels fighting on one surface.
