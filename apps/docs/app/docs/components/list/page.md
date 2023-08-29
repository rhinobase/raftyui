---
title: List
pageTitle: List - Rafty UI
description: List
---

## Import

List is used to display list items. It renders a <ul> element by default.

```jsx
import { ListItem List } from "@rafty/ui";

() => (
  <List>
    <ListItem />
  </List>
);
```

## Usage

{% example name="list:usage" /%}

## Ordered List

{% example name="list:order_list" /%}

### UnOrdered List

{% example name="list:unorder_list" /%}

## Unstyled

Pass `isUnstyled` to remove style in list.

{% example name="list:unstyled" /%}

### API

---

### Root

| Property  | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| className |                              | `string`  |         |
| UnStyled  | Removes Style from component | `boolean` | false   |
