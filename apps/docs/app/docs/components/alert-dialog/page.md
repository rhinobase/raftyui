---
title: Alert Dialog
pageTitle: Alert Dialog - Rafty UI
description: Alert Dialog
---

## Import

Rafty UI exports 7 alert dialog related components.

- AlertDialog: provides context and state for the dialog.
- AlertDialogHeader: should contain the title announced by screen readers.
- AlertDialogBody: should contain the description announced by screen readers.
- AlertDialogFooter: should contain the actions of the dialog.
- AlertDialogOverlay: The dimmed overlay behind the dialog.
- AlertDialogContent: The wrapper for the alert dialog's content.
- AlertDialogCloseButton: The button that closes the dialog.

```jsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from "@rafty/ui";

() => (
  <AlertDialog>
    <AlertDialogTrigger />
    <AlertDialogOverlay />
    <AlertDialogContent>
      <AlertDialogTitle />
      <AlertDialogDescription />
      <AlertDialogCancel>
        <Button />
      </AlertDialogCancel>
      <AlertDialogAction>
        <Button />
      </AlertDialogAction>
    </AlertDialogContent>
  </AlertDialog>
);
```

## Usage

{% example name="alert-dialog:usage" /%}

## Size

Pass the `size` prop if you need to adjust the size of the AlertDialog. Values can be `sm`, `md`, `lg`.

{% example name="alert-dialog:size" /%}

## Barebone

Pass `isBarebone` prop to remove style in Alert Dialog

{% example name="alert-dialog:barebone" /%}

## UnStyled

Pass `isUnstyled` prop to remove style from a sub component

{% example name="alert-dialog:unstyled" /%}

## Aschild

{% example name="alert-dialog:aschild"/%}

## API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isbareBone | Removes style from whole component | `boolean` | false   |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Overlay

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Title

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Description

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |