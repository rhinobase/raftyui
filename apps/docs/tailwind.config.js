const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "{src,components,app}/**/*!(*.stories|*.spec).{ts,tsx,md,html}",
    "apps/docs/.storybook/preview.tsx",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-primary-50))",
          100: "rgb(var(--color-primary-100))",
          200: "rgb(var(--color-primary-200))",
          300: "rgb(var(--color-primary-300))",
          400: "rgb(var(--color-primary-400))",
          500: "rgb(var(--color-primary-500))",
          600: "rgb(var(--color-primary-600))",
          700: "rgb(var(--color-primary-700))",
          800: "rgb(var(--color-primary-800))",
          900: "rgb(var(--color-primary-900))",
          950: "rgb(var(--color-primary-950))",
        },
        secondary: {
          50: "rgb(var(--color-secondary-50))",
          100: "rgb(var(--color-secondary-100))",
          200: "rgb(var(--color-secondary-200))",
          300: "rgb(var(--color-secondary-300))",
          400: "rgb(var(--color-secondary-400))",
          500: "rgb(var(--color-secondary-500))",
          600: "rgb(var(--color-secondary-600))",
          700: "rgb(var(--color-secondary-700))",
          800: "rgb(var(--color-secondary-800))",
          900: "rgb(var(--color-secondary-900))",
          950: "rgb(var(--color-secondary-950))",
        },
      },
      fontFamily: {
        sans: "var(--font-inter)",
        display: ["var(--font-lexend)", { fontFeatureSettings: '"ss01"' }],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("../../packages/plugin/src/index"),
  ],
};
