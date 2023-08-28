---
title: Dialog
pageTitle: Dialog - Rafty UI
description: Dialog
---

## Import

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

```jsx
import { Dialog, DialogBody, DialogContent, DialogOverlay, DialogHeading, DialogTrigger, DialogCloseButton } from "@rafty/ui";
```

## Usage

{% example name="dialog:usage" /%}

## Sizes

Pass the `size` prop if you need to adjust the size of the dialog. Values can be `sm`, `md`, `lg`.

{% example name="dialog:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in dialog.

{% example name="dialog:barebone" /%}

### API

---

### Root

| Property     | Description                        | Type         | Default |
| ------------ | ---------------------------------- | ------------ | ------- |
| size         |                                    | `sm, md, lg` | md      |
| isBarebone   | Removes style from whole component | `boolean`    | false   |
| defaultOpen  |                                    | boolean      | -       |
| open         |                                    | boolean      | -       |
| onOpenChange |                                    | function     | -       |
| modal        |                                    | boolean      | true    |

### Trigger

`DialogTrigger`composes `Button` component

| Property       | Description                  | Type              | Default |
| -------------- | ---------------------------- | ----------------- | ------- |
| isUnstyled     | Removes style from component | `boolean`         |         |
| asChild        |                              | `boolean`         | false   |
| Data Attribute |                              | Values            |         |
| [data-state]   |                              | `open` / `closed` |         |

### Overlay

| Property       | Description                  | Type              | Default |
| -------------- | ---------------------------- | ----------------- | ------- |
| className      |                              | `string`          |         |
| isUnstyled     | Removes style from component | `boolean`         |         |
| asChild        |                              | boolean           | false   |
| forceMount     |                              | boolean           | -       |
| Data Attribute |                              | Values            |         |
| [data-state]   |                              | "open" / "closed" |         |

### Content

| Property             | Description                  | Type              | Default |
| -------------------- | ---------------------------- | ----------------- | ------- |
| className            |                              | `string`          |         |
| isUnstyled           | Removes style from component | `boolean`         | false   |
| asChild              |                              | `boolean`         | false   |
| forceMount           |                              | boolean           | -       |
| onOpenAutoFocus      |                              | function          | -       |
| onCloseAutoFocus     |                              | function          | -       |
| onEscapeKeyDown      |                              | function          | -       |
| onPointerDownOutside |                              | function          | -       |
| onInteractOutside    |                              | function          | -       |
| Data Attribute       |                              | Values            |         |
| [data-state]         |                              | `open` / `closed` |         |

### Close

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |

### Title

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |

### Descriptiom

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |
