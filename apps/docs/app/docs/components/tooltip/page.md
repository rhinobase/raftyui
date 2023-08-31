---
title: Tooltip
pageTitle: Tooltip - Rafty UI
description: Tooltip
---

## Import

A tooltip is a brief, informative message that appears when a user interacts with an element.

- Tooltip

```jsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@rafty/ui";

() => (
  <Tooltip>
    <TooltipTrigger></TooltipTrigger>
    <TooltipContent></TooltipContent>
  </Tooltip>
);
```

## Usage

{% example name="tooltip:usage" /%}

## Side

Using the `side` prop you can adjust where your tooltip will be displayed. Values can be `top`, `right`, `bottom`, `left`.
{% example name="tooltip:side" /%}

## Align

Using the `align` prop you can adjust the alignment of tooltip. Values can be `center`, `start`, `end`.

{% example name="tooltip:align" /%}
