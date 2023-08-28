---
title: Radio
pageTitle: Radio - Rafty UI
description: Radio
---

## Import

Radios are used when only one choice may be selected in a series of options.

```jsx
import { Radio, RadioCard, RadioGroup } from "@rafty/ui";
```

## Usage

{% example name="radio:usage" /%}

## Default Value

{% example name="radio:default" /%}

```jsx

```

## Disabled

Pass the `isDisabled` prop if you need to disable the radio-group and its sub components.
{% example name="radio:disabled" /%}

```jsx
<RadioGroup isDisabled>
  <div className="flex flex-col gap-4">
    <Radio value="4">Radio 4</Radio>
    <Radio value="5">Radio 5</Radio>
    <Radio value="6">Radio 6</Radio>
  </div>
</RadioGroup>
```

### API

### RadioGroup

| Property     | Description                                                                                   | Type                                      | Default    |
| ------------ | --------------------------------------------------------------------------------------------- | ----------------------------------------- | ---------- |
| defaultValue |                                                                                               | `string` / `undefined`                    | -          |
| isDisabled   |                                                                                               | `boolean` / `undefined`                   | -          |
| isReadOnly   |                                                                                               | `boolean` / `undefined`                   | -          |
| isRequired   |                                                                                               | `boolean` / `undefined`                   | -          |
| name         |                                                                                               | `string` / `undefined`                    | -          |
| onChange     |                                                                                               | ((value: string) => void) / `undefined`   | -          |
| value        |                                                                                               | `string` / `undefined`                    | -          |
| size         |                                                                                               | `sm` / `md` / `lg`                        | `md`       |
| children     |                                                                                               | `ReactNode`                               | -          |
| description  | A description for the field. Provides a hint such as specific requirements for what to choose | `ReactNode`                               | -          |
| onChange     | Handler that is called when the value changes                                                 | `((value: string) => void)` / `undefined` | -          |
| orientation  | The axis the Radio Button(s) should align with                                                | `Orientation` / `undefined`               | `vertical` |

### Radio

| Property      | Description                                                    | Type                                                              | Default |
| ------------- | -------------------------------------------------------------- | ----------------------------------------------------------------- | ------- |
| value\*       |                                                                | `string`                                                          |         |
| isDisabled    |                                                                | `boolean` / `undefined`                                           | -       |
| autoFocus     | Whether the element should receive focus on render             | `boolean` / `undefined`                                           | -       |
| id            | The element's unique identifier                                | `string` / `undefined`                                            | -       |
| onBlur        | Handler that is called when the element loses focus            | `((e: React.FocusEvent<Element, Element>) => void)` /`undefined`  | -       |
| onFocus       | Handler that is called when the element receives focus         | `((e: React.FocusEvent<Element, Element>) => void)` / `undefined` | -       |
| onFocusChange | Handler that is called when the element's focus status changes | `((isFocused: boolean) => void)` / `undefined`                    | -       |
| onKeyDown     | Handler that is called when a key is pressed                   | `((e: KeyboardEvent) => void)` / `undefined`                      | -       |
| onKeyUp       | Handler that is called when a key is released                  | `((e: KeyboardEvent) => void)` / `undefined`                      | -       |
