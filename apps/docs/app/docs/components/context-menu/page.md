---
title: Context Menu
nextjs:
  metadata:
    title: Context Menu
    description: It displays a menu located at the pointer, triggered by a right-click or a long-press.
    twitter:
      title: Context Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Context%20Menu
    openGraph:
      title: Context Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Context%20Menu
---

It displays a menu located at the pointer, triggered by a right-click or a long-press.

This component is made on top of [Radix UIs Context Menu Component](https://www.radix-ui.com/primitives/docs/components/context-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

# Anatomy

Import all parts and piece them together.

```jsx
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@rafty/ui";

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

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in context-menu.

{% example name="context-menu:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="context-menu:unstyledsub" /%}

## Props

---

### ContextMenu

This component is built on top of [Radix Context Menu](https://www.radix-ui.com/primitives/docs/components/context-menu#root)

| Property   | Description                                               | Type                       | Default |
| ---------- | --------------------------------------------------------- | -------------------------- | ------- |
| size       | Size of the context menu component.                       | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Removes style from whole component and its sub components | `boolean`                  | `false` |

### ContextMenuTrigger

This component is built on top of [Radix Context Menu Trigger](https://www.radix-ui.com/primitives/docs/components/context-menu#trigger)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuContent

This component is built on top of [Radix Context Menu Content](https://www.radix-ui.com/primitives/docs/components/context-menu#content)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuItem

This component is built on top of [Radix Context Menu Item](https://www.radix-ui.com/primitives/docs/components/context-menu#item)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuCheckBoxGroup

This component is built on top of [Radix Context Menu Group](https://www.radix-ui.com/primitives/docs/components/context-menu#group)

| Property | Description                              | Type      | Default |
| -------- | ---------------------------------------- | --------- | ------- |
| asChild  | Treats the component as a child element. | `boolean` | `false` |

### ContextMenuLabel

This component is built on top of [Radix Context Menu Label](https://www.radix-ui.com/primitives/docs/components/context-menu#label)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuCheckboxItem

This component is built on top of [Radix Context Menu Checkbox Item](https://www.radix-ui.com/primitives/docs/components/context-menu#checkboxitem)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuSub

This component is built on top of [Radix Context Menu Sub](https://www.radix-ui.com/primitives/docs/components/context-menu#sub)

### ContextMenuRadioGroup

This component is built on top of [Radix Context Menu Radio Group](https://www.radix-ui.com/primitives/docs/components/context-menu#radiogroup)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuRadioItem

This component is built on top of [Radix Context Menu Radio Item](https://www.radix-ui.com/primitives/docs/components/context-menu#radioitem)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuSeparator

This component is built on top of [Radix Context Menu Separator](https://www.radix-ui.com/primitives/docs/components/context-menu#separator)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuSubTrigger

This component is built on top of [Radix Context Menu Sub Trigger](https://www.radix-ui.com/primitives/docs/components/context-menu#subtrigger)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### ContextMenuSubContent

This component is built on top of [Radix Context Menu Sub Content](https://www.radix-ui.com/primitives/docs/components/context-menu#subcontent)

| Property   | Description                          | Type      | Default |
| ---------- | ------------------------------------ | --------- | ------- |
| sideOffset | Horizontal offset for the component. | `number`  | `10`    |
| isUnstyled | Removes Style from component         | `boolean` | `false` |
