---
title: Shapes
description: The Junction shapes — 32px panel corners, fully round buttons and chips, soft plum-tinted shadows, and the 3D objects.
---

import { PanelDemo } from "@site/src/components/demos/panel-demo";

# Shapes

<PanelDemo />

- **Panels/cards:** 32px corners. Photos inside cards: 16–24px.
- **Buttons and chips:** fully round.
- **Outlines:** no thick outlines — soft shadows instead.
- **Shadows:** soft, plum-tinted. App screens use softer shadows
  still, plus a pink glow for the one main action.

## 3D objects

The design system has five 3D objects: **@ sign, Clover, Camera, Mic,
Books**. They add fun to a post — at most one per post, placed away
from the text, never in front of it.

## How to make more

To create another object in the same style:

1. Start with a pastel panel, then one colour block inside it.
2. Use the grotesk font for a short headline (3–4 words).
3. Add one small detail — a small object or a tiny icon.
4. Keep it on the light pastel and white panel.

## In code

[Panel](../components/panel.md) and the
[theme tokens](../tokens.md) (`tokens.radii`, `tokens.shadows`).
