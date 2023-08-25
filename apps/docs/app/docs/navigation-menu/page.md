---
title: Navigation Menu
pageTitle: Navigation Menu - Rafty UI
description: Navigation Menu
---

## Import

A collection of links for navigating websites.

```jsx
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuListItem,
  NavigationMenuTrigger,
} from '@rafty/ui'
```

## Usage

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/">Link</NavigationMenuLink>
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuIndicator />
  </NavigationMenuList>
</NavigationMenu>
```

## Content Size

Pass the `size` prop if you need to adjust the size of the navigation-menu content. Values can be `sm`, `md`, `lg`.

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent size="sm">
        <NavigationMenuLink href="/">Link</NavigationMenuLink>
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuIndicator />
  </NavigationMenuList>
</NavigationMenu>
```

## Barebone

Pass `isBarebone` prop to remove all style in Navigation Menu.

```jsx
<NavigationMenu isBarebone>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent size="lg">
        <NavigationMenuLink href="/">Link</NavigationMenuLink>
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuIndicator />
  </NavigationMenuList>
</NavigationMenu>
```

## UnStlyed

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent isUnstyled>
        <NavigationMenuLink href="/">Link</NavigationMenuLink>
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuIndicator />
  </NavigationMenuList>
</NavigationMenu>
```

### API

---

### Root

| Property           | Description                                                                                                                                            | Type                      | Default      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ------------ |
| className          |                                                                                                                                                        | `string`                  | -            |
| isBarebone         | Removes style from whole component                                                                                                                     | `boolean`                 | -            |
| isUnstyled         | Removes style from component                                                                                                                           | `boolean`                 | `false`      |
| defaultValue       | The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state.                         | `string`                  | -            |
| value              | The controlled value of the menu item to activate. Should be used in conjunction with `onValueChange`.                                                 | `string`                  | -            |
| onValueChange      | Event handler called when the value changes.                                                                                                           | `(value: string) => void` | -            |
| delayDuration      | The duration from when the mouse enters a trigger until the content opens.                                                                             | `number`                  | `200`        |
| skipDelayDuration  | How much time a user has to enter another trigger without incurring a delay again.                                                                     | `number`                  | `300`        |
| dir                | The reading direction of the menu when applicable. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. | `ltr` / `rtl`             | -            |
| orientation        | The orientation of the menu.                                                                                                                           | `horizontal` / `vertical` | `horizontal` |
| [data-orientation] |                                                                                                                                                        | `vertical` / `horizontal` |              |

### Sub

| Property           | Description                                                                                                                   | Type                      | Default      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------ |
| className          |                                                                                                                               | `string`                  | -            |
| isBarebone         | Removes style from component                                                                                                  | `boolean`                 | `false`      |
| defaultValue       | The value of the menu item that should be active when initially rendered. Use when you do not need to control the value state | `string`                  | -            |
| value              | The controlled value of the sub menu item to activate. Should be used in conjunction with `onValueChange`.                    | `string`                  | -            |
| onValueChange      | Event handler called when the value changes.                                                                                  | `(value: string) => void` | -            |
| orientation        | The orientation of the menu.                                                                                                  | `horizontal` / `vertical` | `horizontal` |
| [data-orientation] |                                                                                                                               | `vertical` / `horizontal` |              |

### List

| Property           | Description                  | Type                      | Default |
| ------------------ | ---------------------------- | ------------------------- | ------- |
| className          |                              | `string`                  |         |
| isUnstyled         | Removes style from component | `boolean`                 | `false` |
| asChild            |                              | `boolean`                 | `false` |
| [data-orientation] |                              | `vertical` / `horizontal` |         |

### Item

| Property  | Description                                                                                                                                                | Type      | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| className |                                                                                                                                                            | `string`  |         |
| asChild   |                                                                                                                                                            | `boolean` | false   |
| value     | A unique value that associates the item with an active value when the navigation menu is controlled. This prop is managed automatically when uncontrolled. | `string`  |         |

### Trigger

| Property        | Description                  | Type                  | Default |
| --------------- | ---------------------------- | --------------------- | ------- |
| className       |                              | `string`              |         |
| isUnstyled      | Removes style from component | `boolean`             | `false` |
| asChild         |                              | `boolean`             | `false` |
| [data-state]    |                              | `open` / `closed`     |         |
| [data-disabled] |                              | Present when disabled |         |

### Content

| Property                    | Description                                                                                                                                                                                                                                                   | Type                                              | Default    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------- | -------------------- | --- |
| className                   |                                                                                                                                                                                                                                                               | `string`                                          |            |
| isUnstyled                  | Removes style from component                                                                                                                                                                                                                                  | `boolean`                                         | `false`    |
| asChild                     |                                                                                                                                                                                                                                                               | `boolean`                                         | `false`    |
| disableOutsidePointerEvents | When `true`, hover/focus/click interactions will be disabled on elements outside the bounds of the component. Users will need to click twice on outside elements to interact with them: Once to close the navigation menu, and again to activate the element. | `boolean`                                         | `false`    |
| onEscapeKeyDown             | Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault. `                                                                                                                                                     | `(event: KeyboardEvent) => void`                  | -          |
| onPointerDownOutside        | Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.                                                                                                                  | `(event: PointerDownOutsideEvent) => void`        | -          |
| onFocusOutside              | Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.                                                                                                                             | `(event: FocusOutsideEvent) => void`              | -          |
| onInteractOutside           | Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.                                                                                         | `(event: React.FocusEvent                         | MouseEvent | TouchEvent) => void` | -   |
| forceMount                  | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.                                                                                                                                         | `boolean`                                         | -          |
| [data-state]                |                                                                                                                                                                                                                                                               | `open` / `closed`                                 |            |
| [data-motion]               |                                                                                                                                                                                                                                                               | `to-start` / `to-end `/ `from-start` / `from-end` |            |
| [data-orientation]          |                                                                                                                                                                                                                                                               | `vertical` / `horizontal`                         |            |

### Link

| Property      | Description                                                                                                                                                                                       | Type                | Default |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------- |
| className     |                                                                                                                                                                                                   | `string`            |         |
| isUnstyled    | Removes style from component                                                                                                                                                                      | `boolean`           | `false` |
| asChild       |                                                                                                                                                                                                   | `boolean`           | `false` |
| active        | Used to identify the link as the currently active page.                                                                                                                                           | `boolean`           | `false` |
| onSelect      |                                                                                                                                                                                                   | `function`          | -       |
| [data-active] | Event handler called when the user selects a link (via mouse or keyboard). Calling` event.preventDefault` in this handler will prevent the navigation menu from closing when selecting that link. | Present when active |         |
