---
title: Button
pageTitle: Button - Rafty UI
description: Button
---

## Import

Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

```jsx
import { Button } from "@rafty/ui";
```

## Usage

{% example name="button:usage" /%}

## Size

Use the `size` prop to change the size of the button. You can set the value to `sm`, `md`, `lg`, `fab`, `icon`.

{% example name="button:size" /%}

## ColorScheme

Use the `colorScheme` prop to change the color of the button. You can set the value to `primary`, `secondary`, `error` and `success`.

{% example name="button:colorScheme" /%}

## Variant

Use the `variant` prop to change the visual style of the Button. You can set the value to `solid`, `ghost`, `outline`.

{% example name="button:variant" /%}

## LeftIcon & RightIcon

Use the `leftIcon` and `rightIcon` prop to set Icon in Button.

{% example name="button:icons" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style component.

{% example name="button:unstyled" /%}

## Active

{% example name="button:active" /%}

## Loading

{% example name="button:loading" /%}

## Disabled

{% example name="button:disabled" /%}

### API

---

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |
