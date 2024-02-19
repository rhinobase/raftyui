import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../../../libs/ui/src/**/*.stories.tsx",
    "../../../libs/corp/src/**/*.stories.tsx",
    "../../../libs/icons/src/**/*.stories.tsx",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const mergedConfig = mergeConfig(config, {
      resolve: {
        alias: {
          "@rafty/ui": path.resolve(__dirname, "../../../libs/ui/src/index.ts"),
          "@rafty/shared": path.resolve(
            __dirname,
            "../../../libs/shared/src/index.ts",
          ),
        },
      },
    });

    return mergedConfig;
  },
};

export default config;
