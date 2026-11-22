---
title: Field
description: Form field wrapper that wires label, helper text and errors to its control, with aria-invalid and aria-describedby.
---

import { FieldDemo } from "@site/src/components/demos/field-demo";

# Field

<FieldDemo />

`Field` wraps a label, helper text and an error message around its
control, and wires `aria-invalid` and `aria-describedby` for it. The
control is usually an [Input](./input.md) or [Textarea](./input.md).

## Props

| Prop | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label (Lexend) — required |
| `htmlFor` | `string` | id of the control inside; wires label, helper and error text to it — required |
| `description` | `string` | Helper text under the control |
| `error` | `string` | Error text; replaces the helper and sets `aria-invalid` on the control |
| `children` | `ReactElement` | The control (Input, Textarea or any input) |
| `className` | `string` | Merged with `cn()` |

## Usage

```tsx
import { Field, Input, Textarea } from "@lifeatjntuh/junction";

<Field label="Your name" htmlFor="name" description="So we know what to call you">
  <Input placeholder="Ananya" />
</Field>

<Field label="Why LifeatJNTUH?" htmlFor="why" error="Tell us a little more">
  <Textarea />
</Field>
```
