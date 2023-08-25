---
title: Input Group
pageTitle: Input Group - Rafty UI
description: Input Group
---

## Import

Input component is a component that is used to get user input in a text field.

```jsx
import { InputGroup } from '@rafty/ui'
```

### Usage

```jsx
<InputGroup>
  <LeftAddon>+234</LeftAddon>
  <InputField />
  <RightAddon>
    <MagnifyingGlassIcon />
  </RightAddon>
</InputGroup>
```

### Left Addon

you can add addons to the left and right of the Input component.Using `InputGroup`, `LeftAddon`, and `RightAddon` to help with this use case.

```jsx
<InputGroup>
  <LeftAddon>+234</LeftAddon>
  <InputField />
</InputGroup>
```

### Right Addon

you can add addons to the left and right of the Input component.Using `InputGroup`, `LeftAddon`, and `RightAddon` to help with this use case.

```jsx
<InputGroup>
  <InputField />
  <RightAddon>
    <MagnifyingGlassIcon />
  </RightAddon>
</InputGroup>
```

### Add Prefix

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

### Add Suffix

you can add to the left and right of the Inside Input component. Using `InputGroup`, `Prefix`, and `Suffix` to help with this use case.

```jsx
<InputGroup>
  <InputField />
  <Suffix>
    <CheckIcon />
  </Suffix>
</InputGroup>
```

### API

---

### Root

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` |         |
