# Junction → shadcn/ui (Base UI) Component Manifest

This file tells a coding agent exactly which component to reach for and how it's customized to
match Junction, instead of re-deriving the design from screenshots. Junction is the shared design
system powering the digital products and experiences built by **LifeatJNTUH**.

This repo is already set up — `components.json` points `tailwind.css` at
`src/styles/junction-theme.css`. To add more components from shadcn's registry:

```bash
npx shadcn@latest add <component>
```

> **Icons:** shadcn's CLI defaults new projects to `lucide-react`. Junction uses Iconify's Solar
> icon set (`<iconify-icon icon="solar:...">`) everywhere instead, loaded via CDN in `index.html`.
> `iconLibrary` stays `lucide` in `components.json` (the CLI requires a value), but when writing
> actual Junction UI, use `iconify-icon` elements with `solar:*` icon names, not `lucide-react`
> imports.

## Mapping table

| Pattern | shadcn component | Base UI primitive | File | Variant / customization |
|---|---|---|---|---|
| Register / CTA buttons | `Button` | — (plain element) | `button.tsx` | `variant="cta"` = `rounded-full` + `shadow-glow` (Junction-only, not stock shadcn). `variant="default"` for standard fills. |
| Secondary / outline buttons | `Button` | — | `button.tsx` | `variant="secondary"` / `variant="outline"` |
| Gradient role-action tiles (Admin/Organizer) | `Button` | — | `button.tsx` | Custom variants `gradientPurple` / `gradientOrange`, not in stock shadcn |
| Google sign-in | `Button` | — | `button.tsx` | Custom `variant="google"`: card bg, border, shadow-xs |
| Category / role / status tags | `Badge` | — | `badge.tsx` | Category color is a `className` override on top of `variant="default"`; roles use `variant="role"` (pill, bordered, uppercase) |
| Event/stall/login form fields | `Field`, `Input`, `Label` | `Field` | `field.tsx` | `Field.Root` wraps `Field.Label` + `Field.Control` (+ `Field.Description` / `Field.Error`) — a real accessible primitive, not a raw `<input>` |
| Event / featured cards | `Card` family | — | `card.tsx` | Standard shadcn Card shape; no primitive swap needed since Card has no interactive behavior |
| Day switcher (segmented pill) | `Tabs` | `Tabs` | `tabs.tsx` | `TabsIndicator` styled as a sliding pill (`variant="pill"`) |
| Filter chip row (Schedule/Stalls) | `ToggleGroup` + `Toggle` | `ToggleGroup`, `Toggle` | `toggle-group.tsx` | `toggleMultiple={false}` for single-select; pressed state via `data-[pressed]:bg-primary data-[pressed]:shadow-glow` |
| Admin underline tab bar | `Tabs` | `Tabs` | `tabs.tsx` | Same component, `variant="underline"` — 2px bottom border in `bg-primary` instead of a pill |
| Theme switcher | `DropdownMenu` (rendered via `Menu`) | `Menu` | `menu.tsx` | `Menu.Root > Trigger > Portal > Positioner > Popup > Item` — note Base UI's explicit `Positioner`, which Radix folds into `Content` |
| Schedule event popover | `Popover` | `Popover` | `popover.tsx` | `Popover.Root > Trigger > Portal > Positioner > Popup`; `data-[starting-style]` / `data-[ending-style]` drive enter/exit instead of Framer Motion |
| FAQ / detail accordion | `Accordion` | `Accordion` | `accordion.tsx` | Single-open (`openMultiple={false}`); ⚠️ verify the `data-panel-open` open-state attribute against current Base UI docs before shipping |
| "Fest dates" centered modal | `Dialog` | `Dialog` | `dialog.tsx` | `Dialog.Backdrop` + centered `Dialog.Popup` (`fixed`, `-translate-x-1/2 -translate-y-1/2`) |
| Register bottom sheet | `Sheet` (built on `Dialog`) | `Dialog` | `sheet.tsx` | Same `Dialog` primitive as the modal above — a Sheet is a `side="bottom"` style variant on `Dialog.Popup`, exactly how shadcn's own Sheet wraps Dialog |
| "Event registered!" toast | `Toast` | `Toast` | `toast.tsx` | `Toast.Provider` + `Toast.Viewport` + `useToastManager()`. ⚠️ Base UI's Toast shipped July 2026 — double-check the exact API against base-ui.com before relying on it in production |
| Loading skeleton card | `Skeleton` | — | `skeleton.tsx` | Plain `div` with `bg-muted animate-pulse rounded-md`, no primitive needed |

## Intentionally NOT mapped to a component (kept custom)

These have no shadcn/Base UI equivalent. Don't force them into a component for consistency —
they're documented here (and in the app's "Intentionally custom" section) as plain Tailwind:

- **Bottom navigation** — mobile tab bar with a linear→bold icon swap on the active state
- **Hero / countdown card** — gradient + live day/hour/minute countdown
- **Horizontal carousel** — CSS scroll-snap only, no carousel library
- **Stalls masonry grid** — fixed `columns-2`, not a component
- **Schedule timeline** — hand-computed absolute-position hour grid with lane packing
- **Auth / 404 full-bleed pages** — page-level gradient "threshold" screens
- **Top app bar / `.glass` utility** — sticky blurred header — there's no shadcn "AppBar"
- **Menu lists** (`src/sections/Foundations.tsx` → `MenuList`) — stacked full-width rows
  (icon-in-circle + label, chevron on the right) used for the Settings/Tickets/Notifications
  menu on the profile page. A plain `<button>` list, not a component.

## Layout & breakpoints

Junction's product surfaces are a mobile-first, single-column PWA — the app shell caps content
width even on desktop rather than expanding into a multi-column layout. See `LayoutFoundations`
in `src/sections/Foundations.tsx` for the container-width table (`max-w-3xl` main content,
`max-w-md` dialogs, `max-w-4xl` admin, `max-w-sm` login) and the specific responsive rules (fixed
`grid-cols-4` explore grid, fixed `columns-2` masonry, day-switcher layout swap at `md+`). Don't
introduce a desktop multi-column redesign — it doesn't exist in the source product.

## Named utility classes

Hand-written Tailwind-layer utilities, not components — see `UtilityPatterns` in
`src/sections/Foundations.tsx`:

| Class | What it does |
|---|---|
| `.glass` | 85% background + 12px backdrop blur — the top app bar |
| `.text-gradient` | Linear gradient clipped to text |
| `.press-effect` | `active:scale-[0.98]`, 200ms — the universal tap-feedback micro-interaction |
| `.no-scrollbar` | Hides scrollbars cross-browser while preserving native scroll |
| `.snap-x-mandatory` / `.snap-center` | CSS scroll-snap for the featured-events carousel |
| `.pb-safe` | `env(safe-area-inset-bottom)` — clears the iOS home indicator on the bottom nav |

Plus three keyframe animations: `animate-fade-in`, `animate-slide-up`, `animate-slide-down`.

## Not present in source — do not fabricate

These common web-app patterns don't exist anywhere in the product this system was
reverse-engineered from. If a task calls for one, treat it as new scope, not a gap in this
library to fill from convention:

- Desktop mega menu (no desktop-specific nav — the same shell scales down)
- Breadcrumbs
- Pagination controls (lists are fully loaded / infinite, not paged)
- Data tables (admin lists use stacked cards, not `<table>`)
- Marketing footer (this is an app shell, not a marketing site)
- Image gallery / lightbox component
- **Tooltip component** — Popover and Menu exist; no Tooltip primitive is used anywhere
- Slider/carousel library (the carousel is CSS scroll-snap only)

## Token source of truth

All colors, radii, shadows, and fonts come from `src/styles/junction-theme.css` — a shadcn v4
"New York"-shaped CSS variable file (oklch values, `@theme inline`, chart/sidebar tokens,
`--shadow-glow` / `--shadow-action` and `--brand-secondary-*` as Junction-specific extensions).
The primitive implementation changed (Base UI's `Dialog.Popup` + `render` prop instead of Radix's
`DialogContent` + `asChild`), but nothing was re-themed. Point any new shadcn component's
`className`s at these same tokens (`bg-card`, `text-muted-foreground`, `border-border`,
`shadow-glow`, `rounded-lg`, …) rather than hardcoded colors.
