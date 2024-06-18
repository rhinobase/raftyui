---
title: Slider
nextjs:
  metadata:
    title: Slider
    description: An input where the user selects a value from within a given range.
    twitter:
      title: Slider
      images:
        url: https://rafty.rhinobase.io/api/og?title=Slider
    openGraph:
      title: Slider
      images:
        url: https://rafty.rhinobase.io/api/og?title=Slider
---

An input where the user selects a value from within a given range.

This component is made on top of [Radix UIs Slider Component](https://www.radix-ui.com/primitives/docs/components/slider) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import all parts and piece them together.

```jsx
import { Slider, SliderRange, SliderThumb, SliderTrack } from "@rafty/ui";

<Slider>
  <SliderTrack>
    <SliderRange />
  </SliderTrack>
  <SliderThumb />
</Slider>;
```

## ColorScheme

There are 5 `colorScheme` options available: `"primary"` (default), `"secondary"`, `"error"`, `"info"`, `"success"` & `"warning"`.

{% example %}

```jsx
<Slider colorScheme="secondary" defaultValue={[20]}>
  <SliderTrack>
    <SliderRange />
  </SliderTrack>
  <SliderThumb />
</Slider>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Slider size="sm" defaultValue={[20]}>
  <SliderTrack>
    <SliderRange />
  </SliderTrack>
  <SliderThumb />
</Slider>
```

{% /example %}

## Range Slider

Slider accepts value in array and returns value in array in `onValueChange` function, so it can be used as `Range Slider`. You just need to pass more than one values in `value` and `defaultValue` props and put the same number of `<SliderThumb />`.

{% example %}

```jsx
<Slider defaultValue={[20, 80]}>
  <SliderTrack>
    <SliderRange />
  </SliderTrack>
  <SliderThumb />
  <SliderThumb />
</Slider>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<Slider isDisabled defaultValue={[20]}>
  <SliderTrack>
    <SliderRange />
  </SliderTrack>
  <SliderThumb />
</Slider>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<Slider isReadOnly defaultValue={[20]}>
  <SliderTrack>
    <SliderRange />
  </SliderTrack>
  <SliderThumb />
</Slider>
```

{% /example %}

---

## Props

### Slider

This component is built on top of [Radix Slider](https://www.radix-ui.com/primitives/docs/components/slider#root).

| Property    | Description                           | Type                                                                                               | Default     |
| ----------- | ------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| size        | Size of the slider component.         | `"sm"` or `"md"` or `"lg"` or `undefined`                                                          | `"md"`      |
| colorScheme | Color scheme of the slider component. | `"primary"` or `"secondary"` or `"error"` or `"success"` or `"warning"` or `"info"` or `undefined` | `"primary"` |
| isDisabled  | To manage the disable state.          | `boolean` or <Info>() => boolean</Info> or `undefined`                                             | -           |
| isReadOnly  | To manage the readonly state.         | `boolean` or <Info>() => boolean</Info> or `undefined`                                             | -           |

### SliderTrack

This component is built on top of [Radix Slider Track](https://www.radix-ui.com/primitives/docs/components/slider#track).

### SliderRange

This component is built on top of [Radix Slider Range](https://www.radix-ui.com/primitives/docs/components/slider#range).

### SliderThumb

This component is built on top of [Radix Slider Thumb](https://www.radix-ui.com/primitives/docs/components/slider#thumb).
