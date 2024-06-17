---
title: Field Control
nextjs:
  metadata:
    title: Field Control
    description: Field Control is used in forms to provide context to children fields. Along with Field control it is recommended to use Label and Error Message components.
    twitter:
      title: Field Control
      images:
        url: https://rafty.rhinobase.io/api/og?title=Field%20Control
    openGraph:
      title: Field Control
      images:
        url: https://rafty.rhinobase.io/api/og?title=Field%20Control
---

# Field Control

FieldControl is used in forms to provide context to children fields. Along with FieldControl it is recommended to use Label and Error Message components.

This is a custom-made component, you can pass name and different states like isRequired, isDisabled, isReadonly, isInvalid & isLoading in it and it will pass it all accordingly to its sub-components.

## Anatomy

Import all parts and piece them together.

```jsx
import { FieldControl, Label, InputField, ErrorMessage } from "@rafty/ui";

<FieldControl>
  <Label />
  <InputField />
  <ErrorMessage />
</FieldControl>;
```

## Usage

{% example %}

```jsx
<FieldControl name="name">
  <Label>Label</Label>
  <InputField />
  <ErrorMessage>Error message will be displayed here</ErrorMessage>
</FieldControl>
```

{% /example %}

## Orientation

There are 3 `orientation` options available: `"row"` (default), `"col"` & `"row-reverse"`.

{% example %}

```jsx
<FieldControl name="name" orientation="row">
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## Required

`isRequired` prop is used to show required field. It adds red star (\*) after Lable.

{% example %}

```jsx
<FieldControl name="name" isRequired>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## Disabled

`isDisabled` prop is used to disable sub-component or children field.

{% example %}

```jsx
<FieldControl name="name" isDisabled>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to change field state to read only.

{% example %}

```jsx
<FieldControl name="name" isReadOnly>
  <Label>Name</Label>
  <InputField defaultValue="This is a sample default text" />
</FieldControl>
```

{% /example %}

## Invalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example %}

```jsx
<FieldControl name="name" isInvalid>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## Loading

`isLoading` prop is used to show a field in a loading state.

{% example %}

```jsx
<FieldControl name="name" isLoading>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## ErrorMessage

ErrorMessage component will display an error message when there is an error during data input in a field or during form submission.

{% example %}

```jsx
<FieldControl name="name">
  <Label>Name</Label>
  <InputField />
  <ErrorMessage>Error message will be displayed here</ErrorMessage>
</FieldControl>
```

{% /example %}

---

## Props

### FieldControl

`FieldControl` composes the `div` component.

| Property    | Description                   | Type                                                   | Default |
| ----------- | ----------------------------- | ------------------------------------------------------ | ------- |
| isDisabled  | To manage the disabled state. | `boolean` or <Info>() => boolean</Info> or `undefined` | `false` |
| isLoading   | To manage the loading state.  | `boolean` or <Info>() => boolean</Info> or `undefined` | `false` |
| isReadOnly  | To manage the readonly state. | `boolean` or <Info>() => boolean</Info> or `undefined` | `false` |
| isInvalid   | To manage the invalid state.  | `boolean` or <Info>() => boolean</Info> or `undefined` | `false` |
| isRequired  | To manage the required state. | `boolean` or <Info>() => boolean</Info> or `undefined` | `false` |
| orientation | Orientation of the component. | `"col" `or `"row"` or `"row-reverse"` or `undefined`   | `col`   |
| name        | Name of the field.            | `string`                                               | -       |

### ErrorMessage

`ErrorMessage` composes the `p` component.
