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

{% example %}

```jsx
function DrawerExample() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay className="z-[70]" />
        <DrawerContent className="z-[70]">
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description. :
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

{% /example %}

## Size

There are 4 `size` options available in the drawer: `sm`, `md` (default), `lg` & `full`.

{% example  %}

```jsx
function DrawerExample() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer size="full" open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay className="z-[70]" />
        <DrawerContent className="z-[70]">
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description.
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

{% /example %}

## Side

You can decide from which side you want to open the drawer and you can choose between `left` or `right` (default).

{% example  %}

```jsx
function DrawerExample() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer side="left" open={isOpen} onOpenChange={setOpen}>
        <DrawerOverlay className="z-[70]" />
        <DrawerContent className="z-[70]">
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>
            This is sample drawer description.
          </DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

{% /example %}

## Props

---

### Drawer

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#root)

| Property | Description                                         | Type                                   | Default   |
| -------- | --------------------------------------------------- | -------------------------------------- | --------- |
| size     | Size of the drawer component and its subcomponents. | `"sm"` or `"md"` or `"lg"` or `"full"` | `"md"`    |
| side     | Side from which drawer enters in screen.            | `"right"` or `"left"`                  | `"right"` |

### DrawerOverlay

This component is built on top of [Radix Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay)

### DrawerContent

This component is built on top of [Radix Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content)

### DrawerTitle

This component is built on top of [Radix Dialog Title](https://www.radix-ui.com/primitives/docs/components/dialog#title)

### DrawerClose

This component is built on top of [Radix Dialog Close](https://www.radix-ui.com/primitives/docs/components/dialog#close)

| Property    | Description                              | Type                                                     | Default   |
| ----------- | ---------------------------------------- | -------------------------------------------------------- | --------- |
| size        | Size of the drawer close component.      | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"icon"`  |
| variant     | Style variant of the component.          | `"solid"` or `"outline"` or `"ghost"`                    | `"ghost"` |
| colorScheme | Color scheme of the component.           | `"primary"` or `"secondary"` or `"error"` or `"success"` | -         |
| leftIcon    | Custom JSX element for the left icon.    | `JSX.Element`                                            | -         |
| rightIcon   | Custom JSX element for the right icon.   | `JSX.Element`                                            | -         |
| isDisabled  | To manage disabled state.                | `boolean`                                                | `false`   |
| isActive    | To manage active state.                  | `boolean`                                                | `false`   |
| isLoading   | To manage loading state.                 | `boolean`                                                | `false`   |
| isUnstyled  | Remove style from this component         | `boolean`                                                | `false`   |
| asChild     | Treats the component as a child element. | `boolean`                                                | -         |
