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

{% example %}

```jsx
<InputField placeholder="Basic usage" />
```

{% /example %}

## Size

There are 3 `size` options in input field: `sm`, `md` (default) & `lg`.

{% example %}

```jsx
<div className="space-y-4">
  <InputField size="sm" />
  <InputField size="md" />
  <InputField size="lg" />
</div>
```

{% /example %}

## Variant

There are 3 `variant` options in input field: `solid`, `outline` (default) & `ghost`.

{% example %}

```jsx
<div className="space-y-4">
  <InputField variant="solid" />
  <InputField variant="ghost" />
  <InputField variant="outline" />
</div>
```

{% /example %}

## IsRequired

`isRequired` prop is used to show required field. It adds red star (\*) after label.

{% example %}

```jsx
<InputField isRequired />
```

{% /example %}

## IsDisabled

`isDisabled` prop is used to disable subcomponent or children field.

{% example %}

```jsx
<InputField isDisabled />
```

{% /example %}

## IsReadOnly

`isReadOnly` prop is used to change field state to read-only.

{% example %}

```jsx
<InputField isReadOnly />
```

{% /example %}

## IsInvalid

`isInvalid` prop is used to show invalid field on certain condition.

{% example %}

```jsx
<InputField isInvalid />
```

{% /example %}

## IsLoading

`isLoading` prop is used to show a field in a loading state.

{% example %}

```jsx
<InputField isLoading />
```

{% /example %}

## Unstyled

Pass ` isUnstyled` prop to remove style component

{% example %}

```jsx
<InputField
  isUnstyled
  className="border-secondary-300 dark:border-secondary-600 w-full rounded-md border bg-transparent p-1 transition-colors duration-300 hover:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 dark:hover:border-cyan-500"
/>
```

{% /example %}

## Left Addon

{% example %}

```jsx
<InputGroup>
  <LeftAddon>
    <PhoneIcon width={16} height={16} className="stroke-2" />
  </LeftAddon>
  <InputField type="tel" placeholder="Phone number" />
</InputGroup>
```

{% /example %}

## Right Addon

{% example %}

```jsx
<InputGroup>
  <InputField />
  <RightAddon>
    <MagnifyingGlassIcon width={16} height={16} className="stroke-2" />
  </RightAddon>
</InputGroup>
```

{% /example %}

## Prefix

{% example %}

```jsx
<InputGroup>
  <Prefix>
    <PhoneIcon width={16} height={16} className="stroke-2" />
  </Prefix>
  <InputField />
</InputGroup>
```

{% /example %}

## Suffix

{% example %}

```jsx
<InputGroup>
  <InputField />
  <Suffix>
    <CheckIcon width={16} height={16} className="stroke-2 text-green-500" />
  </Suffix>
</InputGroup>
```

{% /example %}

## Props

---

### InputField

`InputField` composes the `input` component.

| Property   | Description                        | Type                                  | Default     |
| ---------- | ---------------------------------- | ------------------------------------- | ----------- |
| size       | Size of the input field component. | `"sm"` or `"md"` or `"lg"`            | `"md"`      |
| variant    | Style variant of the component.    | `"solid"` or `"outline"` or `"ghost"` | `"outline"` |
| isDisabled | To manage disabled state.          | `boolean`                             | `false`     |
| isRequired | To manage required state.          | `boolean`                             | `false`     |
| isLoading  | To manage loading state.           | `boolean`                             | `false`     |
| isReadOnly | To manage read-only state.         | `boolean`                             | `false`     |
| isUnstyled | Remove style from this component   | `boolean`                             | `false`     |
| isInvalid  | To manage invalid state.           | `boolean`                             | `false`     |
