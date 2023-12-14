---
title: Drawer
nextjs:
  metadata:
    title: Drawer
    description: The Drawer component is a panel that slides out from the edge of the screen. It proves useful when you want users to perform a task or view specific details without navigating away from the current page.
    twitter:
      title: Drawer
      images:
        url: https://rafty.rhinobase.io/api/og?title=Drawer
    openGraph:
      title: Drawer
      images:
        url: https://rafty.rhinobase.io/api/og?title=Drawer
---

The Drawer component is a panel that slides out from the edge of the screen. It proves useful when you want users to perform a task or view specific details without navigating away from the current page.

This component is made using [Radix UIs Dialog Component](https://www.radix-ui.com/primitives/docs/components/dialog), but it has been modified to make it look like a drawer by adding animations and other styling.

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
} from "@rafty/ui";

<Drawer>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle />
    <DrawerDescription />
    <DrawerClose />
  </DrawerContent>
</Drawer>;
```

## Usage

{% example name="drawer:usage" %}

```jsx
const [isOpen, setOpen] = useState(false);

return (
  <>
    <Button onClick={() => setOpen(true)}>Open Drawer</Button>
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerTitle>Drawer Header</DrawerTitle>
        <DrawerDescription>
          This is sample drawer description. :
        </DrawerDescription>
        <DrawerClose />
      </DrawerContent>
    </Drawer>
  </>
);
```

{% /example %}

## Size

There are 4 `size` options available in the drawer: `sm`, `md` (default), `lg` & `full`.

{% example name="drawer:size" %}

```jsx
const [isOpen, setOpen] = useState(false);

return (
  <>
    <Button onClick={() => setOpen(true)}>Open Drawer</Button>
    <Drawer size="sm" open={isOpen} onOpenChange={setOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerTitle>Drawer Header</DrawerTitle>
        <DrawerDescription>
          This is sample drawer description.
        </DrawerDescription>
        <DrawerClose />
      </DrawerContent>
    </Drawer>
  </>
);
```

{% /example %}

## Side

You can decide from which side you want to open the drawer and you can choose between `left` or `right` (default).

{% example name="drawer:side" %}

```jsx
const [isOpen, setOpen] = useState(false);

return (
  <>
    <Button onClick={() => setOpen(true)}>Open Drawer</Button>
    <Drawer side="left" open={isOpen} onOpenChange={setOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerTitle>Drawer Header</DrawerTitle>
        <DrawerDescription>
          This is sample drawer description.
        </DrawerDescription>
        <DrawerClose />
      </DrawerContent>
    </Drawer>
  </>
);
```

{% /example %}

## Props

---

### Drawer

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#root)

| Property | Description                           | Type                                   | Default   |
| -------- | ------------------------------------- | -------------------------------------- | --------- |
| size     | Size of the drawer trigger component. | `"sm"` or `"md"` or `"lg"` or `"full"` | `"md"`    |
| side     |                                       | `"right"` or `"left"`                  | `"right"` |

### DrawerOverlay

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#overlay)

### DrawerContent

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#content)

### DrawerTitle

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#title)

### DrawerClose

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#close)

| Property    | Description                                  | Type                                                     | Default   |
| ----------- | -------------------------------------------- | -------------------------------------------------------- | --------- |
| size        | Size of the drawer close component.          | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"icon"`  |
| variant     | Style variant of the component.              | `"solid"` or `"outline"` or `"ghost"`                    | `"ghost"` |
| colorScheme | Color scheme of the component.               | `"primary"` or `"secondary"` or `"error"` or `"success"` | -         |
| leftIcon    | Custom JSX element for the left icon.        | `JSX.Element`                                            | -         |
| rightIcon   | Custom JSX element for the right icon.       | `JSX.Element`                                            | -         |
| isDisabled  | Whether the component is disabled.           | `boolean`                                                | `false`   |
| isActive    | Whether the component is in an active state. | `boolean`                                                | `false`   |
| isLoading   | Whether the component is in a loading state. | `boolean`                                                | `false`   |
| isUnstyled  | Removes Style from component                 | `boolean`                                                | `false`   |
| asChild     | Treats the component as a child element.     | `boolean`                                                |           |
