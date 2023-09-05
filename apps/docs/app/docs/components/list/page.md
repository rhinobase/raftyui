---
title: List
pageTitle: List - Rafty UI
description: List
---

List is used to display list items. It renders a <ul> element by default.

This is made using native ol, ul & li html tags, making all native props available for use.

## Anatomy

Import all parts and piece them together.

```jsx
import { List, ListItem } from "@rafty/ui";

<List>
  <ListItem />
</List>;
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
