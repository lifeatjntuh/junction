# Festiverse → shadcn/ui (Base UI) Component Manifest

This file tells a coding agent exactly which shadcn/ui component to install and how to
customize it to match Festiverse, instead of re-deriving the design from screenshots.

**Setup for a real project:**

```bash
npx shadcn@latest init --base base-ui --style new-york
```

Then copy `components.json` from this folder over the generated one (it already points
`tailwind.css` at `festiverse-theme.css`'s token set). Install components with:

```bash
npx shadcn@latest add button badge card field tabs toggle-group menu popover accordion dialog toast
```

> **Icons:** shadcn's CLI defaults new projects to `lucide-react`. Festiverse uses Iconify's
> Solar icon set (`<iconify-icon icon="solar:...">`) everywhere instead. Keep `iconLibrary` as
> lucide in `components.json` (shadcn requires a value), but when generating actual UI code for
> this app, use `iconify-icon` elements with `solar:*` icon names, not `lucide-react` imports.

## Mapping table

| Source pattern | shadcn component | Base UI primitive | Variant / customization |
|---|---|---|---|
| Register / CTA buttons | `Button` | — (plain element) | `variant="cta"` = `rounded-full` + `shadow-glow` (Festiverse-only variant, not stock shadcn). `variant="default"` for standard fills. |
| Secondary / outline buttons | `Button` | — | `variant="secondary"` / `variant="outline"` |
| Gradient role-action tiles (Admin/Organizer) | `Button` | — | Custom variants `gradientPurple` / `gradientOrange`, not in stock shadcn — add to the `cva` config |
| Google sign-in | `Button` | — | Custom `variant="google"`: card bg, border, shadow-xs |
| Category / role / status tags | `Badge` | — | Category color is a `className` override on top of `variant="default"`; role badges use `variant="role"` (pill, bordered, uppercase) |
| Event/Stall/Login form fields | `Field`, `Input`, `Label` | `Field` | `Field.Root` wraps `Field.Label` + `Field.Control` (+ `Field.Description` / `Field.Error`). Replaces the source's raw `const INPUT = "..."` string constant with a real accessible primitive. |
| Event / featured cards | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` | — | Standard shadcn Card shape; no primitive swap needed since Card has no interactive behavior |
| Day switcher (segmented pill) | `Tabs` | `Tabs` | Style `Tabs.Indicator` as a sliding pill (`rounded-full`, `bg-background`, `shadow-sm`) instead of shadcn's default underline indicator |
| Filter chip row (Schedule/Stalls) | `ToggleGroup` + `Toggle` | `ToggleGroup`, `Toggle` | `toggleMultiple={false}` for single-select; style pressed state with `data-[pressed]:bg-primary data-[pressed]:shadow-glow` |
| Admin underline tab bar | `Tabs` | `Tabs` | `Tabs.Indicator` styled as a 2px bottom border in `bg-primary`, not a pill |
| Theme switcher | `DropdownMenu` (rendered via `Menu`) | `Menu` | `Menu.Root > Trigger > Portal > Positioner > Popup > Item` — note Base UI's explicit `Positioner`, which Radix folds into `Content` |
| Schedule event popover | `Popover` | `Popover` | `Popover.Root > Trigger > Portal > Positioner > Popup`; use `data-[starting-style]` / `data-[ending-style]` for enter/exit transitions instead of Framer Motion |
| FAQ / detail accordion | `Accordion` | `Accordion` | Single-open (`Accordion.Root` default); verify the open-state data attribute (`data-panel-open` used here) against current Base UI docs before shipping |
| "Fest Dates" centered modal | `Dialog` | `Dialog` | `Dialog.Backdrop` + centered `Dialog.Popup` (`fixed`, `-translate-x-1/2 -translate-y-1/2`) |
| Register bottom sheet | `Sheet` (built on `Dialog`) | `Dialog` | Same `Dialog` primitive as the modal above — a Sheet is just a `side="bottom"` style variant on `Dialog.Popup` (`fixed bottom-0`, slide-up transform), exactly how shadcn's own Sheet wraps Dialog |
| "Event registered!" toast | `Toast` (Sonner-equivalent) | `Toast` | `Toast.Provider` + `Toast.Viewport` + `useToastManager()`. Base UI's Toast shipped July 2026 — **double-check exact API** against base-ui.com before relying on it in production |
| Loading skeleton card | `Skeleton` | — | Plain `div` with `bg-muted animate-pulse rounded-md`, no primitive needed |

## Intentionally NOT mapped to a component (kept custom)

These exist in the Festiverse source but have no shadcn/Base UI equivalent. Don't force them
into a component just for consistency — document them as custom Tailwind instead:

- **Bottom navigation** (mobile tab bar with linear→bold icon swap on active state)
- **Hero / countdown card** (gradient + live day/hour/min countdown)
- **Horizontal carousel** (CSS scroll-snap only, no carousel library)
- **Stalls masonry grid** (fixed `columns-2`, not a component)
- **Schedule timeline** (hand-computed absolute-position hour grid with lane packing)
- **Auth / 404 full-bleed pages** (page-level gradient "threshold" screens)
- **Top app bar / `.glass` utility** (sticky blurred header — there's no shadcn "AppBar")

## Token source of truth

All colors, radii, shadows, and fonts come from `festiverse-theme.css` — a shadcn v4
"New York"-shaped CSS variable file (oklch values, `@theme inline`, chart/sidebar tokens,
`--shadow-glow` / `--shadow-action` and `--brand-secondary-*` as Festiverse-specific extensions).
Nothing was re-themed when moving from Radix to Base UI: only the primitive implementation
(`Dialog.Popup` vs `DialogContent`, `render` prop vs `asChild`, etc.) changed. Point any new
shadcn component's `className`s at these same tokens (`bg-card`, `text-muted-foreground`,
`border-border`, `shadow-glow`, `rounded-lg`, …) rather than hardcoded colors.
