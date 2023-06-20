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

Using the `type` prop you can set the type of toggle-group.

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
<ToggleGroup type="multiple" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

## With Default Value

Using the `defaultValue` prop you can set the default value of toggle-group.

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```
