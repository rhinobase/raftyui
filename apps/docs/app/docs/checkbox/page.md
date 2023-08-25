---
title: Checkbox
pageTitle: Checkbox - Rafty UI
description: Checkbox
---

## Import

Checkbox component is used in forms when a user needs to select multiple values from several options.

- Checkbox:

```jsx
import { Checkbox, CheckboxGroup } from '@rafty/ui'
```

### Usage

Pass `defaultSelected` prop to set default check the checkbox.

```jsx
<CheckboxGroup>
  <Checkbox>Checkbox</Checkbox>
</CheckboxGroup>
```

### Default Selected

```jsx
<CheckboxGroup>
  <Checkbox defaultSelected>Checkbox</Checkbox>
</CheckboxGroup>
```

### Disabled

Pass `isDisabled` prop to disable checkbox.

This property can also be passed in child/ sub component

```jsx
<CheckboxGroup isDisabled>
  <Checkbox>Checkbox</Checkbox>
</CheckboxGroup>
```

### Indeterminate

Pass `isIndeterminate` prop to set checkbox to indeterminate.

```jsx
<CheckboxGroup>
  <Checkbox isIndeterminate>Checkbox</Checkbox>
</CheckboxGroup>
```

### Selected

```jsx
<CheckboxGroup>
  <Checkbox isSelected>Checkbox</Checkbox>
</CheckboxGroup>
```

### Read Only

This property can also be passed in child/ sub component

```jsx
<CheckboxGroup isReadOnly>
  <Checkbox>Checkbox</Checkbox>
</CheckboxGroup>
```

### Required

This property can also be passed in child/ sub component

```jsx
<CheckboxGroup isRequired>
  <Checkbox>Checkbox</Checkbox>
</CheckboxGroup>
```

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
