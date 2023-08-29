---
title: Popover
pageTitle: Popover - Rafty UI
description: Popover
---

## Import

Displays rich content in a portal, triggered by a button.

```jsx
import { Popover, PopoverTrigger, PopoverContent } from "@rafty/ui";
```

## Usage

{% example name="popover:usage" /%}

## Default Open

To Open Popover By Default pass `defaultOpen` prop.

{% example name="popover:default" /%}

## Barebone

Pass `isBarebone` prop to remove all style in popover.
{% example name="popover:barebone" /%}

### API

---

### Root

| Property     | Description | Type       | Default          |
| ------------ | ----------- | ---------- | ---------------- |
| className    |             | `string`   |                  |
| isBarebone   |             | `boolean`  | false            |
| defaultOpen  |             | `boolean`  | No default value |
| open         |             | `boolean`  | No default value |
| onOpenChange |             | `function` | No default value |
| modal        |             | `boolean`  | false            |

### Trigger

| Property     | Description                  | Type              | Default |
| ------------ | ---------------------------- | ----------------- | ------- |
| className    |                              | `string`          |         |
| isUnstyled   | Removes style from component | `boolean`         | false   |
| asChild      |                              | `boolean`         | false   |
| [data-state] |                              | `open` / `closed` |         |

### Content

| Property                  | Description                  | Type                                | Default          |
| ------------------------- | ---------------------------- | ----------------------------------- | ---------------- |
| className                 |                              | `string`                            |                  |
| isKeyboardDismissDisabled |                              | `boolean`                           | false            |
| isNonModal                |                              | `boolean`                           | false            |
| isUnstyled                | Removes style from component | `boolean`                           | false            |
| asChild                   |                              | `boolean`                           | false            |
| onOpenAutoFocus           |                              | `function`                          | No default value |
| onCloseAutoFocus          |                              | `function`                          | No default value |
| onEscapeKeyDown           |                              | `function`                          | No default value |
| onPointerDownOutside      |                              | `function`                          | No default value |
| onFocusOutside            |                              | `function`                          | No default value |
| onInteractOutside         |                              | `function`                          | No default value |
| forceMount                |                              | `boolean`                           | No default value |
| side                      |                              | `top` / `right` / `bottom` / `left` | "bottom"         |
| sideOffset                |                              | `number`                            | 0                |
| align                     |                              | `start` / `center` / `end`          | "center"         |
| alignOffset               |                              | `number`                            | 0                |
| avoidCollisions           |                              | `boolean`                           | true             |
| collisionBoundary         |                              | `Boundary`                          | []               |
| collisionPadding          |                              | `number` / `Padding`                | 0                |
| arrowPadding              |                              | `number`                            | 0                |
| sticky                    |                              | `partial` / `always`                | "partial"        |
| hideWhenDetached          |                              | `boolean`                           | false            |
| [data-state]              |                              | `open` / `closed`                   |                  |
| [data-side]               |                              | `left` / `right` / `bottom` / `top` |                  |
| [data-align]              |                              | `start` / `end` / `center`          |                  |
