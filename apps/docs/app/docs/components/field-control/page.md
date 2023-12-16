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

Field Control is used in forms to provide context to children fields. Along with Field control it is recommended to use Label and Error Message components.

This is a custom-made component, you can pass name and different states like isRequired, isDisabled, isReadonly, isInvalid & isLoading in it and it will pass it all accordingly to its subcomponents

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

There are 3 `orientation` options in field control: `row` (default), `col` & `row-reverse`

{% example %}

```jsx
<FieldControl name="name" orientation="row">
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## IsRequired

`isRequired` prop is used to show required field. It adds red star (\*) after Lable.

{% example %}

```jsx
<FieldControl name="name" isRequired>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## IsDisabled

`isDisabled` prop is used to disable subcomponent or children field.

{% example %}

```jsx
<FieldControl name="name" isDisabled>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## IsReadOnly

`isReadOnly` prop is used to change field state to read only.

{% example %}

```jsx
<FieldControl name="name" isReadOnly>
  <Label>Name</Label>
  <InputField defaultValue="This is a sample default text" />
</FieldControl>
```

{% /example %}

## IsInvalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example %}

```jsx
<FieldControl name="name" isInvalid>
  <Label>Name</Label>
  <InputField />
</FieldControl>
```

{% /example %}

## IsLoading

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

## Props

---

### FieldControl

`FieldControl` composes the `div` component.

| Property    | Description                   | Type                                  | Default |
| ----------- | ----------------------------- | ------------------------------------- | ------- |
| isDisabled  | To manage disabled state.     | `boolean`                             | `false` |
| isLoading   | To manage loading state.      | `boolean`                             | `false` |
| isReadOnly  | To manage read-only state.    | `boolean`                             | `false` |
| isInvalid   | To manage invalid state.      | `boolean`                             | `false` |
| isRequired  | To manage required state.     | `boolean`                             | `false` |
| orientation | Orientation of the component. | `"col" `or `"row"` or `"row-reverse"` | `col`   |
| name        | Name of the field.            | `string`                              | -       |

### ErrorMessage

`ErrorMessage` composes the `p` component.
