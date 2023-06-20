---
title: List
pageTitle: List - Rafty UI
description: List
---

## Import

List is used to display list items. It renders a <ul> element by default.

- ListItem
- OrderedList

```jsx
import { ListItem, OrderedList, UnorderedList, List } from "@rafty/ui";
```

## Usage

```jsx
<UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
```

## Ordered List

```jsx
<OrderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</OrderedList>
```

## Unstyled List

```jsx
<List>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```
