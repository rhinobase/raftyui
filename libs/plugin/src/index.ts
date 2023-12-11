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
      plugins: [require("tailwindcss-animate")],
    },
  },
);
