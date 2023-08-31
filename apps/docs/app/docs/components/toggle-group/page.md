---
title: Toggle Group
pageTitle: Toggle Group - Rafty UI
description: Toggle Group
---

## Import

A set of two-state buttons that can be toggled on or off.

- ToggleGroup
- ToggleGroupItem

```jsx
import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

() => (
  <ToggleGroup>
    <ToggleGroupItem></ToggleGroupItem>
  </ToggleGroup>
);
```

## Usage

{% example name="toggle-group:usage" /%}

## Type

Using the `type` prop you can set the type of toggle-group. Values can be `single`, `multiple`;
{% example name="toggle-group:type" /%}

## Default Value

{% example name="toggle-group:default" /%}
Using the `defaultValue` prop you can set the default value of toggle-group.

## Barebone

{% example name="toggle-group:barebone" /%}
Pass `isBarebone` prop to remove all style in toggle-group and its sub components.

## UnStyled

{% example name="toggle-group:unstyled" /%}
Pass `isUnstyled` prop to remove style from a particular sub component.

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
