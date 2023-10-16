---
title: Input Field
nextjs:
  metadata:
    title: Input Field
    description: Input field is a component that is used to get user input in a text field.
    twitter:
      title: Input Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Input%20Field
    openGraph:
      title: Input Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Input%20Field
---

Input field is a component that is used to get user input in a text field.

This is a custom component made upon native html label component and its props.

## Anatomy

Import the component.

```jsx
import { InputField } from "@rafty/ui";

<InputField />;
```

## Usage

{% example name="input-field:usage" /%}

## Size

There are 3 `size` options in input field: `sm`, `md` (default) & `lg`.

{% example name="input-field:size" /%}

## Variant

There are 3 `variant` options in input field: `solid`, `outline` (default) & `ghost`.

{% example name="input-field:variant" /%}

## IsRequired

`isRequired` prop is used to show required field. It adds red star (\*) after label.

{% example name="input-field:required" /%}

## IsDisabled

`isDisabled` prop is used to disable subcomponent or children field.

{% example name="input-field:disabled" /%}

## IsReadOnly

`isReadOnly` prop is used to change field state to read-only.

{% example name="input-field:readonly" /%}

## IsInvalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example name="input-field:invalid" /%}

## IsLoading

`isLoading` prop is used to show a field in a loading state.

{% example name="input-field:loading" /%}

### Unstyled

Pass ` isUnstyled` prop to remove style component

{% example name="input-field:unstyled" /%}

### Left Addon

{% example name="input-field:left_addon" /%}

### Right Addon

{% example name="input-field:right_addon" /%}

### Prefix

{% example name="input-field:prefix" /%}

### Suffix

{% example name="input-field:suffix" /%}

### API

---

| Property   | Description                  | Type      | Default |
| ---------- | ---------------------------- | --------- | ------- |
| isUnstyled | Removes Style from component | `boolean` | false   |
