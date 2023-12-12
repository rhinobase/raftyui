import React from "react";
import { Select, SelectItem } from "../select";
import { usePaginationContext } from "./context";

export type PageSizeSelect = Omit<Select, "value" | "onChange"> & {
  pageSizeOptions: number[];
};

export const PageSizeSelect = React.forwardRef<
  HTMLSelectElement,
  PageSizeSelect
>(({ pageSizeOptions, size, isDisabled, ...props }, forwardedRef) => {
  const {
    size: parentSize,
    isDisabled: parentIsDisabled,
    pageSize,
    current,
    onChange,
  } = usePaginationContext();

  const selectSize = size || parentSize,
    disabled = parentIsDisabled || isDisabled;

  return (
    <Select
      size={selectSize}
      isDisabled={disabled}
      value={pageSize}
      onChange={(event) => {
        const value = Number(event.target.value);
        onChange?.(current, value);
      }}
      {...props}
      ref={forwardedRef}
    >
      {pageSizeOptions.map((size, index) => (
        <SelectItem key={index} value={size}>
          {size}
        </SelectItem>
      ))}
    </Select>
  );
});
PageSizeSelect.displayName = "PageSizeSelect";
