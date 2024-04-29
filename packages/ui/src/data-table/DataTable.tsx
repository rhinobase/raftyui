"use client";
import { FibrProvider, Thread } from "@fibr/react";
import {
  type ColumnDef,
  type ColumnSizingState,
  type RowSelectionState,
  type SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { type ReactNode, useEffect, useMemo } from "react";
import { Checkbox } from "../checkbox";
import { Table, TableContainer } from "../table";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { withCells } from "./cells";
import { useSync } from "./useSync";
import { DataNotFound } from "./utils";

export type ColumnType = {
  name: string;
  label: string;
  type?: string;
  enableResizing?: boolean;
  enableSorting?: boolean;
};

export type DataTable<T> = {
  columns: ColumnType[];
  data?: T[];
  enableRowSelection?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
  enableColumnResizing?: boolean; // Indicates if columns are resizable
  size?: "sm" | "md" | "lg";
  onSortingChange?: (value: SortingState) => void;
  onColumnSizingChange?: (value: ColumnSizingState) => void;
  onRowSelectionChange?: (value: RowSelectionState) => void;
  // Fibr plugin
  cloumnType?: Record<string, () => ReactNode>;
  notFoundMessage?: ReactNode;
};

/**
 * DataTable component for displaying data in a table.
 */
export function DataTable<T>({
  columns,
  data = [],
  isLoading = false,
  isFetching = false,
  enableRowSelection = false,
  enableColumnResizing = false,
  size = "md",
  cloumnType = {},
  notFoundMessage = "No data found",
  ...props
}: DataTable<T>) {
  // State for row selection
  const [rowSelection, onRowSelectionChange] = useSync<RowSelectionState>(
    {},
    props.onRowSelectionChange,
  );

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

  // Memoized headers including optional checkbox column
  const header_column = useMemo(() => {
    const headers: ColumnDef<T>[] = [];

    // Add checkbox column if enabled and data exists
    if (enableRowSelection)
      headers.push({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            size={size}
            checked={
              table.getIsAllRowsSelected() ||
              (table.getIsSomeRowsSelected() ? "indeterminate" : false)
            }
            onCheckedChange={() => table.toggleAllRowsSelected()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            size={size}
            checked={row.getIsSelected()}
            onCheckedChange={() => row.toggleSelected()}
          />
        ),
        enableResizing: false,
        size: 40,
      });

    return headers.concat(
      columns.map<ColumnDef<T>>((column) => ({
        header: column.label,
        accessorKey: column.name,
        cell: (props) => (
          <Thread
            id={props.cell.id}
            type={column.type ?? "default"}
            cell={props}
          />
        ),
        enableResizing: column.enableResizing,
        enableSorting: column.enableSorting,
      })),
    );
  }, [enableRowSelection, columns, size]);

  // React Table instance
  const table = useReactTable({
    data,
    columns: header_column,
    enableColumnResizing,
    enableRowSelection,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      rowSelection,
      columnSizing,
    },
    onSortingChange,
    onRowSelectionChange,
    onColumnSizingChange,
  });

  // Reset row selection on data change
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    table.resetRowSelection();
  }, [data]);

  // Calculate the colspan for the table content
  const col_span = header_column.length;

  return (
    <FibrProvider plugins={[withCells, cloumnType]}>
      <div className="w-full">
        <TableContainer className="w-full overflow-hidden overflow-x-auto">
          <Table size={size} className="w-full table-fixed">
            <TableHeader
              table={table}
              enableRowSelection={enableRowSelection}
            />
            <TableContent
              table={table}
              isLoading={isLoading}
              colSpan={col_span}
            />
          </Table>
        </TableContainer>
        {!isLoading && data.length === 0 && (
          <DataNotFound>{notFoundMessage}</DataNotFound>
        )}
      </div>
    </FibrProvider>
  );
}
