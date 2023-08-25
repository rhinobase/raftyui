---
title: Date Picker
pageTitle: Date Picker - Rafty UI
description: Date Picker
---

## Import

DatePickers combine a DateField and a Calendar popover to allow users to enter or select a date and time value.

- DatePicker

```jsx
import { DatePicker } from '@rafty/ui'
```

## Usage

```jsx
<DatePicker />
```

## Size

Use the `size` prop to change the size of the DatePicker. You can set the value to `sm`, `md`, or `lg`.

```jsx
<DatePicker size="sm" />
<DatePicker size="md" />
<DatePicker size="lg" />
```

## variant

Use the `variant` prop to change the visual style of the DatePicker. You can set the value to `solid`, `ghost`, `outline`.

```jsx
<DatePicker variant="solid" />
<DatePicker variant="ghost" />
<DatePicker variant="outline" />
```

### API

---

### Root

| Property     | Description | Type                                     | Default |
| ------------ | ----------- | ---------------------------------------- | ------- |
| variant      |             | `solid` / `outline` / `ghost`;           |         |
| size         |             | `sm` / `md` / `lg`;                      |         |
| onChange     |             | ((value: DateValue) => void) / undefined |         |
| defaultValue |             | DateValue / null / undefined             |         |
| value        |             | DateValue / null / undefined             |         |
| isRequired   |             | `boolean`                                | false   |
| isDisabled   |             | `boolean`                                | false   |
| isReadOnly   |             | `boolean`                                | false   |
