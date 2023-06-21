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
import { AlertDialog, AlertDialogAction, AlertDialogBody, AlertDialogCancel, AlertDialogContent, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from "@rafty/ui";
```

## Usage

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogBody>
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

Pass the `size` prop if you need to adjust the size of the AlertDialog. Values can be `sm, md, lg`.

### sm

```jsx
<AlertDialog size="sm">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```

### md

```jsx
<AlertDialog size="md">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```

### lg

```jsx
<AlertDialog size="lg">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```

## Barebone

Pass `isBarebone` prop to remove style in Alert Dialog

```jsx
<AlertDialog isbarebone size="lg">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogBody>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogBody>
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
    <AlertDialogBody>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogBody>
  </AlertDialogContent>
</AlertDialog>
```
