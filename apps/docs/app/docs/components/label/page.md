---
title: Label
nextjs:
  metadata:
    title: Label
    description: Renders an accessible label associated with controls.
    twitter:
      title: Label
      images:
        url: https://rafty.rhinobase.io/api/og?title=Label
    openGraph:
      title: Label
      images:
        url: https://rafty.rhinobase.io/api/og?title=Label
---

Renders an accessible label associated with controls.

This component is made on top of [Radix UIs Label Component](https://www.radix-ui.com/primitives/docs/components/label) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible. If you need to apply your own styling you can use the `isUnstyled` prop (to remove styling from a particular subcomponent).

## Anatomy

Import the component.

```jsx
import { Label } from "@rafty/ui";

<Label />;
```

## Usage

{% example name="label:usage" /%}

## Props

---

### Label

This component is built on top of [Radix Label](https://www.radix-ui.com/primitives/docs/components/label#root)

| Property   | Description                        | Type      | Default |
| ---------- | ---------------------------------- | --------- | ------- |
| isRequired | Whether the component is required. | `boolean` | -       |
| htmlFor    | ID of the associated form element. | `string`  | -       |
