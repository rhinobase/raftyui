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

{% example %}

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Colors">
          Beautiful, thought-out palettes with auto dark mode.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Icons">
          A crisp set of 15x15 icons, balanced and consistent.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
      <NavigationMenuContent className="grid w-[300px] grid-cols-2 md:w-[600px]">
        <NavigationMenuListItem title="Introduction" href="#">
          Build high-quality, accessible design systems and web apps.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Getting started" href="#">
          A quick tutorial to get you up and running with Radix Primitives.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Styling" href="#">
          Unstyled and compatible with any styling solution.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Animation" href="#">
          Use CSS keyframes or any animation library of your choice.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Accessibility" href="#">
          Tested in a range of browsers and assistive technologies.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Releases" href="#">
          Radix Primitives releases and their changelogs.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink href="https://github.com/rhinobase/raftyui">Github</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

{% /example %}

## Content Size

Pass the `size` prop if you need to adjust the size of the navigation-menu content. Values can be `sm`, `md` (default), `lg` & `full`.

{% example %}

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent size="sm" className="grid w-[300px] grid-cols-2 md:w-[600px]">
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Colors">
          Beautiful, thought-out palettes with auto dark mode.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Icons">
          A crisp set of 15x15 icons, balanced and consistent.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
      <NavigationMenuContent className="grid w-[300px] grid-cols-2 md:w-[600px]">
        <NavigationMenuListItem title="Introduction" href="#">
          Build high-quality, accessible design systems and web apps.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Getting started" href="#">
          A quick tutorial to get you up and running with Radix Primitives.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Styling" href="#">
          Unstyled and compatible with any styling solution.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Animation" href="#">
          Use CSS keyframes or any animation library of your choice.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Accessibility" href="#">
          Tested in a range of browsers and assistive technologies.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Releases" href="#">
          Radix Primitives releases and their changelogs.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink href="https://github.com/rhinobase/raftyui">Github</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Navigation Menu.

{% example %}

```jsx
<NavigationMenu isUnstyled className="relative z-10 flex max-w-max flex-1 items-center justify-center">
  <NavigationMenuList className="m-0 flex items-center justify-center rounded-md p-1">
    <NavigationMenuItem>
      <NavigationMenuTrigger className="data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md px-3 py-2 text-base font-semibold outline-none">Learn</NavigationMenuTrigger>
      <NavigationMenuContent className="animate-slide-down-fade dark:bg-secondary-800 absolute top-2.5 grid w-[300px] min-w-[220px] max-w-2xl origin-top grid-cols-2 rounded-md bg-white p-4 text-base drop-shadow-lg duration-200 md:w-[600px]">
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Colors">
          Beautiful, thought-out palettes with auto dark mode.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Icons">
          A crisp set of 15x15 icons, balanced and consistent.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger className="data-[state=open]:bg-secondary-100 hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:data-[state=open]:bg-secondary-700/20 dark:hover:bg-secondary-700/20 group flex select-none items-center justify-between gap-1.5 rounded-md px-3 py-2 text-base font-semibold outline-none">Overview</NavigationMenuTrigger>
      <NavigationMenuContent className="animate-slide-down-fade dark:bg-secondary-800 absolute top-2.5 grid w-[300px] min-w-[220px] max-w-2xl origin-top grid-cols-2 rounded-md bg-white p-4 text-base drop-shadow-lg duration-200 md:w-[600px]">
        <NavigationMenuListItem title="Introduction" href="#">
          Build high-quality, accessible design systems and web apps.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Getting started" href="#">
          A quick tutorial to get you up and running with Radix Primitives.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Styling" href="#">
          Unstyled and compatible with any styling solution.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Animation" href="#">
          Use CSS keyframes or any animation library of your choice.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Accessibility" href="#">
          Tested in a range of browsers and assistive technologies.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Releases" href="#">
          Radix Primitives releases and their changelogs.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink href="https://github.com/rhinobase/raftyui" className="hover:bg-secondary-100 text-secondary-600 dark:text-secondary-300 dark:hover:bg-secondary-700/20 flex select-none rounded-md px-3 py-2 font-semibold outline-none">
        Github
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

{% /example %}

## Unstyled subcomponent

To remove styles from a specific sub component pass `isUnstyled` prop to that particular subcomponent.

{% example %}

```jsx
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent isUnstyled className="animate-slide-down-fade dark:bg-secondary-800 absolute top-2.5 min-w-[220px] max-w-2xl origin-top rounded-md bg-white p-4 text-base drop-shadow-lg duration-200">
        <NavigationMenuListItem href="#" title="Stitches">
          CSS-in-JS with best-in-class developer experience.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Colors">
          Beautiful, thought-out palettes with auto dark mode.
        </NavigationMenuListItem>
        <NavigationMenuListItem href="#" title="Icons">
          A crisp set of 15x15 icons, balanced and consistent.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
      <NavigationMenuContent className="grid w-[300px] grid-cols-2 md:w-[600px]">
        <NavigationMenuListItem title="Introduction" href="#">
          Build high-quality, accessible design systems and web apps.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Getting started" href="#">
          A quick tutorial to get you up and running with Radix Primitives.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Styling" href="#">
          Unstyled and compatible with any styling solution.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Animation" href="#">
          Use CSS keyframes or any animation library of your choice.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Accessibility" href="#">
          Tested in a range of browsers and assistive technologies.
        </NavigationMenuListItem>
        <NavigationMenuListItem title="Releases" href="#">
          Radix Primitives releases and their changelogs.
        </NavigationMenuListItem>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuLink href="https://github.com/rhinobase/raftyui">Github</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

{% /example %}

## Props

---

### NavigationMenu

This component is built on top of [Radix Navigation Menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu#root)

| Property   | Description                                            | Type      | Default |
| ---------- | ------------------------------------------------------ | --------- | ------- |
| isUnstyled | Remove style from this component and its subcomponents | `boolean` | `false` |

### NavigationMenuList

This component is built on top of [Radix Navigation Menu List](https://www.radix-ui.com/primitives/docs/components/navigation-menu#list)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### NavigationMenuItem

This component is built on top of [Radix Navigation Menu Item](https://www.radix-ui.com/primitives/docs/components/navigation-menu#item)

### NavigationMenuTrigger

This component is built on top of [Radix Navigation Menu Trigger](https://www.radix-ui.com/primitives/docs/components/navigation-menu#trigger)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### NavigationMenuContent

This component is built on top of [Radix Navigation Menu Content](https://www.radix-ui.com/primitives/docs/components/navigation-menu#content)

| Property   | Description                                    | Type                                   | Default |
| ---------- | ---------------------------------------------- | -------------------------------------- | ------- |
| size       | Size of the navigation menu content component. | `"sm"` or `"md"` or `"lg"` or `"full"` | `"md"`  |
| isUnstyled | Remove style from this component               | `boolean`                              | `false` |

### NavigationMenuLink

This component is built on top of [Radix Navigation Menu Link](https://www.radix-ui.com/primitives/docs/components/navigation-menu#link)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### NavigationMenuListItem

`NavigationMenuListItem` composes the `<div>` component.

| Property | Description                            | Type     | Default |
| -------- | -------------------------------------- | -------- | ------- |
| title    | Title of the component.                | `string` | -       |
| href     | Hyperlink reference for the component. | `string` | -       |

### NavigationMenuIndicator

This component is built on top of [Radix Navigation Menu Indicator](https://www.radix-ui.com/primitives/docs/components/navigation-menu#indicator)

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
