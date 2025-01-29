import raftyPlugin from "@rafty/plugin";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./.storybook/preview.tsx",
    "../../packages/{ui,corp}/src/**/*.{ts,tsx}",
  ],
  plugins: [raftyPlugin],
} satisfies Config;
