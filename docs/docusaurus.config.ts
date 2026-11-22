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
        src: "img/favicon.svg",
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
      links: [
        {
          title: "Docs",
          items: [
            { label: "Introduction", to: "/" },
            { label: "Installation", to: "/installation" },
            { label: "Tokens", to: "/tokens" },
            { label: "Icons", to: "/icons" },
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
