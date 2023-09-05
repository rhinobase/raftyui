---
title: Context Menu
pageTitle: Context Menu - Rafty UI
description: Context Menu
---

It displays a menu located at the pointer, triggered by a right-click or a long-press.

This component is made on top of [Radix UIs Context Menu Component](https://www.radix-ui.com/primitives/docs/components/context-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

# Anatomy

Import all parts and piece them together.

```jsx
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@rafty/ui";

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
</ContextMenu>;
```

## Usage

Unlike other similar components like Dialog, Menu, etc., it is not made of a button component. You can use any element as its trigger.

{% example name="context-menu:usage" /%}

## Size

There are 3 `size` options in Context Menu: `sm`, `md` (default), & `lg`.s

{% example name="context-menu:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in context-menu.

{% example name="context-menu:barebone" /%}

## Unstyled

{% example name="context-menu:unstyled" /%}

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
