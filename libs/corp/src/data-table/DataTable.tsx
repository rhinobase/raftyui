import { Checkbox, Table, TableContainer } from "@rafty/ui";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo } from "react";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { useTable } from "./provider";

/**
 * Interface for DataTable component
 */
interface DataTable<T> {
  data?: T[];
  columns: ColumnDef<T>[];
  enableRowSelection?: boolean;
  isLoading?: boolean;
  enableColumnResizing?: boolean; // Indicates if columns are resizable
  size?: "sm" | "md" | "lg";
}

/**
 * DataTable component for displaying data in a table.
 */
export function DataTable<T>({
  data = [],
  columns,
  isLoading,
  enableRowSelection = false,
  enableColumnResizing = false,
  size,
}: DataTable<T>) {
  // Destructure values from the useTable hook
  const {
    sort,
    setSort,
    columnSize,
    setColumnResize,
    rowSelection,
    setRowSelection,
  } = useTable();

  // Memoized headers including optional checkbox column
  const header_column = useMemo(() => {
    const headers: ColumnDef<T>[] = [];

    // Add checkbox column if enabled and data exists
    if (enableRowSelection)
      headers.push({
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
        enableResizing: false,
        size: 40,
      });

    headers.push(...columns);

    return headers;
  }, [enableRowSelection, columns]);

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
      sorting: sort,
      rowSelection,
      columnSizing: columnSize,
    },
    onSortingChange: setSort,
    onRowSelectionChange: setRowSelection,
    onColumnSizingChange: setColumnResize,
  });

  // Reset row selection on data change
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    table.resetRowSelection();
  }, [data]);

  // Calculate the colspan for the table content
  const col_span = header_column.length;

  return (
    <TableContainer className="w-full overflow-hidden overflow-x-auto">
      <Table size={size} className="w-full table-fixed">
        <TableHeader table={table} enableRowSelection={enableRowSelection} />
        <TableContent table={table} isLoading={isLoading} colSpan={col_span} />
      </Table>
    </TableContainer>
  );
}
