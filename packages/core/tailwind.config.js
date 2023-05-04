/** @type {import('tailwindcss').Config} */
import addon from "@rafty/plugin";

export const darkMode = ["class", '[data-mode="dark"]'];
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./stories/**/*.{js,ts,jsx,tsx}",
  "./.storybook/**/*.{js,ts,jsx,tsx}",
];
export const plugins = [addon];
