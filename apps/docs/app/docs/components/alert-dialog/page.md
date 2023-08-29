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

## UnStled

Pass `isUnstyled` prop to remove style from a sub component

{% example name="alert-dialog:unstyled" /%}

## API

---

### Root

| Property     | Description                        | Type               | Default |
| ------------ | ---------------------------------- | ------------------ | ------- |
| className    |                                    | `string`           |         |
| defaultOpen  |                                    | `boolean `         | -       |
| isbareBone   | Removes style from whole component | `boolean`          | false   |
| open boolean |                                    | No default value   |         |
| onOpenChange |                                    | function           |         |
| size         |                                    | `sm` / `md` / `lg` | `md`    |

### Trigger

| Property       | Description                  | Type              | Default |
| -------------- | ---------------------------- | ----------------- | ------- |
| className      |                              | `string`          |         |
| isUnstyled     | Removes Style from component | `boolean`         | false   |
| asChild        |                              | `boolean`         | false   |
| Data Attribute |                              | Values            |         |
| [data-state]   |                              | `open` / `closed` |         |

### Overlay

| Property       | Description                  | Type              | Default |
| -------------- | ---------------------------- | ----------------- | ------- |
| className      |                              | `string`          |         |
| isUnstyled     | Removes Style from component | `boolean`         | false   |
| asChild        |                              | `boolean`         | false   |
| forceMount     |                              | `boolean`         | -       |
| Data Attribute |                              | Values            |         |
| [data-state]   |                              | `open` / `closed` |         |

### Content

| Property         | Description                  | Type              | Default |
| ---------------- | ---------------------------- | ----------------- | ------- |
| className        |                              | `string`          |         |
| asChild          |                              | `boolean`         | false   |
| isUnstyled       | Removes Style from component | `boolean`         | false   |
| forceMount       |                              | `boolean`         | -       |
| onOpenAutoFocus  |                              | `function`        | -       |
| onCloseAutoFocus |                              | `function`        | -       |
| onEscapeKeyDown  |                              | `function`        | -       |
| Data Attribute   |                              | Values            |         |
| [data-state]     |                              | `open` / `closed` |         |

### Title

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes Style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |

### Cancel

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| asChild  |             | `boolean` | false   |

### Action

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| asChild  |             | `boolean` | false   |

### Description

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes Style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |
