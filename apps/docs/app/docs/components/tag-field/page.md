---
title: Tag Field
nextjs:
  metadata:
    title: Tag Field
    description: A component that allows users to add tags to an input field.
    twitter:
      title: Tag Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tag%20Field
    openGraph:
      title: Tag Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Tag%20Field
---

A component that allows users to add tags to an input field.

This component is made on top of [Ark Tags Input Component](https://ark-ui.com/react/docs/components/tags-input) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

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

## Default Value

`defaultValue` prop is used to pass default tags to input.

{% example %}

```jsx
<TagField defaultValue={["sample1", "sample2"]} />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<TagField size="lg" />
```

{% /example %}

## Placeholder

`placeholder` prop is used to pass placeholder text to display when no tags available.

{% example %}

```jsx
<TagField placeholder="Add Framework" />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<TagField isDisabled />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<TagField isReadOnly />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<TagField isInvalid />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<TagField isLoading />
```

{% /example %}

---

## Props

### TagField

This component is built on top of [Ark Tags Input](https://ark-ui.com/react/docs/components/tags-input#api-reference).

| Property    | Description                                   | Type                                                   | Default |
| ----------- | --------------------------------------------- | ------------------------------------------------------ | ------- |
| size        | Size of the tag field component.              | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| placeholder | Placeholder text to show when input is empty. | `string` or `undefined`                                | -       |
| isDisabled  | To manage the disable state.                  | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid   | To manage the invalid state.                  | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading   | To manage the loading state.                  | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly  | To manage the readonly state.                 | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
