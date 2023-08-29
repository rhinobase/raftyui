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
