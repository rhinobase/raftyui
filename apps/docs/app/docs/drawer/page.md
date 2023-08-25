---
title: Drawer
pageTitle: Drawer - Rafty UI
description: Drawer
---

## Import

The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.

```jsx
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
} from '@rafty/ui'
```

## Usage

```jsx
<Drawer open={isOpen} onOpenChange={setOpen}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>
        Make changes to your profile here. Click save when you&apos;re done.
      </p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

## Size

Pass the `size` prop if you need to adjust the size of the Drawer. Values can be `sm`, `md`, `lg`, `full`.

```jsx
<Drawer size="sm">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>
        Make changes to your profile here. Click save when you&apos;re done.
      </p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

## Side

Pass the `side` prop if you need to adjust the side of the Drawer. Values can be `left` and `right`.

```jsx
<Drawer side="left">
  <DrawerOverlay />
  <DrawerContent>
    <DrawerTitle>Drawer Header</DrawerTitle>
    <DrawerBody>
      <p>
        Make changes to your profile here. Click save when you&apos;re done.
      </p>
    </DrawerBody>
    <DrawerCloseButton />
  </DrawerContent>
</Drawer>
```

### API

---

### Root

| Property     | Description | Type           | Default |
| ------------ | ----------- | -------------- | ------- |
| size         |             | `sm, md, lg`   | `md`    |
| side         |             | `left`/`right` | `right` |
| defaultOpen  |             | boolean        | -       |
| open         |             | boolean        | -       |
| onOpenChange |             | function       | -       |
| modal        |             | boolean        | true    |

### Overlay

| Property       | Description                  | Type              | Default |
| -------------- | ---------------------------- | ----------------- | ------- |
| className      |                              | `string`          |         |
| isUnstyled     | Removes style from component | `boolean`         |         |
| asChild        |                              | boolean           | `false` |
| forceMount     |                              | boolean           | -       |
| Data Attribute |                              | Values            |         |
| [data-state]   |                              | "open" / "closed" |         |

### Content

| Property             | Description                  | Type              | Default |
| -------------------- | ---------------------------- | ----------------- | ------- |
| className            |                              | `string`          |         |
| isUnstyled           | Removes style from component | `boolean`         | `false` |
| asChild              |                              | `boolean`         | `false` |
| forceMount           |                              | boolean           | -       |
| onOpenAutoFocus      |                              | function          | -       |
| onCloseAutoFocus     |                              | function          | -       |
| onEscapeKeyDown      |                              | function          | -       |
| onPointerDownOutside |                              | function          | -       |
| onInteractOutside    |                              | function          | -       |
| Data Attribute       |                              | Values            |         |
| [data-state]         |                              | `open` / `closed` |         |

### Close

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes style from component | `boolean` | false   |
| asChild    |                              | `boolean` | false   |

### Title

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| className  |                              | `string`  |         |
| isUnstyled | Removes style from component | `boolean` | false   |
