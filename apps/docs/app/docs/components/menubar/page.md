---
title: Menu Bar
nextjs:
  metadata:
    title: Menu Bar
    description: A visually persistent menu, commonly found in desktop applications, offers rapid access to a consistent set of commands.
    twitter:
      title: Menu Bar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu%20Bar
    openGraph:
      title: Menu Bar
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu%20Bar
---

A visually persistent menu, commonly found in desktop applications, offers rapid access to a consistent set of commands.

This component is made on top of [Radix UIs Menu Component](https://www.radix-ui.com/primitives/docs/components/menubar) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarLabel,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@rafty/ui";

<Menubar>
  <MenubarMenu>
    <MenubarTrigger />
    <MenubarContent>
      <MenubarLabel />
      <MenubarItem />
      <MenubarGroup />
      <MenubarCheckboxItem />
      <MenubarRadioGroup>
        <MenubarRadioItem />
      </MenubarRadioGroup>
      <MenubarSub>
        <MenubarSubTrigger />
        <MenubarSubContent />
      </MenubarSub>
      <MenubarSeparator />
    </MenubarContent>
  </MenubarMenu>
</Menubar>;
```

## Usage

{% example name="menubar:usage" /%}

## Size

There are 3 `size` options in the menu bar: `sm`, `md` (default) & `lg`.

{% example name="menubar:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in menubar.

{% example name="menubar:barebone" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style from a particular sub component.

{% example name="menubar:unstyled" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | false   |

### Trigger

`MenubarTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Conetnt

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Item

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Label

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### CheckboxItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### RadioGroup

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### RadioItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Saperator

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### SubTrigger

`MenubarSubTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### SubContent

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
