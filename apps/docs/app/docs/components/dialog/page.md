---
title: Dialog
pageTitle: Dialog - Rafty UI
description: Dialog
---

## Import

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

```jsx
import { Dialog, DialogContent, DialogOverlay, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@rafty/ui";

() => (
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
  </Dialog>
);
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

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

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
