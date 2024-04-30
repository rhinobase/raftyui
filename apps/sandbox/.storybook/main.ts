import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.tsx",
    "../../../packages/icons/src/**/*.stories.tsx",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "apps/sandbox/vite.config.ts",
      },
    },
  },
  staticDirs: ["../public"],
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const mergedConfig = mergeConfig(config, {
      resolve: {
        alias: {
          "@rafty/ui": path.resolve(
            __dirname,
            "../../../packages/ui/src/index.ts",
          ),
          "@rafty/icons": path.resolve(
            __dirname,
            "../../../packages/icons/src/index.ts",
          ),
        },
      },
    });

    return mergedConfig;
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
