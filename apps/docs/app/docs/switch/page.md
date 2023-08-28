---
title: Switch
pageTitle: Switch - Rafty UI
description: Switch
---

## Import

The Switch component is used as an alternative for the checkbox component.

- Switch

```jsx
import { Switch } from "@rafty/ui";
```

## Usage

{% example name="switch:usage" /%}

## Size

Pass the `size` prop if you need to adjust the size of the switch. Values can be `sm`, `md`, `lg`.

{% example name="switch:size" /%}

## Disabled

Pass the `isDisabled` prop if you need to disable the switch.

{% example name="switch:disabled" /%}

## Default Selected

Pass the `defaultSelected` prop if you need to set the switch selected by default and `isSelected` prop is used to manage checked state.

{% example name="switch:selected" /%}

## Required

{% example name="switch:required" /%}

### API

---

### Root

| Property        | Description | Type                    | Default |
| --------------- | ----------- | ----------------------- | ------- |
| className       |             | `string`                | -       |
| isSelected      |             | `boolean`               | -       |
| size            |             | `sm` \ `md` \ `lg`      | `md`    |
| defaultSelected |             | `boolean` \ `undefined` | -       |
| isDisabled      |             | `boolean` \ `undefined` | -       |
| isReadOnly      |             | `boolean` \ `undefined` | -       |
