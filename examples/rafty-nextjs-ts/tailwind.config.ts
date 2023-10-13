import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@rafty/ui/**/*.{js,ts,jsx,tsx,cjs}",
  ],
  theme: {},
  plugins: [require("@rafty/plugin")],
};
export default config;
