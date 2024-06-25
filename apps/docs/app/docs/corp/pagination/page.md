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

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import all parts and piece them together.

```jsx
import {
  Pagination,
  PageSizeSelect,
  PageJumper,
  PaginationButtons,
} from "@rafty/corp";

<Pagination>
  <PageSizeSelect />
  <PageJumper />
  <PaginationButtons />
</Pagination>;
```

## Usage

Pagination component's state can be managed using `onChange` function.

{% example %}

```jsx
function PaginationField() {
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });
  const count = 100;
  const pages = count / pagination.limit;

  return (
    <Pagination
      pages={pages}
      pageLimit={pagination.limit}
      currentPage={pagination.current}
      onChange={(page, pageLimit) =>
        setPagination((prev) => {
          if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
          return {
            current: page,
            limit: pageLimit,
          };
        })
      }
    >
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <PageSizeSelect />
      </div>
      <PageJumper />
      <span>Total Items : {count}</span>
      <PaginationButtons />
    </Pagination>
  );
}
```

{% /example %}

## Size

Pass the `size` prop if you need to adjust the size of Pagination component and its sub-components. Values can be `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
function PaginationField() {
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });
  const count = 100;
  const pages = count / pagination.limit;

  return (
    <Pagination
      pages={pages}
      pageLimit={pagination.limit}
      currentPage={pagination.current}
      onChange={(page, pageLimit) =>
        setPagination((prev) => {
          if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
          return {
            current: page,
            limit: pageLimit,
          };
        })
      }
      size="sm"
    >
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <PageSizeSelect />
      </div>
      <PageJumper />
      <span>Total Items : {count}</span>
      <PaginationButtons />
    </Pagination>
  );
}
```

{% /example %}

## PageSizeSelect

PageSizeSelect component can be used to change number of enteries per page. It take `pageSizes` prop, in which you can pass value in either `number[]` or `{label: string, value: number}[]` type. By default, the value of `pageSizes` prop is `[10, 20, 30]`.

{% example %}

```jsx
function PaginationField() {
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });

  return (
    <Pagination
      pages={10}
      pageLimit={pagination.limit}
      currentPage={pagination.current}
      onChange={(page, pageLimit) =>
        setPagination((prev) => {
          if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
          return {
            current: page,
            limit: pageLimit,
          };
        })
      }
    >
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <PageSizeSelect />
      </div>
    </Pagination>
  );
}
```

{% /example %}

## PageJumper

PageJumber is a number input field which helps you to navigate to a specific page.

{% example %}

```jsx
function PaginationField() {
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });

return (

<Pagination
pages={10}
pageLimit={pagination.limit}
currentPage={pagination.current}
onChange={(page, pageLimit) =>
setPagination((prev) => {
if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
return {
current: page,
limit: pageLimit,
};
})
}

>   <PageJumper />
> </Pagination>
> ); }

```

{% /example %}

## PaginationButtons

PaginationButtons component containes previous and next buttons facilitating navigation to the previous and next pages. The buttons are disabled when on the first or last page to prevent navigating beyond the limits.

{% example %}

```jsx
function PaginationField() {
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });

  return (
    <Pagination
      pages={10}
      pageLimit={pagination.limit}
      currentPage={pagination.current}
      onChange={(page, pageLimit) =>
        setPagination((prev) => {
          if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
          return {
            current: page,
            limit: pageLimit,
          };
        })
      }
    >
      <span>Page: {pagination.current}</span>
      <PaginationButtons />
    </Pagination>
  );
}
```

{% /example %}

## Disabled

You can manage disabled Pagination state using `isDisabled` prop.

{% example %}

```jsx
function PaginationField() {
  const [pagination, setPagination] = useState({
    current: 1,
    limit: 10,
  });
  const count = 100;
  const pages = count / pagination.limit;

  return (
    <Pagination
      pages={pages}
      pageLimit={pagination.limit}
      currentPage={pagination.current}
      onChange={(page, pageLimit) =>
        setPagination((prev) => {
          if (prev.limit !== pageLimit) return { current: 1, limit: pageLimit };
          return {
            current: page,
            limit: pageLimit,
          };
        })
      }
      isDisabled
    >
      <div className="flex items-center gap-2">
        <span className="cursor-not-allowed opacity-60">Rows per page:</span>
        <PageSizeSelect />
      </div>
      <PageJumper />
      <span className="cursor-not-allowed opacity-60">
        Total Items : {count}
      </span>
      <PaginationButtons />
    </Pagination>
  );
}
```

{% /example %}

---

## Props

### Pagination

`Pagination` composes the `<div>` component.

| Property    | Description                                                                                                          | Type                                                                 | Default |
| ----------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------- |
| pages       | Total number of pages.                                                                                               | `number` or `undefined`                                              | -       |
| currentPage | Current page number.                                                                                                 | `number` or `undefined`                                              | -       |
| onChange    | The callback invoke when page or page size is changed.                                                               | <Info>(page: number, pageSize: number) => void</Info> or `undefined` | -       |
| size        | Size of the pagination and its sub-components.                                                                       | `"sm"` or `"md"` or `"lg"` or `undefined`                            | `"md"`  |
| pageLimit   | Maximum number of entries to be shown per page by default and you further control it using PageSizeSelect component. | `number` or `undefined`                                              | -       |
| isDisabled  | To manage the disable state.                                                                                         | `boolean` or `undefined`                                             | `false` |

### PageSizeSelect

`PageSizeSelect` is made using [Select](https://rafty.rhinobase.io/docs/components/select).

| Property  | Description                         | Type                                                            | Default    |
| --------- | ----------------------------------- | --------------------------------------------------------------- | ---------- |
| pageSizes | Options for the page size dropdown. | `number[]` or `{label: string, value: number}[]` or `undefined` | [10,20,50] |

### PageJumper

`PageJumper` is made using [InputField](https://rafty.rhinobase.io/docs/components/input-field).

### PaginationButtons

`PaginationButtons` composes the `<div>` component.
