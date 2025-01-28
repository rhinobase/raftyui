---
title: Customization
nextjs:
  metadata:
    title: Customization
    description: Rafty UI includes an expertly-crafted defaults that is a great starting point if you don’t have your own specific branding in mind.
    twitter:
      title: Customization
      images:
        url: https://rafty.rhinobase.io/api/og?title=Customization
    openGraph:
      title: Customization
      images:
        url: https://rafty.rhinobase.io/api/og?title=Customization
---

If you want to make changes to the default styling, update the `tailwind.config.js` file. You can extend the `theme` object provided by TailwindCSS to override our default theming.

## Colors

#### Customizing the default color palette for your project.

Customize the default color palette for your project. Rafty UI includes an expertly-crafted default color palette out-of-the-box, making it a great starting point if you don’t have your own specific branding in mind.

{% callout title="Global Constants" %}
Few colors are globally constant in components like -

- Green for Success
- Amber for Warning
- Blue for Information
- Red for Error

But if you wish to override them, you can use `isUnstyled` prop in the components through which you can apply your custom styling
{% /callout %}

```jsx
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    ...,
    "./node_modules/@rafty/ui/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
      },
    },
  },
  plugins: [
    ...,
    require("@rafty/plugin")
  ],
};
```
