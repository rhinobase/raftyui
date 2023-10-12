---
title: Badge
nextjs:
  metadata:
    title: Badge
    description: A badge is used to indicate current status in the form of a dot.
---

A badge is used to indicate current status in the form of a dot.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Badge } from "@rafty/ui";

<Badge />;
```

## Status

There are 5 `status` options in badge: `success`, `warning`, `error`, `info` & `secondary` (default).

{% example name="badge:status" /%}

## Size

There are 3 `size` options available: `sm`, `md` (default) & `lg`

{% example name="badge:size" /%}
