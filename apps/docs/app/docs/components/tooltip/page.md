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

### API

---

### Root

| Property      | Description                                                                                                                           | Type                                  | Default  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | -------- |
| className     |                                                                                                                                       | `string`                              |          |
| children\*    |                                                                                                                                       | `React.ReactNode`                     | -        |
| content\*     | The message that pops out when the tooltip is open.                                                                                   | `React.ReactNode`                     | -        |
| isArrow       |                                                                                                                                       | `boolean`                             | `true`   |
| delayDuration | Override the duration given to the `Provider` to customise the open delay for a specific tooltip.                                     | `number`                              | `50`     |
| hasAnimation  |                                                                                                                                       | `boolean`                             | `true`   |
| open          | The controlled open state of the tooltip. Must be used in conjunction with `onOpenChange`.                                            | `boolean`                             | -        |
| defaultOpen   | The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.                      | `boolean`                             | -        |
| side          | The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. | `top` / `right` / `bottom` / `left" ` | `top`    |
| align         | The preferred alignment against the trigger. May change when collisions occur.                                                        | `start` / `center` / `end`            | `center` |
| sideOffset    | The distance in pixels from the trigger.                                                                                              | `number`                              | `10`     |
| alignOffset   | An offset in pixels from the `start` or `end` alignment options.                                                                      | `number`                              | -        |
| onOpenChange  | Event handler called when the open state of the tooltip changes.                                                                      | `(open: boolean) => void`             | -        |
