---
title: Alert Dialog
pageTitle: Alert Dialog - Rafty UI
description: Alert Dialog
---

It is a modal dialog that interrupts the user with important content and expects a response.

This component is made upon [Radix UIs Alert Dialog Component](https://www.radix-ui.com/primitives/docs/components/alert-dialog) with our styling conventions, in case you need to style it your way you can use `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent). These props have been forwarded to you, granting access to all the native properties.

## Anatomy

Import all parts and piece them together.

```jsx
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger, AlertDialogDescription } from "@rafty/ui";

<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle />
    <AlertDialogDescription />
    <AlertDialogCancel />
    <AlertDialogAction />
  </AlertDialogContent>
</AlertDialog>;
```

## Usage

Based on [WAI-ARIA specifications](https://www.w3.org/WAI/ARIA/apg/#alertdialog), focus will be trapped to cancel action when the dialog opens, to prevent users from accidentally confirming the destructive action.

{% example name="alert-dialog:usage" /%}

## Size

There are 4 `size` options in alert dialog component: `sm`, `md`, `lg` & `xl`. By default, it is set to `md`.

{% example name="alert-dialog:size" /%}

## Barebone

Pass `isBarebone` prop to remove style in Alert Dialog

{% example name="alert-dialog:barebone" /%}

## Unstyled

Pass `isUnstyled` prop to remove style from a sub component

{% example name="alert-dialog:unstyled" /%}

## Aschild

Our Button component is forwarded within the Alert Dialog Trigger component, enabling you to utilize all button props in the trigger. Additionally, if you wish to customize your own trigger, you can use the `asChild` prop.

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
