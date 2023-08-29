---
title: Checkbox
pageTitle: Checkbox - Rafty UI
description: Checkbox
---

## Import

Checkbox component is used in forms when a user needs to select multiple values from several options.

- Checkbox:

```jsx
import { Checkbox, CheckboxGroup } from "@rafty/ui";
```

### Usage

{% example name="checkbox:usage" /%}

### Default Selected

Pass `defaultSelected` prop to set default check the checkbox.

{% example name="checkbox:default_checked" /%}

### Disabled

Pass `isDisabled` prop to disable checkbox.

This property can also be passed in child/ sub component

{% example name="checkbox:disabled" /%}

### Checked

{% example name="checkbox:checked" /%}

### Required

This property can also be passed in child/ sub component

{% example name="checkbox:required" /%}

### API

---

### Checkbox Group

| Property        | Description | Type      | Default |
| --------------- | ----------- | --------- | ------- |
| className       |             | `string`  |         |
| isDisabled      |             | `boolean` | false   |
| defaultSelected |             | `boolean` | false   |
| isReadOnly      |             | `boolean` | false   |
| isRequired      |             | `boolean` | false   |

### Checkbox

| Property        | Description | Type      | Default |
| --------------- | ----------- | --------- | ------- |
| isDisabled      |             | `boolean` | false   |
| defaultSelected |             | `boolean` | false   |
| isIndeterminate |             | `boolean` | false   |
| isSelected      |             | `boolean` | false   |
| isReadOnly      |             | `boolean` | false   |
| isRequired      |             | `boolean` | false   |
