---
title: Getting started
---

Re-usable components built using Radix UI and Tailwind CSS. {% .lead %}

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/" description="Step-by-step guides to setting up your system and installing the library." /%}

{% quick-link title="Theme Builder" icon="presets" href="/themes" description="Check out components across different themes" /%}

{% quick-link title="Components" icon="plugins" href="/docs/components/accordion" description="Prebuilt components to help you build your projects faster" /%}

{% quick-link title="Integrations" icon="theming" href="/docs/integrations/react-hook-form" description="Integrating Rafty UI with External Libraries" /%}

{% /quick-links %}

All the components are SSR-ready, accessible, and dark mode-compatible, so you can build your apps on a weekend.

---

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

## Connect with us

Whether you're a beginner or advanced Rafty UI user, joining our community is the best way to connect with like-minded people who build great products with the library.

### Contributing

Feel like contributing? That's awesome! We have a [contributing guide](https://github.com/rhinobase/raftyui/blob/main/CONTRIBUTING.md) to help guide you.

### Join the community

Connect with a vibrant community of developers, and designers on Discord at [discord.gg/rhinobase](https://discord.gg/YtzxUfCk8c). Share your experiences, exchange insights, and shape the evolution of @rafty/ui.

Follow us on twitter for the latest news [@rhinobaseio](https://twitter.com/rhinobaseio)
