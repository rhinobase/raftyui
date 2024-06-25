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

Renders an accessible Label associated with controls.

This is made using native `<label>` html tag, making all native props available for use. If you wish to apply your own styling you can use the `isUnstyled` prop to remove all styling.

## Anatomy

Import the component.

```jsx
import { Label } from "@rafty/ui";

<Label />;
```

## Usage

{% example %}

```jsx
<Label>Sample</Label>
```

{% /example %}

## Required

`isRequired` prop is used to add red asterisk sign after label to show the field is required.

{% example %}

```jsx
<Label isRequired>Sample</Label>
```

{% /example %}

---

## Props

### Label

This component is built on top of [Radix Label](https://www.radix-ui.com/primitives/docs/components/label#root)

| Property   | Description                   | Type                                                   | Default |
| ---------- | ----------------------------- | ------------------------------------------------------ | ------- |
| isRequired | To manage the required state. | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
