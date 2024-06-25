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

It is a component that is used to get user input in a text field.

This component is built using native `<input>` html tag and its props, making all native props available for use. If you wish to apply your own styling you can use the `isUnstyled` prop to remove all styling.

## Anatomy

Import the component.

```jsx
import { InputField } from "@rafty/ui";

<InputField />;
```

## Usage

{% example %}

```jsx
<InputField placeholder="Basic usage" />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="w-full space-y-4">
  <InputField size="sm" />
  <InputField size="md" />
  <InputField size="lg" />
</div>
```

{% /example %}

## Variant

There are 3 `variant` options available: `"solid"`, `"outline"` (default) & `"ghost"`.

{% example %}

```jsx
<div className="w-full space-y-4">
  <InputField variant="solid" />
  <InputField variant="ghost" />
  <InputField variant="outline" />
</div>
```

{% /example %}

## Required

`isRequired` prop is used to manage required state of field.

{% example %}

```jsx
<InputField isRequired />
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<InputField isDisabled />
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<InputField isReadOnly />
```

{% /example %}

## Invalid

`isInvalid` prop is used to manage invalid state of field.

{% example %}

```jsx
<InputField isInvalid />
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<InputField isLoading />
```

{% /example %}

## Unstyled

Pass `isUnstyled` prop to remove style component.

{% example %}

```jsx
<InputField
  isUnstyled
  className="border-secondary-300 dark:border-secondary-600 w-full rounded-md border bg-transparent p-1 transition-colors duration-300 hover:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:hover:border-cyan-500"
/>
```

{% /example %}

## Input Group

{% example %}

```jsx
<div className="w-full space-y-3">
  <InputGroup>
    <LeftAddon>
      <PhoneIcon width={16} height={16} className="stroke-2" />
    </LeftAddon>
    <InputField type="tel" placeholder="Phone number" />
  </InputGroup>
  <InputGroup>
    <InputField />
    <RightAddon>
      <MagnifyingGlassIcon width={16} height={16} className="stroke-2" />
    </RightAddon>
  </InputGroup>
  <InputGroup>
    <Prefix>
      <PhoneIcon width={16} height={16} className="stroke-2" />
    </Prefix>
    <InputField />
  </InputGroup>
  <InputGroup>
    <InputField />
    <Suffix>
      <CheckIcon width={16} height={16} className="stroke-2 text-green-500" />
    </Suffix>
  </InputGroup>
</div>
```

{% /example %}

---

## Props

### InputField

`InputField` composes the `input` component.

| Property   | Description                        | Type                                                   | Default     |
| ---------- | ---------------------------------- | ------------------------------------------------------ | ----------- |
| size       | Size of the input field component. | `"sm"` or `"md"` or `"lg"` or `undefined`              | `"md"`      |
| variant    | Style variant of the component.    | `"solid"` or `"outline"` or `"ghost"` or `undefined`   | `"outline"` |
| isDisabled | To manage the disable state.       | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isRequired | To manage the required state.      | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isLoading  | To manage the loading state.       | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isReadOnly | To manage the readonly state.      | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isInvalid  | To manage the invalid state.       | `boolean` or <Info>() => boolean</Info> or `undefined` | -           |
| isUnstyled | Remove style from this component   | `boolean`                                              | `false`     |
