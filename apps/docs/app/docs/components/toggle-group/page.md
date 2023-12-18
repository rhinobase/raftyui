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

This component is made on top of [Radix UIs Toggle Group Component](https://www.radix-ui.com/primitives/docs/components/toggle-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

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

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg`.

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

Using the `type` prop you can set the type of toggle-group. Values can be `single`, `multiple`;
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

Using the `defaultValue` prop you can set the default value of toggle-group.

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

Pass `isUnstyled` prop in parent component to remove style in Toggle Group.

{% example %}

```jsx
<ToggleGroup type="single" defaultValue="1" isUnstyled className="flex h-9 w-full">
  <ToggleGroupItem value="1" className="dark:border-secondary-800 data-[state=on]:bg-primary-100   data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300  dark:data-[state=on]:bg-primary-300/20 w-full rounded-l-md border font-bold ">
    1
  </ToggleGroupItem>
  <ToggleGroupItem value="2" className="dark:border-secondary-800 data-[state=on]:bg-primary-100   data-[state=on]:text-primary-500  dark:data-[state=on]:text-primary-300 dark:data-[state=on]:bg-primary-300/20 w-full border font-bold">
    2
  </ToggleGroupItem>
  <ToggleGroupItem value="3" className="dark:border-secondary-800 data-[state=on]:bg-primary-100 data-[state=on]:text-primary-500  dark:data-[state=on]:text-primary-300  dark:data-[state=on]:bg-primary-300/20 w-full rounded-r-md border font-bold">
    3
  </ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Unstyled subcomponent

To remove styles from a specific sub component pass `isUnstyled` prop to that particular subcomponent.

{% example %}

```jsx
<ToggleGroup type="single" defaultValue="1">
  <ToggleGroupItem value="1" isUnstyled className="data-[state=on]:bg-primary-300/20 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 w-full px-3 py-1  font-semibold">
    1
  </ToggleGroupItem>
  <ToggleGroupItem value="2">2</ToggleGroupItem>
  <ToggleGroupItem value="3">3</ToggleGroupItem>
</ToggleGroup>
```

{% /example %}

## Props

---

### ToggleGroup

This component is built on top of [Radix Toggle Group](https://www.radix-ui.com/primitives/docs/components/toggle-group#root)

| Property   | Description                                               | Type                       | Default |
| ---------- | --------------------------------------------------------- | -------------------------- | ------- |
| size       | Size of the toggle group component and its subcomponents. | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Remove style from this component and its subcomponents.   | `boolean`                  | `false` |

### ToggleGroupItem

This component is built on top of [Radix Toggle Group Item](https://www.radix-ui.com/primitives/docs/components/toggle-group#item)

| Property   | Description                       | Type      | Default |
| ---------- | --------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component. | `boolean` | `false` |
