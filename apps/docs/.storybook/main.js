const path = require("path");

module.exports = {
  stories: ["../../../packages/core/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    interactionsDebugger: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@rhinobase/core",
            replacement: path.resolve(__dirname, "../../../packages/core/"),
          },
        ],
      },
    };
  },
};
