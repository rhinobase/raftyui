import raftyPlugin from "@rafty/plugin";
import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "{components,app}/**/*.{ts,tsx,md}",
    "./node_modules/@rafty/{ui,corp}/dist/**/*.{js,cjs}",
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
  plugins: [tailwindTypography, raftyPlugin],
} satisfies Config;
