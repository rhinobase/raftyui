---
title: Input Group
pageTitle: Input Group - Rafty UI
description: Input Group
---

## Import

Input component is a component that is used to get user input in a text field.

```jsx
import { InputGroup, LeftAddon, RightAddon, InputField } from "@rafty/ui";

() => (
  <InputGroup>
    <LeftAddon />
    <InputField />
    <RightAddon />
  </InputGroup>
);
```

### Usage

{% example name="input-group:usage" /%}

### Left Addon

you can add addons to the left and right of the Input component.Using `InputGroup`, `LeftAddon`, and `RightAddon` to help with this use case.

{% example name="input-group:left_addon" /%}

### Right Addon

you can add addons to the left and right of the Input component.Using `InputGroup`, `LeftAddon`, and `RightAddon` to help with this use case.

{% example name="input-group:right_addon" /%}

### Add Prefix

you can add to the left and right of the Inside Input component. Using `InputGroup`, `Prefix`, and `Suffix` to help with this use case.

{% example name="input-group:prefix" /%}

### Add Suffix

you can add to the left and right of the Inside Input component. Using `InputGroup`, `Prefix`, and `Suffix` to help with this use case.

{% example name="input-group:suffix" /%}

### API

---

### Root

| Property  | Description | Type     | Default |
| --------- | ----------- | -------- | ------- |
| className |             | `string` |         |
