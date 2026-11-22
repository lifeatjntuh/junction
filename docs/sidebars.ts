import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting started",
      items: ["intro", "installation"],
    },
    {
      type: "category",
      label: "Foundations",
      items: ["tokens", "icons"],
    },
    {
      type: "category",
      label: "Components",
      items: [
        "components/button",
        "components/panel",
        "components/tag",
        "components/heading-text",
        "components/field",
        "components/tabs",
        "components/sheet",
        "components/toast",
        "components/theme-toggle",
        "components/logo-container",
        "components/chip-group",
        "components/reveal",
        "components/app-kit",
      ],
    },
    "api",
  ],
};

export default sidebars;
