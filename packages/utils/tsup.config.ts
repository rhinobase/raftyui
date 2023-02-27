import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/**/!(*.test).ts?(x)"],
  format: ["esm"],
  dts: true,
  minify: true,
  clean: true,
  ...options,
}));
