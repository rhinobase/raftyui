/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "../../packages/core/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#D0E6FF",
          100: "#B9DAFF",
          200: "#A2CDFF",
          300: "#7AB8FF",
          400: "#2E90FF",
          500: "#0078FF",
          600: "#0063D1",
          700: "#0052AC",
          800: "#003C7E",
          900: "#002C5C",
        },
        secondary: colors.zinc,
        error: colors.red,
        warning: colors.yellow,
        info: {
          50: "#D0E6FF",
          100: "#B9DAFF",
          200: "#A2CDFF",
          300: "#7AB8FF",
          400: "#2E90FF",
          500: "#0078FF",
          600: "#0063D1",
          700: "#0052AC",
          800: "#003C7E",
          900: "#002C5C",
        },
        success: colors.green,
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
        "slide-right": {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
        "slide-left": {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
      },
      animation: {
        "slide-right": "slide-right 0.4s",
        "slide-left": "slide-left 0.4s",
      },
    },
  },
};
