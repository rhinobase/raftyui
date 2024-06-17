---
title: Date Picker
nextjs:
  metadata:
    title: Date Picker
    description: A component that allows users to select a date from a calendar.
    twitter:
      title: Date Picker
      images:
        url: https://rafty.rhinobase.io/api/og?title=Date%20Picker
    openGraph:
      title: Date Picker
      images:
        url: https://rafty.rhinobase.io/api/og?title=Date%20Picker
---

# Date Picker

A component that allows users to select a date from a calendar.

This component is made on top of [Ark Date Picker Component](https://ark-ui.com/react/docs/components/date-picker) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { DatePicker } from "@rafty/ui";

<DatePicker />;
```

## Usage

{% example %}

```jsx
<DatePicker />
```

{% /example %}

## size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<DatePicker size="sm" />
```

{% /example %}

## Default Value

{% example %}

```jsx
<DatePicker defaultValue="2024-06-13" />
```

{% /example %}

## Placeholder

{% example %}

```jsx
<DatePicker placeholder="Sample Placeholder" />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<DatePicker isDisabled />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<DatePicker isReadOnly />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<DatePicker isLoading />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<RangePicker isInvalid />
```

{% /example %}

---

## Props

### DatePicker

`DatePicker` component is built on top of [Ark Day Picker](https://ark-ui.com/react/docs/components/date-picker#api-reference)

| Property      | Description                                             | Type                                                   | Default |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------ | ------- |
| size          | Size of the date picker component.                      | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| defaultValue  | Default selected value.                                 | `string` or `undefined`                                | -       |
| value         | To manage the selected value.                           | `string` or `undefined`                                | -       |
| placeholder   | Placeholder to show in input when no value is selected. | `string` or `undefined`                                | -       |
| isDisabled    | To manage the disable state.                            | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid     | To manage the invalid state.                            | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading     | To manage the loading state.                            | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly    | To manage the readonly state.                           | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| onValueChange | The callback invoke when value is changed.              | <Info>(value?: `string`) => void</Info> or `undefined` | -       |
