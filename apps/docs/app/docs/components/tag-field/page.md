---
title: Tag Field
nextjs:
  metadata:
    title: Tag Field
    description: Tag field is used to add tags via input field.
    twitter:
      title: Tag Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tag%20Field
    openGraph:
      title: Tag Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tag%20Field
---

Tag field is used to add tags via input field.

# Anatomy

Import the component.

```jsx
import { TagField } from "@rafty/ui";

<TagField />;
```

## Usage

{% example name="tag-field:usage" /%}

## Props

---

### TagField

`TagField` composes the `<div>` component.

| Property    | Description                                     | Type                       | Default |
| ----------- | ----------------------------------------------- | -------------------------- | ------- |
| initialData | Initial set of tags for the TagField component. | `string[]`                 | -       |
| onChange    | Callback function invoked on tag changes.       | `(tags: string[]) => void` | -       |
