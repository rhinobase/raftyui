---
title: Popover
nextjs:
  metadata:
    title: Popover
    description: Displays rich content in a portal, triggered by a button.
---

Displays rich content in a portal, triggered by a button.

This component is made on top of [Radix UIs Popover Component](https://www.radix-ui.com/primitives/docs/components/popover) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import { Popover, PopoverTrigger, PopoverContent } from "@rafty/ui";

<Popover>
  <PopoverTrigger />
  <PopoverContent>
    <PopverClose />
  </PopoverContent>
</Popover>;
```

## Usage

{% example name="popover:usage" /%}

## Size

There are 3 `size` options in popover: `sm`, `md` (default) & `lg`

{% example name="popover:size" /%}

## Default Open

To Open Popover By Default pass `defaultOpen` prop.

{% example name="popover:default" /%}

## ShowArrow

To make arrow on top of content visible you can use `showArrow` prop. It is a boolean type prop whose default value is `false`.

{%example name="popover:showarrow" /%}

## Barebone

Pass `isBarebone` prop to remove all style in popover.
{% example name="popover:barebone" /%}

### API

---

### Root

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| isBarebone |             | `boolean` | false   |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
| showArrow  | Set Arrow visibility         | `boolean` | false   |
