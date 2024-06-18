---
title: "Percentage Input"
nextjs:
  metadata:
    title: "Percentage Input"
    description: "A component specifically designed to take percentage input."
    twitter:
      title: "Percentage Input"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Percentage%20Input"
    openGraph:
      title: "Percentage Input"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Percentage%20Input"
---

A component to take only percentage input.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { PercentageInput } from "@rafty/ui";

<PercentageInput />;
```

## Usage

{% example %}

```jsx
<PercentageInput />
```

{% /example %}

## Default Value

`defaultValue` prop can be used to pass default input value.

{% example %}

```jsx
<PercentageInput defaultValue="8%" />
```

{% /example %}

---

## Props

### PercentageInput

`PercentageInput` is made using [InputField](https://rafty.rhinobase.io/docs/components/input-field).

| Property     | Description                                | Type                                                 | Default |
| ------------ | ------------------------------------------ | ---------------------------------------------------- | ------- |
| defaultValue | Default input value.                       | `string` or `undefined`                              | -       |
| value        | To manage the input value.                 | `string` or `undefined`                              | -       |
| onChange     | The callback invoke when value is changed. | <Info>(value?: string) => void</Info> or `undefined` | -       |
