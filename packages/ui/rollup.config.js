import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import swc from "@rollup/plugin-swc";
import terser from "@rollup/plugin-terser";
import pc from "picocolors";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
import preserveDirectives from "rollup-plugin-preserve-directives";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json" with { type: "json" };

const externalPackages = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
// Creating regexes of the packages to make sure subpaths of the
// packages are also treated as external
const regexesOfPackages = externalPackages.map(
  (packageName) => new RegExp(`^${packageName}(\/.*)?`),
);

export default defineConfig({
  input: {
    index: "./src/index.ts",
    accordion: "./src/accordion/index.ts",
    alert: "./src/alert/index.ts",
    "alert-dialog": "./src/alert-dialog/index.ts",
    avatar: "./src/avatar/index.ts",
    "avatar-group": "./src/avatar-group/index.ts",
    badge: "./src/badge/index.ts",
    breadcrumbs: "./src/breadcrumbs/index.ts",
    button: "./src/button/index.ts",
    calendar: "./src/calendar/index.ts",
    card: "./src/card/index.ts",
    checkbox: "./src/checkbox/index.ts",
    "color-picker": "./src/color-picker/index.ts",
    command: "./src/command/index.ts",
    "context-menu": "./src/context-menu/index.ts",
    "currency-input": "./src/currency-input/index.ts",
    "date-picker": "./src/date-picker/index.ts",
    dialog: "./src/dialog/index.ts",
    drawer: "./src/drawer/index.ts",
    "editable-number": "./src/editable-number/index.ts",
    "editable-text": "./src/editable-text/index.ts",
    "editable-textarea": "./src/editable-textarea/index.ts",
    "error-message": "./src/error-message/index.ts",
    "field-control": "./src/field-control/index.ts",
    "field-wrapper": "./src/field-wrapper/index.ts",
    "file-upload": "./src/file-upload/index.ts",
    hooks: "./src/hooks/index.ts",
    "hover-card": "./src/hover-card/index.ts",
    "input-field": "./src/input-field/index.ts",
    "input-group": "./src/input-group/index.ts",
    kbd: "./src/kbd/index.ts",
    label: "./src/label/index.ts",
    list: "./src/list/index.ts",
    menu: "./src/menu/index.ts",
    menubar: "./src/menubar/index.ts",
    "navigation-menu": "./src/navigation-menu/index.ts",
    "password-field": "./src/password-field/index.ts",
    "percentage-input": "./src/percentage-input/index.ts",
    "pin-input": "./src/pin-input/index.ts",
    popover: "./src/popover/index.ts",
    progress: "./src/progress/index.ts",
    radio: "./src/radio/index.ts",
    "range-picker": "./src/range-picker/index.ts",
    rating: "./src/rating/index.ts",
    scrollarea: "./src/scrollarea/index.ts",
    "search-field": "./src/search-field/index.ts",
    "segmented-control": "./src/segmented-control/index.ts",
    select: "./src/select/index.ts",
    skeleton: "./src/skeleton/index.ts",
    slider: "./src/slider/index.ts",
    spinner: "./src/spinner/index.ts",
    stat: "./src/stat/index.ts",
    stepper: "./src/stepper/index.ts",
    switch: "./src/switch/index.ts",
    tab: "./src/tab/index.ts",
    table: "./src/table/index.ts",
    tag: "./src/tag/index.ts",
    "tag-field": "./src/tag-field/index.ts",
    text: "./src/text/index.ts",
    textarea: "./src/textarea/index.ts",
    timeline: "./src/timeline/index.ts",
    toast: "./src/toast/index.ts",
    "toggle-group": "./src/toggle-group/index.ts",
    tooltip: "./src/tooltip/index.ts",
    "tree-view": "./src/tree-view/index.ts",
    types: "./src/types/index.ts",
    utils: "./src/utils/index.ts",
  },
  output: [
    {
      dir: "./dist",
      format: "cjs",
      entryFileNames: "[name].cjs",
      chunkFileNames: "[name]-[hash].cjs",
      preserveModules: true,
    },
    {
      dir: "./dist",
      format: "esm",
      entryFileNames: "[name].js",
      chunkFileNames: "[name]-[hash].js",
      preserveModules: true,
    },
  ],
  external: regexesOfPackages,
  plugins: [
    typescript({ tsconfig: "./tsconfig.build.json" }),
    nodeResolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    swc({
      swc: {
        jsc: {
          target: "es2017",
          parser: {
            syntax: "typescript",
            decorators: true,
            dynamicImport: true,
          },
          transform: {
            decoratorMetadata: true,
            legacyDecorator: true,
          },
          keepClassNames: true,
          externalHelpers: true,
          loose: true,
        },
        module: {
          type: "es6",
        },
        minify: true,
        sourceMaps: false,
        exclude: ["./**/*.stories.tsx?$"],
      },
    }),
    commonjs(),
    {
      name: "rollup-plugin-nx-analyzer",
      renderChunk(source, chunk) {
        const sourceBytes = formatBytes(source.length);
        const fileName = chunk.fileName;
        console.info(`  ${pc.bold(fileName)} ${pc.cyan(sourceBytes)}`);
      },
    },
    copy({
      hook: "writeBundle",
      targets: [
        {
          src: ["../../README.md", "./package.json"],
          dest: "./dist",
        },
        {
          src: ["./dist/**/*index.d.ts"],
          dest: ".",
          rename: (_name, _extension, fullPath) =>
            fullPath.replace(/index.d.ts$/, "index.d.cts"),
          transform: (content) => content.toString().replace(/.js";/g, '";'),
        },
      ],
    }),
    preserveDirectives(),
    terser(),
  ],
});

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 Byte";
  const k = 1000;
  const dm = 3;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Number.parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};
