---
title: "Field Wrapper"
nextjs:
  metadata:
    title: "Field Wrapper"
    description: "A wrapper component for field to be used in form."
    twitter:
      title: "Field Wrapper"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Field%20Wrapper"
    openGraph:
      title: "Field Wrapper"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Field%20Wrapper"
---

A wrapper component for field to be used in form.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { FieldWrapper } from "@rafty/ui";

<FieldWrapper />;
```

## Usage

{% example %}

```jsx
<FieldWrapper name="name">
  <InputField />
</FieldWrapper>
```

{% /example %}

## Label

`label` prop is used to render label for field.

{% example %}

```jsx
<FieldWrapper name="name" label="Name">
  <InputField />
</FieldWrapper>
```

{% /example %}

## Description

`description` prop is used to display descriptive text below label to provide additional information about field.

{% example %}

```jsx
<FieldWrapper
  name="name"
  description="Lorem Ipsum is simply dummy text of the printing"
>
  <InputField />
</FieldWrapper>
```

{% /example %}

## Orientation

There are 3 `orientation` options available: `"row"` (default), `"col"` & `"row-reverse"`.

{% example %}

```jsx
<FieldWrapper name="name" label="Name" orientation="row">
  <InputField />
</FieldWrapper>
```

{% /example %}

## Required

`isRequired` prop is used to show required field. It adds red star (\*) after Label.

{% example %}

```jsx
<FieldWrapper name="name" label="Name" isRequired>
  <InputField />
</FieldWrapper>
```

{% /example %}

## Disabled

`isDisabled` prop is used to disable sub-components or children field.

{% example %}

```jsx
<FieldWrapper name="name" label="Name" isDisabled>
  <InputField />
</FieldWrapper>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to change field state to readonly.

{% example %}

```jsx
<FieldWrapper name="name" label="Name" isReadOnly>
  <InputField defaultValue="This is a sample default text" />
</FieldWrapper>
```

{% /example %}

## Invalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example %}

```jsx
<FieldWrapper name="name" label="Name" isInvalid>
  <InputField />
</FieldWrapper>
```

{% /example %}

## Loading

`isLoading` prop is used to show a field in a loading state.

{% example %}

```jsx
<FieldWrapper name="name" label="Name" isLoading>
  <InputField />
</FieldWrapper>
```

{% /example %}

---

## Props

### FieldWrapper

`FieldWrapper` composes the `<div>` component.

| Property    | Description                                        | Type                                                   | Default |
| ----------- | -------------------------------------------------- | ------------------------------------------------------ | ------- |
| label       | Label text for the field.                          | `string` or `undefined`                                | -       |
| description | Additional description or help text for the field. | `string` or `undefined`                                | -       |
| orientation | Orientation of the field and label components.     | `"row"` or `"col"` or `"row-reverse"` or `undefined`   | `"col"` |
| isRequired  | To manage the required state.                      | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isDisabled  | To manage the disabled state.                      | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid   | To manage the invalid state.                       | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading   | To manage the loading state.                       | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly  | To manage the readonly state.                      | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
