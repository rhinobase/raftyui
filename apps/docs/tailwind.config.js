/** @type {import('tailwindcss').Config} */

const sharedConfig = require("@rhinobase/ui/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  prefix: "",
  darkMode: ["class", '[data-mode="dark"]'],
  content: [
    "../../packages/core/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
