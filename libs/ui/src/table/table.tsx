import { HTMLAttributes, forwardRef } from "react";
import { TableContext, TableProvider, useTableContext } from "./context";
import { classNames } from "../utils";

// TableContainer Component
export type TableContainer = HTMLAttributes<HTMLDivElement>;

export const TableContainer = forwardRef<HTMLDivElement, TableContainer>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      {...props}
      className={classNames(
        "dark:ring-secondary-700 mx-auto inline-block w-full overflow-hidden rounded-lg align-middle shadow ring-1 ring-black ring-opacity-5",
        className,
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  ),
);
TableContainer.displayName = "TableContainer";

// Table Component
const tableClasses = {
  size: {
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  },
};

export type Table = React.HTMLAttributes<HTMLTableElement> &
  Partial<TableContext> & {
    isUnstyled?: boolean;
  };

export const Table = forwardRef<HTMLTableElement, Table>(
  (
    {
      className,
      children,
      size = "md",
      variant = "simple",
      isUnstyled = false,
      isBarebone = false,
      ...props
    },
    forwardedRef,
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <TableProvider value={{ size, variant, isBarebone }}>
        <table
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  tableClasses.size[size],
                  "divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y",
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
        </table>
      </TableProvider>
    );
  },
);
Table.displayName = "Table";

// TableHead Component
const tableHeadClasses = {
  variant: {
    simple: "bg-transparent",
    striped: "bg-secondary-100 dark:bg-secondary-700/80",
  },
};

export type TableHead = React.HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableHead = forwardRef<HTMLTableSectionElement, TableHead>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isBarebone } = useTableContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <thead
        {...props}
        className={
          unstyle
            ? className
            : classNames(tableHeadClasses.variant[variant], className)
        }
        ref={forwardedRef}
      >
        {children}
      </thead>
    );
  },
);
TableHead.displayName = "TableHead";

// TableBody Component
export type TableBody = React.HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableBody = forwardRef<HTMLTableSectionElement, TableBody>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone } = useTableContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <tbody
        {...props}
        className={
          unstyle
            ? className
            : classNames("dark:bg-secondary-700/40 bg-white", className)
        }
        ref={forwardedRef}
      >
        {children}
      </tbody>
    );
  },
);
TableBody.displayName = "TableBody";

// TableFooter Component
const tableFooterClasses = {
  variant: {
    simple: "bg-transparent",
    striped: "bg-secondary-100 dark:bg-secondary-700/80",
  },
};

export type TableFooter = React.HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooter>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isBarebone } = useTableContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <tfoot
        {...props}
        className={
          unstyle
            ? className
            : classNames(tableFooterClasses.variant[variant], className)
        }
        ref={forwardedRef}
      >
        {children}
      </tfoot>
    );
  },
);
TableFooter.displayName = "TableFooter";

// Td Component
const tdClasses = {
  size: {
    sm: "p-2",
    md: "px-4 py-3",
    lg: "px-6 py-5",
  },
};

export type Td = React.ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Td = forwardRef<HTMLTableCellElement, Td>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useTableContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <td
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                tdClasses.size[size],
                "text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
                className,
              )
        }
        ref={forwardedRef}
      >
        {children}
      </td>
    );
  },
);
Td.displayName = "Td";

// Th Component
const thClasses = {
  size: {
    sm: "p-2",
    md: "px-4 py-3",
    lg: "px-6 py-5",
  },
};

export type Th = React.ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Th = forwardRef<HTMLTableCellElement, Th>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useTableContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <th
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                thClasses.size[size],
                "text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold",
                className,
              )
        }
        ref={forwardedRef}
      >
        {children}
      </th>
    );
  },
);
Th.displayName = "Th";

// Tr Component

const trClasses = {
  variant: {
    simple: "bg-transparent",
    striped: "even:bg-secondary-100 dark:even:bg-secondary-700/50",
  },
};

export type Tr = React.HTMLAttributes<HTMLTableRowElement> & {
  isUnstyled?: boolean;
};

export const Tr = forwardRef<HTMLTableRowElement, Tr>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isBarebone } = useTableContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <tr
        {...props}
        className={
          unstyle
            ? className
            : classNames(trClasses.variant[variant], className)
        }
        ref={forwardedRef}
      >
        {children}
      </tr>
    );
  },
);
Tr.displayName = "Tr";
