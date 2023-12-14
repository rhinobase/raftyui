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

This is a custom component made upon native select and its props according to our styling conventions. All native select props can be used here.

## Anatomy

Import all parts and piece them together.

```jsx
import { Select, SelectItem } from "@rafty/ui";

<Select>
  <SelectItem />
</Select>;
```

## Usage

{% example name="select:usage" /%}

## Size

There are 3 `size` options in input field: `sm`, `md` (default) & `lg`.

{% example name="select:size" /%}

## Variant

There are 3 `variant` options in input field: `solid`, `outline` (default) & `ghost`.

{% example name="select:variant" /%}

## IsDisabled

IsDisabled prop is used to show select component in disabled state

{% example name="select:disabled" /%}

## IsRequired

IsRequired prop is used to show select in required state.

{% example name="select:required" /%}

## IsReadOnly

IsReadOnly prop is used to show select in read only state.

{% example name="select:readonly" /%}

## Props

---

### Select

`Select` composes the `select` component.

| Property   | Description                                 | Type                                  | Default     |
| ---------- | ------------------------------------------- | ------------------------------------- | ----------- |
| size       | Size of the alert dialog trigger component. | `"sm"` or `"md"` or `"lg"`            | `"md"`      |
| isDisabled | Whether the component is disabled.          | `boolean`                             | `false`     |
| isUnstyled | Removes style from component                | `boolean`                             | `false`     |
| isRequired | Whether the component is required.          | `boolean`                             | `false`     |
| isReadOnly | Whether the component is read-only.         | `boolean`                             | `false`     |
| variant    | Style variant of the component.             | `"solid"` or `"outline"` or `"ghost"` | `"outline"` |

### SelectItem

`SelectItem` composes the `option` component.
