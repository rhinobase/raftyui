---
title: Editable Textarea
nextjs:
  metadata:
    title: Editable Textarea
    description: A component that allows users to edit text in place.
    twitter:
      title: Editable Textarea
      images:
        url: https://rafty.rhinobase.io/api/og?title=Editable%20Textarea
    openGraph:
      title: Editable Textarea
      images:
        url: https://rafty.rhinobase.io/api/og?title=Editable%20Textarea
---

A component that allows users to edit text in place.

This component is made on top of [Ark Editable Component](https://ark-ui.com/react/docs/components/editable) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { EditableTextarea } from "@rafty/ui";

<EditableTextarea />;
```

## Usage

{% example %}

```jsx
<EditableTextarea />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<EditableTextarea size="lg" />
```

{% /example %}

## Default Value

`defaultValue` prop can be used to pass default value of field.

{% example %}

```jsx
<EditableTextarea defaultValue="Sample text" />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<EditableTextarea isReadOnly />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<EditableTextarea isDisabled />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<EditableTextarea isInvalid />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<EditableTextarea isLoading />
```

{% /example %}

---

## Props

### EditableTextarea

`EditableTextarea` component is built on top of [Ark Editable](https://ark-ui.com/react/docs/components/editable#api-reference)

| Property      | Description                                | Type                                                   | Default |
| ------------- | ------------------------------------------ | ------------------------------------------------------ | ------- |
| size          | Size of the editable textarea component.   | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| defaultValue  | Default input value.                       | `string` or `undefined`                                | -       |
| value         | To manage the input value.                 | `string` or `undefined`                                | -       |
| isDisabled    | To manage the disable state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid     | To manage the invalid state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading     | To manage the loading state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly    | To manage the readonly state.              | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| onValueChange | The callback invoke when value is changed. | <Info>(value?: `string`) => void</Info> or `undefined` | -       |
