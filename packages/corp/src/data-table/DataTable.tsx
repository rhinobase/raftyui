"use client";
import { Table, classNames } from "@rafty/ui";
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
  isFetching?: boolean;
  isLoading?: boolean;
  enableColumnResizing?: boolean; // Indicates if columns are resizable
  size?: "sm" | "md" | "lg";
  onSortingChange?: (value: SortingState) => void;
  onColumnSizingChange?: (value: ColumnSizingState) => void;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  notFoundMessage?: ReactNode;
  rowSelection?: RowSelectionState;
};

export function DataTable<T>({
  columns,
  data = [],
  isLoading = false,
  isFetching = false,
  enableRowSelection = false,
  enableColumnResizing = false,
  size = "md",
  notFoundMessage = "No data found",
  onRowSelectionChange,
  rowSelection = {},
  ...props
}: DataTable<T>) {
  // State for sorting
  const [sorting, onSortingChange] = useSync<SortingState>(
    [],
    props.onSortingChange,
  );

  // State for column sizing
  const [columnSizing, onColumnSizingChange] = useSync<ColumnSizingState>(
    {},
    props.onColumnSizingChange,
  );

  // React Table instance
  const table = useReactTable({
    data,
    columns,
    enableRowSelection,
    enableColumnResizing,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange,
    state: {
      sorting,
      columnSizing,
      rowSelection,
    },
    onSortingChange,
    onColumnSizingChange,
  });

  // Calculate the colspan for the table content
  const col_span = columns.length;

  const isEmpty = !isLoading && data.length === 0;

  return (
    <div className="w-full">
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
    </div>
  );
}
