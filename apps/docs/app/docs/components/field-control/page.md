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

{% example name="field-control:usage" /%}

## Orientation

There are 3 `orientation` options in field control: `row` (default), `col` & `row-reverse`

{% example name="field-control:orientation" /%}

## IsRequired

`isRequired` prop is used to show required field. It adds red star (\*) after Lable.

{% example name="field-control:required" /%}

## IsDisabled

`isDisabled` prop is used to disable subcomponent or children field.

{% example name="field-control:disabled" /%}

## IsReadOnly

`isReadOnly` prop is used to change field state to read only.

{% example name="field-control:readonly" /%}

## IsInvalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example name="field-control:invalid" /%}

## IsLoading

`isLoading` prop is used to show a field in a loading state.

{% example name="field-control:loading" /%}

## ErrorMessage

ErrorMessage component will display an error message when there is an error during data input in a field or during form submission.

{% example name="field-control:errormessage" /%}

## Props

---

### FieldControl

`FieldControl` composes the `div` component.

| Property    | Description                                   | Type                                  | Default |
| ----------- | --------------------------------------------- | ------------------------------------- | ------- |
| isDisabled  | Whether the component is disabled.            | `boolean`                             | `false` |
| isLoading   | Whether the component is in a loading state.  | `boolean`                             | `false` |
| isReadOnly  | Whether the component is in read-only mode.   | `boolean`                             | `false` |
| isInvalid   | Whether the component is in an invalid state. | `boolean`                             | `false` |
| isRequired  | Whether the component is required.            | `boolean`                             | `false` |
| orientation | Orientation of the component.                 | `"col" `or `"row"` or `"row-reverse"` | `col`   |
| name        | Name of the component.                        | `string`                              |         |

### ErrorMessage

`ErrorMessage` composes the `p` component.
