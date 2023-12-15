---
title: Menu
nextjs:
  metadata:
    title: Menu
    description: Displays a menu to the user—such as a set of actions or functions—triggered by a button.
    twitter:
      title: Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu
    openGraph:
      title: Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Menu
---

Displays a menu to the user—such as a set of actions or functions—triggered by a button. This component is made on top of [Radix UIs Dropdown Menu Component](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Menu,
  MenuTrigger,
  MenuItem,
  MenuCheckboxItem,
  MenuContent,
  MenuSeparator,
  MenuRadioGroup,
  MenuLabel,
  MenuRadioItem,
} from "@rafty/ui";

<Menu>
  <MenuTrigger />
  <MenuContent>
    <MenuItem />
    <MenuSeparator />
    <MenuCheckboxItem />
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

There are 3 `size` options in Menu: `sm`, `md` (default) & `lg`.

{% example name="menu:size" /%}

## SubMenu

{% example name="menu:submenu" /%}

## MenuCheckboxItem

{% example name="menu:menu_checkbox_item" /%}

## MenuRadioGroup

{% example name="menu:radio_group" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Menu.

{% example name="menu:unstyled" /%}

## UnStyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="menu:unstyledsub" /%}

## IsArrow

The `isArrow` prop exists in Menu Content subcomponent and is used to show/hide arrow on content. By default, its value is true.

{% example name="menu:isarrow" /%}

## Props

---

### Menu

This component is built on top of [Radix Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#root)

| Property   | Description                                            | Type                       | Default |
| ---------- | ------------------------------------------------------ | -------------------------- | ------- |
| size       | Size of the menu component and its subcomponents.      | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Remove style from this component and its subcomponents | `boolean`                  | `false` |

### MenuTrigger

This component is built on top of [Radix Dropdown Menu Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger)

| Property    | Description                              | Type                                                     | Default       |
| ----------- | ---------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the menu trigger component.      | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.          | `"solid"` or `"outline"` or `"ghost"`                    | `"ghost"`     |
| colorScheme | Color scheme of the component.           | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.    | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.   | `JSX.Element`                                            | -             |
| isDisabled  | To manage disabled state.                | `boolean`                                                | `false`       |
| isActive    | To manage active state.                  | `boolean`                                                | `false`       |
| isLoading   | To manage loading state.                 | `boolean`                                                | `false`       |
| isUnstyled  | Remove style from this component         | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element. | `boolean`                                                | `false`       |

### MenuContent

This component is built on top of [Radix Dropdown Menu Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content)

| Property        | Description                                   | Type      | Default |
| --------------- | --------------------------------------------- | --------- | ------- |
| isArrow         | Show arrow in content                         | `boolean` | `true`  |
| isUnstyled      | Remove style from this component              | `boolean` | `false` |
| arrowClassNames | Additional class names for the arrow element. | `string`  | -       |

### MenuGroup

This component is built on top of [Radix Dropdown Menu Group](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group)

### MenuItem

This component is built on top of [Radix Dropdown Menu Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuLabel

This component is built on top of [Radix Dropdown Menu Label](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuCheckboxItem

This component is built on top of [Radix Dropdown Menu Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuRadioGroup

This component is built on top of [Radix Dropdown Menu Radio Group](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radiogroup)

### MenuRadioItem

This component is built on top of [Radix Dropdown Menu Radio Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuSub

This component is built on top of [Radix Dropdown Menu Sub](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#sub)

### MenuSeparator

This component is built on top of [Radix Dropdown Menu Separator](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuSubTrigger

This component is built on top of [Radix Dropdown Menu Sub Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### MenuSubContent

This component is built on top of [Radix Dropdown Menu Sub Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent)

| Property   | Description                              | Type      | Default |
| ---------- | ---------------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component         | `boolean` | `false` |
| sideOffset | Side offset of the content from trigger. | `number`  | `10`    |
