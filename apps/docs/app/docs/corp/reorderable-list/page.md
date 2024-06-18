---
title: Reorderable List
nextjs:
  metadata:
    title: Reorderable List
    description: A Reorderable List is a component that allows users to reorder or replace the position of an item in a given list of items.
    twitter:
      title: Reorderable List
      images:
        url: https://rafty.rhinobase.io/api/og?title=Reorderable%20List
    openGraph:
      title: Reorderable List
      images:
        url: https://rafty.rhinobase.io/api/og?title=Reorderable%20List
---

A Reorderable List is a component that allows users to reorder or replace the position of an item in a given list of items.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Reorderable List } from "@rafty/ui";

<ReorderableList />;
```

## Usage

{% example %}

```jsx
<ReorderableList data={["First item", "Second item", "Third item"]} />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<ReorderableList size="lg" data={["First item", "Second item", "Third item"]} />
```

{% /example %}

---

## Props

### ReorderableList

`ReorderableList` is made using [List](https://rafty.rhinobase.io/docs/components/list) and [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd#readme).

| Property      | Description                                    | Type                                                   | Default |
| ------------- | ---------------------------------------------- | ------------------------------------------------------ | ------- |
| data          | The list of items to display and reorder.      | `string[]`                                             | -       |
| size          | Size of the reorderable list component.        | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| isHidden      | To manage the hidden state.                    | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| onOrderChange | Callback function triggered on reorder events. | <Info>(items: string[]) => void</Info> or `undefined`  | -       |
