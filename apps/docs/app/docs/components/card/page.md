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

Card is a flexible component used to group and display content in a clear and concise format.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

## Anatomy

Import all parts and piece them together.

```jsx
import { Card, CardHeader, CardContent, CardFooter } from "@rafty/ui";

<Card>
  <CardHeader />
  <CardContent />
  <CardFooter />
</Card>;
```

## Usage

{% example %}

```jsx
<Card>
  <CardHeader>
  <h3 className="text-xl font-semibold">Customer dashboard</h3></CardHeader>
  <CardContent>
  <p>
    View a summary of all your customers over the last month. Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
    dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
    minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Card size="sm">
  <CardHeader><h3 className="text-lg font-semibold">Customer dashboard</h3></CardHeader>
  <CardContent>
  <p>
    View a summary of all your customers over the last month. Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
    dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
    minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button size="sm" variant="outline" colorScheme="error">
      Delete
    </Button>
    <Button size="sm" variant="outline">
      View here
    </Button>
  </CardFooter>
</Card>
```

{% /example %}

## Variant

There are 2 `variant` options available: `"outline"` (default) & `"elevated"`.

{% example %}

```jsx
<Card variant="elevated">
  <CardHeader><h3 className="text-xl font-semibold">Customer dashboard</h3></CardHeader>
  <CardContent>
  <p>
    View a summary of all your customers over the last month. Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
    dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
    minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from Card and all its sub-components.

{% example %}

```jsx
<Card
  isUnstyled
  className="space-y-4 rounded-lg bg-white p-4 shadow-md dark:bg-secondary-800 dark:text-white"
>
  <CardHeader>
  <h3 className="text-xl font-semibold">Customer dashboard</h3>
  </CardHeader>
  <CardContent>
  <p>
    View a summary of all your customers over the last month. Lorem, ipsum
    dolor sit amet consectetur adipisicing elit. Nesciunt, nam? Lorem ipsum
    dolor sit, amet consectetur adipisicing elit. Officia, eveniet culpa
    minima ipsa rem in mollitia inventore laboriosam necessitatibus itaque.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline" colorScheme="error">
      Delete
    </Button>
    <Button variant="outline">View here</Button>
  </CardFooter>
</Card>
```

{% /example %}

---

## Props

### Card

`Card` composes the `<div>` component.

| Property   | Description                                                  | Type                                       | Default     |
| ---------- | ------------------------------------------------------------ | ------------------------------------------ | ----------- |
| size       | Size of the card and its sub-components.                     | `"sm"` or `"md"` or `"lg"` or `undefined`  | `"md"`      |
| variant    | Style variant of the Card component.                         | `"outline"` or `"elevated"` or `undefined` | `"outline"` |
| isUnstyled | Removes style from Card component and all its sub-components | `boolean` or `undefined`                   | `false`     |

### CardHeader

`CardHeader` composes the `<div>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### CardContent

`CardContent` composes the `<div>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### CardFooter

`CardFooter` composes the `<div>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |
