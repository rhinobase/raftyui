import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import swc from "@rollup/plugin-swc";
import terser from "@rollup/plugin-terser";
import pc from "picocolors";
import { defineConfig } from "rollup";
import copy from "rollup-plugin-copy";
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
  input: "./src/index.ts",
  output: [
    {
      dir: "./dist",
      format: "cjs",
      entryFileNames: "[name].cjs",
    },
    {
      dir: "./dist",
      format: "esm",
      entryFileNames: "[name].js",
    },
  ],
  external: regexesOfPackages,
  plugins: [
    typescript({ tsconfig: "./tsconfig.lib.json" }),
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
          src: ["./README.md", "./package.json"],
          dest: "./dist",
        },
      ],
    }),
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
