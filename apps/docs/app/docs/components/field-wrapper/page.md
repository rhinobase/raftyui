---
title: Field Wrapper
nextjs:
  metadata:
    title: Field Wrapper
    description: A wrapper component for field to be used in form.
    twitter:
      title: Field Wrapper
      images:
        url: https://rafty.rhinobase.io/api/og?title=Field%20Wrapper
    openGraph:
      title: Field Wrapper
      images:
        url: https://rafty.rhinobase.io/api/og?title=Field%20Wrapper
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
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name">
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Label

`label` prop is used to render label for field.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" label="Name">
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Description

`description` prop is used to display descriptive text below label to provide additional information about field.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper
        name="name"
        label="Name"
        description="Lorem Ipsum is simply dummy text of the printing"
      >
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Orientation

There are 3 `orientation` options available: `"row"` (default), `"col"` & `"row-reverse"`.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" label="Name" orientation="row">
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Required

`isRequired` prop is used to show required field. It adds red star (\*) after Label.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" label="Name" isRequired>
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Disabled

`isDisabled` prop is used to disable sub-components or children field.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" label="Name" isDisabled>
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to change field state to readonly.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" label="Name" isReadOnly>
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Invalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" name="Name" isInvalid>
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
```

{% /example %}

## Loading

`isLoading` prop is used to show a field in a loading state.

{% example %}

```jsx
function FieldWrapperExample() {
  const methods = useForm();
  const { register } = methods;

  return (
    <FormProvider {...methods}>
      <FieldWrapper name="name" label="Name" isLoading>
        <InputField {...register("name")} />
      </FieldWrapper>
    </FormProvider>
  );
}
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
