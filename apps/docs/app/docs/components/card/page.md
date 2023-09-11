---
title: Card
pageTitle: Card - Rafty UI
description: A card is a generic container for grouping related UI elements and content.
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

## Barebone

Pass `isBarebone` prop to remove all style in card

{% example name="card:barebone" /%}

### API

---

### Root

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isBarebone | Removes style from whole component | `boolean` | false   |

### Header

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Footer

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |
