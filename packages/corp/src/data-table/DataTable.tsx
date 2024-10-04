"use client";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
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
import type { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { TableContent } from "./TableContent";
import { TableHeader } from "./TableHeader";
import { useSync } from "./useSync";

export type ColumnType<T> = ColumnDef<T>;

export type DataTable<T> = {
  columns: ColumnType<T>[];
  data?: T[];
  enableRowSelection?: boolean;
  enableColumnsSorting?: boolean;
  isLoading?: boolean;
  isError?: boolean;
  enableColumnResizing?: boolean;
  size?: SizeType;
  onSortingChange?: (value: SortingState) => void;
  onColumnSizingChange?: (value: ColumnSizingState) => void;
  onRowsSelectedChange?: OnChangeFn<RowSelectionState>;
  notFoundMessage?: ReactNode;
  errorMessage?: ReactNode;
  rowsSelected?: RowSelectionState;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export function DataTable<T>({
  columns,
  data,
  isLoading = false,
  isError = false,
  enableRowSelection = false,
  enableColumnResizing = false,
  enableColumnsSorting = false,
  size = "md",
  notFoundMessage = "No data found",
  errorMessage = "Error fetching data",
  onRowsSelectedChange,
  rowsSelected = {},
  className,
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
    data: data ?? [],
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

  const col_span = columns.length;

  const isEmpty = !isLoading && data?.length === 0;

  return (
    <div className={classNames("w-full", className)}>
      <Table
        size={size}
        className={classNames(
          "overflow-y-auto [&>table]:table-fixed",
          "[&>table>thead>tr>th]:bg-secondary-100 dark:[&>table>thead>tr>th]:bg-secondary-800 [&>table>thead>tr>th]:sticky [&>table>thead>tr>th]:top-0 [&>table>thead>tr>th]:z-10",
          (isEmpty || isError) && "rounded-b-none",
        )}
      >
        <TableHeader table={table} enableRowSelection={enableRowSelection} />
        <TableContent table={table} colSpan={col_span} isLoading={isLoading} />
      </Table>
      {isEmpty && <EmptyRender message={notFoundMessage} />}
      {isError && <ErrorRender message={errorMessage} />}
    </div>
  );
}

type EmptyRender = {
  message: ReactNode;
};

function EmptyRender(props: EmptyRender) {
  let component: ReactNode;

  if (typeof props.message === "string")
    component = (
      <p className="text-secondary-600 dark:text-secondary-400 text-sm font-medium lg:text-base">
        {props.message}
      </p>
    );
  else component = props.message;

  return <EmptyWrapper>{component}</EmptyWrapper>;
}

type ErrorRender = {
  message: ReactNode;
};

function ErrorRender(props: ErrorRender) {
  let component: ReactNode;

  if (typeof props.message === "string")
    component = (
      <>
        <ExclamationCircleIcon className="mr-1 size-4 stroke-2 text-red-500 lg:mr-1.5 lg:size-5 dark:text-red-300" />
        <p className="text-sm font-medium text-red-500 lg:text-base dark:text-red-300">
          {props.message}
        </p>
      </>
    );
  else component = props.message;

  return <EmptyWrapper>{component}</EmptyWrapper>;
}

type EmptyWrapper = PropsWithChildren<{
  className?: HTMLAttributes<HTMLDivElement>["className"];
}>;

function EmptyWrapper(props: EmptyWrapper) {
  return (
    <div
      className={classNames(
        "dark:border-secondary-700 flex h-[440px] w-full select-none items-center justify-center rounded-b-lg border border-t-0",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
