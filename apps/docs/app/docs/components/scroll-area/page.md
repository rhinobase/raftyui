---
title: Scroll Area
nextjs:
  metadata:
    title: Scroll Area
    description: Enhances native scroll functionality for custom, cross-browser styling.
    twitter:
      title: Scroll Area
      images:
        url: https://rafty.rhinobase.io/api/og?title=Scroll%20Area
    openGraph:
      title: Scroll Area
      images:
        url: https://rafty.rhinobase.io/api/og?title=Scroll%20Area
---

Enhances native scroll functionality for custom, cross-browser styling.

This component is made on top of [Radix UIs Scroll Area Component](https://www.radix-ui.com/primitives/docs/components/scroll-area) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { ScrollArea } from "@rafty/ui";

<ScrollArea />;
```

## Usage

{% example name="scrollarea:usage" /%}

## Props

---

### ScrollArea

This component is built on top of [Radix Scroll Area](https://www.radix-ui.com/primitives/docs/components/scroll-area#root)

### ScrollBar

This component is built on top of [Radix Scroll Area](https://www.radix-ui.com/primitives/docs/components/scroll-area#scrollbar)

| Property    | Description                   | Type                       | Default    |
| ----------- | ----------------------------- | -------------------------- | ---------- |
| orientation | Orientation of the component. | `horizontal` or `vertical` | `vertical` |
