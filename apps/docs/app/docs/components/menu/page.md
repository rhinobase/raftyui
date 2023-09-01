---
title: Menu
pageTitle: Menu - Rafty UI
description: Menu
---

## Anatomy

Import all parts and piece them together.

```jsx
import { Menu, MenuTrigger, MenuContent, MenuContent, MenuSeparator, MenuRadioGroup, MenuLabel, MenuRadioItem } from "@rafty/ui";

<Menu>
  <MenuTrigger />
  <MenuContent>
    <MenuItem />
    <MenuSeparator />
    <MenuCheckboxItem />
    <MenuSeparator />
    <MenuLabel />
    <MenuRadioGroup>
      <MenuRadioItem />
    </MenuRadioGroup>
  </MenuContent>
</Menu>;
```

## Usage

{% example name="menu:usage" /%}

## Size

{% example name="menu:size" /%}

## SubMenu

{% example name="menu:submenu" /%}

## MenuCheckboxItem

{% example name="menu:menu_checkbox_item" /%}

## MenuRadioGroup

{% example name="menu:radio_group" /%}

## Barebone

Pass `isBarebone` prop to remove all style in Menu.

{% example name="menu:barebone" /%}

## UnStyled

Pass ` isUnstyled` prop to remove style from a particulart sub component.

{% example name="menu:unstyled" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | false   |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isArrow    | Show arrow in content        | `boolean` | true    |
| isUnstyled | Removes style from component | `boolean` | false   |

### Arrow

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

### RadioItem

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### MenuSeparator

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### SubTrigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |

### SubContent

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | false   |
