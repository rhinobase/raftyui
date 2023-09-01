---
title: Alert Dialog
pageTitle: Alert Dialog - Rafty UI
description: Alert Dialog
---

## Anatomy

Import all parts and piece them together.

```jsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from "@rafty/ui";

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
</AlertDialog>;
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
