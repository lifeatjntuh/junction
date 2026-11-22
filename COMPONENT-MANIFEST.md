# Component Manifest

Every component shipped in `@lifeatjntuh/junction` 0.1.0, ported from the
@lifeatjntuh website design system (`lifeatjntuh-admin/website`).
Status is `stable` where the website marks the component stable; the
package itself is 0.1.0 (pre-release).

## Package entry points

- `@lifeatjntuh/junction` — all components + `cn` + tokens (imports theme CSS)
- `@lifeatjntuh/junction/theme` — theme stylesheet only
- `@lifeatjntuh/junction/tokens` — typed token constants, no CSS

## Website parts — `src/components/ui/`

| Component | File | Props / notes | Status |
| --- | --- | --- | --- |
| Button | `button.tsx` | `variant` primary/secondary/dark/ghost/link/soft/google/danger, `size` xs–lg, `kit` web/app, `asChild`; `buttonVariants`, `ButtonProps` exported | stable |
| Panel | `panel.tsx` | `color` white/cream/pastels/hot/orange/dark, `padding` none/md/lg | stable |
| Tag | `tag.tsx` | `tone` white/dark/pink/glass/pastels/muted/role, `size` xs/sm/md, `kit` web/app | stable |
| Heading | `heading.tsx` | `font` round (Fredoka) / grotesk (Bricolage), `size` display/xl/lg/md/sm/xs, `as` h1–h4/p | stable |
| Text | `text.tsx` | `size` lg/md/sm/xs, `tone` default/muted/inverse/inverse-muted, `as` p/span/div | stable |
| Field, Input, Textarea | `field.tsx` | `Field` wires label/helper/error + `aria-invalid`/`aria-describedby` to its control | stable |
| Tabs | `tabs.tsx` | Radix; `TabsList variant` pill/underline, `TabsTrigger`, `TabsContent` | stable |
| Sheet | `sheet.tsx` | vaul bottom sheet; `SheetContent title` (+ `description`) | stable |
| ToastProvider, useToast | `toast.tsx` | `toast({ title, description?, tone? })`, tones success/error/info, 3.5s, `aria-live` | stable |
| ThemeToggle, useTheme | `theme-toggle.tsx` | Light/Dark/System, `localStorage "theme"`, `ThemeChoice` | stable |
| Logo | `logo.tsx` | `tone` light/dark, optional `markSrc` (website mark is a local asset, not bundled) | stable |
| Container | `container.tsx` | Max 1320px page-width wrapper | stable |
| ChipGroup | `chip-group.tsx` | Controlled `value`/`onChange`, optional `allLabel`, `label` for screen readers | stable |
| Reveal | `reveal.tsx` | Scroll fade-and-rise (motion), `delay` | stable |

## App kit — `src/components/app/`

| Component | File | Props / notes | Status |
| --- | --- | --- | --- |
| AppShell, AppTopBar, AppIconButton, AppBottomNav, AppMenuRow | `app-shell.tsx` | Phone-width app column, sticky header, bottom tab bar, settings rows | stable |
| AppState, Skeleton | `app-states.tsx` | Empty/error states (`tone` empty/error), loading placeholder | stable |
| EventCard | `event-card.tsx` | `variant` stacked/row/photo, category + status tags | stable |
| ProfileCard, BlobmateAvatar | `profile-card.tsx` | `variant` card/compact/hero; `blobmates` is an optional peer dep | stable |
| ScheduleGrid, ScheduleEventBlock, EventQuickCard, DEFAULT_CATEGORIES | `schedule.tsx` | Day timeline, overlap layout, hover/tap quick view | stable |
| layoutScheduleEvents | `src/lib/schedule-layout.ts` | Pure layout function + `ScheduleEvent` / `PositionedEvent` types | stable |

## Tokens — `src/tokens.ts` + `src/styles/junction-theme.css`

Core Plum/Cream/Hot pink/Orange/Violet, six pastels, Fredoka / Bricolage
Grotesque / Plus Jakarta Sans / Lexend, radii (card 2rem, pill 999px,
app 1rem), soft app shadows + pink glow/action. Same values as CSS
variables in the theme stylesheet.

## Removed in 0.1.0 (old Junction)

Accordion, Badge, Card, Dialog, Menu, Popover, old Skeleton, ToggleGroup,
`components.json` (shadcn config), the old oklch token set, Inter /
JetBrains Mono, `<iconify-icon>`. See README "Breaking changes" and
`CHANGELOG.md`.
