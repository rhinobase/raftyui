---
title: Number Field
pageTitle: Number Field - Rafty UI
description: Number Field
---

## Import

NumberField component is a component that is used to get user input in a number field.

```jsx
import { NumberField } from '@rafty/ui'
```

## Usage

```jsx
<NumberField />
```

### API

---

### Root

| Property   | Description | Type                                      | Default   |
| ---------- | ----------- | ----------------------------------------- | --------- |
| className  |             | `string`                                  |           |
| variant    |             | `solid` / `outline` / `ghost` / undefined | `outline` |
| size       |             | `sm` / `md` / `lg`                        | `md`      |
| step       |             | `number` \ `undefined`                    | `1`       |
| maxValue   |             | `number` \ `undefined`                    |           |
| minValue   |             | `number` \ `undefined`                    |           |
| isDisabled |             | `boolean` / `undefined`                   | `false`   |
| isReadOnly |             | `boolean` / `undefined`                   | `false`   |
| isRequired |             | `boolean` / `undefined`                   | `false`   |
