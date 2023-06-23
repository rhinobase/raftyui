---
title: Tag
pageTitle: Tag - Rafty UI
description: Tag
---

# Import

Tag component is used for items that need to be labeled, categorized, or organized using keywords that describe them.

- Tag: The wrapper for all the tag elements.

```jsx
import { Tag } from "@rafty/ui";
```

## Usage

```jsx
<Tag>Tag text</Tag>
```

## Sizes

Pass the `size` prop if you need to adjust the size of the tag. Values can be `sm, md, lg`.

```jsx
<Tag size="sm">Tag text</Tag>
<Tag size="md">Tag text</Tag>
<Tag size="lg">Tag text</Tag>
```

## ColorScheme

Pass the `colorScheme` prop if you need to adjust the color of the tag. Values can be `primary,success,warning,error`.

```jsx
<Tag colorScheme="primary">Tag text</Tag>
<Tag colorScheme="success">Tag text</Tag>
<Tag colorScheme="warning">Tag text</Tag>
<Tag colorScheme="error">Tag text</Tag>
```

### API

---

### Root

| Property    | Description | Type                                                      | Default     |
| ----------- | ----------- | --------------------------------------------------------- | ----------- |
| className   |             | `string`                                                  |             |
| children    |             | `ReactNode`                                               |             |
| size        |             | `sm` \ `md` \ `lg`                                        | "md"        |
| colorScheme |             | `primary` \ `secondary` \ `error` \ `success` \ `warning` | `secondary` |
