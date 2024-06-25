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

A set of checkable buttons known as radio buttons where only one button can be checked at a time.

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

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

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

`isDisabled` prop is used to manage disable state of field.

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

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<RadioGroup defaultValue="1" isReadOnly>
  <RadioGroupItem value="1" id="13">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="14">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="15">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<RadioGroup defaultValue="1" isLoading>
  <RadioGroupItem value="1" id="16">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="17">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="18">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<RadioGroup defaultValue="1" isInvalid>
  <RadioGroupItem value="1" id="19">
    Radio 1
  </RadioGroupItem>
  <RadioGroupItem value="2" id="20">
    Radio 2
  </RadioGroupItem>
  <RadioGroupItem value="3" id="21">
    Radio 3
  </RadioGroupItem>
</RadioGroup>
```

{% /example %}

---

## Props

### RadioGroup

This component is built on top of [Radix Radio Group](https://www.radix-ui.com/primitives/docs/components/radio-group#root)

| Property    | Description                                     | Type                                                   | Default      |
| ----------- | ----------------------------------------------- | ------------------------------------------------------ | ------------ |
| size        | Size of the radio group and its sub-components. | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`       |
| orientation | Orientation of the radio components.            | `"horizontal"` or `"vertical"` or `undefined`          | `"vertical"` |
| isRequired  | To manage the required state.                   | `boolean` or <Info>() => boolean</Info> or `undefined` | -            |
| isDisabled  | To manage the disable state.                    | `boolean` or <Info>() => boolean</Info> or `undefined` | -            |
| isInvalid   | To manage the invalid state.                    | `boolean` or <Info>() => boolean</Info> or `undefined` | -            |
| isLoading   | To manage the loading state.                    | `boolean` or <Info>() => boolean</Info> or `undefined` | -            |
| isReadOnly  | To manage the readonly state.                   | `boolean` or <Info>() => boolean</Info> or `undefined` | -            |

### RadioGroupItem

This component is built on top of [Radix Radio Group Item](https://www.radix-ui.com/primitives/docs/components/radio-group#item)
