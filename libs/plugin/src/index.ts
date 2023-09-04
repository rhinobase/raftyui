/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = plugin(
  function () {
    return undefined;
  },
  {
    theme: {
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
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "slide-right": "slide-right 0.4s",
            "slide-left": "slide-left 0.4s",
          },
        },
      },
      plugins: [require("tailwindcss-animate")],
    },
  },
);
