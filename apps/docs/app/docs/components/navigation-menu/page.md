---
title: Navigation Menu
nextjs:
  metadata:
    title: Navigation Menu
    description: A collection of links for navigating websites.
    twitter:
      title: Navigation Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Navigation%20Menu
    openGraph:
      title: Navigation Menu
      images:
        url: https://rafty.rhinobase.io/api/og?title=Navigation%20Menu
---

A collection of links for navigating websites. This component is made on top of [Radix UIs Navigation Menu Component](https://www.radix-ui.com/primitives/docs/components/navigation-menu) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop on parent element (to remove styling from entire component and its subcomponents) or `isUnstyled` prop on a subcomponent (to remove styling from a particular subcomponent).

## Anatomy

Import all parts and piece them together.

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
} from "@rafty/ui";

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

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Navigation Menu.

{% example name="navigation-menu:unstyled" /%}

## Unstyled subcomponent

Pass `isUnstyled` prop in a particular subcomponent to remove style from that sub component.

{% example name="navigation-menu:unstyledsub" /%}

### API

---

### Root

| Property   | Description                                              | Type      | Default |
| ---------- | -------------------------------------------------------- | --------- | ------- |
| isUnstyled | Removes style from whole component and its subcomponents | `boolean` | -       |

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
