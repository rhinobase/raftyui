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

This is a custom component built upon the native select, adhering to our styling conventions. All native select props can be utilized with this component. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

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

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

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

There are 3 `variant` options available: `"solid"`, `"outline"` (default) & `"ghost"`.

{% example %}

```jsx
<Select variant="solid">
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## Placeholder

Specifies the `placeholder` text to be displayed when no option is selected.

{% example %}

```jsx
<Select placeholder="Select Option">
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## SelectItemGroup

{% example %}

```jsx
<Select>
  <SelectItemGroup label="Fruits">
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="blueberry">Blueberry</SelectItem>
    <SelectItem value="grapes">Grapes</SelectItem>
    <SelectItem value="pineapple">Pineapple</SelectItem>
  </SelectItemGroup>
</Select>
```

{% /example %}

## Disabled

`isDisabled` prop is used to show Select component in disabled state.

{% example %}

```jsx
<Select isDisabled>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## Required

`isRequired` prop is used to show Select in required state.

{% example %}

```jsx
<Select isRequired>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to show Select in read only state.

{% example %}

```jsx
<Select isReadOnly>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

## Invalid

`isInvalid` prop is used to show Select in invalid state.

{% example %}

```jsx
<Select isInvalid>
  <SelectItem value="1">Option 1</SelectItem>
  <SelectItem value="2">Option 2</SelectItem>
  <SelectItem value="3">Option 3</SelectItem>
</Select>
```

{% /example %}

---

## Props

### Select

`Select` composes the `<select>` component.

| Property    | Description                                                 | Type                                                   | Default     |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------------ | ----------- |
| size        | Size of the select and its sub-components.                  | `"sm"` or `"md"` or `"lg"`                             | `"md"`      |
| placeholder | Placeholder text to be displayed when no value is selected. | `string`                                               |             |
| isDisabled  | To manage the disable state.                                | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isRequired  | To manage the required state.                               | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isInvalid   | To manage the invalid state.                                | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isReadOnly  | To manage the readonly state.                               | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isUnstyled  | Remove style from this component and its sub-components.    | `boolean`                                              | `false`     |
| variant     | Style variant of the component.                             | `"solid"` or `"outline"` or `"ghost"`                  | `"outline"` |

### SelectItem

`SelectItem` composes the `<option>` component.

### SelectItemGroup

`SelectItemGroup` composes the `<optgroup>` component.
