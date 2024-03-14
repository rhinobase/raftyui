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

{% example %}

```jsx
<RadioGroup>
  <RadioGroupItem value="1" id="1">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="2">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="3">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

## Size

There are 3 `size` options in progress: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<RadioGroup size="sm">
  <RadioGroupItem value="1" id="4">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="5">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="6">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

## Default Value

{% example %}

```jsx
<RadioGroup defaultValue="2">
  <RadioGroupItem value="1" id="7">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="8">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="9">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

## Disabled

Pass the `isDisabled` prop if you need to disable the radio-group and its sub components.

{% example %}

```jsx
<RadioGroup defaultValue="1" isDisabled>
  <RadioGroupItem value="1" id="10">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="11">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="12">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

## Props

---

### RadioGroup

This component is built on top of [Radix Radio Group](https://www.radix-ui.com/primitives/docs/components/radio-group#root)

| Property   | Description                                              | Type                       | Default |
| ---------- | -------------------------------------------------------- | -------------------------- | ------- |
| size       | Size of the radio group component and its subcomponents. | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isDisabled | To manage disabled state.                                | `boolean`                  | `false` |
| isReadOnly | To manage readonly state.                                | `boolean`                  | `false` |

### RadioGroupItem

This component is built on top of [Radix Radio Group Item](https://www.radix-ui.com/primitives/docs/components/radio-group#item)
