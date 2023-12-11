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
Few colors are globally constants like -

- Green for Success
- Amber for Warning
- Blue for Information
- Red for Error

But if you wish to override them, you can use `isUnstyled` prop in the components through which you can apply your custom styling
{% /callout %}

```jsx
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

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

## Padding

We have separated our padding classes from Tailwind’s default padding classes. You can input your custom values into our padding classes to make changes to the entire theme and sizing of Rafty components. However, if you need to modify an individual component, you should do that at the component level.

```jsx
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    ...,
    "./node_modules/@rafty/ui/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [
    ...,
    require("@rafty/plugin")
  ],
};
```

## Border Radius

For border radius, we’ve utilized the default classes of TailwindCSS. Feel free to use values different from those shown in the example (which are TailwindCSS’s default values) to customize the overall theme and Rafty components.

```jsx
const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    ...,
    "./node_modules/@rafty/ui/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
      borderRadius: {
        none: "0px",
        sm: "2px",
        base: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        full: "9999px",
      },
    },
  },
 plugins: [
    ...,
    require("@rafty/plugin")
  ],
};
```
