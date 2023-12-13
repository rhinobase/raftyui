---
title: List
nextjs:
  metadata:
    title: List
    description: List is used to display list items. It renders a <ul> element by default.
    twitter:
      title: List
      images:
        url: https://rafty.rhinobase.io/api/og?title=List
    openGraph:
      title: List
      images:
        url: https://rafty.rhinobase.io/api/og?title=List
---

List is used to display list items. It renders a <ul> element by default.

This is made using native ol, ul & li html tags, making all native props available for use.

## Anatomy

Import all parts and piece them together.

```jsx
import { List, ListItem, OrderedList, UnorderedList } from "@rafty/ui";

<List>
  <ListItem />
</List>
<OrderedList>
  <ListItem />
</OrderedList>
<UnorderedList>
  <ListItem />
</UnorderedList>
```

## Usage

{% example name="list:usage" /%}

## Ordered List

{% example name="list:order_list" /%}

## UnOrdered List

{% example name="list:unorder_list" /%}

## Unstyled

Pass `isUnstyled` to remove style in list.

{% example name="list:unstyled" /%}

## Props

---

### List

`List` composes the `ul` component.

### ListItem

`ListItem` composes the `li` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### OrderedList

`OrderedList` composes the `ol` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |

### UnorderedList

`UnorderedList` composes the `ul` component.

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | `false` |
