---
title: Keyboard Key
nextjs:
  metadata:
    title: Keyboard Key
    description: The keyboard key component exists to show which key or combination of keys performs a given action.
    twitter:
      title: Keyboard Key
      images:
        url: https://rafty.rhinobase.io/api/og?title=Keyboard%20Key
    openGraph:
      title: Keyboard Key
      images:
        url: https://rafty.rhinobase.io/api/og?title=Keyboard%20Key
---

It shows which key or combination of keys performs a given action.

This component is built using native `<kbd>` html tag and its props, making all native props available for use. If you wish to apply your own styling you can use the `isUnstyled` prop to remove all styling.

## Anatomy

Import the component.

```jsx
import { Kbd } from "@rafty/ui";

<Kbd />;
```

## Usage

{% example %}

```jsx
<Kbd>shift + K</Kbd>
```

{% /example %}

---

## Props

### Kbd

`Kbd` composes the `<kbd>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |
