---
title: Badge
nextjs:
  metadata:
    title: Badge
    description: A badge is used to indicate current status in the form of a dot.
    twitter:
      title: Badge
      images:
        url: https://rafty.rhinobase.io/api/og?title=Badge
    openGraph:
      title: Badge
      images:
        url: https://rafty.rhinobase.io/api/og?title=Badge
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

{% example %}

```jsx
<div className="flex flex-wrap items-center gap-1">
  <Badge status="error" />
  <Badge status="info" />
  <Badge status="secondary" />
  <Badge status="success" />
  <Badge status="warning" />
</div>
```

{% /example %}

## Size

There are 3 `size` options available: `sm`, `md` (default) & `lg`

{% example %}

```jsx
<div className="flex items-center gap-1">
  <Badge size="sm" />
  <Badge size="md" />
  <Badge size="lg" />
</div>
```

{% /example %}

## Props

---

### Badge

`Badge` composes the `<div>` component.

| Property | Description                    | Type                                                                 | Default       |
| -------- | ------------------------------ | -------------------------------------------------------------------- | ------------- |
| size     | Size of the Badge component.   | `"sm"` or `"md"` or `"lg"`                                           | `"md"`        |
| status   | Status of the Badge component. | `"secondary"` or `"error"` or `"success"` or `"warning"` or `"info"` | `"secondary"` |
