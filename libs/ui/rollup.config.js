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
      "libs/ui/src/button",
      "libs/ui/src/card",
      "libs/ui/src/checkbox",
      "libs/ui/src/combobox",
      "libs/ui/src/dialog",
      "libs/ui/src/drawer",
      "libs/ui/src/field",
      "libs/ui/src/input",
      "libs/ui/src/kbd",
      "libs/ui/src/list",
      "libs/ui/src/menu",
      "libs/ui/src/navigation-menu",
      "libs/ui/src/popover",
      "libs/ui/src/progress",
      "libs/ui/src/radio",
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
    ],
  };
};
