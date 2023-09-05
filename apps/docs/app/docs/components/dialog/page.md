---
title: Dialog
pageTitle: Dialog - Rafty UI
description: Dialog
---

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

This component is made on top of [Radix UIs Dialog Component](https://www.radix-ui.com/primitives/docs/components/dialog) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

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

There are 4 `size` options in dialog component: `sm`, `md` (default), `lg` & `xl`.

{% example name="dialog:size" /%}

## AsChild

Our Button component is forwarded within the Alert Dialog Trigger component, enabling you to utilize all button props in the trigger. Additionally, if you wish to use your own trigger, you can use the `asChild` prop.

{% example name="dialog:asChild" /%}

## Barebone

Pass `isBarebone` prop to remove all style in dialog.

{% example name="dialog:barebone" /%}

## ShowCloseButton

The showCloseButton prop exists in DialogContent subcomponent and it is used to show/hide default close button in dialog.

{% example name="dialog:closebutton" /%}

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
