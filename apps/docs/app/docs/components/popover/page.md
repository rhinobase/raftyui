---
title: Popover
nextjs:
  metadata:
    title: Popover
    description: Displays rich content in a portal, triggered by a button.
    twitter:
      title: Popover
      images:
        url: https://rafty.rhinobase.io/api/og?title=Popover
    openGraph:
      title: Popover
      images:
        url: https://rafty.rhinobase.io/api/og?title=Popover
---

Displays rich content in a portal, triggered by a button.

This component is made on top of [Radix UIs Popover Component](https://www.radix-ui.com/primitives/docs/components/popover) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopverClose,
} from "@rafty/ui";

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

## Open

To manage open state of popover you can use `open` prop and to open popover by default pass `defaultOpen` prop.

{% example name="popover:default" /%}

## ShowArrow

To make arrow on top of content visible you can use `showArrow` prop. It is a boolean type prop whose default value is `false`.

{%example name="popover:showarrow" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove all styles in popover.
{% example name="popover:unstyled" /%}

### API

---

### Root

| Property   | Description                                              | Type      | Default |
| ---------- | -------------------------------------------------------- | --------- | ------- |
| isUnstyled | Removes style from whole component and its subcomponents | `boolean` | false   |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
| showArrow  | Set Arrow visibility         | `boolean` | false   |
