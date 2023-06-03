const nrwlConfig = require("@nrwl/react/plugins/bundle-rollup");
// const pkg = require("./package.json");

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);
  return {
    ...nxConfig,
    // output: [
    //   ...nxConfig.output,
    //   { file: "./dist/libs/ui/" + pkg.main, format: "cjs" },
    //   { file: "./dist/libs/ui/" + pkg.module, format: "es" },
    // ],
  };
};
