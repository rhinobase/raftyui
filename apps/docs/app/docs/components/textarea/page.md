---
title: Textarea
pageTitle: Textarea
description: The Textarea component allows you to easily create multi-line text inputs.
twitter:
  title: Textarea
  images:
    url: https://rafty.rhinobase.io/api/og?title=Textarea
openGraph:
  title: Textarea
  images:
    url: https://rafty.rhinobase.io/api/og?title=Textarea
---

The Textarea component allows you to easily create multi-line text inputs. If you wish to apply your own styling you can use the `isUnstyled` prop to remove all styling.

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

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Textarea placeholder="This is a sample placeholder" size="lg" />
```

{% /example %}

## Variants

Pass the `variant` prop if you need to adjust visual style of the Textarea. Values can be `"solid"`, `"outline"` (default) & `"ghost"`.

{% example %}

```jsx
<Textarea placeholder="This is a sample placeholder" variant="solid" />
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop to remove all style.

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

Pass `isDisabled` prop to put Textarea in disabled state.

{% example %}

```jsx
<Textarea placeholder="this is sample placeholder" isDisabled />
```

{% /example %}

## Invalid

Pass `isInvalid` prop to put Textarea in invalid state.

{% example %}

```jsx
<Textarea placeholder="this is sample placeholder" isInvalid />
```

{% /example %}

## ReadOnly

Pass `isReadOnly` prop to put Textarea in readOnly state.

{% example %}

```jsx
<Textarea placeholder="this is sample placeholder" isReadOnly />
```

{% /example %}

---

## Props

### Textarea

`Textarea` composes the `<textarea>` component.

| Property   | Description                      | Type                                                   | Default     |
| ---------- | -------------------------------- | ------------------------------------------------------ | ----------- |
| size       | Size of the textarea component.  | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`      |
| variant    | Style variant of the component.  | `"solid"` or `"outline"` or `"ghost"` or `undefined`   | `"outline"` |
| isDisabled | To manage the disabled state.    | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isLoading  | To manage the loading state.     | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isRequired | To manage the required state.    | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isReadOnly | To manage the readonly state.    | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isInvalid  | To manage the invalid state.     | `boolean` or <Info>() => boolean</Info> or `undefined` | `false`     |
| isUnstyled | Remove style from this component | `boolean`                                              | `false`     |
