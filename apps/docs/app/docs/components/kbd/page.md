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

The keyboard key component exists to show which key or combination of keys performs a given action.

This component is built using native html kbd tag and its props, making all native props available for use.

## Anatomy

Import the component.

```jsx
import { Kbd } from "@rafty/ui";

<Kbd />;
```

## Usage

{% example name="kbd:usage" /%}

## Props

---

### Kbd

`Kbd` composes the `<kbd>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
