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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@rafty/ui'
```

## Usage

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogBody>
    <div className="mt-4 flex justify-end gap-6">
      <AlertDialogCancel asChild>
        <Button variant="outline">Cancel</Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button colorScheme="error">Yes, delete account</Button>
      </AlertDialogAction>
    </div>
  </AlertDialogContent>
</AlertDialog>
```

## Size

Pass the `size` prop if you need to adjust the size of the AlertDialog. Values can be `sm`, `md`, `lg`.

```jsx
<AlertDialog size="sm">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```

## Barebone

Pass `isBarebone` prop to remove style in Alert Dialog

```jsx
<AlertDialog isBarebone size="lg">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```

## UnStled

Pass `isUnstyled` prop to remove style from a sub component

```jsx
<AlertDialog size="lg">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay isUnstyled />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```

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
