import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@rafty/plugin",
      formats: ["es", "umd"],
      fileName: (format) => `lib.${format}.js`,
    },
  },
});
