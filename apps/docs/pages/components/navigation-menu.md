---
title: Navigation Menu
pageTitle: Navigation Menu - Rafty UI
description: Navigation Menu
---

## Import

A collection of links for navigating websites.

```jsx
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuListItem, NavigationMenuTrigger } from "@rafty/ui";
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

Pass the `size` prop if you need to adjust the size of the navigation-menu content. Values can be `sm, md, lg`.

### sm

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

### md

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent size="md">
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

### lg

```jsx
<NavigationMenu>
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

| Property           | Description                        | Type                      | Default      |
| ------------------ | ---------------------------------- | ------------------------- | ------------ |
| className          |                                    | `string`                  | -            |
| isBarebone         | Removes style from whole component | `boolean`                 | -            |
| isUnstyled         | Removes style from component       | `boolean`                 | false        |
| defaultValue       |                                    | `string`                  | -            |
| value              |                                    | `string`                  | -            |
| onValueChange      |                                    | `function`                | -            |
| delayDuration      |                                    | `number`                  | 200          |
| skipDelayDuration  |                                    | `number`                  | 300          |
| dir                |                                    | `ltr` / `rtl`             | -            |
| orientation        |                                    | `ltr` / `rtl`             | "horizontal" |
| [data-orientation] |                                    | `vertical` / `horizontal` |              |

### Sub

| Property           | Description                  | Type                      | Default      |
| ------------------ | ---------------------------- | ------------------------- | ------------ |
| className          |                              | `string`                  | -            |
| isBarebone         | Removes style from component | `boolean`                 | false        |
| defaultValue       |                              | `string`                  | -            |
| value              |                              | `string`                  | -            |
| onValueChange      |                              | `function`                | -            |
| orientation        |                              | `horizontal` / `vertical` | "horizontal" |
| [data-orientation] |                              | `vertical` / `horizontal` |              |

### List

| Property           | Description                  | Type                      | Default |
| ------------------ | ---------------------------- | ------------------------- | ------- |
| className          |                              | `string`                  |         |
| isUnstyled         | Removes style from component | `boolean`                 | false   |
| asChild            |                              | `boolean`                 | false   |
| [data-orientation] |                              | `vertical` / `horizontal` |         |

### Item

| Property  | Description | Type      | Default |
| --------- | ----------- | --------- | ------- |
| className |             | `string`  |         |
| asChild   |             | `boolean` | false   |
| value     |             | `string`  |         |

### Trigger

| Property        | Description                  | Type                  | Default |
| --------------- | ---------------------------- | --------------------- | ------- |
| className       |                              | `string`              |         |
| isUnstyled      | Removes style from component | `boolean`             | false   |
| asChild         |                              | `boolean`             | false   |
| [data-state]    |                              | `open` / `closed`     |         |
| [data-disabled] |                              | Present when disabled |         |

### Content

| Property                    | Description                  | Type                                              | Default |
| --------------------------- | ---------------------------- | ------------------------------------------------- | ------- |
| className                   |                              | `string`                                          |         |
| isUnstyled                  | Removes style from component | `boolean`                                         | false   |
| asChild                     |                              | `boolean`                                         | false   |
| disableOutsidePointerEvents |                              | `boolean`                                         | false   |
| onEscapeKeyDown             |                              | `function`                                        | -       |
| onPointerDownOutside        |                              | `function`                                        | -       |
| onFocusOutside              |                              | `function`                                        | -       |
| onInteractOutside           |                              | `function`                                        | -       |
| forceMount                  |                              | `boolean`                                         | -       |
| [data-state]                |                              | `open` / `closed`                                 |         |
| [data-motion]               |                              | `to-start` / `to-end `/ `from-start` / `from-end` |         |
| [data-orientation]          |                              | `vertical` / `horizontal`                         |         |

### Link

| Property      | Description                  | Type                | Default |
| ------------- | ---------------------------- | ------------------- | ------- |
| className     |                              | `string`            |         |
| isUnstyled    | Removes style from component | `boolean`           | false   |
| asChild       |                              | `boolean`           | false   |
| active        |                              | `boolean`           | false   |
| onSelect      |                              | `function`          | -       |
| [data-active] |                              | Present when active |         |
