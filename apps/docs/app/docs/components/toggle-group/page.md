---
title: Toggle Group
nextjs:
  metadata:
    title: Toggle Group
    description: A set of two-state buttons that can be toggled on or off.
    twitter:
      title: Toggle Group
      images:
        url: https://rafty.rhinobase.io/api/og?title=Toggle%20Group
    openGraph:
      title: Toggle Group
      images:
        url: https://rafty.rhinobase.io/api/og?title=Toggle%20Group
---

A set of two-state buttons that can be toggled on or off.

This component is made on top of [Radix UIs Toggle Group Component](https://www.radix-ui.com/primitives/docs/components/toggle-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

<ToggleGroup>
  <ToggleGroupItem />
</ToggleGroup>;
```

## Usage

{% example %}

```jsx
<ToggleGroup type="single">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<ToggleGroup type="single" defaultValue="1" size="sm">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Type

Using the `type` prop you can set the type of ToggleGroup. Values can be `"single"`, `"multiple"`.

{% example %}

```jsx
<ToggleGroup type="multiple" defaultValue={["1", "3"]}>
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Default Value

Using the `defaultValue` prop you can set the default value of ToggleGroup.

{% example %}

```jsx
<ToggleGroup type="single" defaultValue="3">
  <ToggleGroupItem value="1">1</ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from ToggleGroup and all its sub-components.

{% example %}

```jsx
<ToggleGroup
  type="single"
  defaultValue="1"
  isUnstyled
  className="flex h-9 w-full"
>
  <ToggleGroupItem
    value="1"
    className="data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:border-secondary-800 data-[state=on]:dark:bg-primary-300/20 data-[state=on]:dark:text-primary-300 w-full rounded-l-md border font-bold"
  >
    1
  </ToggleGroupItem>
  <ToggleGroupItem
    value="2"
    className="data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:border-secondary-800 data-[state=on]:dark:bg-primary-300/20 data-[state=on]:dark:text-primary-300 w-full rounded-l-md border font-bold"
  >
    2
  </ToggleGroupItem>
  <ToggleGroupItem
    value="3"
    className="data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 dark:border-secondary-800 data-[state=on]:dark:bg-primary-300/20 data-[state=on]:dark:text-primary-300 w-full rounded-l-md border font-bold"
  >
    3
  </ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem
    value="1"
    isUnstyled
    className="data-[state=on]:bg-primary-50 data-[state=on]:text-primary-500 data-[state=on]:dark:bg-primary-300/20 dark:data-[state=on]:text-primary-300 w-full px-3 py-1 font-semibold"
  >
    1
  </ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

---

## Props

### ToggleGroup

This component is built on top of [Radix Toggle Group](https://www.radix-ui.com/primitives/docs/components/toggle-group#root)

| Property   | Description                                              | Type                                      | Default |
| ---------- | -------------------------------------------------------- | ----------------------------------------- | ------- |
| size       | Size of the toggle group and its sub-components.         | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |
| isUnstyled | Remove style from this component and its sub-components. | `boolean` or `undefined`                  | `false` |

### ToggleGroupItem

This component is built on top of [Radix Toggle Group Item](https://www.radix-ui.com/primitives/docs/components/toggle-group#item)

| Property   | Description                       | Type                     | Default |
| ---------- | --------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component. | `boolean` or `undefined` | `false` |
