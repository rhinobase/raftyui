import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { TableProvider } from "./context";
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
          size == "sm" && "p-md",
          size == "md" && "p-xl",
          size == "lg" && "p-3xl",
          "divide-secondary-300 dark:divide-secondary-700 min-w-full divide-y",
          props.className
        )}
        ref={forwardedRef}
      >
        {children}
      </table>
    </TableProvider>
  );
});
