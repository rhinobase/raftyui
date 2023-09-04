---
title: Button
pageTitle: Button - Rafty UI
description: Button
---

Buttons enable users to take action and make choices with a single click.

It is built over native html button component, enhanced with our styling conventions and additional props to manage various states, sizes, colors, and inclusion of icons.

## Anatomy

Import the component.

```jsx
import { Button } from "@rafty/ui";

<Button />;
```

## Usage

By default, it is a medium sized secondary solid button with hover effects and focus ring.

{% example name="button:usage" /%}

## Size

- There are 5 `size` options in button: `sm`, `md`, `lg`, `icon` & `fab` and by default it is set to `md`.
- `icon` size is used when you want only icon and no text in button
- `fab` size is used for circular button.

{% example name="button:size" /%}

## ColorScheme

There are 4 `colorScheme` in button: `primary`, `secondary`, `error` & `success` and by default it is set to `primary`.

{% example name="button:colorScheme" /%}

## Variant

There are 3 `variant` in button: `solid`, `outline` & `ghost` and by default it is set to `solid`.

{% example name="button:variant" /%}

## LeftIcon & RightIcon

You can pass JSX Element in `leftIcon` & `rightIcon` props to add icon on left & right side of button.

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
