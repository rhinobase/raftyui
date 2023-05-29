/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { join } from "path";

export default defineConfig({
  cacheDir: "../../node_modules/.vite/core",

  plugins: [
    dts({
      entryRoot: "src",
      tsConfigFilePath: join(__dirname, "tsconfig.lib.json"),
      skipDiagnostics: true,
    }),
    react(),
    viteTsConfigPaths({
      root: "../../",
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    ssr: true,
    target: "esnext",
    lib: {
      entry: "src/index.ts",
      name: "core",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
