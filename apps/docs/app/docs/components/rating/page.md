---
title: Rating
nextjs:
  metadata:
    title: Rating
    description: A component that allows users to rate items using a set of icons.
    twitter:
      title: Rating
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rating
    openGraph:
      title: Rating
      images:
        url: https://rafty.rhinobase.io/api/og?title=Rating
---

A component that allows users to rate items using a set of icons.

This component is made on top of [Ark Rating Group Component](https://ark-ui.com/react/docs/components/rating-group) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Rating } from "@rafty/ui";

<Rating />;
```

## Usage

{% example %}

```jsx
<Rating />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Rating size="lg" />
```

{% /example %}

## Allow Half Ratting

`allowHalf` prop allows user to input value in half as well as in full start.

{% example %}

```jsx
<Rating allowHalf />
```

{% /example %}

## Default Value

{% example %}

```jsx
<Rating defaultValue="3" />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<Rating isDisabled />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<Rating isLoading />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<Rating isReadOnly defaultValue="2" />
```

{% /example %}

---

## Props

### Rating

`Rating` component is built on top of [Ark Rating Group](https://ark-ui.com/react/docs/components/rating-group#api-reference)

| Property      | Description                                | Type                                                   | Default |
| ------------- | ------------------------------------------ | ------------------------------------------------------ | ------- |
| size          | Size of the rating component.              | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| isDisabled    | To manage the disable state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading     | To manage the loading state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly    | To manage the readonly state.              | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| onValueChange | The callback invoke when value is changed. | <Info>(value?: number)=>void</Info> or `undefined`     | -       |
