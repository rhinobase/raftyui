---
title: Tag
pageTitle: Tag - Rafty UI
description: Tag
---

# Import

Tag component is used for items that need to be labeled, categorized, or organised using keywords that describe them.

- Tag: The wrapper for all the tag elements.

```jsx
import { Tag } from "@rafty/ui";
```

## Usage

{% example name="tag:usage" /%}

## Sizes

Pass the `size` prop if you need to adjust the size of the tag. Values can be `sm, md, lg`.
{% example name="tag:sizes" /%}

## ColorScheme

Pass the `colorScheme` prop if you need to adjust the color of the tag. Values can be `primary,success,warning,error`.

{% example name="tag:colorschema" /%}

### API

---

### Root

| Property    | Description | Type                                                      | Default     |
| ----------- | ----------- | --------------------------------------------------------- | ----------- |
| className   |             | `string`                                                  |             |
| size        |             | `sm` \ `md` \ `lg`                                        | `md`        |
| colorScheme |             | `primary` \ `secondary` \ `error` \ `success` \ `warning` | `secondary` |
