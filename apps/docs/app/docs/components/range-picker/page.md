---
title: Range Picker
nextjs:
  metadata:
    title: Range Picker
    description: A component that allows users to select a range of dates from a calendar
    twitter:
      title: Range Picker
      images:
        url: https://rafty.rhinobase.io/api/og?title=Range%20Picker
    openGraph:
      title: Range Picker
      images:
        url: https://rafty.rhinobase.io/api/og?title=Range%20Picker
---

A component that allows users to select a range of dates from a calendar.

This component is made on top of [Ark Date Picker Component](https://ark-ui.com/react/docs/components/date-picker) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { RangePicker } from "@rafty/ui";

<RangePicker />;
```

## Usage

{% example %}

```jsx
<RangePicker />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="flex w-full flex-col gap-3">
  <RangePicker size="sm" />
  <RangePicker size="md" />
  <RangePicker size="lg" />
</div>
```

{% /example %}

## Default Value

`defaultValue` prop is used to pass default selected value of RangePicker.

{% example %}

```jsx
<RangePicker defaultValue={["2024-06-13", "2024-07-04"]} />
```

{% /example %}

## Placeholder

`placeholder` prop is used to pass placeholder text to display when no value is selected.

{% example %}

```jsx
<RangePicker placeholder={{ from: "From", to: "To" }} />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<RangePicker isDisabled />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<RangePicker isReadOnly />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<RangePicker isLoading />
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

### RangePicker

`RangePicker` component is built on top of [Ark Date Picker](https://ark-ui.com/react/docs/components/date-picker#api-reference)

| Property      | Description                                           | Type                                                                                    | Default |
| ------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------- | ------- |
| size          | Size of the range picker component.                   | `"sm"` or `"md"` or `"lg"` or `undefined`                                               | `"md"`  |
| defaultValue  | Default selected value.                               | `[string]` or `[string, string]` or `undefined`                                         | -       |
| value         | To manage the selected value.                         | `[string]` or `[string, string]` or `undefined`                                         | -       |
| onValueChange | The callback invoke when value is changed.            | <Info>(value?: [string] or [string, string] or undefined) => void</Info> or `undefined` | -       |
| placeholder   | Input placeholders to show when no value is selected. | `{from?:String; to?:string}`                                                            | -       |
| isDisabled    | To manage the disable state.                          | `boolean` or <Info>() => boolean</Info> or `undefined`                                  | -       |
| isInvalid     | To manage the invalid state.                          | `boolean` or <Info>() => boolean</Info> or `undefined`                                  | -       |
| isLoading     | To manage the loading state.                          | `boolean` or <Info>() => boolean</Info> or `undefined`                                  | -       |
| isReadOnly    | To manage the readonly state.                         | `boolean` or <Info>() => boolean</Info> or `undefined`                                  | -       |
