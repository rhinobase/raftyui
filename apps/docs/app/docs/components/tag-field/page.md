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

{% example %}

```jsx
<TagField />
```

{% /example %}

## Initial Data

{% example %}

```jsx
<TagField initialData={["sample", "data"]} />
```

{% /example %}

## Props

---

### TagField

`TagField` is made using [InputField](https://rafty.rhinobase.io/docs/components/input-field).

| Property    | Description                                     | Type                                          | Default |
| ----------- | ----------------------------------------------- | --------------------------------------------- | ------- |
| initialData | Initial set of tags for the TagField component. | `string[]`                                    | -       |
| onChange    | Callback function invoked on tag changes.       | {% info %}(tags: string[]) => void{% /info %} | -       |
