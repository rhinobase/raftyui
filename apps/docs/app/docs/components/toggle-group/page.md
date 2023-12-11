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

This component is made on top of [Radix UIs Toggle Group Component](https://www.radix-ui.com/primitives/docs/components/toggle-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

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

### API

---

### Root

| Property   | Description                        | Type    | Default |
| ---------- | ---------------------------------- | ------- | ------- |
| isBarebone | Removes style from whole component | boolean | false   |

### Item

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |
