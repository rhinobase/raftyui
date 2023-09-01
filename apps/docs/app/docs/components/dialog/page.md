---
title: Dialog
pageTitle: Dialog - Rafty UI
description: Dialog
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Dialog, DialogContent, DialogOverlay, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@rafty/ui";

<Dialog>
  <DialogTrigger />
  <DialogOverlay />
  <DialogContent>
    <DialogHeader>
      <DialogTitle />
    </DialogHeader>
    <DialogDescription />
    <DialogFooter />
  </DialogContent>
</Dialog>;
```

## Usage

{% example name="dialog:usage" /%}

## Sizes

Pass the `size` prop if you need to adjust the size of the dialog. Values can be `sm`, `md`, `lg`.

{% example name="dialog:size" /%}

## AsChild

{% example name="dialog:asChild" /%}

## Barebone

Pass `isBarebone` prop to remove all style in dialog.

{% example name="dialog:barebone" /%}

## Unstyled

{% example name="dialog:unstyled" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | false   |

### Trigger

`DialogTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` |         |

### Overlay

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` |         |

### Content

| Property        | Description                      | Type      | Default |
| --------------- | -------------------------------- | --------- | ------- |
| showCloseButton | show default dialog close button | `boolean` | true    |
| isUnstyled      | Removes style from component     | `boolean` | false   |

### Close

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Title

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Descriptiom

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
