---
title: Pagination
nextjs:
  metadata:
    title: Pagination
    description: Simplify navigation with our Pagination component for efficient content browsing.
    twitter:
      title: Pagination
      images:
        url: https://rafty.rhinobase.io/api/og?title=Pagination
    openGraph:
      title: Pagination
      images:
        url: https://rafty.rhinobase.io/api/og?title=Pagination
---

The Pagination Component is a customizable and user-friendly pagination solution designed to enhance navigation through large sets of data.

## Anatomy

Import the component.

```jsx
import { Pagination } from "@rafty/ui";

<Pagination />;
```

## Usage

{% example name="pagination:usage" /%}

## size

{% example name="pagination:size" /%}

## showQuickJumper

{% example name="pagination:showQuickJumper" /%}

## total_number

{% example name="pagination:total_number" /%}

## showSizeChanger

{% example name="pagination:showSizeChanger" /%}

## isDisabled

{% example name="pagination:isDisabled" /%}

### API

---

### Root

| Property         | Description                                                      | Type                                                 | Default    |
| ---------------- | ---------------------------------------------------------------- | ---------------------------------------------------- | ---------- |
| total            | Total number of items.                                           | `number`                                             | 0          |
| pageSize         | Number of items per page.                                        | `number`                                             |            |
| current          | Current page number.                                             | `number`                                             |            |
| onChange         | Callback function when page or pageSize changes.                 | `(page: number, pageSize: number) => void`           |            |
| pageSizeOptions  | Options for the page size dropdown.                              | `number[]`                                           | [10,20,50] |
| defaultCurrent   | Default current page number.                                     | `number`                                             | 1          |
| defaultPageSize  | Default page size.                                               | `number`                                             | 10         |
| disabled         | Whether the pagination is disabled.                              | `boolean`                                            |            |
| hideOnSinglePage | Whether to hide pagination on a single page.                     | `boolean`                                            | false      |
| showQuickJumper  | Whether to show a quick jumper input or customize the go button. | `boolean`                                            | false      |
| showSizeChanger  | Whether to show the page size changer.                           | `boolean`                                            |            |
| showTotal        | Callback function to display total and range info.               | `(total:number,range:string) => ReactNode or string` |            |
