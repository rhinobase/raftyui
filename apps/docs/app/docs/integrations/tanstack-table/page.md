---
title: Rafty UI + Tanstack Table
nextjs:
  metadata:
    title: Table
    description: Tanstack Table
---

This example shows how to build a sortable data table with Rafty UI's table components, and the [Tanstack Table](https://tanstack.com/table/v8/).

```jsx
import React, { useState, useEffect, useMemo } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  RiArrowDownFill,
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleFill,
  RiArrowUpFill,
} from "react-icons/ri";
import {
  Button,
  InputField,
  Spinner,
  Table,
  TableBody,
  TableHead,
  Td,
  Th,
  Tr,
} from "@rafty/ui";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineExclamationCircle } from "react-icons/hi";

type DataType = {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  is_tentative: number;
  launch_window: string;
  rocket: {
    rocket_name: string;
  };
};

export default function App() {
  const { data, isLoading } = useQuery<DataType[]>({
    queryKey: ["demo"],
    queryFn: async () =>
      await fetch("https://api.spacexdata.com/v3/launches").then((res) =>
        res.json()
      ),
  });

  const columns = useMemo<ColumnDef<DataType>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "flight_number",
      },
      {
        header: "Mission Name",
        accessorKey: "mission_name",
      },
      {
        header: "Launch Year",
        accessorKey: "launch_year",
      },
      {
        header: "Tentative",
        accessorKey: "is_tentative",
      },
      {
        header: "Launch Window",
        accessorKey: "launch_window",
      },
      {
        header: "Rocket Name",
        cell: ({ row }) => row.original.rocket.rocket_name,
      },
    ],
    []
  );

  if (isLoading)
    return (
      <div className="flex item-center justify-center mt-6 ">
        <Spinner className="text-cyan-400 " size="lg" />
      </div>
    );

  if (data) return <BasicTable data={data} columns={columns} />;
}

function BasicTable({
  data,
  columns,
}: {
  data: DataType[];
  columns: ColumnDef<DataType>[];
}) {
  const [sort, setSort] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sort,
      globalFilter: filter,
    },
    onSortingChange: setSort,
    onGlobalFilterChange: setFilter,
  });
  return (
    <div className="container mx-auto py-8 space-y-8">
      <InputField
        variant="outline"
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search..."
        className="w-80"
      />

      <Table variant="striped" className="table-fixed w-full">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id} className="bg-gray-200">
              {headerGroup.headers.map((header, index) => {
                const width = index == 0 ? 80 : "max-content";
                return (
                  <Th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{ width: width }}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex items-center">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getIsSorted() === "asc" ? (
                          <RiArrowUpFill />
                        ) : header.column.getIsSorted() === "desc" ? (
                          <RiArrowDownFill />
                        ) : null}
                      </div>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <Td key={cell.id} className="w-1/6">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </TableBody>
      </Table>
      <div className="flex justify-end gap-3">
        <Button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          leftIcon={<RiArrowLeftDoubleFill />}
        >
          Prev
        </Button>
        <Button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          rightIcon={<RiArrowRightDoubleFill />}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

```
