---
title: JSON Explorer
nextjs:
  metadata:
    title: JSON Explorer
    description: A component that displays JSON data in a hierarchical, tree-like structure where users can expand and collapse nested objects and arrays, making it easier for them to navigate through the structure. It is particularly useful for developers and data analysts, enabling them to inspect, explore, and manipulate JSON data efficiently.
    twitter:
      title: JSON Explorer
      images:
        url: https://rafty.rhinobase.io/api/og?title=JSON%20Explorer
    openGraph:
      title: JSON Explorer
      images:
        url: https://rafty.rhinobase.io/api/og?title=JSON%20Explorer
---

A component that displays JSON data in a hierarchical, tree-like structure where users can expand and collapse nested objects and arrays, making it easier for them to navigate through the structure. It is particularly useful for developers and data analysts, enabling them to inspect, explore, and manipulate JSON data efficiently.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { JSONExplorer } from "@rafty/ui";

<JSONExplorer />;
```

## Usage

{% example %}

```jsx
<JSONExplorer
  data={{
    a: {
      b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      c: {
        d: false,
        hm: {
          h: {
            a: {
              b: [2, 2, 3, { c: "c" }],
            },
            b: "b",
          },
        },
      },
      e: false,
    },
  }}
/>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<JSONExplorer
  size="lg"
  data={{
    a: {
      b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      c: {
        d: false,
        hm: {
          h: {
            a: {
              b: [2, 2, 3, { c: "c" }],
            },
            b: "b",
          },
        },
      },
      e: false,
    },
  }}
/>
```

{% /example %}

---

## Props

### JSONExplorer

`JSONExplorer` component is built on top of [Ark TreeView](https://ark-ui.com/react/docs/components/tree-view#api-reference)

| Property | Description                          | Type                                      | Default |
| -------- | ------------------------------------ | ----------------------------------------- | ------- |
| data     | The JSON data to be displayed.       | `JSONExplorerData`                        | -       |
| size     | Size of the JSON explorer component. | `"sm"` or `"md"` or `"lg"` or `undefined` | `"md"`  |
