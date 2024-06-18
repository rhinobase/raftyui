---
title: Segmented Control
nextjs:
  metadata:
    title: Segmented Control
    description: A component that organizes and navigates between sections in a view.
    twitter:
      title: Segmented Control
      images: url:"https://rafty.rhinobase.io/api/og?title=Segmented%20Control
    openGraph:
      title: Segmented Control
      images:
        url: https://rafty.rhinobase.io/api/og?title=Segmented%20Control
---

A component that organizes and navigates between sections in a view.

This component is made on top of [Ark Segment Group Component](https://ark-ui.com/react/docs/components/segment-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { SegmentedControl } from "@rafty/ui";

<SegmentedControl />;
```

## Usage

{% example %}

```jsx
<SegmentedControl>
  <SegmentedControlItem value="react">React</SegmentedControlItem>
  <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
  <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
  <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
</SegmentedControl>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<SegmentedControl size="lg">
  <SegmentedControlItem value="react">React</SegmentedControlItem>
  <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
  <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
  <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
</SegmentedControl>
```

{% /example %}

## Default Value

`defaultValue` is used to manage default selected value of SegmentedControl.

{% example %}

```jsx
<SegmentedControl defaultValue="solid">
  <SegmentedControlItem value="react">React</SegmentedControlItem>
  <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
  <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
  <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
</SegmentedControl>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<SegmentedControl isDisabled>
  <SegmentedControlItem value="react">React</SegmentedControlItem>
  <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
  <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
  <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
</SegmentedControl>
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<SegmentedControl isLoading>
  <SegmentedControlItem value="react">React</SegmentedControlItem>
  <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
  <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
  <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
</SegmentedControl>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<SegmentedControl defaultValue="react" isReadOnly>
  <SegmentedControlItem value="react">React</SegmentedControlItem>
  <SegmentedControlItem value="solid">Solid</SegmentedControlItem>
  <SegmentedControlItem value="svelte">Svelte</SegmentedControlItem>
  <SegmentedControlItem value="vue">Vue</SegmentedControlItem>
</SegmentedControl>
```

{% /example %}

---

## Props

### SegmentedControl

`SegmentedControl` component is built on top of [Ark Segment Group](https://ark-ui.com/react/docs/components/segment-group#api-reference)

| Property      | Description                                           | Type                                                   | Default |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------ | ------- |
| size          | Size of the segmented control and its sub-components. | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| isDisabled    | To manage the disable state                           | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading     | To manage the loading state.                          | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly    | To manage the readonly state.                         | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| onValueChange | The callback invoke when value is changed.            | <Info>(value?: string) => void</Info> or `undefined`   | -       |

### SegmentedControlItem

`SegmentedControlItem` component is built on top of [Ark Segment Group Item](https://ark-ui.com/react/docs/components/segment-group#api-reference)
