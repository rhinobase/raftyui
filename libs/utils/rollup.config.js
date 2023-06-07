const nrwlConfig = require("@nrwl/react/plugins/bundle-rollup");

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    input: [
      config.input,
      "libs/utils/src/classNames",
      "libs/utils/src/context",
      "libs/utils/src/getValidChildren",
      "libs/utils/src/mergeRefs",
    ],
  };
};
