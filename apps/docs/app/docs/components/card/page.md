---
title: Card
pageTitle: Card - Rafty UI
description: Card
---

## Import

Rafty UI exports 4 components to help you create a Card.

- Card: The parent wrapper that provides context for its children.
- CardHeader: The wrapper that contains a card's header.
- CardBody: The wrapper that houses the card's main content.
- CardFooter: The footer that houses the card actions.

```jsx
import { Card, CardFooter, CardHeader } from "@rafty/ui";
() => (
  <Card>
    <CardHeader />
    <CardContent />
    <CardFooter />
  </Card>
);
```

## Usage

{% example name="card:usage" /%}

## Size

Use the `size` prop to change the size of the Card. You can set the value to `sm`, `md`, or `lg`.

{% example name="card:size" /%}

## Variant

Use the `variant` prop to change the style of your card. You can set the value to `elevated`, `outline`, and `solid` If the variant prop is not passed, the default variant, outline is used.

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
