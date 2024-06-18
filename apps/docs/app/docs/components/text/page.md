---
title: Text
nextjs:
  metadata:
    title: Text
    description: Text is used to render text and paragraphs within an interface. It renders a <p> element by default.
    twitter:
      title: Text
      images:
        url: https://rafty.rhinobase.io/api/og?title=Text
    openGraph:
      title: Text
      images:
        url: https://rafty.rhinobase.io/api/og?title=Text
---

Text is used to render Text and paragraphs within an interface. It renders a `<p>` element by default.

## Anatomy

Import the component.

```jsx
import { Text } from "@rafty/ui";

<Text />;
```

## Usage

{% example %}

```jsx
<Text className="text-black dark:text-white">In love with React & Next</Text>
```

{% /example %}

## Muted

`isMuted` prop can be used when you want Text to be muted or dull.

{% example %}

```jsx
<Text className="text-black dark:text-white" isMuted>
  In love with React & Next
</Text>
```

{% /example %}

---

## Props

### Text

`Text` composes the `<p>` component.
