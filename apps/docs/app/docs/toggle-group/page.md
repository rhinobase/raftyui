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
import { ToggleGroup, ToggleGroupItem } from '@rafty/ui'
```

## Usage

```jsx
<ToggleGroup type="single">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## Type

Using the `type` prop you can set the type of toggle-group. Values can be `single`, `multiple`;

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## Default Value

Using the `defaultValue` prop you can set the default value of toggle-group.

```jsx
<ToggleGroup type="single" defaultValue="3">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## Barebone

Pass `isBarebone` prop to remove all style in toggle-group and its sub components.

```jsx
<ToggleGroup type="single" defaultValue="1" isBarebone>
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## UnStyled

Pass `isUnstyled` prop to remove style from a particular sub component.

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem isUnstyled value="1">
    1
  </ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

### API

---

### Root

| Property           | Description                                                                                                                                            | Type                                  | Default     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ----------- |
| asChild            |                                                                                                                                                        | `boolean`                             | `false`     |
| type\*             | Determines whether a single or multiple items can be pressed at a time.                                                                                | `single` / `multiple`                 | -           |
| value              | The controlled value of the pressed item when type is `single`. Must be used in conjunction with `onValueChange`.                                      | `string`                              | -           |
| defaultValue       | The value of the item to show as pressed when initially rendered and type is `single`. Use when you do not need to control the state of the items.     | `string`                              | -           |
| onValueChange      | Event handler called when the pressed state of an item changes and type is `single`.                                                                   | `(value: string) => void`             | -           |
| value              | The controlled value of the pressed items when type is `multiple`. Must be used in conjunction with onValueChange.                                     | `string[]`                            | `[]`        |
| defaultValue       | The values of the items to show as pressed when initially rendered and type is `multiple`. Use when you do not need to control the state of the items. | `string[]`                            | `[]`        |
| onValueChange      | Event handler called when the pressed state of an item changes and type is `multiple`                                                                  | `(value: string[]) => void`           | -           |
| disabled           | When `true`, prevents the user from interacting with the toggle group and all its items.                                                               | `boolean`                             | `false`     |
| rovingFocus        | When `false`, navigating through the items using arrow keys will be disabled.                                                                          | `boolean`                             | `true`      |
| orientation        | The orientation of the component, which determines how focus moves: `horizontal` for left/right arrows and `vertical` for up/down arrows.              | `horizontal` / `vertical` / undefined | `undefined` |
| dir                | The reading direction of the toggle group. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.         | `ltr` / `rtl`                         | -           |
| loop               | When `true` and `rovingFocus` is `true`, keyboard navigation will loop from last item to first, and vice versa.                                        | `boolean`                             | `true`      |
| [data-orientation] |                                                                                                                                                        | `vertical` / `horizontal`             | -           |
| size               |                                                                                                                                                        | `sm` / `md` / `lg`                    | `md`        |
| isBarebone         | Removes style from whole component                                                                                                                     | `boolean`                             | `false`     |
| isUnstyled         | Removes style from component                                                                                                                           | `boolean`                             | `false`     |

### Item

| Property           | Description                                                    | Type                      | Default |
| ------------------ | -------------------------------------------------------------- | ------------------------- | ------- |
| asChild            |                                                                | `boolean`                 | `false` |
| value\*            | A unique value for the item.                                   | `string`                  | -       |
| disabled           | When `true`, prevents the user from interacting with the item. | `boolean`                 | -       |
| [data-state]       |                                                                | `on` / `off`              |         |
| [data-disabled]    |                                                                | Present when disabled     |         |
| [data-orientation] |                                                                | `vertical` / `horizontal` |         |
| isUnstyled         | Removes style from component                                   | `boolean`                 | `false` |
