import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// Junction is the brand design guidelines for LifeatJNTUH. The design
// system (the @lifeatjntuh/junction package) is one part of it,
// alongside the Social Media Kit and the App Design Kit — not the
// whole site. The sidebar reflects that: Brand first, then the three
// parts, then the API reference.
const sidebars: SidebarsConfig = {
  docs: [
    // All docs first: the page was not in the sidebar, so it rendered
    // with no sidebar, full-width, and its "On this page" TOC
    // overlapped the intro text. Listing it here gives it the normal
    // docs layout (sidebar + content + TOC) on desktop and mobile.
    "all-docs",
    {
      type: "category",
      label: "Brand",
      items: [
        "intro",
        "brand/index",
        "brand/colours",
        "brand/typography",
        "brand/logo",
        "brand/shapes",
        "brand/photography",
        "brand/rules",
      ],
    },
    {
      type: "category",
      label: "Design System",
      items: [
        "design-system/index",
        "installation",
        "tokens",
        "icons",
        {
          type: "category",
          label: "Components",
          items: [
            "components/index",
            "components/button",
            "components/panel",
            "components/tag",
            "components/heading",
            "components/text",
            "components/field",
            "components/input",
            "components/tabs",
            "components/sheet",
            "components/toast",
            "components/theme-toggle",
            "components/logo",
            "components/container",
            "components/chip-group",
            "components/reveal",
            {
              type: "category",
              label: "Primitives",
              items: [
                "components/primitives/cn",
                "components/primitives/layout-schedule-events",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Social Media Kit",
      items: [
        "social-media-kit/index",
        "social-media-kit/posts",
        "social-media-kit/carousel",
        "social-media-kit/stories",
      ],
    },
    {
      type: "category",
      label: "App Design Kit",
      items: [
        "app-design-kit/index",
        "app-design-kit/app-shell",
        "app-design-kit/app-state",
        "app-design-kit/event-card",
        "app-design-kit/profile-card",
        "app-design-kit/blobmate-avatar",
        "app-design-kit/schedule-grid",
        "app-design-kit/schedule-primitives",
      ],
    },
    "api",
  ],
};

export default sidebars;
