---
title: Combo Box
pageTitle: Combo Box - Rafty UI
description: Combo Box
---

## Import

ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.

```jsx
import { Combobox, ComboboxItem } from "@rafty/ui";
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

Use the `size` prop to change the size of the Combobox. You can set the value to `sm, md, or lg`.

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

Use the `variant` prop to change the visual style of the Combobox. You can set the value to `solid, ghost, outline`.

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
