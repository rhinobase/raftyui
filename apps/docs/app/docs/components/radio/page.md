---
title: Radio
nextjs:
  metadata:
    title: Radio
    description: A set of checkable buttons—known as radio buttons—where only one button can be checked at a time.
    twitter:
      title: Radio
      images:
        url: https://rafty.rhinobase.io/api/og?title=Radio
    openGraph:
      title: Radio
      images:
        url: https://rafty.rhinobase.io/api/og?title=Radio
---

A set of checkable buttons—known as radio buttons—where only one button can be checked at a time.

This component is made on top of [Radix UIs Radio Group Component](https://www.radix-ui.com/primitives/docs/components/radio-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import all parts and piece them together.

```jsx
import { RadioGroup, RadioGroupItem } from "@rafty/ui";

<RadioGroup>
  <RadioGroupItem />
</RadioGroup>;
```

## Usage

{% example name="radio:usage" /%}

## Size

There are 3 `size` options in progress: `sm`, `md` (default) & `lg`.

{% example name="radio:size" /%}

## Default Value

{% example name="radio:default" /%}

## Disabled

Pass the `isDisabled` prop if you need to disable the radio-group and its sub components.

{% example name="radio:disabled" /%}

## Props

---

### RadioGroup

This component is built on top of [Radix RadioGroup](https://www.radix-ui.com/primitives/docs/components/radio-group#root)

| Property   | Description                                 | Type                       | Default |
| ---------- | ------------------------------------------- | -------------------------- | ------- |
| size       | Size of the alert dialog trigger component. | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isDisabled | Whether the component is disabled.          | `boolean`                  | `false` |
| disabled   | Additional way to specify disabled state.   | `boolean`                  | -       |

### RadioGroupItem

This component is built on top of [Radix RadioGroup](https://www.radix-ui.com/primitives/docs/components/radio-group#item)
