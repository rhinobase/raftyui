const preserveDirectives = require("rollup-plugin-preserve-directives");
const nxConfig = require("@nx/react/plugins/bundle-rollup");
const terser = require("@rollup/plugin-terser");
// const { visualizer } = require("rollup-plugin-visualizer");

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
      // visualizer(), // For visualizing bundle size
      terser(), // For minifing bundle
    ],
    input: [
      config.input.index,
      "libs/ui/src/accordion",
      "libs/ui/src/alert",
      "libs/ui/src/alert-dialog",
      "libs/ui/src/avatar",
      "libs/ui/src/badge",
      "libs/ui/src/button",
      "libs/ui/src/card",
      "libs/ui/src/checkbox",
      "libs/ui/src/command",
      "libs/ui/src/context-menu",
      "libs/ui/src/date-picker",
      "libs/ui/src/dialog",
      "libs/ui/src/drawer",
      "libs/ui/src/field",
      "libs/ui/src/hover-card",
      "libs/ui/src/input",
      "libs/ui/src/kbd",
      "libs/ui/src/list",
      "libs/ui/src/menu",
      "libs/ui/src/navigation-menu",
      "libs/ui/src/popover",
      "libs/ui/src/progress",
      "libs/ui/src/radio",
      "libs/ui/src/scrollarea",
      "libs/ui/src/select",
      "libs/ui/src/skeleton",
      "libs/ui/src/spinner",
      "libs/ui/src/stat",
      "libs/ui/src/switch",
      "libs/ui/src/tab",
      "libs/ui/src/table",
      "libs/ui/src/tag",
      "libs/ui/src/tag-field",
      "libs/ui/src/text",
      "libs/ui/src/textarea",
      "libs/ui/src/toast",
      "libs/ui/src/toggle-group",
      "libs/ui/src/tooltip",
      "libs/ui/src/utils",
    ],
  };
};
