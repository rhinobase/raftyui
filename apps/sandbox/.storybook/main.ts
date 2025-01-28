import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../../../packages/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./vite.config.ts",
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
          "@rafty/corp": path.resolve(
            __dirname,
            "../../../packages/corp/src/index.ts",
          ),
        },
      },
    });

    return mergedConfig;
  },
};

export default config;
