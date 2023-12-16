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

{% example %}

```jsx
<ScrollArea className="h-[225px] w-[200px] p-1">
  <div className="dark:divide-secondary-700 divide-y">
    <div className="px-2 py-1">
      <p className="text-center">Sample 1</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 2</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 3</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 4</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 5</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 6</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 7</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 8</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 9</p>
    </div>
    <div className="px-2 py-1 ">
      <p className="text-center">Sample 10</p>
    </div>
  </div>
</ScrollArea>
```

{% /example %}

## Props

---

### ScrollArea

This component is built on top of [Radix Scroll Area](https://www.radix-ui.com/primitives/docs/components/scroll-area#root)

### ScrollBar

This component is built on top of [Radix Scroll Area Scrollbar](https://www.radix-ui.com/primitives/docs/components/scroll-area#scrollbar)

| Property    | Description                   | Type                       | Default    |
| ----------- | ----------------------------- | -------------------------- | ---------- |
| orientation | Orientation of the component. | `horizontal` or `vertical` | `vertical` |
