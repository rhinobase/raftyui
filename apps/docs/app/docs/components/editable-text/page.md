---
title: Editable Text
nextjs:
  metadata:
    title: Editable Text
    description: A component that allows users to edit text in place.
    twitter:
      title: Editable Text
      images:
        url: https://rafty.rhinobase.io/api/og?title=Editable%20Text
    openGraph:
      title: Editable Text
      images:
        url: https://rafty.rhinobase.io/api/og?title=Editable%20Text
---

A component that allows users to edit text in place.

This component is made on top of [Ark Editable Component](https://ark-ui.com/react/docs/components/editable) with our styling conventions. This component has been shared with you, ensuring that all its native properties are accessible.

## Anatomy

Import the component.

```jsx
import { EditableText } from "@rafty/ui";

<EditableText />;
```

## Usage

{% example %}

```jsx
<EditableText />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<EditableText size="lg" />
```

{% /example %}

## Default Value

`defaultValue` prop can be used to pass default value of field.

{% example %}

```jsx
<EditableText defaultValue="Sample text" />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<EditableText isReadOnly />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<EditableText isDisabled />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<EditableText isInvalid />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<EditableText isLoading />
```

{% /example %}

---

## Props

### EditableText

`EditableText` component is built on top of [Ark Editable](https://ark-ui.com/react/docs/components/editable#api-reference)

| Property      | Description                                | Type                                                   | Default |
| ------------- | ------------------------------------------ | ------------------------------------------------------ | ------- |
| size          | Size of the editable text component.       | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`  |
| defaultValue  | Default input value.                       | `string` or `undefined`                                | -       |
| value         | To manage the input value.                 | `string` or `undefined`                                | -       |
| isDisabled    | To manage the disable state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isInvalid     | To manage the invalid state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isLoading     | To manage the loading state.               | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| isReadOnly    | To manage the readonly state.              | `boolean` or <Info>() => boolean</Info> or `undefined` | -       |
| onValueChange | The callback invoke when value is changed. | <Info>(value?: `string`) => void</Info> or `undefined` | -       |
