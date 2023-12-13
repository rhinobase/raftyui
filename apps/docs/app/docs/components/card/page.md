---
title: Card
nextjs:
  metadata:
    title: Card
    description: A card is a generic container for grouping related UI elements and content.
    twitter:
      title: Card
      images:
        url: https://rafty.rhinobase.io/api/og?title=Card
    openGraph:
      title: Card
      images:
        url: https://rafty.rhinobase.io/api/og?title=Card
---

A card is a generic container for grouping related UI elements and content.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import all parts and piece them together.

```jsx
import { Card, CardFooter, CardContent, CardHeader } from "@rafty/ui";

<Card>
  <CardHeader />
  <CardContent />
  <CardFooter />
</Card>;
```

## Usage

{% example name="card:usage" /%}

## Size

There are 3 `size` options available: `sm`, `md` (default) & `lg`.

{% example name="card:size" /%}

## Variant

There are 2 `variant` options available: `outline` (default) & `elevated`

{% example name="card:variant" /%}

## Unstyled

Pass `isUnstyled` prop in parent component to remove style in Card.

{% example name="card:unstyled" /%}

## Props

---

### Card

`Card` composes the `div` component.

| Property   | Description                                               | Type                        | Default   |
| ---------- | --------------------------------------------------------- | --------------------------- | --------- |
| size       | Size of the Card component.                               | `"sm"` or `"md"` or `"lg"`  | `"md"`    |
| variant    | Style variant of the component.                           | `"outline"` or `"elevated"` | `"ghost"` |
| isUnstyled | Removes style from whole component and its sub components | `boolean`                   | `false`   |

### CardHeader

`CardHeader` composes the `div` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### CardContent

`CardContent` composes the `div` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### CardFooter

`CardFooter` composes the `div` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |
