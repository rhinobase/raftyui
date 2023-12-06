const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");
const colors = require("tailwindcss/colors");

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
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.zinc,
      },
      padding: {
        none: "0px",
        xs: "1px",
        sm: "2px",
        base: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "28px",
        "5xl": "32px",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        base: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-right": {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
        "slide-left": {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
        enterFromRight: {
          from: { transform: "translate3d(200px,0,0)", opacity: 0 },
          to: { transform: "translate3d(0,0,0)", opacity: 1 },
        },
        enterFromLeft: {
          from: { transform: "translate3d(-200px,0,0)", opacity: 0 },
          to: { transform: "translate3d(0,0,0)", opacity: 1 },
        },
        exitToRight: {
          from: { transform: "translate3d(0,0,0)", opacity: 1 },
          to: { transform: "translate3d(200px,0,0)", opacity: 0 },
        },
        exitToLeft: {
          from: { transform: "translate3d(0,0,0)", opacity: 1 },
          to: { transform: "translate3d(-200px,0,0)", opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-right": "slide-right 0.4s",
        "slide-left": "slide-left 0.4s",
        enterFromRight: "enterFromRight 250ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
