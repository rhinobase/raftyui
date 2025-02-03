import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: "Rafty UI",
    brandImage: "/logo.png",
    brandUrl: "https://rafty.rhinobase.io",
  }),
});
