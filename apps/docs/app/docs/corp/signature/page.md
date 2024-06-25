---
title: Signature
nextjs:
  metadata:
    title: Signature
    description: A component that allows users to draw a signature using a signature pad.
    twitter:
      title: Signature
      images:
        url: https://rafty.rhinobase.io/api/og?title=Signature
    openGraph:
      title: Signature
      images:
        url: https://rafty.rhinobase.io/api/og?title=Signature
---

A component that allows users to draw a signature using a signature pad.

This component is made on top of [Ark Signature Pad Component](https://ark-ui.com/react/docs/components/signature-pad) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Signature } from "@rafty/ui";

<Signature />;
```

## Usage

{% example %}

```jsx
<Signature />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<Signature isDisabled />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<Signature isReadOnly />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<Signature isLoading />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<Signature isInvalid />
```

{% /example %}

---

## Props

### Signature

`Signature` component is built on top of [Ark Signature Pad](https://ark-ui.com/react/docs/components/signature-pad#api-reference).

| Property   | Description                   | Type                                                   | Default |
| ---------- | ----------------------------- | ------------------------------------------------------ | ------- |
| isDisabled | To manage the disable state.  | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid  | To manage the invalid state.  | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading  | To manage the loading state.  | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly | To manage the readonly state. | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
