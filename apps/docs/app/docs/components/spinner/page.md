---
title: Spinner
nextjs:
  metadata:
    title: Spinner
    description: Spinners provide a visual cue that an action is processing awaiting a course of change or a result.
    twitter:
      title: Spinner
      images:
        url: https://rafty.rhinobase.io/api/og?title=Spinner
    openGraph:
      title: Spinner
      images:
        url: https://rafty.rhinobase.io/api/og?title=Spinner
---

Spinners provide a visual cue that an action is processing awaiting a course of change or a result.

## Anatomy

Import the component.

```jsx
import { Spinner } from "@rafty/ui";

<Spinner />;
```

## Usage

{% example %}

```jsx
<Spinner />
```

{% /example %}

## Size

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg

{% example %}

```jsx
<div className="flex items-center gap-4">
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner size="lg" />
</div>
```

{% /example %}

## InheritParent

InheritParent prop lets spinner inherit color props from its parent element when true

{% example %}

```jsx
<div className="text-primary-500 dark:text-primary-400">
  <Spinner inheritParent />
</div>
```

{% /example %}

## Props

---

### Spinner

`Spinner` composes the `<svg>` component.

| Property      | Description                               | Type                       | Default |
| ------------- | ----------------------------------------- | -------------------------- | ------- |
| size          | Size of the spinner component.            | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| inheritParent | Inherits style from the parent component. | `boolean`                  | `false` |
