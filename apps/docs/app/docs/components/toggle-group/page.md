---
title: Toggle Group
nextjs:
  metadata:
    title: Toggle Group
    description: A set of two-state buttons that can be toggled on or off.
    twitter:
      title: Toggle Group
      images:
        url: https://rafty.rhinobase.io/api/og?title=Toggle%20Group
    openGraph:
      title: Toggle Group
      images:
        url: https://rafty.rhinobase.io/api/og?title=Toggle%20Group
---

A set of two-state buttons that can be toggled on or off.

This component is made on top of [Radix UIs Toggle Group Component](https://www.radix-ui.com/primitives/docs/components/toggle-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

<ToggleGroup>
  <ToggleGroupItem />
</ToggleGroup>;
```

## Usage

{% example name="toggle-group:usage" /%}

## Size

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg`.

{% example name="toggle-group:size" /%}

## Type

Using the `type` prop you can set the type of toggle-group. Values can be `single`, `multiple`;
{% example name="toggle-group:type" /%}

## Default Value

{% example name="toggle-group:default" /%}
Using the `defaultValue` prop you can set the default value of toggle-group.

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Toggle Group.

{% example name="toggle-group:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="toggle-group:unstyledsub" /%}

## Props

---

### ToggleGroup

This component is built on top of [Radix Toggle Group](https://www.radix-ui.com/primitives/docs/components/toggle-group#root)

| Property   | Description                                               | Type                       | Default |
| ---------- | --------------------------------------------------------- | -------------------------- | ------- |
| size       | Size of the toggle group component and its subcomponents. | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Remove style from this component and its subcomponents.   | `boolean`                  | `false` |

### ToggleGroupItem

This component is built on top of [Radix Toggle Group Item](https://www.radix-ui.com/primitives/docs/components/toggle-group#item)

| Property   | Description                       | Type      | Default |
| ---------- | --------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component. | `boolean` | `false` |
