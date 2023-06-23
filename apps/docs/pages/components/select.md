---
title: Select
pageTitle: Select - Rafty UI
description: Select
---

## Import

Select component is a component that allows users pick a value from predefined options.

```jsx
import { Select, SelectItem } from "@rafty/ui";
```

## Usage

```jsx
<Select onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

## Size

Pass the `size` prop if you need to adjust the size of the select. Values can be `sm, md, lg`.

### sm

```jsx
<Select size="sm" onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

### md

```jsx
<Select size="md" onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

### lg

```jsx
<Select size="lg" onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

## Variant

Pass the `variant` prop if you need to adjust the visual style of the select. Values can be `solid, outline, ghost`.

### solid

```jsx
<Select variant="solid" onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

### outline

```jsx
<Select variant="outline" onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

### ghost

```jsx
<Select variant="ghost" onSelectionChange={(key) => console.log(key)}>
  <SelectItem key="option1">Option 1</SelectItem>
  <SelectItem key="option2">Option 2</SelectItem>
  <SelectItem key="option3">Option 3</SelectItem>
</Select>
```

### API

---

### Root

| Property           | Description | Type                                | Default   |
| ------------------ | ----------- | ----------------------------------- | --------- |
| className          |             | `string`                            |           |
| size               |             | `sm` \ `md` \ `lg`                  | `md`      |
| variant            |             | `solid` \ `outline` \ `ghost`       | `outline` |
| onSelectionChange  |             | `((key: Key) => any)` \ `undefined` |           |
| defaultSelectedKey |             | `Key`\ `undefined`                  |           |
| selectedKey        |             | `Key` \ `null` \ `undefined`        |           |
