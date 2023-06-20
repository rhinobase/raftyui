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

## With Default Value

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```
