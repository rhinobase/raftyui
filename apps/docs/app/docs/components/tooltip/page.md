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
