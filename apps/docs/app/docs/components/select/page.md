---
title: Select
pageTitle: Select - Rafty UI
description: Select
---

## Import

Select component is a component that allows users pick a value from predefined options.

```jsx
import { Select, SelectItem } from "@rafty/ui";
```

## Usage

{% example name="select:usage" /%}

### API

---

### Root

| Property           | Description | Type                                        | Default            |
| ------------------ | ----------- | ------------------------------------------- | ------------------ |
| className          |             | `string`                                    | -                  |
| size               |             | `sm` \ `md` \ `lg`                          | `md`               |
| variant            |             | `solid` \ `outline` \ `ghost`               | `outline`          |
| onSelectionChange  |             | `((key: Key) => any)` \ `undefined`         | -                  |
| defaultSelectedKey |             | `Key`\ `undefined`                          | -                  |
| selectedKey        |             | `Key` \ `null` \ `undefined`                | -                  |
| placeholder        |             | `string`                                    | `Select an option` |
| isDisabled         |             | `boolean` \ `undefined`                     | -                  |
| isRequired         |             | `boolean` \ `undefined`                     | -                  |
| onOpenChange       |             | `((isOpen: boolean) => void)` \ `undefined` | -                  |
| isOpen             |             | `boolean` \ `undefined`                     | -                  |
| defaultOpen        |             | `boolean` \ `undefined`                     | -                  |
