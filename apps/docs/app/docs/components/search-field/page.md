---
title: Search Field
nextjs:
  metadata:
    title: Search Field
    description: Just like Input Field, Search Field is used for Search inputs but gives an extra functionality of show and hide Search.
    twitter:
      title: Search Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Search%20Field
    openGraph:
      title: Search Field
      images:
        url: https://rafty.rhinobase.io/api/og?title=Search%20Field
---

Just like Input Field, Search Field is used for Search inputs but gives an extra functionality of show and hide Search.

This component is made using Input Field and Input Group, making all native field props available for use.

## Anatomy

Import the component.

```jsx
import { SearchField } from "@rafty/ui";

<SearchField />;
```

## Usage

{% example name="search-field:usage" /%}

## Size

There are 3 `size` options in input field: `sm`, `md` (default) & `lg`.

{%example name="search-field:size"/%}

## Variant

There are 3 `variant` options in input field: `solid`, `outline` (default) & `ghost

{% example name="search-field:variant" /%}

## Props

---

### SearchField

`SearchField` composes the `InputField` component.

| Property | Description                                  | Type                                        | Default |
| -------- | -------------------------------------------- | ------------------------------------------- | ------- |
| size     | Size of the search field component.          | `"sm"` or `"md"` or `"lg"`                  | `"md"`  |
| search   | Value of the search field.                   | `string` or `number` or `readonly string[]` | -       |
| onSearch | Callback function invoked on search changes. | `(value: string) => void`                   | -       |
