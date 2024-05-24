const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("node:path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["apps/docs/.storybook/preview.tsx", "packages/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("../../packages/plugin/src/index")],
};
