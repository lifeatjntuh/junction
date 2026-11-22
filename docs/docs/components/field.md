---
title: Field, Input and Textarea
description: Form fields that wire label, helper text and errors to the control, with aria-invalid and aria-describedby.
---

# Field, Input and Textarea

`Field` wraps a label, helper text and an error message around its
control, and wires `aria-invalid` and `aria-describedby` for it.

```tsx
import { Field, Input, Textarea } from "@lifeatjntuh/junction";

<Field label="Your name" helper="So we know what to call you">
  <Input placeholder="Ananya" />
</Field>

<Field label="Why LifeatJNTUH?" error="Tell us a little more">
  <Textarea />
</Field>
```

## Props

| Prop | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label |
| `helper` | `string` | Helper text under the control |
| `error` | `string` | Error text; sets `aria-invalid` on the control |
| `required` | `boolean` | Shows the field as required |

`Input` and `Textarea` are the controls — use them inside `Field`, or
on their own. Inputs are fully round (pill) like buttons.
