// @ts-check
// Docusaurus config for the Junction docs site.
//
// Docs are built with Docusaurus (React + MDX) and deployed to GitHub Pages
// at https://lifeatjntuh.github.io/junction/ via
// .github/workflows/deploy-pages.yml.
//
// LLM-friendly docs come from two published plugins, not custom code:
// - docusaurus-plugin-llms: writes llms.txt, llms-full.txt and a .md copy
//   of every page at build time.
// - docusaurus-plugin-copy-page-button: adds a "Copy page as Markdown"
//   button (plus Open in ChatGPT / Claude / Perplexity / Gemini) to every
//   docs page, pointing at the .md copies the llms plugin writes.
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Junction",
  tagline: "The brand design guidelines for LifeatJNTUH — colours, type, logo and rules, with the design system, the Social Media Kit and the App Design Kit.",
  favicon: "img/favicon.svg",

  // GitHub Pages (project site): https://lifeatjntuh.github.io/junction/
  url: "https://lifeatjntuh.github.io",
  baseUrl: "/junction/",

  organizationName: "lifeatjntuh",
  projectName: "junction",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Docs are served at the site root: /junction/ is the intro page.
          routeBasePath: "/",
          editUrl: "https://github.com/lifeatjntuh/junction/tree/main/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // blobmates/react is an optional peer of the library (a git-only
    // dependency, not on npm) and is NOT installed for the docs site.
    // The library dynamically imports it and falls back to a pastel
    // placeholder when it is absent; tell webpack the same, so the
    // docs build does not try to bundle it.
    function blobmatesIgnorePlugin() {
      return {
        name: "blobmates-ignore",
        configureWebpack() {
          return {
            resolve: {
              alias: { "blobmates/react": false },
            },
          };
        },
      };
    },
    [
      "docusaurus-plugin-llms",
      {
        // Writes llms.txt, llms-full.txt and one .md file per docs page.
        generateMarkdownFiles: true,
      },
    ],
    [
      "docusaurus-plugin-copy-page-button",
      {
        // The llms plugin already serves a .md copy of every page; point
        // the copy button's AI links at those copies instead of generating
        // a second set of markdown routes.
        markdownUrl: true,
      },
    ],
  ],

  themeConfig: {
    image: "img/favicon.svg",
    navbar: {
      title: "Junction",
      logo: {
        alt: "Junction logo",
        // Hot-pink square with a cream "J": the favicon (Plum square,
        // pink "J") blends into the Plum navbar and was effectively
        // invisible. Same asset in both colour modes — the navbar is
        // Plum in light and dark mode.
        src: "img/logo-navbar.svg",
        srcDark: "img/logo-navbar.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/lifeatjntuh/junction",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // The sidebar is hidden on mobile, so the footer is the bird-eye
      // view: it lists EVERY docs article, grouped by section in sidebar
      // order, so a reader on any device can reach any article from the
      // footer of any page. Keep this list in sync with sidebars.ts and
      // docs/docs/all-docs.md (the same list on one page).
      links: [
        {
          title: "Brand",
          items: [
            { label: "All docs", to: "/all-docs" },
            { label: "Junction", to: "/" },
            { label: "Brand", to: "/brand" },
            { label: "Colours", to: "/brand/colours" },
            { label: "Typography", to: "/brand/typography" },
            { label: "Logo", to: "/brand/logo" },
            { label: "Shapes", to: "/brand/shapes" },
            { label: "Photography", to: "/brand/photography" },
            { label: "Rules", to: "/brand/rules" },
          ],
        },
        {
          title: "Design System",
          items: [
            { label: "Design System", to: "/design-system" },
            { label: "Installation", to: "/installation" },
            { label: "Tokens", to: "/tokens" },
            { label: "Icons", to: "/icons" },
          ],
        },
        {
          title: "Components A–M",
          items: [
            { label: "Components", to: "/components" },
            { label: "Button", to: "/components/button" },
            { label: "ChipGroup", to: "/components/chip-group" },
            { label: "Container", to: "/components/container" },
            { label: "Field", to: "/components/field" },
            { label: "Heading", to: "/components/heading" },
            { label: "Input and Textarea", to: "/components/input" },
            { label: "Logo", to: "/components/logo" },
          ],
        },
        {
          title: "Components N–Z",
          items: [
            { label: "Panel", to: "/components/panel" },
            { label: "Reveal", to: "/components/reveal" },
            { label: "Sheet", to: "/components/sheet" },
            { label: "Tabs", to: "/components/tabs" },
            { label: "Tag", to: "/components/tag" },
            { label: "Text", to: "/components/text" },
            { label: "ThemeToggle", to: "/components/theme-toggle" },
            { label: "Toast", to: "/components/toast" },
          ],
        },
        {
          title: "Primitives",
          items: [
            { label: "cn", to: "/components/primitives/cn" },
            { label: "layoutScheduleEvents", to: "/components/primitives/layout-schedule-events" },
          ],
        },
        {
          title: "Social Media Kit",
          items: [
            { label: "Social Media Kit", to: "/social-media-kit" },
            { label: "Posts", to: "/social-media-kit/posts" },
            { label: "Carousel", to: "/social-media-kit/carousel" },
            { label: "Stories", to: "/social-media-kit/stories" },
          ],
        },
        {
          title: "App Design Kit",
          items: [
            { label: "App Design Kit", to: "/app-design-kit" },
            { label: "AppShell", to: "/app-design-kit/app-shell" },
            { label: "AppState and Skeleton", to: "/app-design-kit/app-state" },
            { label: "EventCard", to: "/app-design-kit/event-card" },
            { label: "ProfileCard", to: "/app-design-kit/profile-card" },
            { label: "BlobmateAvatar", to: "/app-design-kit/blobmate-avatar" },
            { label: "ScheduleGrid", to: "/app-design-kit/schedule-grid" },
            { label: "EventQuickCard and ScheduleEventBlock", to: "/app-design-kit/schedule-primitives" },
          ],
        },
        {
          title: "API reference",
          items: [
            { label: "API reference", to: "/api" },
          ],
        },
        {
          title: "LifeatJNTUH",
          items: [
            { label: "Website", href: "https://lifeatjntuh.web.app" },
            { label: "Design system", href: "https://lifeatjntuh.web.app/design-system" },
            { label: "GitHub", href: "https://github.com/lifeatjntuh/junction" },
          ],
        },
      ],
      copyright: `Junction — the brand design guidelines for LifeatJNTUH. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
