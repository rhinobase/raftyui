---
title: Button
pageTitle: Button - Rafty UI
description: Button
---

## Import

Rafty UI exports 4 alert related components.

Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.

```jsx
import { button } from "@rafty/ui";
```

## Usage

```jsx
<Button>Button</Button>
```

## Button Sizes

Use the `size` prop to change the size of the button. You can set the value to `sm, md, or lg`.

```jsx
<Button size="sm">Button</Button>
<Button size="md">Button</Button>
<Button size="lg">Button</Button>
```

## Button ColorScheme

Use the `colorScheme` prop to change the color of the button. You can set the value to `primary, secondary, error and success`.

```jsx
<Button colorScheme="primary">Button text</Button>
<Button colorScheme="secondary">Button text</Button>
<Button colorScheme="error">Button text</Button>
<Button colorScheme="success">Button text</Button>
```

## Button variants

Use the `variant` prop to change the visual style of the Button. You can set the value to `solid, ghost, outline`.

```jsx
<Button colorScheme="primary" variant="solid">
  Button text
</Button>
<Button colorScheme="primary" variant="outline">
  Button text
</Button>
<Button colorScheme="primary" variant="ghost">
  Button text
</Button>
```

## Button With Icon

Use the `LeftIcon` and `rightIcon` prop to set Icon in Button.

```jsx
<Button leftIcon={<HiPhone />} colorScheme="primary" variant="solid">
  Button text
</Button>
<Button rightIcon={<HiPaperAirplane />} colorScheme="primary" variant="solid">
  Button text
</Button>

```
