const preserveDirectives = require("rollup-plugin-preserve-directives");
const terser = require("@rollup/plugin-terser");
const { visualizer } = require("rollup-plugin-visualizer");
const glob = require("fast-glob");
const path = require("node:path");

module.exports = (config) => {
  config.preserveModules = true;

  const dir = config.input.index.slice(0, -8);
  const files = glob.sync("./**/index.{ts,js}", {
    cwd: dir,
  });

  config.input = Object.fromEntries(
    files.map((file) => [file.slice(0, -9) || "index", path.join(dir, file)]),
  );

  // console.log(
  //   JSON.stringify(
  //     Object.fromEntries(
  //       files.map((file) => {
  //         const filename = file.slice(0, -9);
  //         const entry = filename || "index";

  //         const isIndex = filename.length === 0;

  //         return [
  //           isIndex ? "." : `./${filename}`,
  //           {
  //             types: `${isIndex ? "." : `./${filename}`}/${entry}.esm.d.ts`,
  //             import: `./${entry}.esm.js`,
  //           },
  //         ];
  //       }),
  //     ),
  //   ),
  // );

  config.plugins.push(
    preserveDirectives.default(), // For preserving "use client" directives
    visualizer(), // For visualizing bundle size
    terser(), // For minification
  );

  return config;
};
