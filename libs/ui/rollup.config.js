const preserveDirectives = require("rollup-plugin-preserve-directives");
const terser = require("@rollup/plugin-terser");
const { visualizer } = require("rollup-plugin-visualizer");

const getFiles = require("../../scripts/get-files");

module.exports = (config) => {
  config.preserveModules = true;

  config.plugins.push(
    preserveDirectives.default(), // For preserving "use client" directives
    visualizer(), // For visualizing bundle size
    terser(), // For minification
  );

  config.input = [
    config.input.index,
    ...getFiles("libs/ui/src", ["integrations"]),
  ];

  return config;
};
