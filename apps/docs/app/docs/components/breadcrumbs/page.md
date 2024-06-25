---
title: Breadcrumbs
nextjs:
  metadata:
    title: Breadcrumbs
    description: Breadcrumbs is a navigation pattern that helps users understand the hierarchy of a website.
    twitter:
      title: Breadcrumbs
      images:
        url: https://rafty.rhinobase.io/api/og?title=Breadcrumbs
    openGraph:
      title: Breadcrumbs
      images:
        url: https://rafty.rhinobase.io/api/og?title=Breadcrumbs
---

Breadcrumbs is a navigation pattern that helps users understand the hierarchy of a website.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props. If you wish to apply your own styling you can use the `isUnstyled` prop to remove all styling.

## Anatomy

Import all parts and piece them together.

```jsx
import { Breadcrumbs, BreadcrumbItem, BreadcrumbDivider } from "@rafty/ui";

<Breadcrumbs>
  <BreadcrumbItem />
  <BreadcrumbDivider />
</Breadcrumbs>;
```

## Usage

{% example %}

```jsx
<Breadcrumbs>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>Application</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>Menu</BreadcrumbItem>
</Breadcrumbs>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Breadcrumbs size="lg">
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>Application</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>Menu</BreadcrumbItem>
</Breadcrumbs>
```

{% /example %}

## Active

{% example %}

```jsx
<Breadcrumbs>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>Application</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem isActive>Menu</BreadcrumbItem>
</Breadcrumbs>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop to remove style component.

{% example %}

```jsx
<Breadcrumbs>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem
    isUnstyled
    className="font-semibold transition-all ease-in-out hover:text-black dark:hover:text-white"
  >
    Application
  </BreadcrumbItem>
  <BreadcrumbDivider />
  <BreadcrumbItem>Menu</BreadcrumbItem>
</Breadcrumbs>
```

{% /example %}

---

## Props

### Breadcrumbs

`Breadcrumbs` composes the `<nav>` component and using [List](https://rafty.rhinobase.io/docs/components/list).

| Property | Description                                     | Type                                      | Default |
| -------- | ----------------------------------------------- | ----------------------------------------- | ------- |
| size     | Size of the breadcrumbs and its sub-components. | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |

### BreadcrumbItem

`BreadcrumbItem` is made using [ListItem](https://rafty.rhinobase.io/docs/components/list).

| Property   | Description                                  | Type                     | Default |
| ---------- | -------------------------------------------- | ------------------------ | ------- |
| isActive   | To manage the active state of BreadcrumbItem | `boolean` or `undefined` | -       |
| isUnstyled | Remove style from this component             | `boolean` or `undefined` | -       |

### BreadcrumbDivider

`BreadcrumbDivider` is made using [ListItem](https://rafty.rhinobase.io/docs/components/list).

| Property | Description                                   | Type                       | Default |
| -------- | --------------------------------------------- | -------------------------- | ------- |
| children | You can use this prop to add a custom divider | `ReactNode` or `undefined` | `"/"`   |
