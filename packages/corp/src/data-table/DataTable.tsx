"use client";
import { type SizeType, Table, classNames } from "@rafty/ui";
import {
  type ColumnDef,
  type ColumnSizingState,
  type OnChangeFn,
  type RowSelectionState,
  type SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { useSync } from "./useSync";
import { DataNotFound } from "./utils";

export type ColumnType<T> = ColumnDef<T>;

export type DataTable<T> = {
  columns: ColumnDef<T>[];
  data?: T[];
  enableRowSelection?: boolean;
  enableColumnsSorting?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  enableColumnResizing?: boolean; // Indicates if columns are resizable
  size?: SizeType;
  onSortingChange?: (value: SortingState) => void;
  onColumnSizingChange?: (value: ColumnSizingState) => void;
  onRowsSelectedChange?: OnChangeFn<RowSelectionState>;
  notFoundMessage?: ReactNode;
  rowsSelected?: RowSelectionState;
};

export function DataTable<T>({
  columns,
  data = [],
  isLoading = false,
  isFetching = false,
  enableRowSelection = false,
  enableColumnResizing = false,
  enableColumnsSorting = false,
  size = "md",
  notFoundMessage = "No data found",
  onRowsSelectedChange,
  rowsSelected = {},
  ...props
}: DataTable<T>) {
  const [sorting, onSortingChange] = useSync<SortingState>(
    [],
    props.onSortingChange,
  );

  const [columnSizing, onColumnSizingChange] = useSync<ColumnSizingState>(
    {},
    props.onColumnSizingChange,
  );

  const table = useReactTable({
    data,
    columns,
    enableRowSelection,
    enableColumnResizing,
    enableSorting: enableColumnsSorting,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: onRowsSelectedChange,
    state: {
      sorting,
      columnSizing,
      rowSelection: rowsSelected,
    },
    onSortingChange,
    onColumnSizingChange,
  });

  // Calculate the colspan for the table content
  const col_span = columns.length;

  const isEmpty = !isLoading && data.length === 0;

  return (
    <>
      <Table
        size={size}
        className={classNames(
          "w-full overflow-hidden overflow-x-auto [&>table]:table-fixed",
          isEmpty && "rounded-b-none",
        )}
      >
        <TableHeader table={table} enableRowSelection={enableRowSelection} />
        <TableContent table={table} isLoading={isLoading} colSpan={col_span} />
      </Table>
      {isEmpty && <DataNotFound>{notFoundMessage}</DataNotFound>}
    </>
  );
}
