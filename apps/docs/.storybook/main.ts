import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: [
    "../../../libs/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../libs/corp/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../../libs/fibr/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
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
