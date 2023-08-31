---
title: Context Menu
pageTitle: Context Menu - Rafty UI
description: Context Menu
---

# Import

Displays a menu located at the pointer triggered by a right-click or a long-press.

```jsx
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@rafty/ui";

() => (
  <ContextMenu>
    <ContextMenuTrigger />
    <ContextMenuContent>
      <ContextMenuItem />
      <ContextMenuSub>
        <ContextMenuSubTrigger />
        <ContextMenuSubContent>
          <ContextMenuItem />
          <ContextMenuSeparator />
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem />
      <ContextMenuCheckboxItem />
      <ContextMenuSeparator />
      <ContextMenuLabel />
      <ContextMenuRadioGroup>
        <ContextMenuRadioItem />
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
);
```

## Usage

{% example name="context-menu:usage" /%}

## Size

Use the `size` prop to change the size of the ContextMenu. You can set the value to `sm`, `md`, or `lg`.

{% example name="context-menu:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in context-menu.

{% example name="context-menu:barebone" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | false   |

### Trigger

`ContextMenuTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### Item

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### Group

| Property | Description | Type      | Default |
| -------- | ----------- | --------- | ------- |
| asChild  |             | `boolean` | false   |

### Label

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### CheckboxItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### RadioGroup

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### RadioItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### Saperator

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### Sub Trigger

`ContextMenuSubTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |

### Sub Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` |         |
