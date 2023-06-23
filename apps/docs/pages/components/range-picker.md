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

```jsx
<RangePicker />
```

## Size

Pass the `size` prop if you need to adjust the size of the range-picker. Values can be `sm, md, lg`.

```jsx
<RangePicker size="sm" />
<RangePicker size="md" />
<RangePicker size="lg" />
```

## Variant

Pass the `variant` prop if you need to adjust the visual style of the range-picker. Values can be `solid, outline, ghost`.

```jsx
<RangePicker  variant="solid" />
<RangePicker  variant="outline" />
<RangePicker  variant="ghost" />
```

### API

---

### Root

| Property     | Description | Type                                                 | Default |
| ------------ | ----------- | ---------------------------------------------------- | ------- |
| variant      |             | `solid` / `outline` / `ghost`;                       |         |
| size         |             | `sm` / `md` / `lg`;                                  |         |
| onChange     |             | ((value: RangeValue<DateValue>) => void) / undefined |         |
| defaultValue |             | RangeValue<DateValue> / null / undefined             |         |
| value        |             | RangeValue<DateValue> / null / undefined             |         |
| isRequired   |             | `boolean`                                            | false   |
| isDisabled   |             | `boolean`                                            | false   |
| isReadOnly   |             | `boolean`                                            | false   |
