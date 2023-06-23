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

### API

---

### Root

| Property     | Description | Type           | Default          |
| ------------ | ----------- | -------------- | ---------------- |
| size         |             | `sm, md, lg`   | md               |
| side         |             | `left`/`right` | right            |
| defaultOpen  |             | boolean        | No default value |
| open         |             | boolean        | No default value |
| onOpenChange |             | function       | No default value |
| modal        |             | boolean        | true             |

### Overlay

| Property       | Description | Type              | Default          |
| -------------- | ----------- | ----------------- | ---------------- |
| isUnstyled     |             | `boolean`         |                  |
| asChild        |             | boolean           | false            |
| forceMount     |             | boolean           | No default value |
| Data Attribute |             | Values            |                  |
| [data-state]   |             | "open" / "closed" |                  |

### Content

| Property             | Description | Type              | Default          |
| -------------------- | ----------- | ----------------- | ---------------- |
| isUnstyled           |             | `boolean`         | false            |
| asChild              |             | `boolean`         | false            |
| forceMount           |             | boolean           | No default value |
| onOpenAutoFocus      |             | function          | No default value |
| onCloseAutoFocus     |             | function          | No default value |
| onEscapeKeyDown      |             | function          | No default value |
| onPointerDownOutside |             | function          | No default value |
| onInteractOutside    |             | function          | No default value |
| Data Attribute       |             | Values            |                  |
| [data-state]         |             | `open` / `closed` |                  |

### Close

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| isUnstyled |             | `boolean` | false   |
| asChild    |             | `boolean` | false   |

### Title

| Property   | Description | Type      | Default |
| ---------- | ----------- | --------- | ------- |
| isUnstyled |             | `boolean` | false   |
