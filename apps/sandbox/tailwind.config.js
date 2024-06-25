/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["apps/sandbox/.storybook/preview.tsx", "packages/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("../../packages/plugin/src/index")],
};
