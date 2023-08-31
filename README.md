# Welcome to Rafty UI ⛵

React + Accessible + Tailwind CSS Dynamic Component Library

- Works out of the box. Rafty UI contains a set of polished React components that work out of the box.

- Flexible & composable. Rafty UI components are built on top of a Radix UI Primitive and Tailwind CSS for endless composability.

- SSR. Rafty UI components support React SSR functionality.

- Dark Mode 😍: All components are dark mode compatible.

## Looking for the documentation?

[rafty-ui.rhinobase.io](https://rafty-ui.rhinobase.io) (Under Development)
Or you can clone this repo and run

```sh
npm i
npx nx serve docs
```

## Installing Rafty UI

Rafty UI is made up of multiple components and tools that you can import one by one. All you need to do is install the @rafty/ui package:

```sh
yarn add @rafty/ui

# or

npm i @rafty/ui
```

## Setup

For the styling to work in `@rafty/ui`, you need to make few changes in your `tailwind.config.js` file.

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
        // Extend the default configuration of @rafty/ui
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

## Get Started

```jsx
import { Button } from "@rafty/ui";
```

## 🌐 Join the Conversation:

Connect with a vibrant community of developers, and designers on Discord at [discord.gg/rhinobase](https://discord.gg/YtzxUfCk8c). Share your experiences, exchange insights, and shape the evolution of @rafty/ui.
