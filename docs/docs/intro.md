---
slug: /
title: Introduction
description: Junction is the shared design system for LifeatJNTUH, packaged as the npm package @lifeatjntuh/junction.
---

# Junction

Junction is the shared design system powering the digital products and
experiences built by LifeatJNTUH — the website, Event Tracker and Buddy
apps. It is the design system from the @lifeatjntuh website, packaged as
an npm package:

- **Source:** `lifeatjntuh-admin/website` — `src/styles/globals.css` and
  `src/components/pages/design-system/page.tsx` (+ `app-kit.tsx`), and the
  website's `src/components/ui/` and `src/components/app/` components.
- **Live reference:** https://lifeatjntuh.web.app/design-system
- **Package:** `@lifeatjntuh/junction` (0.1.0, not published yet — see
  [Installation](./installation.md)).

## The look

One look for the site and our socials:

- **Colours:** Plum `#1f1235`, Cream `#fff7ee`, Hot pink `#f0208f`,
  Orange `#ff6a1f`, Violet `#7b5cff`, plus six pastels.
- **Type:** Fredoka for website headlines, Bricolage Grotesque for social
  headlines, Plus Jakarta Sans for body, Lexend for app screens.
- **Shapes:** 32px panel corners, fully round buttons and chips, soft
  shadows, no thick outlines.
- **Icons:** Solar, linear — via `@solar-icons/react` and
  `@iconify/react` (`solar:` icons). See [Icons](./icons.md).

## What is in the package

- **14 UI parts:** Button, Panel, Tag, Heading, Text, Field (+ Input,
  Textarea), Tabs, Sheet, Toast, ThemeToggle, Logo, Container, ChipGroup,
  Reveal.
- **App kit:** AppShell, AppTopBar, AppBottomNav, AppMenuRow, AppState,
  Skeleton, EventCard, ProfileCard, ScheduleGrid.
- **Tokens as code:** typed `colors`, `pastels`, `fonts`, `radii`,
  `shadows` — see [Tokens](./tokens.md).

## LLM-friendly docs

Every page on this site has a **Copy as Markdown** button at the top, so
you can paste a page straight into an AI chat. The whole docs set is also
available as plain text:

- [llms.txt](https://lifeatjntuh.github.io/junction/llms.txt) — index of every page
- [llms-full.txt](https://lifeatjntuh.github.io/junction/llms-full.txt) — everything in one file

## Next steps

- [Install Junction](./installation.md)
- [Tokens: colours, fonts, shapes](./tokens.md)
- [Browse components](./components/button.md)
