---
title: Select
nextjs:
  metadata:
    title: Select
    description: Select component is a component that allows users to pick a value from predefined options.
    twitter:
      title: Select
      images:
        url: https://rafty.rhinobase.io/api/og?title=Select
    openGraph:
      title: Select
      images:
        url: https://rafty.rhinobase.io/api/og?title=Select
---

Select component is a component that allows users to pick a value from predefined options.

This is a custom component built upon the native select, adhering to our styling conventions. All native select props can be utilized with this component.

## Anatomy

Import all parts and piece them together.

```jsx
import { Select, SelectItem } from "@rafty/ui";

<Select>
  <SelectItem />
</Select>;
```

## Usage

{% example %}

```jsx
<Select>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## Size

There are 3 `size` options in input field: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<Select size="sm">
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## Variant

There are 3 `variant` options in input field: `solid`, `outline` (default) & `ghost`.

{% example %}

```jsx
<Select variant="solid">
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## IsDisabled

IsDisabled prop is used to show select component in disabled state

{% example %}

```jsx
<Select isDisabled>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## IsRequired

IsRequired prop is used to show select in required state.

{% example %}

```jsx
<Select isRequired>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## IsReadOnly

IsReadOnly prop is used to show select in read only state.

{% example %}

```jsx
<Select isReadOnly>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## Props

---

### Select

`Select` composes the `<select>` component.

| Property   | Description                                         | Type                                  | Default     |
| ---------- | --------------------------------------------------- | ------------------------------------- | ----------- |
| size       | Size of the select component and its subcomponents. | `"sm"` or `"md"` or `"lg"`            | `"md"`      |
| isDisabled | To manage disabled state.                           | `boolean`                             | `false`     |
| isUnstyled | Remove style from this component                    | `boolean`                             | `false`     |
| isRequired | To manage required state.                           | `boolean`                             | `false`     |
| isReadOnly | To manage read-only state.                          | `boolean`                             | `false`     |
| variant    | Style variant of the component.                     | `"solid"` or `"outline"` or `"ghost"` | `"outline"` |

### SelectItem

`SelectItem` composes the `<option>` component.
