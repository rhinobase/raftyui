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

List is used to display list items. It renders a `<ul>` element.

This is made using native `ol`, `ul` & `li` html tags, making all native props available for use. If you wish to apply your own styling you can use the `isUnstyled` prop on root element (to remove styling from root component as well as from all its sub-components) or `isUnstyled` prop on a sub-component (to remove styling from that particular sub-component).

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

{% example %}

```jsx
<List>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```

{% /example %}

## Ordered List

{% example %}

```jsx
<OrderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>
```

{% /example %}

## UnOrdered List

{% example %}

```jsx
<UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop in root element to remove style from OrderedList or UnorderedList and all its sub-components.

{% example %}

```jsx
<UnorderedList isUnstyled>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
```

{% /example %}

---

## Props

### List

`List` composes the `<ul>` component.

### ListItem

`ListItem` composes the `<li>` component.

### OrderedList

`OrderedList` composes the `<ol>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |

### UnorderedList

`UnorderedList` composes the `<ul>` component.

| Property   | Description                      | Type                     | Default |
| ---------- | -------------------------------- | ------------------------ | ------- |
| isUnstyled | Remove style from this component | `boolean` or `undefined` | `false` |
