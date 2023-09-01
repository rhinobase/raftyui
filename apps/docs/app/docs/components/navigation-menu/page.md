---
title: Navigation Menu
pageTitle: Navigation Menu - Rafty UI
description: Navigation Menu
---

## Anatomy

Import all parts and piece them together.

```jsx
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuListItem, NavigationMenuTrigger } from "@rafty/ui";

<NavigationMenu>
  <NavigationMenuListItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger />
      <NavigationMenuContent>
        <NavigationMenuLink />
        <NavigationMenuList />
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuIndicator />
  </NavigationMenuListItem>
</NavigationMenu>;
```

## Usage

{% example name="navigation-menu:usage" /%}

## Content Size

Pass the `size` prop if you need to adjust the size of the navigation-menu content. Values can be `sm`, `md`, `lg`.

## Barebone

Pass `isBarebone` prop to remove all style in Navigation Menu.

## UnStlyed

{% example name="navigation-menu:unstyled" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | -       |

### List

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### Trigger

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### Content

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |

### Link

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes style from component | `boolean` | `false` |
