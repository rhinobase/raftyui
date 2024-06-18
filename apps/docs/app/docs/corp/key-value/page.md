---
title: Key Value
nextjs:
  metadata:
    title: Key Value
    description: A component displaying keys and their corresponding values in a tabular format.
    twitter:
      title: Key Value
      images:
        url: https://rafty.rhinobase.io/api/og?title=Key%20Value
    openGraph:
      title: Key Value
      images:
        url: https://rafty.rhinobase.io/api/og?title=Key%20Value
---

A component displaying keys and their corresponding values in a tabular format.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { KeyValue } from "@rafty/ui";

<KeyValue />;
```

## Usage

{% example %}

```jsx
<KeyValue
  data={{
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 2,
    f: 1,
  }}
/>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<KeyValue
  size="lg"
  data={{
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 2,
    f: 1,
  }}
/>
```

{% /example %}

## Custom Heading

`heading` prop can be used to give custom headings for both key and value columns.

{% example %}

```jsx
<KeyValue
  heading={{ key: "Item Key", value: "Item Value" }}
  data={{
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 2,
    f: 1,
  }}
/>
```

{% /example %}

---

## Props

### KeyValue

`KeyValue` is made using [Table](https://rafty.rhinobase.io/docs/components/table).

| Property | Description                                 | Type                                                  | Default                        |
| -------- | ------------------------------------------- | ----------------------------------------------------- | ------------------------------ |
| data     | The key-value pairs to be displayed.        | `Record<string, string or number or boolean>`         | -                              |
| heading  | The headings for the key and value columns. | `{key?: ReactNode, value?: ReactNode}` or `undefined` | `{key: "Key", value: "Value"}` |
| size     | Size of the key-value component.            | `"sm"` or `"md"` or `"lg"` or `undefined`             | `"md"`                         |
