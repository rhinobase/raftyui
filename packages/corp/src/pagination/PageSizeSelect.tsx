"use client";
import { Select, SelectItem } from "@rafty/ui";
import { forwardRef } from "react";
import { usePaginationContext } from "./context";

export type PageSizeSelect = Omit<Select, "value" | "onChange"> & {
  pageSizes?: (number | { label: string; value: number })[];
};

export const PageSizeSelect = forwardRef<HTMLSelectElement, PageSizeSelect>(
  ({ pageSizes = [10, 20, 50], size, isDisabled, ...props }, forwardedRef) => {
    const {
      size: parentSize,
      isDisabled: isParentDisabled,
      pageLimit,
      currentPage,
      onChange,
    } = usePaginationContext();

    const options = pageSizes.map((opt) =>
      typeof opt === "number" ? { label: String(opt), value: opt } : opt,
    );

    const componentSize = size || parentSize;
    const isComponentDisabled = isDisabled || isParentDisabled;

    return (
      <Select
        size={componentSize}
        isDisabled={isComponentDisabled}
        value={pageLimit}
        onChange={(event) => {
          const value = Number(event.target.value);
          if (value !== null && !Number.isNaN(value))
            onChange?.(currentPage, value);
        }}
        {...props}
        ref={forwardedRef}
      >
        {options.map(({ label, value }) => (
          <SelectItem key={label} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    );
  },
);
PageSizeSelect.displayName = "PageSizeSelect";
