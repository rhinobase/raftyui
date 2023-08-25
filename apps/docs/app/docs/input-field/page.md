---
title: InputField
pageTitle: InputField - Rafty UI
description: InputField
---

## Import

Input component is a component that is used to get user input in a text field.

- InputField

```jsx
import { InputField } from '@rafty/ui'
```

### Usage

```jsx
<InputField placeholder="Basic usage" />
```

### Size

Use the `size` prop to change the size of the `InputField`. You can set the value to `sm`, `md`, or `lg`.

```jsx
<InputField size="sm" />
<InputField size="md" />
<InputField size="lg" />
```

### Variant

Use the `variant` prop to change the visual style of the `InputField`. You can set the value to `solid`, `ghost`, `outline`.

```jsx
<InputField variant="solid" />
<InputField variant="ghost" />
<InputField variant="outline" />
```

### Read Only

Pass the `isReadOnly` prop to make input-field Read Only.

```jsx
<InputField isReadOnly />
```

### Required

Pass the `isRequired` prop to make input-field Required.

```jsx
<InputField isRequired />
```

### Disabled

Pass the `isDisabled` prop to make input-field Disabled.

```jsx
<InputField isDisabled />
```

### API

---

### Input Field

| Property   | Description | Type                    | Default |
| ---------- | ----------- | ----------------------- | ------- |
| className  |             | `string`                |         |
| size       |             | `sm, md, lg`            | md      |
| variant    |             | `solid, ghost, outline` | solid   |
| isReadOnly |             | `boolean`               | false   |
| isRequired |             | `boolean`               | false   |
| isDisabled |             | `boolean`               | false   |
