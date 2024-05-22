"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { type PaginationContext, PaginationProvider } from "./context";

// Define CSS classes using class-variance-authority
export const paginationClasses = cva("flex items-center gap-4", {
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

// Required props for the pagination component
type RequiredProps = "pages" | "pageLimit" | "currentPage";

export type Pagination = Omit<HTMLAttributes<HTMLDivElement>, "onChange"> &
  Partial<Omit<PaginationContext, RequiredProps>> &
  Pick<PaginationContext, RequiredProps>;

export const Pagination = forwardRef<HTMLDivElement, Pagination>(
  (
    {
      pages,
      currentPage,
      pageLimit,
      isDisabled = false,
      size = "md",
      onChange,
      className,
      ...props
    },
    forwardedRef,
  ) => (
    <PaginationProvider
      value={{
        size,
        pages,
        currentPage,
        pageLimit,
        isDisabled,
        onChange,
      }}
    >
      <div
        {...props}
        className={classNames(paginationClasses({ size }), className)}
        ref={forwardedRef}
      />
    </PaginationProvider>
  ),
);
Pagination.displayName = "Pagination";
