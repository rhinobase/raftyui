const nrwlConfig = require("@nrwl/react/plugins/bundle-rollup");

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    input: [
      config.input,
      "libs/ui/src/accordion",
      "libs/ui/src/alert",
      "libs/ui/src/alertdialog",
    ],
  };
};
