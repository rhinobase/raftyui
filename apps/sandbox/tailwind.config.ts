import type { Config } from "tailwindcss";
import raftyPlugin from "../../packages/plugin/src/index";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./.storybook/preview.tsx",
    "../../packages/{ui,corp}/**/*.{tsx,ts}",
  ],
  plugins: [raftyPlugin],
} satisfies Config;
