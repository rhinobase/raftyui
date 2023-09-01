---
title: Tooltip
pageTitle: Tooltip - Rafty UI
description: Tooltip
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@rafty/ui";

<Tooltip>
  <TooltipTrigger></TooltipTrigger>
  <TooltipContent></TooltipContent>
</Tooltip>;
```

## Usage

{% example name="tooltip:usage" /%}

## Side

Using the `side` prop you can adjust where your tooltip will be displayed. Values can be `top`, `right`, `bottom`, `left`.
{% example name="tooltip:side" /%}

## Align

Using the `align` prop you can adjust the alignment of tooltip. Values can be `center`, `start`, `end`.

{% example name="tooltip:align" /%}
