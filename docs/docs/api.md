---
title: API reference
description: Entry points, builds, prop conventions, tokens and accessibility for @lifeatjntuh/junction.
---

# API reference

## Entry points

| Import | What it is |
| --- | --- |
| `@lifeatjntuh/junction` | Everything: all components, types, `cn`, tokens. Imports the theme CSS as a side effect. |
| `@lifeatjntuh/junction/theme` | The compiled theme stylesheet only (`dist/junction.css`). |
| `@lifeatjntuh/junction/tokens` | Typed token constants only — no CSS side effect. |

One main entry point, plus subpaths where they help. No internal files
leak into the public surface: `src/lib/utils.ts` exposes only `cn`,
`src/lib/schedule-layout.ts` exposes the layout helper and its types, and
component internals are not exported.

## Full export inventory

Everything the package exports, from `src/index.ts`. Every item has a
docs page — nothing is exported without documentation.

### Utilities

| Export | Docs |
| --- | --- |
| `cn` | [cn](./components/primitives/cn.md) |
| `layoutScheduleEvents`, `PositionedEvent`, `ScheduleEvent`, `ScheduleLayoutOptions` | [layoutScheduleEvents](./components/primitives/layout-schedule-events.md) |
| `tokens`, `colors`, `pastels`, `fonts`, `radii`, `shadows`, `ColorName`, `PastelName`, `FontName`, `JunctionTokens` | [Tokens](./tokens.md) |

### Website components

| Export | Docs |
| --- | --- |
| `Button`, `buttonVariants`, `ButtonProps` | [Button](./components/button.md) |
| `Panel` | [Panel](./components/panel.md) |
| `Tag`, `TagProps` | [Tag](./components/tag.md) |
| `Heading`, `headingVariants`, `HeadingProps` | [Heading](./components/heading.md) |
| `Text`, `TextProps` | [Text](./components/text.md) |
| `Field`, `FieldProps` | [Field](./components/field.md) |
| `Input`, `Textarea` | [Input and Textarea](./components/input.md) |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | [Tabs](./components/tabs.md) |
| `Sheet`, `SheetTrigger`, `SheetContent`, `SheetClose` | [Sheet](./components/sheet.md) |
| `ToastProvider`, `useToast` | [Toast](./components/toast.md) |
| `ThemeToggle`, `useTheme`, `ThemeChoice` | [ThemeToggle](./components/theme-toggle.md) |
| `Logo` | [Logo](./components/logo.md) |
| `Container` | [Container](./components/container.md) |
| `ChipGroup`, `ChipGroupProps` | [ChipGroup](./components/chip-group.md) |
| `Reveal` | [Reveal](./components/reveal.md) |

### App components

| Export | Docs |
| --- | --- |
| `AppShell`, `AppTopBar`, `AppBottomNav`, `AppMenuRow`, `AppIconButton`, `AppNavItem` | [AppShell](./app-design-kit/app-shell.md) |
| `AppState`, `Skeleton` | [AppState](./app-design-kit/app-state.md) |
| `EventCard`, `EventCardProps` | [EventCard](./app-design-kit/event-card.md) |
| `ProfileCard`, `ProfileCardProps` | [ProfileCard](./app-design-kit/profile-card.md) |
| `BlobmateAvatar` | [BlobmateAvatar](./app-design-kit/blobmate-avatar.md) |
| `ScheduleGrid`, `ScheduleGridProps`, `ScheduleCategory`, `ScheduleEventActions`, `DEFAULT_CATEGORIES` | [ScheduleGrid](./app-design-kit/schedule-grid.md) |
| `EventQuickCard`, `ScheduleEventBlock` | [EventQuickCard](./app-design-kit/schedule-primitives.md) |

## Builds

- ESM (`dist/index.js`) and CJS (`dist/index.cjs`) from the same
  source, plus a separate `dist/tokens.js` / `dist/tokens.cjs`.
- TypeScript declarations (`.d.ts`) for every export, emitted by
  `tsc -p tsconfig.lib.json` into `dist/types/`.
- Tree-shakeable: named ESM exports, `sideEffects: ["*.css"]` (only the
  theme CSS has side effects), React/React DOM external as peers.
- `exports` map with `types` / `import` / `require` conditions, so
  bundlers and Node both resolve correctly.

## Prop conventions

Consistent across all components, following the website components:

- `variant` — the main visual variant (`Button`, `EventCard`, `TabsList`).
- `size` — `xs | sm | md | lg` (or the component's own scale), with a
  sensible default (`md` for buttons, `lg` for headings).
- `tone` — colour intent where the component is a label or chip
  (`Tag`, `Text`, `AppState`).
- `kit` — `"web" | "app"` on `Button` and `Tag`; `"app"` is the Event
  Tracker / Buddy app look.
- `as` — polymorphic tag where it fits (`Heading as="h1"`, `Text as="span"`).
- `asChild` — render as the child element on `Button` (Radix Slot).
- `disabled`, `className` — standard HTML behaviour everywhere; `className`
  always merges with `cn()` and wins over defaults.
- Every component's props type is exported (`ButtonProps`, `TagProps`,
  `EventCardProps`, …) and documented with TSDoc.
- `forwardRef` on components that wrap a DOM element (`Button`, `Input`,
  `Textarea`).

Stable, semantic props: no renames were made to the website components'
props in this port, except `Logo`, which gained an optional `markSrc`.

## Theme and tokens

Tokens are a first-class API: `src/tokens.ts` exports typed `colors`,
`pastels`, `fonts`, `radii`, `shadows` and the combined `tokens` object,
and the theme CSS defines the same values as variables. See
[Tokens](./tokens.md).

## Icons

Solar, linear, everywhere — via `@solar-icons/react` and
`@iconify/react`. No Lucide. See [Icons](./icons.md).

## Accessibility

Components keep the website's behaviour: correct semantics (`button`,
`radiogroup`/`radio` in `ThemeToggle`, `role="group"` in `ChipGroup`,
`aria-pressed` on toggle chips and save/going buttons, `aria-live="polite"`
on toasts, `aria-invalid` + `aria-describedby` wired by `Field`), visible
focus rings, keyboard support from Radix primitives (`Tabs`, popovers in
the schedule), and reduced-motion handling in the theme.

## Versioning

Semver, starting at `0.1.0` (pre-release: breaking changes are expected
before 1.0). See the repo's `CHANGELOG.md`.
