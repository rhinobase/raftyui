---
title: Rand Picker
pageTitle: Rand Picker - Rafty UI
description: Rand Picker
---

## Import

A date range picker combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.

```jsx
import { RangePicker } from "@rafty/ui";
```

## Usgae

{% example name="range-picker:usage" /%}

## Size

Pass the `size` prop if you need to adjust the size of the range-picker. Values can be `sm`, `md`, `lg`.

```jsx
<RangePicker size="sm" />
<RangePicker size="md" />
<RangePicker size="lg" />
```

## Variant

Pass the `variant` prop if you need to adjust the visual style of the range-picker. Values can be `solid`, `outline`, `ghost`.

```jsx
<RangePicker variant="solid" />
<RangePicker variant="outline" />
<RangePicker variant="ghost" />
```

### API

---

### Root

| Property            | Description                                                                                                                            | Type                                                        | Default   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------- |
| variant             |                                                                                                                                        | `solid` / `outline` / `ghost`;                              | `outline` |
| size                |                                                                                                                                        | `sm` / `md` / `lg`;                                         | `md`      |
| onChange            |                                                                                                                                        | `((value: RangeValue<DateValue>) => void)` / `undefined`    | -         |
| defaultValue        |                                                                                                                                        | `RangeValue<DateValue>` / `null` / `undefined`              | -         |
| value               |                                                                                                                                        | `RangeValue<DateValue>` / `null` / `undefined`              | -         |
| isRequired          |                                                                                                                                        | `boolean`                                                   | `false`   |
| isDisabled          |                                                                                                                                        | `boolean`                                                   | `false`   |
| isReadOnly          |                                                                                                                                        | `boolean`                                                   | `false`   |
| isOpen              | Whether the overlay is open by default (controlled)                                                                                    | `boolean` / `undefined`                                     | -         |
| defaultOpen         |                                                                                                                                        | `boolean` / `undefined`                                     | -         |
| granularity         | Determines the smallest unit that is displayed in the date picker. By default, this is "day" for dates, and "minute" for times.        | `Granularity` / `undefined`                                 | -         |
| hideTimeZone        | Whether to hide the time zone abbreviation.                                                                                            | `boolean` / `undefined`                                     | -         |
| hourCycle           | Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.                              | `12` / `24` / `undefined`                                   | -         |
| isDateUnavailable   | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.                               | `((date: DateValue) => boolean)` / `undefined`              | -         |
| maxValue            | The maximum allowed date that a user may select                                                                                        | `DateValue` / `undefined`                                   | -         |
| minValue            | The minimum allowed date that a user may select                                                                                        | `DateValue` / `undefined`                                   | -         |
| onBlur              | Handler that is called when the element loses focus                                                                                    | `((e: FocusEvent<Element, Element>) => void)` / `undefined` | -         |
| onChange            | Handler that is called when the value changes                                                                                          | `((value: RangeValue<DateValue>) => void)` / `undefined`    | -         |
| onFocus             | Handler that is called when the element receives focus                                                                                 | `((e: FocusEvent<Element, Element>) => void)` / `undefined` | -         |
| onFocusChange       | Handler that is called when the element's focus status changes                                                                         | `((isFocused: boolean) => void) ` / `undefined`             | -         |
| onKeyDown           | Handler that is called when a key is pressed                                                                                           | `((e: KeyboardEvent) => void) ` / `undefined`               | -         |
| onKeyUp             | Handler that is called when a key is released                                                                                          | `((e: KeyboardEvent) => void) ` / `undefined`               | -         |
| onOpenChange        | Handler that is called when the overlay's open state changes                                                                           | `((isOpen: boolean) => void)` / `undefined`                 | -         |
| placeholderValue    | A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight | `DateValue` / `undefined`                                   | -         |
| shouldCloseOnSelect | Determines whether the date picker popover should close automatically when a date is selected                                          | `boolean` / `(() => boolean)` / `undefined`                 | `true`    |
| validationState     | Whether the input should display its "valid" or "invalid" visual styling                                                               | `ValidationState` / `undefined`                             | -         |
| value               | The current value (controlled)                                                                                                         | `RangeValue<DateValue>` / `null` / `undefined`              | -         |
