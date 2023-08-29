---
title: Combo Box
pageTitle: Combo Box - Rafty UI
description: Combo Box
---

## Import

ComboBoxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.

## Usage

{% example name="combobox:usage" /%}

### API

---

### Root

| Property          | Description | Type                    | Default          |
| ----------------- | ----------- | ----------------------- | ---------------- |
| size              |             | `sm,md,lg`              | md               |
| variant           |             | `solid, outline, ghost` | solid            |
| onFocusChange     |             | `function`              | No default value |
| onInputChange     |             | `function`              | No default value |
| selectedKey       |             | `Key/ null`             | No default value |
| onSelectionChange |             | `function`              | No default value |
| inputValue        |             | Value                   |                  |
| isLoading         |             | `boolean`               | false            |
| isSlected         |             | `boolean`               | false            |
| isReadOnly        |             | `boolean`               | false            |
| isRequired        |             | `boolean`               | false            |

### Item

| Property  | Description | Type       | Default          |
| --------- | ----------- | ---------- | ---------------- |
| key       |             | `Key/null` | No default value |
| textValue |             | `string`   | No default value |
