---
title: Text Area
pageTitle: Text Area
description: The Text area component allows you to easily create multi-line text inputs.
twitter:
  title: Text Area
  images:
    url: https://rafty.rhinobase.io/api/og?title=Text%20Area
openGraph:
  title: Text Area
  images:
    url: https://rafty.rhinobase.io/api/og?title=Text%20Area
---

The Text area component allows you to easily create multi-line text inputs.

## Anatomy

Import the component.

```jsx
import { Textarea } from "@rafty/ui";

<Textarea />;
```

## Usage

{% example name="textarea:usage" /%}

## Variants

Pass the `variant` prop if you need to adjust visual style of the textarea. Values can be `solid`, `outline`, `ghost`.

{% example name="textarea:variant" /%}

## UnStyled

Pass `isUnstyled` prop to remove style from textarea.

{% example name="textarea:unstyled" /%}

## Disabled

Pass `isDisabled` prop to put textarea in disabled state.

{% example name="textarea:disabled" /%}

## Props

---

### Textarea

`Textarea` composes the `<textarea>` component.

| Property   | Description                      | Type                                  | Default     |
| ---------- | -------------------------------- | ------------------------------------- | ----------- |
| size       | Size of the textarea component.  | `"sm"` or `"md"` or `"lg"`            | `"md"`      |
| variant    | Style variant of the component.  | `"solid"` or `"outline"` or `"ghost"` | `"outline"` |
| isDisabled | To manage disabled state.        | `boolean`                             | `false`     |
| isLoading  | To manage loading state.         | `boolean`                             | `false`     |
| isRequired | To manage required state.        | `boolean`                             | `false`     |
| isReadOnly | To manage read-only state.       | `boolean`                             | `false`     |
| isInvalid  | To manage invalid state.         | `boolean`                             | `false`     |
| isUnstyled | Remove style from this component | `boolean`                             | `false`     |
