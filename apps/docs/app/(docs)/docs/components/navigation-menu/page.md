---
title: Navigation Menu
nextjs:
  metadata:
    title: Navigation Menu
    description: A collection of links for navigating websites.
---

A collection of links for navigating websites. This component is made on top of [Radix UIs Navigation Menu Component](https://www.radix-ui.com/primitives/docs/components/navigation-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isBarebone` (to remove styling from entire component and its subcomponents) or `isUnstyled` (to remove styling from a particular subcomponent).

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

{% example name="navigation-menu:size" /%}

## Barebone

Pass `isBarebone` prop to remove all style in Navigation Menu.

{% example name="navigation-menu:barebone" /%}

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
