"use client";
import { cva } from "class-variance-authority";
import React from "react";
import { classNames } from "../utils";
import { PaginationContext, PaginationProvider } from "./context";

// Define CSS classes using class-variance-authority
export const paginationClasses = cva("flex w-full items-center gap-4", {
  variants: {
    size: {
      sm: "p-2 text-sm",
      md: "p-2.5",
      lg: "p-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type Pagination = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  pageSizeOptions?: number[];
} & Partial<PaginationContext>;

export const Pagination = React.forwardRef<HTMLDivElement, Pagination>(
  (
    {
      total = 0,
      current = 1,
      pageSize = 10,
      isDisabled,
      pageSizeOptions = [10, 20, 50],
      size = "md",
      onChange,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <PaginationProvider
        value={{
          total,
          size,
          isDisabled,
          current,
          pageSize,
          onChange,
        }}
      >
        <div
          {...props}
          className={classNames(paginationClasses({ size }), className)}
          ref={forwardedRef}
        />
      </PaginationProvider>
    );
  },
);
Pagination.displayName = "Pagination";
