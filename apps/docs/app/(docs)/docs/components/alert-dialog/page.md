---
title: Alert Dialog
nextjs:
  metadata:
    title: Alert Dialog
    description: It is a modal dialog that interrupts the user with important content and expects a response.
---

It is a modal dialog that interrupts the user with important content and expects a response.

This component is made on top of [Radix UIs Alert Dialog Component](https://www.radix-ui.com/primitives/docs/components/alert-dialog) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

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

Based on WAI-ARIA specifications, focus will be trapped to cancel action when the dialog opens, to prevent users from accidentally confirming the destructive action.

{% example name="alert-dialog:usage" /%}

## Size

There are 4 `size` options in alert dialog component: `sm`, `md` (default), `lg` & `xl`.

{% example name="alert-dialog:size" /%}

## Barebone

Pass `isBarebone` prop to remove style in Alert Dialog

{% example name="alert-dialog:barebone" /%}

## Unstyled

Pass `isUnstyled` prop to remove style from a sub component

{% example name="alert-dialog:unstyled" /%}

## Aschild

Our Button component is forwarded within the Alert Dialog Trigger component, enabling you to utilize all button props in the trigger. Additionally, if you wish to use your own trigger, you can use the `asChild` prop.

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
