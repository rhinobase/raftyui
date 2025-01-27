"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, type ThHTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils/index.js";
import {
  type TableContext,
  TableProvider,
  useTableContext,
} from "./context.js";

export const tableClasses = cva(
  "border-secondary-300 dark:border-secondary-700 w-full overflow-x-auto overflow-y-hidden border",
  {
    variants: {
      size: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type Table = HTMLAttributes<HTMLTableElement> & Partial<TableContext>;

export const Table = forwardRef<HTMLTableElement, Table>(function Table(
  { className, size = "md", variant = "simple", isUnstyled = false, ...props },
  forwardedRef
) {
  return (
    <TableProvider value={{ size, variant, isUnstyled }}>
      <div
        hidden={props.hidden}
        className={
          isUnstyled ? className : classNames(tableClasses({ size }), className)
        }
      >
        <table
          {...props}
          className="divide-secondary-300 dark:divide-secondary-700 w-full divide-y"
          ref={forwardedRef}
        />
      </div>
    </TableProvider>
  );
});

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
  function TableHeader(
    { className, isUnstyled = false, ...props },
    forwardedRef
  ) {
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
      />
    );
  }
);

export type TableBody = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBody>(
  function TableBody(props, forwardedRef) {
    return <tbody {...props} ref={forwardedRef} />;
  }
);

export type TableFooter = HTMLAttributes<HTMLTableSectionElement> & {
  isUnstyled?: boolean;
};

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooter>(
  function TableFooter(
    { className, isUnstyled = false, ...props },
    forwardedRef
  ) {
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
      />
    );
  }
);

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

export const Tr = forwardRef<HTMLTableRowElement, Tr>(function Tr(
  { className, isUnstyled = false, ...props },
  forwardedRef
) {
  const { variant, isUnstyled: isParentUnstyled } = useTableContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <tr
      {...props}
      className={
        unstyle ? className : classNames(tableTrClasses({ variant }), className)
      }
      ref={forwardedRef}
    />
  );
});

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
    defaultVariants: {
      size: "md",
    },
  }
);

export type Th = ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Th = forwardRef<HTMLTableCellElement, Th>(function Th(
  { className, isUnstyled = false, ...props },
  forwardedRef
) {
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
              className
            )
      }
      ref={forwardedRef}
    />
  );
});

export type Td = ThHTMLAttributes<HTMLTableCellElement> & {
  isUnstyled?: boolean;
};

export const Td = forwardRef<HTMLTableCellElement, Td>(function Td(
  { className, isUnstyled = false, ...props },
  forwardedRef
) {
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
              className
            )
      }
      ref={forwardedRef}
    />
  );
});
