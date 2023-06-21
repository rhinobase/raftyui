---
title: Drawer
pageTitle: Drawer - Rafty UI
description: Drawer
---

## Import

The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.

```jsx
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerTitle } from "@rafty/ui";
```

## Usage

```jsx
<Drawer open={isOpen} onOpenChange={setOpen}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

## Size

Pass the `size` prop if you need to adjust the size of the Drawer. Values can be `sm, md, lg, full`.

### sm

```jsx
<Drawer size="sm">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

### md

```jsx
<Drawer size="md">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

### lg

```jsx
<Drawer size="lg">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

### full

```jsx
<Drawer size="full">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

## Side

Pass the `side` prop if you need to adjust the side of the Drawer. Values can be `left` and `right`.

### left

```jsx
<Drawer side="left">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

### right

```jsx
<Drawer side="right">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>Make changes to your profile here. Click save when you&apos;re done.</p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```
