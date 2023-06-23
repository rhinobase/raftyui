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
import { Card, CardBody, CardFooter, CardHeader } from "@rafty/ui";
```

## Usage

```jsx
<Card>
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

## Size

Use the `size` prop to change the size of the Card. You can set the value to `sm, md, or lg`.

### sm

```jsx
<Card size="sm">
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

### md

```jsx
<Card size="md">
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

### lg

```jsx
<Card size="lg">
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

## Variant

Use the `variant` prop to change the style of your card. You can set the value to `elevated, outline, and solid` If the variant prop is not passed, the default variant, outline is used.

### outline

```jsx
<Card variant="outline">
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

### solid

```jsx
<Card variant="solid">
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

### elevated

```jsx
<Card variant="elevated">
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

## Barebone

Pass `isBarebone` prop to remove all style in card

```jsx
<Card>
  <CardHeader>Customer dashboard</CardHeader>
  <CardBody>View a summary of all your customers over the last month. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.</CardBody>
  <CardFooter className="flex">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <div className="flex-1" />
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

### API

---

### Root

| Property   | Description                        | Type                     | Default |
| ---------- | ---------------------------------- | ------------------------ | ------- |
| size       |                                    | `sm,md,lg`               | md      |
| variant    |                                    | `outline,solid,elevated` | solid   |
| isBarebone | Removes style from whole component | `boolean`                | false   |
| isUnstyled | Removes Style from component       | `boolean`                | false   |

### Header

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Body

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |

### Footer

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |
