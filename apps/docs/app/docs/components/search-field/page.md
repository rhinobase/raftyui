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

# Search Field

Just like Input Field, SearchField is used for Search inputs but gives an extra functionality of show and hide Search.

This component is made using InputField and InputGroup, making all native field props available for use.

## Anatomy

Import the component.

```jsx
import { SearchField } from "@rafty/ui";

<SearchField />;
```

## Usage

{% example %}

```jsx
<SearchField />
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<div className="w-full space-y-2">
  <SearchField size="sm" />
  <SearchField size="md" />
  <SearchField size="lg" />
</div>
```

{% /example %}

## Variant

There are 3 `variant` options available: `"solid"`, `"outline"` (default) & `"ghost"`.

{% example %}

```jsx
<div className="w-full space-y-2">
  <SearchField variant="outline" />
  <SearchField variant="ghost" />
  <SearchField variant="solid" />
</div>
```

{% /example %}

---

## Props

### SearchField

`SearchField` is made using [InputField](https://rafty.rhinobase.io/docs/components/input-field).

| Property      | Description                                | Type                                 | Default |
| ------------- | ------------------------------------------ | ------------------------------------ | ------- |
| defaultValue  | Default input value.                       | `string` or `undefined`              | -       |
| value         | To manage the selected value.              | `string` or `undefined`              | -       |
| onValueChange | The callback invoke when value is changed. | <Info>(value: string) => void</Info> | -       |
