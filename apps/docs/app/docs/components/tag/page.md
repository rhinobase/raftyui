---
title: Tag
nextjs:
  metadata:
    title: Tag
    description: Tag component is utilized to label, categorize, or organize items using descriptive keywords.
    twitter:
      title: Tag
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tag
    openGraph:
      title: Tag
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tag
---

Tag component is utilized to label, categorize, or organize items using descriptive keywords.

# Anatomy

Import the component.

```jsx
import { Tag } from "@rafty/ui";

<Tag />;
```

## Usage

{% example %}

```jsx
<Tag>Tag text</Tag>
```

{% /example %}

## Sizes

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<div className="flex flex-col items-center gap-2">
  <Tag size="sm">Tag text</Tag>
  <Tag size="md">Tag text</Tag>
  <Tag size="lg">Tag text</Tag>
</div>
```

{% /example %}

## ColorScheme

There are 5 `colorScheme` options available: `primary`, `secondary` (default), `error`, `success` & `warning`.

{% example %}

```jsx
<div className="flex flex-col gap-2">
  <Tag colorScheme="primary">Tag text</Tag>
  <Tag colorScheme="secondary">Tag text</Tag>
  <Tag colorScheme="success">Tag text</Tag>
  <Tag colorScheme="warning">Tag text</Tag>
  <Tag colorScheme="error">Tag text</Tag>
</div>
```

{% /example %}

## Props

---

### Tag

`Tag` composes the `<div>` component.

| Property    | Description                    | Type                                                                    | Default       |
| ----------- | ------------------------------ | ----------------------------------------------------------------------- | ------------- |
| size        | Size of the tag component.     | `"sm"` or `"md"` or `"lg"`                                              | `"md"`        |
| colorScheme | Color scheme of the component. | `"primary"` or `"secondary"` or `"error"` or `"success"` or `"warning"` | `"secondary"` |
