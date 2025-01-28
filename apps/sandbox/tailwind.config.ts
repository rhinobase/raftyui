import raftyPlugin from "@rafty/plugin";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./.storybook/preview.tsx",
    "../../packages/{ui,corp}/**/*.{tsx,ts}",
  ],
  plugins: [raftyPlugin],
} satisfies Config;
