---
title: Drawer
pageTitle: Drawer - Rafty UI
description: Drawer
---

## Anatomy

Import all parts and piece them together.

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
