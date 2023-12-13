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

This component is made on top of [Radix UIs Menu Component](https://www.radix-ui.com/primitives/docs/components/menubar) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

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

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in menubar.

{% example name="menubar:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="menubar:unstyledsub" /%}

## Props

---

### Menubar

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#root)

| Property   | Description                                              | Type                       | Default |
| ---------- | -------------------------------------------------------- | -------------------------- | ------- |
| size       | Size of the menubar component.                           | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isUnstyled | Removes style from whole component and its subcomponents | `boolean`                  | `false` |

### MenubarMenu

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#menu)

### MenubarTrigger

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#trigger)

`MenubarTrigger`composes `Button` component

| Property    | Description                                  | Type                                                     | Default       |
| ----------- | -------------------------------------------- | -------------------------------------------------------- | ------------- |
| size        | Size of the menubar trigger component.       | `"sm"` or `"md"` or `"lg"` or `"icon"` or `"fab"`        | `"md"`        |
| variant     | Style variant of the component.              | `"solid"` or `"outline"` or `"ghost"`                    | `"ghost"`     |
| colorScheme | Color scheme of the component.               | `"primary"` or `"secondary"` or `"error"` or `"success"` | `"secondary"` |
| leftIcon    | Custom JSX element for the left icon.        | `JSX.Element`                                            | -             |
| rightIcon   | Custom JSX element for the right icon.       | `JSX.Element`                                            | -             |
| isDisabled  | Whether the component is disabled.           | `boolean`                                                | `false`       |
| isActive    | Whether the component is in an active state. | `boolean`                                                | `false`       |
| isLoading   | Whether the component is in a loading state. | `boolean`                                                | `false`       |
| isUnstyled  | Removes Style from component                 | `boolean`                                                | `false`       |
| asChild     | Treats the component as a child element.     | `boolean`                                                | `false`       |

### MenubarContent

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#content)

| Property   | Description                          | Type      | Default |
| ---------- | ------------------------------------ | --------- | ------- |
| sideOffset | Horizontal offset for the component. | `number`  | `5`     |
| isUnstyled | Removes style from component         | `boolean` | `false` |

### MenubarItem

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#item)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### MenubarLabel

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#label)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### MenubarCheckboxGroup

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#group)

### MenubarCheckboxItem

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#checkboxitem)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### MenubarRadioGroup

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#radiogroup)

### MenubarRadioItem

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#radioitem)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### MenubarSub

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#sub)

### MenubarSeparator

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#separator)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### MenubarSubTrigger

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#subtrigger)

`MenubarSubTrigger`composes `Button` component

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### MenubarSubContent

This component is built on top of [Radix Menubar](https://www.radix-ui.com/primitives/docs/components/menubar#subcontent)

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |
