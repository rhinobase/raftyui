# Rafty UI

## React + Accessibility + Tailwind CSS

![Bundle Size](https://badgen.net/bundlephobia/minzip/@rafty/ui) ![LICENSE](https://img.shields.io/github/license/rhinobase/raftyui) ![Downloads](https://img.shields.io/npm/dm/@rafty/ui.svg?style=flat) ![Stars](https://badgen.net/github/stars/rhinobase/raftyui)

Rafty UI is a comprehensive library of accessible, reusable, and composable React components that streamlines the development of modern web applications and websites. The library offers a diverse range of components that can be easily combined to build complex user interfaces while adhering to accessibility best practices.

---

## Features

- Works out of the box. Rafty UI contains polished React components that work out of the box.

- Flexible & composable: Rafty UI components are built on top of a Radix UI Primitive and Tailwind CSS for endless composability 🧰.

- SSR: Rafty UI components support React SSR functionality 😍.

- Dark Mode: All components are dark mode compatible 🌙.

## Looking for the documentation?

Check it out at [rafty.rhinobase.io](https://rafty.rhinobase.io)

## Quick start

Rafty UI is made up of multiple components and tools that you can import one by one.

### Installing Rafty UI

To use Rafty UI in your project, run one of the following commands in your terminal:

```sh
npm i @rafty/ui
# or
yarn add @rafty/ui
# or
pnpm i @rafty/ui
```

### Setup

For the styling to work in `@rafty/ui`, you must make a few changes to your `tailwind.config.js` file.

First, install the `@rafty/plugin` package as devDependencies

```sh
npm i -D @rafty/plugin
```

And in your `tailwind.config.js` file

```js
module.exports = {
  content: [
    ...,
    "./node_modules/@rafty/ui/**/*.{js,cjs}",
  ],
  theme: {
    extend: {
        ...,
        // (Optional)
        // Extend the default configuration
        colors: {
            primary: colors.purple,
            ...,
        }
    },
  },
  plugins: [
    ...,
    require("@rafty/plugin")
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
