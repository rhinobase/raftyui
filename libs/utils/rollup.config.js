const nxConfig = require("@nx/react/plugins/bundle-rollup");
const banner = require("rollup-plugin-banner2");

module.exports = (config) => {
  nxConfig(config);
  return {
    ...config,
    plugins: [...config.plugins, banner(() => "'use client';\n")],
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
