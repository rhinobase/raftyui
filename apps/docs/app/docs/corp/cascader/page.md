---
title: "Cascader"
nextjs:
  metadata:
    title: "Cascader"
    description: ""
    twitter:
      title: "Cascader"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Cascader"
    openGraph:
      title: "Cascader"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=Cascader"
---

It is selection box which helps you select a set of associate data set when selecting from a large data set, with multi-stage classification separated for easy selection.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { Cascader } from "@rafty/ui";

<Cascader />;
```

## Usage

Cascader has `items` as required prop whic is of `CascaderItemType[]` type and cascader dividers the options according to different stages of hierarchy.

{% example %}

```jsx
<Cascader
  items={[
    {
      label: "Pants",
      value: "pants",
      children: [
        {
          label: "Denim",
          value: "denim",
          children: [
            {
              label: "Jeans",
              value: "jeans",
            },
          ],
        },
        {
          label: "Cargo",
          value: 4,
        },
      ],
    },
    {
      label: "Shoes",
      value: "Shoes",
      children: [
        {
          label: "Athletic",
          value: "athlietic",
          children: [
            {
              label: "Runing",
              value: "runing",
            },
          ],
        },
      ],
    },
  ]}
/>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<Cascader
  size="lg"
  items={[
    {
      label: "Pants",
      value: "pants",
      children: [
        {
          label: "Denim",
          value: "denim",
          children: [
            {
              label: "Jeans",
              value: "jeans",
            },
          ],
        },
        {
          label: "Cargo",
          value: 4,
        },
      ],
    },
    {
      label: "Shoes",
      value: "Shoes",
      children: [
        {
          label: "Athletic",
          value: "athlietic",
          children: [
            {
              label: "Runing",
              value: "runing",
            },
          ],
        },
      ],
    },
  ]}
/>
```

{% /example %}

## ReadOnly

`isReadOnly` prop is used to manage readonly state of field.

{% example %}

```jsx
<Cascader
  isReadOnly
  items={[
    {
      label: "Pants",
      value: "pants",
      children: [
        {
          label: "Denim",
          value: "denim",
          children: [
            {
              label: "Jeans",
              value: "jeans",
            },
          ],
        },
        {
          label: "Cargo",
          value: 4,
        },
      ],
    },
    {
      label: "Shoes",
      value: "Shoes",
      children: [
        {
          label: "Athletic",
          value: "athlietic",
          children: [
            {
              label: "Runing",
              value: "runing",
            },
          ],
        },
      ],
    },
  ]}
/>
```

{% /example %}

## Disabled

`isDisabled` prop is used to manage disable state of field.

{% example %}

```jsx
<Cascader
  isDisabled
  items={[
    {
      label: "Pants",
      value: "pants",
      children: [
        {
          label: "Denim",
          value: "denim",
          children: [
            {
              label: "Jeans",
              value: "jeans",
            },
          ],
        },
        {
          label: "Cargo",
          value: 4,
        },
      ],
    },
    {
      label: "Shoes",
      value: "Shoes",
      children: [
        {
          label: "Athletic",
          value: "athlietic",
          children: [
            {
              label: "Runing",
              value: "runing",
            },
          ],
        },
      ],
    },
  ]}
/>
```

{% /example %}

---

## Props

### Cascader

`Cascader` composes the `<div>` component.

| Property      | Description                                                                 | Type                                                               | Default |
| ------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| items         | Casdader options items                                                      | `CascaderItemType[]`                                               | `[]`    |
| size          | Size of the cascader component.                                             | `"sm"` or `"md"` or `"lg"` or `undefined`                          | `"md"`  |
| defaultValue  | Default selected value.                                                     | `string` or `number` or `undefined`                                | -       |
| value         | To manage the selected value.                                               | `string` or `number` or `undefined`                                | -       |
| onValueChange | The callback invoke when value is changed.                                  | <Info>(value?: `string` or `number`) => void</Info> or `undefined` | -       |
| separator     | Serarator string th separate the different stages of selected data in input | `string` or `undefined`                                            | `" / "` |
| placeholder   | Input placeholder to show when no value is selected                         | `string` or `undefined`                                            | -       |
| isDisabled    | To manage the disable state.                                                | `boolean` or <Info>() => boolean</Info> or `undefined`             | `false` |
| isReadOnly    | o manage readonly state.                                                    | `boolean` or <Info>() => boolean</Info> or `undefined`             | `false` |
