import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { useTableContext } from "./context";
import React from "react";

type Th = {
  colSpan?: number;
  rowSpan?: number;
} & JSX.IntrinsicElements["th"];

// Th Component (Used in Table Component)
export const Th = forwardRef<HTMLTableCellElement, Th>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useTableContext();
    return (
      <th
        {...props}
        colSpan={props.colSpan}
        rowSpan={props.rowSpan}
        className={classNames(
          size == "sm" && "p-md",
          size == "md" && "px-xl py-lg",
          size == "lg" && "px-3xl py-2xl",
          "text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold",
          props.className
        )}
        ref={forwardedRef}
      >
        {children}
      </th>
    );
  }
);
