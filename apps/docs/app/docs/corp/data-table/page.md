---
title: "DataTable"
nextjs:
  metadata:
    title: "DataTable"
    description: "A component used to display a collection of structured data where you can also perform several operation like sorting, fitering and different custom options on particular rows using row selection."
    twitter:
      title: "DataTable"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=DataTable"
    openGraph:
      title: "DataTable"
      images:
        url: "https://rafty.rhinobase.io/api/og?title=DataTable"
---

A component used to display a collection of structured data where you can also perform several operation like sorting, fitering and different custom options on particular rows using row selection.

This is a custom component crafted to adhere to our styling conventions, resulting in limited styling options and available props.

## Anatomy

Import the component.

```jsx
import { DataTable } from "@rafty/corp";

<DataTable />;
```

## Usage

DataTable automatically manages the empty data state and you can also pass `isLoading` and `isFetching` props to manage loading and fetching state simultaniously.

{% example %}

```jsx
<DataTable
  columns={[
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
  ]}
  data={[
    {
      id: "1",
      name: "Sample 1",
      age: "18",
    },
    {
      id: "2",
      name: "Sample 2",
      age: "22",
    },
    {
      id: "3",
      name: "Sample 3",
      age: "33",
    },
    {
      id: "4",
      name: "Sample 4",
      age: "24",
    },
    {
      id: "5",
      name: "Sample 5",
      age: "32",
    },
  ]}
/>
```

{% /example %}

## Size

There are 3 `size` options available: `"sm"`, `"md"` (default) & `"lg"`.

{% example %}

```jsx
<DataTable
  size="sm"
  columns={[
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
  ]}
  data={[
    {
      id: "1",
      name: "Sample 1",
      age: "18",
    },
    {
      id: "2",
      name: "Sample 2",
      age: "22",
    },
    {
      id: "3",
      name: "Sample 3",
      age: "33",
    },
    {
      id: "4",
      name: "Sample 4",
      age: "24",
    },
    {
      id: "5",
      name: "Sample 5",
      age: "32",
    },
  ]}
/>
```

{% /example %}

## Enable Row Selection

- `enableRowSelection` prop is used to enable row selection.
- Row selection state can be managed using `rowsSelected` and `onRowsSelectedChange` props.
- `rowsSelected` prop accept the currently selected rows.
- `onRowsSelectedChange` prop is a callback invokes when selected rows are changed and provides changed selected rows object.

{% example %}

```jsx
function EnableRowSelection() {
  const [rowsSelected,setRowsSelected] = useState<Record<string, boolean>>({})

  const columns=[

{
id: "select",
header: ({ table }) => (

<Checkbox
size="sm"
checked={
table.getIsAllRowsSelected() ||
(table.getIsSomeRowsSelected() ? "indeterminate" : false)
}
onCheckedChange={() => table.toggleAllRowsSelected()}
/>
),
cell: ({ row }) => (
<Checkbox
size="sm"
checked={row.getIsSelected()}
onCheckedChange={() => row.toggleSelected()}
/>
),
size: 40,
},
{
accessorKey: "id",
header: "Id",
},
{
accessorKey: "name",
header: "Name",
},
{
accessorKey: "age",
header: "Age",
}]

const data=[{
id:"1",
name:"Sample 1",
age:"18"
},{
id:"2",
name:"Sample 2",
age:"22"
},{
id:"3",
name:"Sample 3",
age:"33"
},{
id:"4",
name:"Sample 4",
age:"24"
},{
id:"5",
name:"Sample 5",
age:"32"
}]

  return (
    <DataTable
      enableRowSelection
      columns={columns}
      data={data}
      onRowSelectionChange={setRowsSelected}
      rowSelection={rowsSelected}
    />
  )

}

```

{% /example %}

## Not Found Message

`notFoundMessage` prop is used to pass custom message to display when data is empty.

{% example %}

```jsx
<DataTable
  notFoundMessage="Empty Data"
  columns={[
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
  ]}
/>
```

{% /example %}

## Enable Column Resizing

`enableColumnResizing` prop is used for enabling columns resizing.

{% example %}

```jsx
<DataTable
  enableColumnResizing
  columns={[
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
    },
  ]}
  data={[
    {
      id: "1",
      name: "Sample 1",
      age: "18",
    },
    {
      id: "2",
      name: "Sample 2",
      age: "22",
    },
    {
      id: "3",
      name: "Sample 3",
      age: "33",
    },
    {
      id: "4",
      name: "Sample 4",
      age: "24",
    },
    {
      id: "5",
      name: "Sample 5",
      age: "32",
    },
  ]}
/>
```

{% /example %}

## Enable Columns Sorting

`enableColumnsSorting` prop is used for enabling columns sorting.

{% example %}

```jsx
<DataTable
  enableColumnsSorting
  columns={[
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "age",
      header: "Age",
      enableSorting: false,
    },
  ]}
  data={[
    {
      id: "1",
      name: "Sample 1",
      age: "18",
    },
    {
      id: "2",
      name: "Sample 2",
      age: "22",
    },
    {
      id: "3",
      name: "Sample 3",
      age: "33",
    },
    {
      id: "4",
      name: "Sample 4",
      age: "24",
    },
    {
      id: "5",
      name: "Sample 5",
      age: "32",
    },
  ]}
/>
```

{% /example %}

---

## Props

### DataTable

`DataTable` is made using [Table](https://rafty.rhinobase.io/docs/components/table).

| Property             | Description                                                                     | Type                                                                          | Default           |
| -------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------- |
| columns              | Column definitions for the data table.                                          | `ColumnDef<T>[]`                                                              | -                 |
| size                 | Size of the data table component.                                               | `"sm"` or `"md"` or `"lg"` or `undefined`                                     | `"md"`            |
| data                 | Data to be displayed in the table.                                              | `T[]` or `undefined`                                                          | `[]`              |
| enableRowSelection   | Enables row selection functionality.                                            | `boolean` or `undefined`                                                      | `false`           |
| isFetching           | Indicates if data is being fetched.                                             | `boolean` or `undefined`                                                      | `false`           |
| isLoading            | Indicates if the table is in a loading state.                                   | `boolean` or `undefined`                                                      | `false`           |
| enableColumnResizing | Enables column resizing functionality.                                          | `boolean` or `undefined`                                                      | `false`           |
| enableColumnsSorting | Enables columns sorting functionality.                                          | `boolean` or `undefined`                                                      | `false`           |
| notFoundMessage      | Message to display when no data is found.                                       | `ReactNode` or `undefined`                                                    | `"No data found"` |
| rowsSelected         | Accepts currently selected rows, represented as an object with row IDs as keys. | `{[x: string]: boolean}` or `undefined`                                       | `{}`              |
| onSortingChange      | The callback invoke when sorting is changed.                                    | <Info>(value?: `{id: string, desc: boolean}[]`) => void</Info> or `undefined` | -                 |
| onColumnSizingChange | The callback invoke when column sizing is changed.                              | <Info>(value?: `{[x: string]: number}`) => void</Info> or `undefined`         | -                 |
| onRowsSelectedChange | The callback invoke when row selection is changed.                              | <Info>(value?: `{[x: string]: boolean}`) => void</Info> or `undefined`        | -                 |
