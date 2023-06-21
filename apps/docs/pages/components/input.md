---
title: Input
pageTitle: Input - Rafty UI
description: Input
---

## Import

Input component is a component that is used to get user input in a text field.

- InputField

```jsx
import { InputField } from "@rafty/ui";
```

## Usage

```jsx
<InputField placeholder="Basic usage" />
```

## Sizes

Use the `size` prop to change the size of the `InputField`. You can set the value to `sm, md, or lg`.

```jsx
<InputField size="sm" />
<InputField size="md" />
<InputField size="lg" />
```

## Variants

Use the `variant` prop to change the visual style of the `InputField`. You can set the value to `solid, ghost, outline`.

```jsx
<InputField variant="solid" />
<InputField variant="ghost" />
<InputField variant="outline" />
```

## Left and Right Addons

you can add addons to the left and right of the Input component.Using `InputGroup`, `LeftAddon`, and `RightAddon` to help with this use case.

```jsx
<InputGroup>
  <LeftAddon>+234</LeftAddon>
  <InputField />
  <RightAddon>
    <MagnifyingGlassIcon />
  </RightAddon>
</InputGroup>
```

## Add Prefix and Suffix

you can add to the left and right of the Inside Input component. Using `InputGroup`, `Prefix`, and `Suffix` to help with this use case.

```jsx
<InputGroup>
  <Prefix>
    <PhoneIcon />
  </Prefix>
  <InputField />
  <Suffix>
    <CheckIcon />
  </Suffix>
</InputGroup>
```
