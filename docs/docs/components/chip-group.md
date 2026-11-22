---
title: ChipGroup
description: Controlled single-select chip group (radiogroup) for filters, with an optional All option.
---

# ChipGroup

Controlled single-select chip group — a `radiogroup` of pill chips, for
filters such as event categories.

```tsx
import { ChipGroup } from "@lifeatjntuh/junction";

const [value, setValue] = useState("all");

<ChipGroup
  label="Filter by category"
  value={value}
  onChange={setValue}
  allLabel="All"
  options={[
    { value: "music", label: "Music" },
    { value: "tech", label: "Tech" },
  ]}
/>;
```

## Props

| Prop | Type | Notes |
| --- | --- | --- |
| `value` | `string` | Controlled selected value |
| `onChange` | `(value: string) => void` | Called when a chip is picked |
| `options` | `{ value: string; label: string }[]` | The chips |
| `allLabel` | `string` | Optional "All" chip |
| `label` | `string` | Screen-reader label for the group |

Selected chips use `aria-pressed`.
