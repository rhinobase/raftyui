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

# Skeleton

Skeleton is used to display the loading state of some component.

This is custom made component with our understanding and usage limiting the props available.

## Anatomy

Import the component.

```jsx
import { Skeleton } from "@rafty/ui";
<Skeleton />;
```

## Usage

You can set height and width of a Skeleton by passing values in `className` prop.

{% example %}

```jsx
<div className="w-full space-y-3">
  <Skeleton className="h-8 w-1/4" />
  <Skeleton className="h-8 w-full" />
  <Skeleton className="h-8 w-3/4" />
  <Skeleton className="h-8 w-1/2" />
</div>
```

{% /example %}

---

## Props

### Skeleton

`Skeleton` composes the `<div>` component with the Tailwind CSS pulse animation class. You can use the className prop to apply size and other styling to it.
