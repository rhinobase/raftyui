---
title: "Pin Input"
nextjs:
  metadata:
    title: "Pin Input"
    description: "A component to input pin or verification codes with auto-focus transfer and masking options."
    twitter:
      title: "Pin Input"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Pin%20Input"
    openGraph:
      title: "Pin Input"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Pin%20Input"
---

A component to input pin or verification codes with auto-focus transfer and masking options.

This component is made on top of [Ark Pin Input Component](https://ark-ui.com/react/docs/components/pin-input) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { PinInput } from "@rafty/ui";

<PinInput />;
```

## Usage

{% example %}

```jsx
<PinInput length={4} />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<PinInput length={4} size="lg" />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<PinInput length={4} isDisabled />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<PinInput length={4} isLoading />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<PinInput length={4} isInvalid />
```

{% /example %}

---

## Props

### Pin Input

`PinInput` component is built on top of [Ark Pin Input](https://ark-ui.com/react/docs/components/pin-input#api-reference)

| Property   | Description                      | Type                                                   | Default |
| ---------- | -------------------------------- | ------------------------------------------------------ | ------- |
| length     | Length of the pin input.         | `number`                                               | -       |
| size       | Size of the pin input component. | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| isDisabled | To manage the disable state.     | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid  | To manage the invalid state.     | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading  | To manage the loading state.     | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
