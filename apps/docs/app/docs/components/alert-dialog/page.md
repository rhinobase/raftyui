---
title: Alert Dialog
nextjs:
  metadata:
    title: Alert Dialog
    description: A modal dialog that interrupts the user with important content and expects a response.
    twitter:
      title: Alert Dialog
      images:
        url: https://rafty.rhinobase.io/api/og?title=Alert%20Dialog
    openGraph:
      title: Alert Dialog
      images:
        url: https://rafty.rhinobase.io/api/og?title=Alert%20Dialog
---

A modal dialog that interrupts the user with important content and expects a response.

This component is made on top of [Radix UIs Alert Dialog Component](https://www.radix-ui.com/primitives/docs/components/alert-dialog) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from a particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@rafty/ui";

<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle />
    <AlertDialogDescription />
    <AlertDialogAction />
    <AlertDialogCancel />
  </AlertDialogContent>
</AlertDialog>;
```

## Usage

Based on WAI-ARIA specifications, focus will be trapped to cancel action when the dialog opens, to prevent users from accidentally confirming the destructive action.

{% example %}

```jsx
<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogDescription>
    <div className="flex items-center justify-between">
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

{% /example %}

## Size

There are 4 `size` options available: `sm`, `md` (default), `lg` & `xl`.

{% example %}

```jsx
<AlertDialog size="sm">
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogDescription>
    <AlertDialogCancel asChild>
      <Button className="w-max" size="sm">
        Close
      </Button>
    </AlertDialogCancel>
  </AlertDialogContent>
</AlertDialog>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from AleartDialog and all its sub-components.

{% example %}

```jsx
<AlertDialog isUnstyled>
  <AlertDialogTrigger className="hover:bg-secondary-200 dark:hover:bg-secondary-800 rounded-lg p-2 px-4 dark:text-white">
    Open
  </AlertDialogTrigger>
  <AlertDialogOverlay className="data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 fixed inset-0 z-[70] bg-white/70 backdrop-blur-sm dark:bg-black/60" />
  <AlertDialogContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-secondary-700 dark:bg-secondary-800 dark:text-secondary-50 fixed left-[50%] top-[50%] z-[70] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-4 shadow-lg duration-200 sm:rounded-lg md:w-full">
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogDescription>
    <AlertDialogCancel asChild>
      <Button className="w-max" size="sm">
        Close
      </Button>
    </AlertDialogCancel>
  </AlertDialogContent>
</AlertDialog>
```

{% /example %}

## Unstyled Sub-Component

Pass `isUnstyled` prop in a particular sub-component to remove style from that sub-component.

{% example %}

```jsx
<AlertDialog>
  <AlertDialogTrigger
    isUnstyled
    className="hover:bg-secondary-200 dark:bg-secondary-900 dark:text-secondary-100 dark:hover:bg-secondary-800 rounded-md px-6 py-2"
  >
    Open
  </AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogDescription>
    <AlertDialogCancel asChild>
      <Button className="w-max" size="sm">
        Close
      </Button>
    </AlertDialogCancel>
  </AlertDialogContent>
</AlertDialog>
```

{% /example %}

## Aschild

Our Button component is forwarded within the AlertDialogTrigger component, enabling you to utilize all button props in the trigger. Additionally, if you wish to use your own trigger, you can use the `asChild` prop.

{% example %}

```jsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Open</Button>
  </AlertDialogTrigger>
  <AlertDialogOverlay />
  <AlertDialogContent>
    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    <AlertDialogDescription>
      This action cannot be undone. This will permanently delete your account
      and remove your data from our servers.
    </AlertDialogDescription>
    <AlertDialogCancel asChild>
      <Button className="w-max" size="sm">
        Close
      </Button>
    </AlertDialogCancel>
  </AlertDialogContent>
</AlertDialog>
```

{% /example %}

---

## Props

### AlertDialog

This component is built on top of [Radix Alert Dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog#root)

| Property   | Description                                              | Type                                                | Default |
| ---------- | -------------------------------------------------------- | --------------------------------------------------- | ------- |
| size       | Size of alert dialog and its sub-components.             | `"sm"` or `"md"` or `"lg"` or `"xl"` or `undefined` | `"md"`  |
| isUnstyled | Remove style from this component and its sub-components. | `boolean` or `undefined`                            | `false` |

### AlertDialogTrigger

This component is built on top of [Radix Alert Dialog Trigger](https://www.radix-ui.com/primitives/docs/components/alert-dialog#trigger) and using [Button](https://rafty.rhinobase.io/docs/components/button)

### AlertDialogOverlay

This component is built on top of [Radix Alert Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/alert-dialog#overlay)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### AlertDialogContent

This component is built on top of [Radix Alert Dialog Content](https://www.radix-ui.com/primitives/docs/components/alert-dialog#content)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### AlertDialogHeader

`AlertDialogHeader` composes the `<div>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### AlertDialogFooter

`AlertDialogFooter` composes the `<div>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### AlertDialogTitle

This component is built on top of [Radix Alert Dialog Title](https://www.radix-ui.com/primitives/docs/components/alert-dialog#title)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### AlertDialogDescription

This component is built on top of [Radix Alert Dialog Description](https://www.radix-ui.com/primitives/docs/components/alert-dialog#description)

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### AlertDialogAction

This component is built on top of [Radix Alert Dialog Action](https://www.radix-ui.com/primitives/docs/components/alert-dialog#action)

### AlertDialogCancel

This component is built on top of [Radix Alert Dialog Cancel](https://www.radix-ui.com/primitives/docs/components/alert-dialog#cancel)
