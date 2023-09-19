---
title: Spinner
nextjs:
  metadata:
    title: Spinner
    description: Spinners provide a visual cue that an action is processing awaiting a course of change or a result.
---

Spinners provide a visual cue that an action is processing awaiting a course of change or a result.

## Anatomy

Import the component.

```jsx
import { Spinner } from "@rafty/ui";

<Spinner />;
```

## Usage

{% example name="spinner:usage" /%}

## Size

There are 3 `size` options in spinner: `sm`, `md` (default) & `lg

{% example name="spinner:size" /%}

## InheritParent

InheritParent prop lets spinner inherit color props from its parent element when true

{% example name="spinner:InheritParent" /%}
