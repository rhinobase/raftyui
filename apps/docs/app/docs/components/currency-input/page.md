---
title: Currency Input
nextjs:
  metadata:
    title: Currency Input
    description: A component specifically designed to take currency input.
    twitter:
      title: Currency Input
      images:
        url: https://rafty.rhinobase.io/api/og?title=Currency%20Input
    openGraph:
      title: "Currency Input"
      images:
        url: https://rafty.rhinobase.io/api/og?title=Currency%20Input
---

A component specifically designed to take currency input.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { CurrencyInput } from "@rafty/ui";

<CurrencyInput />;
```

## Usage

{% example %}

```jsx
<CurrencyInput />
```

{% /example %}

## Currency Code

`currencyCode` prop is used to take currency code of the country who's currency you want to input in field.

{% example %}

```jsx
<CurrencyInput currencyCode="INR" />
```

{% /example %}

## Default Value

`defaultValue` prop is used to pass default value of field.

{% example %}

```jsx
<CurrencyInput defaultValue="1,250" />
```

{% /example %}

---

## Props

### CurrencyInput

`CurrencyInput` is made using [InputField](https://rafty.rhinobase.io/docs/components/input-field).

| Property     | Description                                    | Type                                                   | Default |
| ------------ | ---------------------------------------------- | ------------------------------------------------------ | ------- |
| defaultValue | Default value of input.                        | `string` or `undefined`                                | -       |
| value        | Value of input.                                | `string` or `undefined`                                | -       |
| currencyCode | Currency code of a specific country's currency | `string` or `undefined`                                | `"USD"` |
| onChange     | The callback invoke when value is changed.     | <Info>(value?: `string`) => void</Info> or `undefined` | -       |
