---
title: Password Field
pageTitle: Password Field - Rafty UI
description: Password Field
---

Just like Input Field, Password Field is used for password inputs but gives an extra functionality of show and hide password.

This component is made using Input Field and Input Group, making all native field props available for use.

## Anatomy

Import the component.

```jsx
import { PasswordField } from "@rafty/ui";

<PasswordField />;
```

## Usage

{% example name="password-field:usage" /%}

## Size

There are 3 `size` options in input field: `sm`, `md` (default) & `lg`.

{%example name="password-field:size"/%}

## Variant

There are 3 `variant` options in input field: `solid`, `outline` (default) & `ghost

{% example name="password-field:variant" /%}

### API

---

### Root

| Property   | Description                  | Type                    | Default |
| ---------- | ---------------------------- | ----------------------- | ------- |
| isUnstyled | Removes style from component | `boolean` / `undefined` | `false` |
