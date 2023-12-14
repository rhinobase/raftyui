---
title: Checkbox
nextjs:
  metadata:
    title: Checkbox
    description: Checkboxes give users binary choices when presented with multiple options in a series.
    twitter:
      title: Checkbox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Checkbox
    openGraph:
      title: Checkbox
      images:
        url: https://rafty.rhinobase.io/api/og?title=Checkbox
---

Checkboxes give users binary choices when presented with multiple options in a series.

This component is made on top of [Radix UIs Checkbox Component](https://www.radix-ui.com/primitives/docs/components/checkbox.) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { Checkbox } from "@rafty/ui";

<Checkbox />;
```

## Usage

Checkbox component is used in forms when a user needs to select multiple values from several options.

{% example name="checkbox:usage" /%}

## Default Selected

Pass `defaultSelected` prop to set default check the checkbox.

{% example name="checkbox:default_checked" /%}

## Disabled

Pass `isDisabled` prop to disable checkbox.

This property can also be passed in child/ sub component

{% example name="checkbox:disabled" /%}

## Checked

{% example name="checkbox:checked" /%}

## Required

This property can also be passed in child/ sub component

{% example name="checkbox:required" /%}

## size

There are 3 `size` options in checkbox: `sm`, `md` (default) & `lg`.

{% example name="checkbox:size" /%}

## Props

---

### Checkbox

This component is built on top of [Radix Checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox#root)

| Property   | Description                                 | Type                       | Default |
| ---------- | ------------------------------------------- | -------------------------- | ------- |
| size       | Size of the alert dialog trigger component. | `"sm"` or `"md"` or `"lg"` | `"md"`  |
| isReadOnly | Whether the component is in read-only mode. | `boolean`                  | `false` |
| isDisabled | Whether the component is disabled.          | `boolean`                  | `false` |
| isRequired | Whether the component is required.          | `boolean`                  | `false` |
