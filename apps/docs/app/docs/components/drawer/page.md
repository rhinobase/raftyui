---
title: Drawer
pageTitle: Drawer - Rafty UI
description: Drawer
---

## Import

The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.

```jsx
import { Drawer, DrawerOverlay, DrawerContent, DrawerTitle, DrawerDescription } from "@rafty/ui";

() => (
  <Drawer>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerTitle />
      <DrawerDescription />
      <DrawerClose />
    </DrawerContent>
  </Drawer>
);
```

## Usage

{% example name="drawer:usage" /%}

## Size

Pass the `size` prop if you need to adjust the size of the Drawer. Values can be `sm`, `md`, `lg`, `full`.

{% example name="drawer:size" /%}

## Side

Pass the `side` prop if you need to adjust the side of the Drawer. Values can be `left` and `right`.

{% example name="drawer:side" /%}

### API

---

### Close

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
