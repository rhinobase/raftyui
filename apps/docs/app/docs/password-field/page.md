---
title: Password Field
pageTitle: Password Field - Rafty UI
description: Password Field
---

## Import

PasswordField component is a component that is used to get user input in a password field.

```jsx
import { PasswordField } from "@rafty/ui";
```

## Usage

{% example name="password-field:usage" /%}

### API

---

### Root

| Property   | Description                  | Type                                      | Default   |
| ---------- | ---------------------------- | ----------------------------------------- | --------- |
| className  |                              | `string`                                  |           |
| name       |                              | `string` / `undefined`                    |           |
| variant    |                              | `solid` / `outline` / `ghost` / undefined | `outline` |
| size       |                              | `sm` / `md` / `lg`                        | `md`      |
| isDisabled |                              | `boolean` / `undefined`                   | `false`   |
| isReadOnly |                              | `boolean` / `undefined`                   | `false`   |
| isRequired |                              | `boolean` / `undefined`                   | `false`   |
| isUnstyled | Removes style from component | `boolean` / `undefined`                   | `false`   |
