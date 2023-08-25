---
title: Text Area
pageTitle: Text Area - Rafty UI
description: Text Area
---

## Import

The Textarea component allows you to easily create multi-line text inputs.

- Textarea

```jsx
import { Textarea } from '@rafty/ui'
```

## Usage

```jsx
<Textarea placeholder="placeholder" />
```

## Variants

Pass the `variant` prop if you need to adjust visual style of the textarea. Values can be `solid`, `outline`, `ghost`.

```jsx
<Textarea placeholder="abc" variant="solid" />
```

## UnStyled

Pass `isUnstyled` prop to remove style from textarea.

```jsx
<Textarea placeholder="abc" isUnstyled />
```

### API

---

### Root

| Property   | Description                  | Type                          | Default   |
| ---------- | ---------------------------- | ----------------------------- | --------- |
| className  |                              | `string`                      | -         |
| variant    |                              | `solid` / `outline` / `ghost` | `outline` |
| size       |                              | `sm` / `md` / `lg`            | `md`      |
| isDisabled |                              | `boolean`                     | `false`   |
| isInvalid  |                              | `boolean`                     | `false`   |
| isLoading  |                              | `boolean`                     | `false`   |
| isReadOnly |                              | `boolean`                     | `false`   |
| isRequired |                              | `boolean`                     | `false`   |
| isUnStyled | Removes style from component | `boolean`                     | `false`   |
