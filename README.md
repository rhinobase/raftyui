# Rafty UI

## React + Accessibility + Tailwind CSS

<a href="https://bundlephobia.com/package/@rafty/ui">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/%40rafty%2Fui?style=flat&colorA=111111&colorB=ffffff">
</a>
<a aria-label="LICENSE" href="https://github.com/rhinobase/raftyui/blob/main/LICENSE">
  <img alt="LICENSE" src="https://img.shields.io/github/license/rhinobase/raftyui?style=flat&colorA=111111&colorB=ffffff">
</a>
<a aria-label="Downloads" href="https://www.npmjs.com/package/@rafty/ui">
  <img alt="Downloads" src="https://img.shields.io/npm/dm/@rafty/ui.svg?style=flat&colorA=111111&colorB=ffffff">
</a>
<a aria-label="GitHub Repo stars" href="https://github.com/rhinobase/raftyui">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/rhinobase/raftyui?style=flat&colorA=111111&colorB=ffffff">
</a>

Rafty UI is a comprehensive library of accessible, reusable, and composable React components that streamlines the development of modern web applications and websites. The library offers a diverse range of components that can be easily combined to build complex user interfaces while adhering to accessibility best practices.

---

## Features

- **Works out of the box** - Rafty UI contains polished React components that work out of the box.

- **Flexible & composable** - Rafty UI components are built on top of a Radix UI Primitive and Tailwind CSS for endless composability 🧰.

- **SSR** - Rafty UI components support React SSR functionality 😍.

- **Dark Mode** - All components are dark mode compatible 🌙.

## Looking for the documentation?

Check it out at [rafty.rhinobase.io](https://rafty.rhinobase.io)

## Quick start

Rafty UI is made up of multiple components and tools that you can import one by one.

### Installing Rafty UI

To use Rafty UI in your project, run one of the following commands in your terminal:

```sh
npm add @rafty/ui
# or
yarn add @rafty/ui
# or
pnpm add @rafty/ui
```

### Setup

For the styling to work in `@rafty/ui`, you must make a few changes to your `tailwind.config.js` file.

First, install the `@rafty/plugin` package as devDependencies

```sh
npm add -D @rafty/plugin
# or
yarn add -D @rafty/plugin
# or
pnpm add -D @rafty/plugin
```

And in your `tailwind.config.js` file

```js
module.exports = {
  darkMode: "class",
  content: [
    // ...,
    "./node_modules/@rafty/**/*.js",
  ],
  theme: {
    extend: {
      // (Optional)
      // Extend the default configuration
      colors: {
        primary: colors.purple,
        // ...,
      },
    },
  },
  plugins: [
    // ...,
    require("@rafty/plugin"),
  ],
};
```

## Connect with us

Whether you're a beginner or an advanced Rafty UI user, joining our community is the best way to connect with like-minded people who build great products with the library.

### Contributing

Feel like contributing? That's awesome! We have a [contributing guide](https://github.com/rhinobase/raftyui/blob/main/CONTRIBUTING.md) to help guide you.

### Join the community

Connect with a vibrant community of developers, and designers on Discord at [discord.gg/rhinobase](https://discord.gg/YtzxUfCk8c). Share your experiences, exchange insights, and shape the evolution of @rafty/ui.

Follow us on Twitter for the latest news [@rhinobaseio](https://twitter.com/rhinobaseio)
