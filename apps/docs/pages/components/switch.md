---
title: Switch
pageTitle: Switch - Rafty UI
description: Switch
---

## Import

The Switch component is used as an alternative for the checkbox component.

- Switch

```jsx
import { Switch } from "@rafty/ui";
```

## Usage

```jsx
<Switch />
```

## Size

Pass the `size` prop if you need to adjust the size of the switch. Values can be `sm, md, lg`.

```jsx
<Switch size="sm" />
<Switch size="md" />
<Switch size="lg" />
```

## Disabled

Pass the `isDisabled` prop if you need to disable the switch.

```jsx
<Switch isDisabled />
```

## Default Selected

Pass the `defaultSelected` prop if you need to set the switch selected by default and `isSelected` prop is used to manage checked state.

```jsx
<Switch defaultSelected />
```

## Read Only

Pass `isReadOnly` prop to restrict user from interecting with switch component.

```jsx
<Switch isReadOnly />
```

## Required

```jsx
<Switch size="lg" isRequired />
```

### API

---

### Root

| Property        | Description | Type                    | Default |
| --------------- | ----------- | ----------------------- | ------- |
| className       |             | `string`                | -       |
| isSelected      |             | `boolean`               | -       |
| size            |             | `sm` \ `md` \ `lg`      | `md`    |
| defaultSelected |             | `boolean` \ `undefined` | -       |
| isDisabled      |             | `boolean` \ `undefined` | -       |
| isReadOnly      |             | `boolean` \ `undefined` | -       |
