const preserveDirectives = require("rollup-plugin-preserve-directives");
const nxConfig = require("@nx/react/plugins/bundle-rollup");

module.exports = (config) => {
  nxConfig(config);
  return {
    ...config,
    output: {
      ...config.output,
      preserveModules: true,
    },
    plugins: [...config.plugins, preserveDirectives.default()],
    input: [
      config.input,
      "libs/utils/src/classNames",
      "libs/utils/src/context",
      "libs/utils/src/getValidChildren",
      "libs/utils/src/mergeRefs",
      "libs/utils/src/useBreakpointValue",
    ],
  };
};
