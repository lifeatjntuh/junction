---
title: Tabs
description: Radix tabs with pill and underline variants for switching between views.
---

# Tabs

Radix tabs. `TabsList` variant `pill` is a white pill track with a hot
pink active tab; `underline` is the quieter style.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@lifeatjntuh/junction";

<Tabs defaultValue="offers">
  <TabsList>
    <TabsTrigger value="offers">Offers</TabsTrigger>
    <TabsTrigger value="requests">Requests</TabsTrigger>
  </TabsList>
  <TabsContent value="offers">…</TabsContent>
  <TabsContent value="requests">…</TabsContent>
</Tabs>
```

## Props

| Component | Prop | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `TabsList` | `variant` | `pill \| underline` | `pill` | |
| `TabsTrigger` | `value` | `string` | — | Required, matches a `TabsContent` |
| `TabsContent` | `value` | `string` | — | Required |

Keyboard support comes from Radix.
