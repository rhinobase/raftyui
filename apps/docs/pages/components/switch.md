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

Pass the `defaultSelected` prop if you need to set default selected the switch.

```jsx
<Switch defaultSelected />
```

## Read Only

```jsx
<Switch isReadOnly />
```

## Required

```jsx
<Switch size="lg" isRequired />
```

## Indeterminate

```jsx
<Switch size="lg" isIndeterminate />
```

### API

---

### Root

| Property        | Description | Type                    | Default |
| --------------- | ----------- | ----------------------- | ------- |
| className       |             | `string`                |         |
| isSelected      |             | `boolean`               |         |
| size            |             | `sm` \ `md` \ `lg`      | `md`    |
| defaultSelected |             | `boolean` \ `undefined` |         |
| isDisabled      |             | `boolean` \ `undefined` |         |
