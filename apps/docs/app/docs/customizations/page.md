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

If you want to make changes in default styling, update `tailwind.config.js` file. You can extend `theme` object provided by TailwindCSS to override our default themings.

## Colors

#### Customizing the default color palette for your project.

Rafty UI includes an expertly-crafted default color palette out-of-the-box that is a great starting point if you don’t have your own specific branding in mind.

{% callout title="Global Constants" %}
Few colors are globally constants like -

- Green for Success
- Amber for Warning
- Blue for Information
- Red for Error

But if you wish to override them, you can use `isBarebone` prop in the components through which you can apply your custom styling
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

We have made our padding classes separate from that of tailwind's default padding classes. You can put your custom values in our padding classes in order to make changes in whole theme and sizing of rafty components. Whereas, if you need to make changes to an individual component you have to do that on component level.

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

In case of border radius, we have worked with the default classes of TailwindCSS. So you can put values other than the values showed in the example (these are the default values as per TailwindCSS) to make changes in the overall theme and rafty components.

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
