const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}",
    "../../libs/ui/src/**/*!(*.stories|*.spec).{ts,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "2rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.5rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-primary-50) / 1)",
          100: "rgb(var(--color-primary-100) / 1)",
          200: "rgb(var(--color-primary-200) / 1)",
          300: "rgb(var(--color-primary-300) / 1)",
          400: "rgb(var(--color-primary-400) / 1)",
          500: "rgb(var(--color-primary-500) / 1)",
          600: "rgb(var(--color-primary-600) / 1)",
          700: "rgb(var(--color-primary-700) / 1)",
          800: "rgb(var(--color-primary-800) / 1)",
          900: "rgb(var(--color-primary-900) / 1)",
          950: "rgb(var(--color-primary-950) / 1)",
        },
        secondary: {
          50: "rgb(var(--color-secondary-50) / 1)",
          100: "rgb(var(--color-secondary-100) / 1)",
          200: "rgb(var(--color-secondary-200) / 1)",
          300: "rgb(var(--color-secondary-300) / 1)",
          400: "rgb(var(--color-secondary-400) / 1)",
          500: "rgb(var(--color-secondary-500) / 1)",
          600: "rgb(var(--color-secondary-600) / 1)",
          700: "rgb(var(--color-secondary-700) / 1)",
          800: "rgb(var(--color-secondary-800) / 1)",
          900: "rgb(var(--color-secondary-900) / 1)",
          950: "rgb(var(--color-secondary-950) / 1)",
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
    require("../../libs/plugin/src/index"),
  ],
};
