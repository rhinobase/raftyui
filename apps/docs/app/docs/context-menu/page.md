---
title: Context Menu
pageTitle: Context Menu - Rafty UI
description: Context Menu
---

# Import

Displays a menu located at the pointer triggered by a right-click or a long-press.

```jsx
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@rafty/ui";
```

## Usage

{% example name="context-menu:usage" /%}

## Size

Use the `size` prop to change the size of the ContextMenu. You can set the value to `sm`, `md`, or `lg`.

{% example name="context-menu:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in context-menu.

{% example name="context-menu:barebone" /%}

### API

---

### Root

| Property     | Description                        | Type          | Default          |
| ------------ | ---------------------------------- | ------------- | ---------------- |
| className    |                                    | `string`      |                  |
| size         |                                    | `sm, md, lg`  | md               |
| isBarebone   | Removes style from whole component | `boolean`     | false            |
| dir          |                                    | `ltr` / `rtl` | No default value |
| onOpenChange |                                    | `function`    | No default value |
| modal        |                                    | `boolean`     | true             |

### Trigger

`ContextMenuTrigger`composes `Button` component

| Property       | Description                  | Type              | Default |
| -------------- | ---------------------------- | ----------------- | ------- |
| isUnstyled     | Removes Style from component | `boolean`         |         |
| asChild        |                              | `boolean`         | false   |
| disabled       |                              | `boolean`         | false   |
| Data Attribute |                              | Values            |         |
| [data-state]   |                              | `open` / `closed` |         |

### Content

| Property             | Description                  | Type                               | Default          |
| -------------------- | ---------------------------- | ---------------------------------- | ---------------- |
| className            |                              | `string`                           |                  |
| isUnstyled           | Removes Style from component | `boolean`                          |                  |
| asChild              |                              | `boolean`                          | false            |
| loop                 |                              | `boolean`                          | false            |
| onCloseAutoFocus     |                              | `function`                         | No default value |
| onEscapeKeyDown      |                              | `function`                         | No default value |
| onPointerDownOutside |                              | `function`                         | No default value |
| onFocusOutside       |                              | `function`                         | No default value |
| onInteractOutside    |                              | `function`                         | No default value |
| forceMount           |                              | `boolean`                          | No default value |
| alignOffset          |                              | `number`                           | 0                |
| avoidCollisions      |                              | `boolean`                          | true             |
| collisionBoundary    |                              | Boundary                           | []               |
| collisionPadding     |                              | `number ` / `Padding `             | 0                |
| sticky               |                              | `partial`/ `always`                | "partial"        |
| hideWhenDetached     |                              | `boolean`                          | false            |
| Data Attribute       |                              | Values                             |                  |
| [data-state]         |                              | `open`/ `closed`                   |                  |
| [data-side]          |                              | `left` / `right` / `bottom`/ `top` |                  |
| [data-align]         |                              | `start`/ `end` / `center`          |                  |
| CSS Variable         |                              | Description                        |                  |

### Item

| Property           | Description                  | Type                     | Default          |
| ------------------ | ---------------------------- | ------------------------ | ---------------- |
| className          |                              | `string`                 |                  |
| isUnstyled         | Removes Style from component | `boolean`                |                  |
| asChild            |                              | `boolean`                | false            |
| disabled           |                              | `boolean`                | No default value |
| onSelect           |                              | `function`               | No default value |
| textValue          |                              | `string`                 | No default value |
| Data Attribute     |                              | Values                   |                  |
| [data-highlighted] |                              | Present when highlighted |                  |
| [data-disabled]    |                              | Present when disabled    | I                |

### Group

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| asChild  |             | `boolean` | false   |

### Label

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes Style from component | `boolean` |         |
| asChild    |                              | `boolean` | false   |

### CheckboxItem

| Property           | Description                  | Type                                         | Default          |
| ------------------ | ---------------------------- | -------------------------------------------- | ---------------- |
| className          |                              | `string`                                     |                  |
| isUnstyled         | Removes Style from component | `boolean`                                    |                  |
| asChild            |                              | `boolean`                                    | false            |
| checked            |                              | `boolean` / 'indeterminate' No default value |                  |
| onCheckedChange    |                              | `function`                                   | No default value |
| disabled           |                              | `boolean`                                    | No default value |
| onSelect           |                              | `function`                                   | No default value |
| textValue          |                              | `string`                                     | No default value |
| Data Attribute     |                              | Values                                       |                  |
| [data-state]       |                              | `checked` / `unchecked` / `indeterminate`    |
| [data-highlighted] |                              | Present when highlighted                     |                  |
| [data-disabled]    |                              | Present when disabled                        |                  |

### RadioGroup

| Property      | Description | Type       | Default          |
| ------------- | ----------- | ---------- | ---------------- |
| className     |             | `string`   |                  |
| asChild       |             | `boolean`  | false            |
| value         |             | `string`   | No default value |
| onValueChange |             | `function` |

### RadioItem

| Property           | Description                  | Type                                      | Default          |
| ------------------ | ---------------------------- | ----------------------------------------- | ---------------- |
| className          |                              | `string`                                  |                  |
| isUnstyled         | Removes Style from component | `boolean`                                 |                  |
| asChild            |                              | boolean                                   | false            |
| value\*            |                              | string                                    | default value    |
| disabled           |                              | boolean                                   | No default value |
| onSelect           |                              | `function`                                | No default value |
| textValue          |                              | `string`                                  | No default value |
| Data Attribute     |                              | Values                                    |                  |
| [data-state]       |                              | `checked` / `unchecked` / `indeterminate` |                  |
| [data-highlighted] |                              | Present when highlighted                  |                  |
| [data-disabled]    |                              | Present when disabled                     |                  |

### Saperator

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes Style from component | `boolean` |         |
| asChild    |                              | `boolean` | false   |

### Sub

| Property     | Description | Type       | Default          |
| ------------ | ----------- | ---------- | ---------------- |
| defaultOpen  |             | `boolean`  | No default value |
| open         |             | `boolean`  | No default value |
| onOpenChange |             | `function` |                  |

### Sub Trigger

`ContextMenuSubTrigger`composes `Button` component

| Property           | Description                  | Type                     | Default          |
| ------------------ | ---------------------------- | ------------------------ | ---------------- |
| className          |                              | `string`                 |                  |
| isUnstyled         | Removes Style from component | `boolean`                |                  |
| asChild            |                              | `boolean`                | false            |
| disabled           |                              | `boolean`                | No default value |
| textValue          |                              | string                   | No default value |
| Data Attribute     |                              | Values                   |                  |
| [ data-state]      |                              | `open` / `closed`        |
| [data-highlighted] |                              | Present when highlighted |                  |
| [ data-disabled]   |                              | Present when disabled    |                  |

### Sub Content

| Property             | Description                  | Type                 | Default          |
| -------------------- | ---------------------------- | -------------------- | ---------------- |
| className            |                              | `string`             |                  |
| isUnstyled           | Removes Style from component | `boolean`            |                  |
| asChild              |                              | `boolean`            | false            |
| loop                 |                              | `boolean`            | false            |
| onEscapeKeyDown      |                              | `function`           | No default value |
| onPointerDownOutside |                              | `function`           | No default value |
| onFocusOutside       |                              | `function`           | No default value |
| onInteractOutside    |                              | `function`           | No default value |
| forceMount           |                              | `boolean`            | No default value |
| sideOffset           |                              | `number`             | 0                |
| alignOffset          |                              | `number`             | 0                |
| avoidCollisions      |                              | `boolean`            | true             |
| collisionBoundary    |                              | Boundary             | []               |
| collisionPadding     |                              | `number` / `Padding` | 0                |
| arrowPadding         |                              | `number`             | 0                |
| sticky               |                              | `partial` / `always` | "partial"        |
| hideWhenDetached     |                              | `boolean`            | false            |
| Data Attribute       |                              | Values               |                  |
