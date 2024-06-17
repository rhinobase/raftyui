---
title: Calendar
nextjs:
  metadata:
    title: Calendar
    description: A component that allows users to select a date from a calendar.
    twitter:
      title: Calendar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Calendar
    openGraph:
      title: Calendar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Calendar
---

A component that allows users to select a date from a calendar.

This component is made on top of [Ark Date Picker Component](https://ark-ui.com/react/docs/components/date-picker) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

# Anatomy

Import the component.

```jsx
import { Calendar } from "@rafty/ui";

<Calendar />;
```

## Usage

{% example %}

```jsx
<Calendar />
```

{% /example %}

## size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Calendar size="sm" />
```

{% /example %}

---

## Props

### Calendar

`Calendar` component is built on top of [Ark Date Picker View](https://ark-ui.com/react/docs/components/date-picker#api-reference)

| Property      | Description                                | Type                                                   | Default |
| ------------- | ------------------------------------------ | ------------------------------------------------------ | ------- |
| size          | Size of the calendar component.            | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| defaultValue  | Default selected value.                    | `string` or `undefined`                                | -       |
| value         | To manage the selected value.              | `string` or `undefined`                                | -       |
| onValueChange | The callback invoke when value is changed. | <Info>(value?: string)=>void</Info> or `undefined`     | -       |
| isDisabled    | To manage the disabled state.              | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading     | To manage the loading state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly    | To manage the readonly state.              | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
