---
title: ColorPicker
nextjs:
  metadata:
    title: ColorPicker
    description: A component that allows users to select a color from a color picker.
    twitter:
      title: ColorPicker
      images:
        url: https://rafty.rhinobase.io/api/og?title=ColorPicker
    openGraph:
      title: ColorPicker
      images:
        url: https://rafty.rhinobase.io/api/og?title=ColorPicker
---

A component that allows users to select a color from a color picker.

This component is made on top of [Ark Color Picker Component](https://ark-ui.com/react/docs/components/color-picker) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { ColorPicker } from "@rafty/ui";

<ColorPicker />;
```

## Usage

{% example %}

```jsx
<ColorPicker />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<ColorPicker size="lg" />
```

{% /example %}

## Format

- `format` prop can be used to change the format of color to get when selecting a color from palette.
- There are 3 `format` options available: `"rgba"` (default), `"hsba"` & `"hsla"`.

{% example %}

```jsx
<ColorPicker format="hsla" />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<ColorPicker isDisabled />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<ColorPicker isReadOnly />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<ColorPicker isLoading />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<ColorPicker isInvalid />
```

{% /example %}

---

## Props

### ColorPicker

This component is built on top of [Ark Color Picker](https://ark-ui.com/react/docs/components/color-picker#api-reference)

| Property      | Description                                                     | Type                                                                                                                                                                                                                                                                                            | Default  |
| ------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| size          | Size of the color-picker component.                             | `"sm"` or `"md"` or `"lg"` or `undefined`                                                                                                                                                                                                                                                       | `"md"`   |
| format        | The format of color to get when selecting a color from palette. | `"rgba"` or `"hsba"` or `"hsla"` or `undefined`                                                                                                                                                                                                                                                 | `"rgba"` |
| isDisabled    | To manage the disable state.                                    | `boolean` or <Info>() => boolean</Info> or `undefined`                                                                                                                                                                                                                                          | -        |
| isReadOnly    | To manage the readonly state.                                   | `boolean` or <Info>() => boolean</Info> or `undefined`                                                                                                                                                                                                                                          | -        |
| isLoading     | To manage the loading state.                                    | `boolean` or <Info>() => boolean</Info> or `undefined`                                                                                                                                                                                                                                          | -        |
| isInvalid     | To manage the invalid state.                                    | `boolean` or <Info>() => boolean</Info> or `undefined`                                                                                                                                                                                                                                          | -        |
| onValueChange | The callback invoke when value is changed.                      | <Info>( props: `{value:({ red: number, green: number, blue: number, alpha: number } or { hue: number, saturation: number, brightness: number, alpha: number } or { hue: number, saturation: number, lightness: number, apha: number }), valueAsString: string }`) => void</Info> or `undefined` | -        |
