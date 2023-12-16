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

{% example %}

```jsx
<Textarea placeholder="This is a sample placeholder" />
```

{% /example %}

## Variants

Pass the `variant` prop if you need to adjust visual style of the textarea. Values can be `solid`, `outline`, `ghost`.

{% example %}

```jsx
<Textarea placeholder="This is a sample placeholder" variant="solid" />
```

{% /example %}

## UnStyled

Pass `isUnstyled` prop to remove style from textarea.

{% example %}

```jsx
<Textarea
  placeholder="This is a sample placeholder"
  isUnstyled
  className="border-secondary-200 dark:border-secondary-500 w-full rounded-md border bg-transparent p-2 outline-none ring-offset-0 hover:border-green-300 focus:ring-1 focus:ring-sky-300"
/>
```

{% /example %}

## Disabled

Pass `isDisabled` prop to put textarea in disabled state.

{% example %}

```jsx
<Textarea placeholder="this is sample placeholder" isDisabled />
```

{% /example %}

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
