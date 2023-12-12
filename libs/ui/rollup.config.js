const preserveDirectives = require("rollup-plugin-preserve-directives");
const nxConfig = require("@nx/react/plugins/bundle-rollup");
const terser = require("@rollup/plugin-terser");

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
      terser(), // For minifing bundle
    ],
  };
};
