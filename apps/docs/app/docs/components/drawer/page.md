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

# Drawer

The Drawer component is a panel that slides out from the edge of the screen. It proves useful when you want users to perform a task or view specific details without navigating away from the current page.

This component is made using [Radix UIs Dialog Component](https://www.radix-ui.com/primitives/docs/components/dialog), but it has been modified to make it look like a Drawer by adding animations and other styling.

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
        <DrawerOverlay />
        <DrawerContent>
          <DrawerTitle>Drawer Header</DrawerTitle>
          <DrawerDescription>This is sampleD description. :</DrawerDescription>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

{% /example %}

## Size

There are 4 `size` options available: `"sm"`, `"md"` (default), `"lg"` & `"full"`.

{% example %}

```jsx
function DrawerExample() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer size="full" open={isOpen} onOpenChange={setOpen}>
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
}
```

{% /example %}

## Side

You can decide from which side you want to open the Drawer and you can choose between `"left"` or `"right"` (default).

{% example %}

```jsx
function DrawerExample() {
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
}
```

{% /example %}

---

## Props

### Drawer

This component is built on top of [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog#root)

| Property | Description                                | Type                                                  | Default   |
| -------- | ------------------------------------------ | ----------------------------------------------------- | --------- |
| size     | Size of the drawer and its sub-components. | `"sm"` or `"md"` or `"lg"` or `"full"` or `undefined` | `"md"`    |
| side     | Side from which drawer enters in screen.   | `"right"` or `"left"` or `undefined`                  | `"right"` |

### DrawerOverlay

This component is built on top of [Radix Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay)

### DrawerContent

This component is built on top of [Radix Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content)

### DrawerTitle

This component is built on top of [Radix Dialog Title](https://www.radix-ui.com/primitives/docs/components/dialog#title)

### DrawerClose

This component is built on top of [Radix Dialog Close](https://www.radix-ui.com/primitives/docs/components/dialog#close) and using [Button](https://rafty.rhinobase.io/docs/components/button)

```

```
