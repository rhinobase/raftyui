"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, type ThHTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { type TableContext, TableProvider, useTableContext } from "./context";

// Table Component
const tableClasses = cva(
  "border-secondary-300 dark:border-secondary-700 w-full overflow-x-auto overflow-y-hidden border",
  {
    variants: {
      size: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
      },
    },
  },
);

export type Table = HTMLAttributes<HTMLTableElement> & Partial<TableContext>;

export const Table = forwardRef<HTMLTableElement, Table>(
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
  ) => (
    <TableProvider value={{ size, variant, isUnstyled }}>
      <div
        className={
          isUnstyled ? className : classNames(tableClasses({ size }), className)
        }
      >
        <table
          {...props}
          className="divide-secondary-300 dark:divide-secondary-700 w-full divide-y"
          ref={forwardedRef}
        >
          {children}
        </table>
      </div>
    </TableProvider>
  ),
);
Table.displayName = "Table";

// TableHeader Component
export const tableHeaderAndFooterClasses = cva("", {
  variants: {
    variant: {
      simple: "bg-transparent",
      striped: "bg-secondary-100 dark:bg-secondary-800",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export type TableHeader = HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeader>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <thead
        {...props}
        className={
          unstyle
            ? className
            : classNames(tableHeaderAndFooterClasses({ variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </thead>
    );
  },
);
TableHeader.displayName = "TableHeader";

// TableBody Component
export type TableBody = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBody>(
  (props, forwardedRef) => <tbody {...props} ref={forwardedRef} />,
);
TableBody.displayName = "TableBody";

// TableFooter Component
export type TableFooter = HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooter>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <tfoot
        {...props}
        className={
          unstyle
            ? className
            : classNames(tableHeaderAndFooterClasses({ variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </tfoot>
    );
  },
);
TableFooter.displayName = "TableFooter";

// Tr Component
export const tableTrClasses = cva("", {
  variants: {
    variant: {
      simple: "bg-transparent",
      striped: "even:bg-secondary-100 dark:even:bg-secondary-800",
    },
  },
  defaultVariants: {
    variant: "simple",
  },
});

export type Tr = HTMLAttributes<HTMLTableRowElement> & {
  isUnstyled?: boolean;
};

export const Tr = forwardRef<HTMLTableRowElement, Tr>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { variant, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <tr
        {...props}
        className={
          unstyle
            ? className
            : classNames(tableTrClasses({ variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </tr>
    );
  },
);
Tr.displayName = "Tr";

export const tableThAndTdClasses = cva(
  "text-secondary-600 dark:text-secondary-300",
  {
    variants: {
      size: {
        sm: "px-2 py-1.5 text-xs",
        md: "px-2.5 py-2 text-sm",
        lg: "px-3 py-2.5 text-base",
      },
    },
  },
);

// Th Component
export type Th = ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Th = forwardRef<HTMLTableCellElement, Th>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <th
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                tableThAndTdClasses({ size }),
                "text-left font-semibold",
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

// Td Component
export type Td = ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Td = forwardRef<HTMLTableCellElement, Td>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isUnstyled: isParentUnstyled } = useTableContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <td
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                tableThAndTdClasses({ size }),
                "truncate whitespace-nowrap",
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
