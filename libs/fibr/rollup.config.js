const preserveDirectives = require("rollup-plugin-preserve-directives");
const nxConfig = require("@nx/react/plugins/bundle-rollup");
const terser = require("@rollup/plugin-terser");
const { visualizer } = require("rollup-plugin-visualizer");

const getFiles = require("../../scripts/get-files");

const extensions = [".js", ".ts", ".jsx", ".tsx"];
const excludeExtensions = [".stories.tsx"];

module.exports = (_config) => {
  const config = nxConfig(_config);

  config.preserveModules = true;
  config.plugins.push(
    preserveDirectives.default(), // For preserving "use client" directives
    visualizer(), // For visualizing bundle size
    terser(), // For minification
  );
  config.input = [
    config.input.index,
    ...getFiles("libs/fibr/src", extensions, excludeExtensions),
  ];

  return config;
};
