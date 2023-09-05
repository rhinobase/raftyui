---
title: Field Control
pageTitle: Field Control - Rafty UI
description: Field Control
---

Field Control is used in forms to provide context to children fields. Along with Field control it is recommended to use Label and Error Message components.

This is a custom-made component, you can pass name and different states like isRequired, isDisabled, isReadonly, isInvalid & isLoading in it and it will pass it all accordingly to its subcomponents

## Anatomy

Import all parts and piece them together.

```jsx
import { FieldControl } from "@rafty/ui";

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

{% example name="field-control:orientation" /%}

## IsInvalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example name="field-control:invalid" /%}

## IsLoading

`isLoading` prop is used to show a field in a loading state.

{% example name="field-control:loading" /%}

## ErrorMessage

ErrorMessage will show an error message on error during data input in field or form submission.

{% example name="field-control:errormessage" /%}
