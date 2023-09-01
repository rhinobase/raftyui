---
title: InputField
pageTitle: InputField - Rafty UI
description: InputField
---

## Anatomy

Import the component.

```jsx
import { InputField } from "@rafty/ui";

<InputField />;
```

### Usage

{% example name="input-field:usage" /%}

### Size

Use the `size` prop to change the size of the `InputField`. You can set the value to `sm`, `md`, or `lg`.

{% example name="input-field:size" /%}

### Variant

Use the `variant` prop to change the visual style of the `InputField`. You can set the value to `solid`, `ghost`, `outline`.

{% example name="input-field:variant" /%}

### Required

Pass the `isRequired` prop to make input-field Required.

{% example name="input-field:required" /%}

### Disabled

Pass the `isDisabled` prop to make input-field Disabled.

{% example name="input-field:disabled" /%}

### unstyled

Pass ` isUnstyled` prop to remove style component

{% example name="input-field:unstyled" /%}

### Left Addon

{% example name="input-field:left_addon" /%}

### Right Addon

{% example name="input-field:right_addon" /%}

### Prefix

{% example name="input-field:prefix" /%}

### Suffix

{% example name="input-field:suffix" /%}

### API

---

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |
