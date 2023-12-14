---
title: Tooltip
nextjs:
  metadata:
    title: Tooltip
    description: A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
    twitter:
      title: Tooltip
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tooltip
    openGraph:
      title: Tooltip
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tooltip
---

A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.

This component is made on top of [Radix UIs Tooltip Component](https://www.radix-ui.com/primitives/docs/components/tooltip) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import all parts and piece them together.

```jsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@rafty/ui";

<Tooltip>
  <TooltipTrigger />
  <TooltipContent />
</Tooltip>;
```

## Usage

{% example name="tooltip:usage" /%}

## Props

---

### Tooltip

This component is built on top of [Radix Tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip#root)

### TooltipTrigger

This component is built on top of [Radix Tooltip Trigger](https://www.radix-ui.com/primitives/docs/components/tooltip#trigger)

### TooltipContent

This component is built on top of [Radix Tooltip Content](https://www.radix-ui.com/primitives/docs/components/tooltip#content)

| Property     | Description                                                | Type      | Default |
| ------------ | ---------------------------------------------------------- | --------- | ------- |
| hasAnimation | Determines whether the tooltip has animation.              | `boolean` | `true`  |
| sideOffset   | Horizontal offset for the tooltip.                         | `boolean` | `4`     |
| isArrow      | Indicates whether to show an arrow in the tooltip content. | `boolean` | `true`  |
