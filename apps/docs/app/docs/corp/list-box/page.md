---
title: "List Box"
nextjs:
  metadata:
    title: "List Box"
    description: "A component that displays a scrollable list of selectable items where user can interact with the list box to select one or more items from the list."
    twitter:
      title: "List Box"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=List%20Box"
    openGraph:
      title: "List Box"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=List%20Box"
---

A component that displays a scrollable list of selectable items where user can interact with the list box to select one or more items from the list.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Listbox } from "@rafty/ui";

<Listbox />;
```

## Usage

{% example %}

```jsx
<Listbox
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Listbox
  size="sm"
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

## Default Value

`defaultValue` is used to set default selected value in ListBox and it's type changes when `type` is changed. When `type` is `"single"` `defaultValue` is `string` type and when `type` is `"multi"` type `defaultValue` is `string[]` type.

{% example %}

```jsx
<Listbox
  defaultValue="react"
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

## Type

`type` prop specifies how many items can be selected at a time and it has 2 options available: `"single"` (default) & `"multi"`.

{% example %}

```jsx
<Listbox
  type="multi"
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<Listbox
  isDisabled
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<Listbox
  isReadOnly
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

## Loading

`isLoading` prop is used to manage loading state of field.

{% example %}

```jsx
<Listbox
  isLoading
  items={[
    { value: "js", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "next", label: "Next" },
    { value: "php", label: "PHP" },
    { value: "dotnet", label: "DotNet" },
  ]}
/>
```

{% /example %}

---

## Props

### ListBox

`Listbox` is made using [ScrollArea](https://rafty.rhinobase.io/docs/components/scroll-area).

| Property      | Description                                                        | Type                                                             | Default    |
| ------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- | ---------- |
| items         | Listbox options amongst whome you can select one or more items.    | `{ value: string, label?: string }[]`                            | -          |
| size          | Size of the list box component.                                    | `"sm"` or `"md"` or `"lg"` or `undefined`                        | `"md"`     |
| itemSize      | Each item's height.                                                | `number` or `undefined`                                          | -          |
| defaultValue  | Default selected value.                                            | `string` or `string[]` or `undefined`                            | -          |
| value         | To manage the selected value.                                      | `string` or `string[]` or `undefined`                            | -          |
| onValueChange | The callback invoke when value is changed.                         | <Info>(value?: string or string[]) => void</Info> or `undefined` | -          |
| type          | Different type specifies how many items can be selected at a time. | `"single"` or `"multi"` or `undefined`                           | `"single"` |
| isDisabled    | To manage the disable state.                                       | `boolean` or <Info>() => boolean</Info> or `undefined`           | -          |
| isLoading     | To manage the loading state.                                       | `boolean` or <Info>() => boolean</Info> or `undefined`           | -          |
| isReadOnly    | To manage the readonly state.                                      | `boolean` or <Info>() => boolean</Info> or `undefined`           | -          |
| isHidden      | To manage the hidden state.                                        | `boolean` or <Info>() => boolean</Info> or `undefined`           | -          |
