const nxConfig = require("@nx/react/plugins/bundle-rollup");

module.exports = (config) => {
  nxConfig(config);
  return {
    ...config,
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
