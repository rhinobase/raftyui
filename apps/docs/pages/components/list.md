---
title: List
pageTitle: List - Rafty UI
description: List
---

## Import

List is used to display list items. It renders a <ul> element by default.

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

### UnOrdered List

```jsx
<List>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```

## Unstyled

Pass `isUnstyled` to remove style in list.

```jsx
<List isUnstyled>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</List>
```

### API

---

### Root

| Property  | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| className |                              | `string`  |         |
| UnStyled  | Removes Style from component | `boolean` | false   |
