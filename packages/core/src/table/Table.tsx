import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { TableProvider, useTableContext } from "./context";
import React from "react";

export type Table = {
  size?: "sm" | "md" | "lg";
};

// Table Component (Used in Table Component)
export const Table = forwardRef<
  HTMLTableElement,
  Table & JSX.IntrinsicElements["table"]
>(({ children, size = "md", ...props }, forwardedRef) => {
  return (
    <TableProvider value={{ size: size }}>
      <table
        {...props}
        className={classNames(
          size == "sm" && "p-2",
          size == "md" && "p-4",
          size == "lg" && "p-6",
          "divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y",
          props.className,
        )}
        ref={forwardedRef}
      >
        {children}
      </table>
    </TableProvider>
  );
});
Table.displayName = "Table";

// TableBody Component (Used in Table Component)
export type TableBody = JSX.IntrinsicElements["tbody"];
export const TableBody = forwardRef<HTMLTableSectionElement, TableBody>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <tbody
        {...props}
        className={classNames(
          "dark:bg-secondary-700/40 bg-white",
          props.className,
        )}
        ref={forwardedRef}
      >
        {children}
      </tbody>
    );
  },
);
TableBody.displayName = "TableBody";

// TableContainer Component
export type TableContainer = JSX.IntrinsicElements["div"];
export const TableContainer = forwardRef<HTMLDivElement, TableContainer>(
  ({ children, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:ring-secondary-700 mx-auto inline-block w-full overflow-hidden rounded-lg align-middle shadow ring-1 ring-black ring-opacity-5",
        props.className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
TableContainer.displayName = "TableContainer";

// TableFooter Component (Used in Table Component)
export type TableFooter = JSX.IntrinsicElements["tfoot"];
export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooter>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useTableContext();
    return (
      <tfoot
        {...props}
        className={classNames(
          size == "sm" && "p-2",
          size == "md" && "py-3 px-4",
          size == "lg" && "py-5 px-6",
          "bg-secondary-100 text-secondary-500 dark:bg-secondary-700/80 dark:text-secondary-300 text-sm font-semibold",
          props.className,
        )}
        ref={forwardedRef}
      >
        {children}
      </tfoot>
    );
  },
);
TableFooter.displayName = "TableFooter";

// TableHead Component (Used in Table Component)
export type TableHead = JSX.IntrinsicElements["thead"];
export const TableHead = forwardRef<HTMLTableSectionElement, TableHead>(
  ({ children, ...props }, forwardedRef) => (
    <thead
      {...props}
      className={classNames(
        "bg-secondary-100 dark:bg-secondary-700/80",
        props.className,
      )}
      ref={forwardedRef}
    >
      {children}
    </thead>
  ),
);
TableHead.displayName = "TableHead";

// Td Component (Used in Table Component)
export type Td = {
  colSpan?: number;
  rowSpan?: number;
} & JSX.IntrinsicElements["td"];
export const Td = forwardRef<HTMLTableCellElement, Td>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useTableContext();
    return (
      <td
        {...props}
        colSpan={props.colSpan}
        rowSpan={props.rowSpan}
        className={classNames(
          size == "sm" && "p-2",
          size == "md" && "px-4 py-3",
          size == "lg" && "px-6 py-5",
          "text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
          props.className,
        )}
        ref={forwardedRef}
      >
        {children}
      </td>
    );
  },
);
Td.displayName = "Td";

// Th Component (Used in Table Component)
export type Th = {
  colSpan?: number;
  rowSpan?: number;
} & JSX.IntrinsicElements["th"];
export const Th = forwardRef<HTMLTableCellElement, Th>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useTableContext();
    return (
      <th
        {...props}
        colSpan={props.colSpan}
        rowSpan={props.rowSpan}
        className={classNames(
          size == "sm" && "p-2",
          size == "md" && "px-4 py-3",
          size == "lg" && "px-6 py-5",
          "text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold",
          props.className,
        )}
        ref={forwardedRef}
      >
        {children}
      </th>
    );
  },
);
Th.displayName = "Th";

// Tr Component (Used in Table Component)
export type Tr = JSX.IntrinsicElements["tr"];
export const Tr = forwardRef<HTMLTableRowElement, Tr>(
  ({ children, ...props }, forwardedRef) => (
    <tr
      {...props}
      className={classNames(
        "even:bg-secondary-100 dark:even:bg-secondary-700/50",
        props.className,
      )}
      ref={forwardedRef}
    >
      {children}
    </tr>
  ),
);
Tr.displayName = "Tr";
