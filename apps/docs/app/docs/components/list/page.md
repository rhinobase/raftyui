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

Pass `isUnstyled` to remove style in list.

{% example %}

```jsx
<List>
  <ListItem isUnstyled className="flex items-center gap-2 text-xl font-bold ">
    <CheckCircleIcon width={16} height={16} className="stroke-2" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem className="flex items-center gap-2">
    <CheckCircleIcon width={16} height={16} className="stroke-2" />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>

  <ListItem className="flex items-center gap-2">
    <CheckCircleIcon width={16} height={16} className="stroke-2" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  <ListItem className="flex items-center gap-2">
    <CheckCircleIcon width={16} height={16} className="stroke-2" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
```

{% /example %}

## Props

---

### List

`List` composes the `<ul>` component.

### ListItem

`ListItem` composes the `<li>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### OrderedList

`OrderedList` composes the `<ol>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |

### UnorderedList

`UnorderedList` composes the `<ul>` component.

| Property   | Description                      | Type      | Default |
| ---------- | -------------------------------- | --------- | ------- |
| isUnstyled | Remove style from this component | `boolean` | `false` |
