---
title: Skeleton
nextjs:
  metadata:
    title: Skeleton
    description: Skeleton is used to display the loading state of some component.
    twitter:
      title: Skeleton
      images:
        url: https://rafty.rhinobase.io/api/og?title=Skeleton
    openGraph:
      title: Skeleton
      images:
        url: https://rafty.rhinobase.io/api/og?title=Skeleton
---

Skeleton is used to display the loading state of some component.

This is custom made component with our understanding and usage limiting the props available.

## Anatomy

Import the component.

```jsx
import { Skeleton } from "@rafty/ui";
<Skeleton />;
```

## Usage

You can set height and width of a skeleton by passing values in className prop.
{% example name="skeleton:usage" /%}
