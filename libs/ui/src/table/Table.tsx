"use client";
import { cva } from "class-variance-authority";
import React from "react";
import { classNames } from "../utils";
import { TableContext, TableProvider, useTableContext } from "./context";

// TableContainer Component
export type TableContainer = React.HTMLAttributes<HTMLDivElement>;

export const TableContainer = React.forwardRef<HTMLDivElement, TableContainer>(
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
export const tableClasses = cva(
  "divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y",
  {
    variants: {
      size: {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type Table = React.HTMLAttributes<HTMLTableElement> &
  Partial<TableContext>;

export const Table = React.forwardRef<HTMLTableElement, Table>(
  (
    {
      className,
      children,
      size = "md",
      variant = "simple",
      isUnstyled = false,
      ...props
    },
    forwardedRef,
  ) => {
    const unstyle = isUnstyled;

    return (
      <TableProvider value={{ size, variant, isUnstyled }}>
        <table
          {...props}
          className={
            unstyle ? className : classNames(tableClasses({ size }), className)
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
export const tableHeadClasses = cva("", {
  variants: {
    variant: {
      simple: "bg-transparent",
      striped: "bg-secondary-100 dark:bg-secondary-700/80",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export type TableHead = React.HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHead>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <thead
        {...props}
        className={
          unstyle
            ? className
            : classNames(tableHeadClasses({ variant }), className)
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

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBody>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

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
export const tableFooterClasses = cva("", {
  variants: {
    variant: {
      simple: "bg-transparent",
      striped: "bg-secondary-100 dark:bg-secondary-700/80",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export type TableFooter = React.HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  TableFooter
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { variant, isUnstyled: isParentUnstyled } = useTableContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <tfoot
      {...props}
      className={
        unstyle
          ? className
          : classNames(tableFooterClasses({ variant }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </tfoot>
  );
});
TableFooter.displayName = "TableFooter";

// Td Component
export const tdClasses = cva(
  "text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm",
  {
    variants: {
      size: {
        sm: "p-2",
        md: "px-4 py-3",
        lg: "px-6 py-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type Td = React.ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Td = React.forwardRef<HTMLTableCellElement, Td>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <td
        {...props}
        className={
          unstyle ? className : classNames(tdClasses({ size }), className)
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
export const thClasses = cva(
  "text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold",
  {
    variants: {
      size: {
        sm: "p-2",
        md: "px-4 py-3",
        lg: "px-6 py-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type Th = React.ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Th = React.forwardRef<HTMLTableCellElement, Th>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <th
        {...props}
        className={
          unstyle ? className : classNames(thClasses({ size }), className)
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

export const trClasses = cva("", {
  variants: {
    variant: {
      simple: "bg-transparent",
      striped: "even:bg-secondary-100 dark:even:bg-secondary-700/50",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export type Tr = React.HTMLAttributes<HTMLTableRowElement> & {
  isUnstyled?: boolean;
};

export const Tr = React.forwardRef<HTMLTableRowElement, Tr>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <tr
        {...props}
        className={
          unstyle ? className : classNames(trClasses({ variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </tr>
    );
  },
);
Tr.displayName = "Tr";
