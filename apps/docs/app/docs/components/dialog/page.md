---
title: Dialog
nextjs:
  metadata:
    title: Dialog
    description: Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
    twitter:
      title: Dialog
      images:
        url: https://rafty.rhinobase.io/api/og?title=Dialog
    openGraph:
      title: Dialog
      images:
        url: https://rafty.rhinobase.io/api/og?title=Dialog
---

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

This component is made on top of [Radix UIs Dialog Component](https://www.radix-ui.com/primitives/docs/components/dialog) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@rafty/ui";

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

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in dialog.

{% example name="dialog:unstyled" /%}

## ShowCloseButton

The showCloseButton prop exists in DialogContent subcomponent and it is used to show/hide default close button in dialog. Its default value is true.

{% example name="dialog:closebutton" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="dialog:unstyledsub" /%}

### API

---

### Root

| Property   | Description                                               | Type      | Default |
| ---------- | --------------------------------------------------------- | --------- | ------- |
| isUnstyled | Removes style from whole component and its sub components | `boolean` | false   |

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
