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

Using the `type` prop you can set the type of toggle-group. Values can be `single,multiple`;

### single

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

### multiple

```jsx
<ToggleGroup type="multiple" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## Default Value

Using the `defaultValue` prop you can set the default value of toggle-group.

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## Barebone

Pass `isBarebone` prop to remove all style in toggle-group.

```jsx
<ToggleGroup type="single" defaultValue="1" isBarebone>
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem isUnstyled value="1">
    1
  </ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

### Root

| Property           | Description | Type                      | Default   |
| ------------------ | ----------- | ------------------------- | --------- |
| asChild            |             | boolean                   | false     |
| type\*             |             | enum                      | -         |
| value              |             | string                    | -         |
| defaultValue       |             | string                    | -         |
| onValueChange      |             | function                  | -         |
| value              |             | string[]                  | []        |
| defaultValue       |             | string[]                  | []        |
| onValueChange      |             | function                  | -         |
| disabled           |             | boolean                   | false     |
| rovingFocus        |             | boolean                   | true      |
| orientation        |             | enum                      | undefined |
| dir                |             | enum                      | -         |
| loop               |             | boolean                   | true      |
| [data-orientation] |             | `vertical` / `horizontal` | true      |
| size               |             | `sm` / `md` / `lg`        | `md`      |
| isBarebone         |             | boolean                   | false     |
| isUnstyled         |             | boolean                   | false     |

### Item

| Property           | Description | Type                      | Default |
| ------------------ | ----------- | ------------------------- | ------- |
| asChild            |             | boolean                   | false   |
| value\*            |             | string                    | -       |
| disabled           |             | boolean                   | -       |
| [data-state]       |             | `on` / `off`              |         |
| [data-disabled]    |             | Present when disabled     |         |
| [data-orientation] |             | `vertical` / `horizontal` |         |
| isUnstyled         |             | boolean                   | false   |
