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

{% example %}

```jsx
<Dialog>
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay className="z-[70]" />
  <DialogContent className="z-[70]">
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogDescription>
      Make changes to your profile here. Click save when you&apos;re done.
    </DialogDescription>
    <div className="flex items-center justify-end pt-5">
      <Button>Save Change</Button>
    </div>
  </DialogContent>
</Dialog>
```

{% /example %}

## Size

There are 4 `size` options in dialog component: `sm`, `md` (default), `lg` & `xl`.

{% example %}

```jsx
<Dialog size="sm">
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay className="z-[70]" />
  <DialogContent className="z-[70]">
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogDescription>
      Make changes to your profile here. Click save when you&apos;re done.
    </DialogDescription>
    <div className="flex items-center justify-end pt-5">
      <Button>Save Change</Button>
    </div>
  </DialogContent>
</Dialog>
```

{% /example %}

## AsChild

Our Button component is forwarded within the Dialog Trigger component, enabling you to utilize all button props in the trigger. Additionally, if you wish to use your own trigger, you can use the `asChild` prop.

{% example %}

```jsx
<Dialog size="sm">
  <DialogTrigger asChild>
    <Button variant="ghost">Click Me</Button>
  </DialogTrigger>
  <DialogOverlay className="z-[70]" />
  <DialogContent className="z-[70]">
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogDescription>
      Make changes to your profile here. Click save when you&apos;re done.
    </DialogDescription>
    <div className="flex items-center justify-end pt-5">
      <Button>Save Change</Button>
    </div>
  </DialogContent>
</Dialog>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in dialog.

{% example %}

```jsx
<Dialog isUnstyled>
  <DialogTrigger className=" dark:hover:bg-secondary-800 hover:bg-secondary-100 rounded-lg p-2 px-6 dark:text-white">
    open
  </DialogTrigger>
  <DialogOverlay className="fixed inset-0 z-[70] h-full w-full bg-black/30 dark:bg-black/60" />
  <DialogContent
    className="dark:bg-secondary-800 dark:text-secondary-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2
                  data-[state=open]:slide-in-from-top-[48%] fixed left-[50%]
                  top-[50%] z-[70] w-[389px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 shadow-lg duration-200 md:w-[600px]"
  >
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogDescription>
      Make changes to your profile here. Click save when you&apos;re done.
    </DialogDescription>
    <div className="flex items-center justify-end pt-5">
      <Button>Save Change</Button>
    </div>
  </DialogContent>
</Dialog>
```

{% /example %}

## ShowCloseButton

The showCloseButton prop exists in DialogContent subcomponent and it is used to show/hide default close button in dialog. Its default value is true.

{% example %}

```jsx
<Dialog>
  <DialogTrigger>open</DialogTrigger>
  <DialogOverlay className="z-[70]" />
  <DialogContent className="z-[70]" showCloseButton>
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogDescription>
      Make changes to your profile here. Click save when you&apos;re done.
    </DialogDescription>
    <div className="flex items-center justify-end pt-5">
      <DialogClose asChild>
        <Button>Save Change</Button>
      </DialogClose>
    </div>
  </DialogContent>
</Dialog>
```

{% /example %}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example %}

```jsx
<Dialog>
  <DialogTrigger
    isUnstyled
    className=" dark:hover:bg-secondary-800 hover:bg-secondary-100 rounded-lg  p-2 px-4"
  >
    open
  </DialogTrigger>
  <DialogOverlay className="z-[70]" />
  <DialogContent className="z-[70]">
    <DialogHeader>Dialog Header</DialogHeader>
    <DialogDescription>
      Make changes to your profile here. Click save when you&apos;re done.
    </DialogDescription>
    <div className="flex items-center justify-end pt-5">
      <Button>Save Change</Button>
    </div>
  </DialogContent>
</Dialog>
```

{% /example %}

## Props

---

### Dialog

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#root)

| Property   | Description                                               | Type                                 | Default |
| ---------- | --------------------------------------------------------- | ------------------------------------ | ------- |
| size       | Size of the dialog component and its subcomponents.       | `"sm"` or `"md"` or `"lg"` or `"xl"` | `"md"`  |
| isUnstyled | Removes style from whole component and its sub components | `boolean`                            | `false` |

### DialogTrigger

This component is built on top of [Radix Dialog Trigger](https://www.radix-ui.com/primitives/docs/components/dialog#trigger)

| Property    | Description                              | Type                                                     | Default       |
| ----------- | ---------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the dialog trigger component.    | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.          | `"solid"` or `"outline"` or `"ghost"`                    | `"ghost"`     |
| colorScheme | Color scheme of the component.           | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.    | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.   | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                | `boolean`                                                | `false`       |
| isActive    | To manage active state.                  | `boolean`                                                | `false`       |
| isLoading   | To manage loading state.                 | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component         | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element. | `boolean`                                                | `false`       |

### DialogOverlay

This component is built on top of [Radix Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### DialogContent

This component is built on top of [Radix Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content)

| Property        | Description                         | Type      | Default |
| --------------- | ----------------------------------- | --------- | ------- |
| showCloseButton | To show default dialog close button | `boolean` | `true`  |
| isUnstyled      | Remove style from this component    | `boolean` | `false` |

### DialogHeader

`DialogHeader` composes `div` component

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### DialogFooter

`DialogFooter` composes `div` component

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### DialogClose

This component is built on top of [Radix Dialog Close](https://www.radix-ui.com/primitives/docs/components/dialog#close)

### DialogTitle

This component is built on top of [Radix Dialog Title](https://www.radix-ui.com/primitives/docs/components/dialog#title)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### DialogDescription

This component is built on top of [Radix Dialog Description](https://www.radix-ui.com/primitives/docs/components/dialog#description)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
