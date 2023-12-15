---
title: Button
nextjs:
  metadata:
    title: Button
    description: Buttons enable users to take action and make choices with a single click.
    twitter:
      title: Button
      images:
        url: https://rafty.rhinobase.io/api/og?title=Button
    openGraph:
      title: Button
      images:
        url: https://rafty.rhinobase.io/api/og?title=Button
---

Buttons enable users to take action and make choices with a single click.

It is built over native html button component, enhanced with our styling conventions and additional props to manage various states, sizes, colors, and inclusion of icons

## Anatomy

Import the component.

```jsx
import { Button } from "@rafty/ui";

<Button />;
```

## Usage

By default, it is a medium sized secondary solid button with hover effects and focus ring..

{% example name="button:usage" %}

```jsx
import React from "react";
import { Button } from "@rafty/ui";

export default function App() {
  return <Button>Button</Button>;
}
```

{% /example %}

## Size

- There are 5 `size` options in button: `sm`, `md` (default), `lg`, `icon` & `fab`.
- `icon` size is used when you want only icon.
- `fab` size is used for circular button.

{% example name="button:size" /%}

## ColorScheme

There are 4 `colorScheme` options in button: `primary` (default), `secondary`, `error` & `success`.

{% example name="button:colorScheme" /%}

## Variant

There are 3 `variant` in button: `solid` (default), `outline` & `ghost`.

{% example name="button:variant" /%}

## LeftIcon & RightIcon

- You can pass JSX Element in `leftIcon` to add icon on left side of button.
- You can pass JSX Element in `rightIcon` to add icon on right side of button.

{% example name="button:icons" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style component.

{% example name="button:unstyled" /%}

## Active

You can manage the active state of button using `isActive` prop.

{% example name="button:active" /%}

## Loading

- You can manage the loading state of the button using this prop.
- You can also change the button text when the button is in loading state using `loadingText` prop.

{% example name="button:loading" /%}

## Disabled

You can manage disabled button state using `isDisabled` prop.

{% example name="button:disabled" /%}

## Props

---

### Button

`Button` composes the `<button>` component.

| Property    | Description                                            | Type                                                     | Default       |
| ----------- | ------------------------------------------------------ | -------------------------------------------------------- | ------------- |
| size        | Size of the button component.                          | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.                        | `"solid"` or `"outline"` or `"ghost"`                    | `"solid"`     |
| colorScheme | Color scheme of the component.                         | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.                  | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.                 | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                              | `boolean`                                                | `false`       |
| isActive    | To manage active state.                                | `boolean`                                                | `false`       |
| loadingText | Text to be displayed during component's loading state. | `string`                                                 | -             |
| isLoading   | To manage loading state.                               | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component                       | `boolean`                                                | `false`       |
| type        | Type of the component.                                 | `"button"` or `"submit"` or `"reset"`                    | `"button"`    |
