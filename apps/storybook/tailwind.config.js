const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}",
    ),
    join(__dirname, "libs/ui/src/**/*!(*.stories|*.spec).{ts,tsx}"),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [
    require("tailwindcss-animate"),
    require("../../libs/plugin/src/index"),
  ],
};
