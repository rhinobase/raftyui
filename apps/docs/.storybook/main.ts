import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  core: { disableTelemetry: true, builder: "@storybook/builder-vite" },
  stories: ["../stories/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "apps/docs/vite.config.ts",
      },
    },
  },
};

export default config;
