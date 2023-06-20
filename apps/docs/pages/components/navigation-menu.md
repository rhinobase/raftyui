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

## Size

Pass the `size` prop if you need to adjust the size of the navigation-menu content. Values can be `sm, md, lg`.

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
