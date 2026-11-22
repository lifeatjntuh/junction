/**
 * Junction design tokens, as a typed first-class API.
 *
 * These values are the single source of truth for the design system, taken
 * from the @lifeatjntuh website design system
 * (lifeatjntuh-admin/website, src/styles/globals.css and
 * src/components/pages/design-system/page.tsx).
 * The same values also live as CSS variables in the theme stylesheet
 * (import "@lifeatjntuh/junction/theme"); use the CSS variables in
 * stylesheets and these constants in JavaScript/TypeScript (for example
 * chart colours, canvas drawing, or meta theme-color).
 *
 * Prefer the tokens over hardcoded hex values in consuming apps.
 */

/** Core brand colours. */
export const colors = {
  /** Plum — text and dark panels. */
  plum: "#1f1235",
  /** Cream — page background. */
  cream: "#fff7ee",
  /** Hot pink — main buttons and highlights. */
  hotPink: "#f0208f",
  /** Orange — ticker and second accent. */
  orange: "#ff6a1f",
  /** Violet — small accents only. */
  violet: "#7b5cff",
} as const;

export type ColorName = keyof typeof colors;

/** Pastel panel palette (one pastel per post/panel). */
export const pastels = {
  pink: "#ffc9e6",
  lime: "#dcf58a",
  blue: "#c9e0ff",
  yellow: "#fff27a",
  lavender: "#ddd2ff",
  peach: "#ffd6bd",
} as const;

export type PastelName = keyof typeof pastels;

/** Typefaces, by job. */
export const fonts = {
  /** Website headlines — Fredoka, 600–700, sentence case. */
  heading: "Fredoka",
  /** Social headlines — Bricolage Grotesque, extra bold, condensed, all caps. */
  social: "Bricolage Grotesque",
  /** Body text, buttons, chips and labels — Plus Jakarta Sans. */
  body: "Plus Jakarta Sans",
  /** App screens (Event Tracker, Buddy apps) — Lexend. */
  app: "Lexend",
  mono: "ui-monospace, monospace",
} as const;

export type FontName = keyof typeof fonts;

/** Corner radii. Panels and cards are 32px; buttons and chips are fully round. */
export const radii = {
  /** Base radius (1.5rem). */
  base: "1.5rem",
  /** Panels and cards: 32px. */
  card: "2rem",
  /** Photos inside cards: 16–24px. */
  photo: "1.25rem",
  /** Buttons, chips and inputs: fully round. */
  pill: "999px",
  /** App cards: 1rem. */
  app: "1rem",
} as const;

/** Shadows. Soft and wide, never hard; glow/action are for the one main button. */
export const shadows = {
  appXs: "0px 2px 10px -2px rgb(31 18 53 / 0.04)",
  appSm: "0px 4px 20px -2px rgb(31 18 53 / 0.05)",
  appMd: "0px 4px 20px -2px rgb(31 18 53 / 0.07)",
  appLg: "0px 8px 28px -4px rgb(31 18 53 / 0.09)",
  appXl: "0px 12px 36px -4px rgb(31 18 53 / 0.12)",
  /** Pink glow for the main action on a screen. */
  glow: "0px 4px 20px -2px rgb(240 32 143 / 0.28)",
  action: "0px 8px 24px -4px rgb(240 32 143 / 0.4)",
} as const;

/** The whole token set, in one typed object. */
export const tokens = {
  colors,
  pastels,
  fonts,
  radii,
  shadows,
} as const;

export type JunctionTokens = typeof tokens;
