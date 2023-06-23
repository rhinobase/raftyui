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

## Usage

Pass `defaultSelected` prop to set default check the checkbox.

```jsx
<Checkbox defaultSelected>Checkbox</Checkbox>
```

## Disabled

Pass `isDisabled` prop to disable checkbox.

```jsx
<Checkbox isDisabled>Checkbox</Checkbox>
```

## Indeterminate

Pass `isIndeterminate` prop to set checkbox to indeterminate.

```jsx
<Checkbox isIndeterminate>Checkbox</Checkbox>
```

### Selected

```jsx
<Checkbox isSelected>Checkbox</Checkbox>
```

### Read Only

```jsx
<Checkbox isReadOnly>Checkbox</Checkbox>
```

### Required

```jsx
<Checkbox isRequired>Checkbox</Checkbox>
```

| Property        | Description | Type      | Default |
| --------------- | ----------- | --------- | ------- |
| isDisabled      |             | `boolean` | false   |
| defaultSelected |             | `boolean` | false   |
| isIndeterminate |             | `boolean` | false   |
| isSlected       |             | `boolean` | false   |
| isReadOnly      |             | `boolean` | false   |
| isRequired      |             | `boolean` | false   |
