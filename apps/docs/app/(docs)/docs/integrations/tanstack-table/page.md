---
title: Tanstack Table
pageTitle: Table - Rafty UI
description: Tanstack Table
---

## Import

This example shows how to build a sortable data table with Chakra UI's table components, and the React Table library.

```jsx
"use client";
import { useEffect, useState } from "react";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Button, InputField, Table, TableBody, TableHead, Td, Th, Tr } from "@rafty/ui";

export default function App() {
  const handleDelete = (id) => {
    const updatedApiData = apiData.filter((item) => item.id !== id);
    setApiData(updatedApiData);
  };

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch("https://api.unsplash.com/photos/?client_id=rl5zby23aaNHcfqOk-kyU2iUYhPCY9zxuDbov2eMs7Q");
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };
    fetchApiData();
  }, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Slug",
      accessorKey: "slug",
    },
    {
      header: "Created At",
      accessorKey: "created_at",
    },
    {
      header: "Updated At",
      accessorKey: "updated_at",
    },
    {
      header: "Width",
      accessorKey: "width",
    },
    {
      header: "Height",
      accessorKey: "height",
    },
    {
      header: "Color",
      accessorKey: "color",
    },
    {
      header: "Blur Hash",
      accessorKey: "blur_hash",
    },
    {
      header: "action",
      cell: ({ row }) => (
        <Button colorScheme="error" size="sm" onClick={() => handleDelete(row.original.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <BasicTable data={apiData} columns={columns} />
    </>
  );
}

function BasicTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    sortingFns: setSorting,
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="container mx-auto py-8 space-y-8">
      <InputField type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} placeholder="Search..." />

      <Table variant="striped">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header) => (
                <Th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder ? null : (
                    <div className="flex items-center">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {
                        {
                          asc: "🔼",
                          desc: "🔽",
                        }[header.column.getIsSorted() ?? null]
                      }
                    </div>
                  )}
                </Th>
              ))}
            </Tr>
          ))}
        </TableHead>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
              ))}
            </Tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
```
