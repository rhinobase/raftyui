---
title: Menu Bar
pageTitle: Menu Bar - Rafty UI
description: Menu Bar
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "@rafty/ui";

<Menubar>
  <MenubarMenu>
    <MenubarTrigger />
    <MenubarContent>
      <MenubarLabel />
      <MenubarItem />
      <MenubarGroup>
        <MenubarItem />
      </MenubarGroup>
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

Pass the `size` prop if you need to adjust the size of the menubar. Values can be `sm`, `md`, `lg`.

{% example name="menubar:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in menubar.

{% example name="menubar:barebone" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

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
