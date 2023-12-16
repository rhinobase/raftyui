const preserveDirectives = require("rollup-plugin-preserve-directives");
const nxConfig = require("@nx/react/plugins/bundle-rollup");

module.exports = (_config) => {
  const config = nxConfig(_config);

  return {
    ...config,
    output: {
      ...config.output,
      preserveModules: true,
    },
    plugins: [
      ...config.plugins,
      preserveDirectives.default(), // For preserving "use client" directives
    ],
  };
};
