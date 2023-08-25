---
title: Combo Box
pageTitle: Combo Box - Rafty UI
description: Combo Box
---

## Import

ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.

```jsx
import { Combobox, ComboboxItem } from '@rafty/ui'
```

## Usage

```jsx
<Combobox>
  <ComboboxItem textValue="red panda">
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 rounded-full bg-red-200">RP</div>Red Panda
    </div>
  </ComboboxItem>
  <ComboboxItem>Cat</ComboboxItem>
  <ComboboxItem>Dog</ComboboxItem>
  <ComboboxItem>Aardvark</ComboboxItem>
  <ComboboxItem>Kangaroo</ComboboxItem>
  <ComboboxItem>Snake</ComboboxItem>
</Combobox>
```

## Sizes

Pass the `size` prop if you need to adjust the size of the combobox. Values can be `sm`, `md`, `lg`.

```jsx
<Combobox size="sm">
  <ComboboxItem textValue="red panda">
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 rounded-full bg-red-200">RP</div>Red Panda
    </div>
  </ComboboxItem>
  <ComboboxItem>Cat</ComboboxItem>
  <ComboboxItem>Dog</ComboboxItem>
  <ComboboxItem>Aardvark</ComboboxItem>
  <ComboboxItem>Kangaroo</ComboboxItem>
  <ComboboxItem>Snake</ComboboxItem>
</Combobox>
```

## Variants

Use the `variant` prop to change the visual style of the Combobox. You can set the value to `solid`, `ghost`, `outline`.

```jsx
<Combobox variant="solid">
  <ComboboxItem textValue="red panda">
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 rounded-full bg-red-200">RP</div>Red Panda
    </div>
  </ComboboxItem>
  <ComboboxItem>Cat</ComboboxItem>
  <ComboboxItem>Dog</ComboboxItem>
  <ComboboxItem>Aardvark</ComboboxItem>
  <ComboboxItem>Kangaroo</ComboboxItem>
  <ComboboxItem>Snake</ComboboxItem>
</Combobox>
```

### API

---

### Root

| Property          | Description | Type                    | Default          |
| ----------------- | ----------- | ----------------------- | ---------------- |
| size              |             | `sm,md,lg`              | md               |
| variant           |             | `solid, outline, ghost` | solid            |
| onFocusChange     |             | `function`              | No default value |
| onInputChange     |             | `function`              | No default value |
| selectedKey       |             | `Key/ null`             | No default value |
| onSelectionChange |             | `function`              | No default value |
| inputValue        |             | Value                   |                  |
| isLoading         |             | `boolean`               | false            |
| isSlected         |             | `boolean`               | false            |
| isReadOnly        |             | `boolean`               | false            |
| isRequired        |             | `boolean`               | false            |

### Item

| Property  | Description | Type       | Default          |
| --------- | ----------- | ---------- | ---------------- |
| key       |             | `Key/null` | No default value |
| textValue |             | `string`   | No default value |
