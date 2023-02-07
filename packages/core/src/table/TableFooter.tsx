import { forwardRef } from "react";
import { removeDuplicate, classNames } from "@rhinobase/lib";
import { useTableContext } from "./context";

// TableFooter Component (Used in Table Component)
export const TableFooter = forwardRef<HTMLTableSectionElement, JSX.IntrinsicElements["tfoot"]>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useTableContext();
    return (
      <tfoot
        {...props}
        className={removeDuplicate(
          classNames(
            size == "sm" && "p-md",
            size == "md" && "px-xl py-lg",
            size == "lg" && "px-3xl py-2xl",
            "bg-secondary-100 text-secondary-500 dark:bg-secondary-700/80 dark:text-secondary-300 text-sm font-semibold"
          ),
          props.className
        )}
        ref={forwardedRef}>
        {children}
      </tfoot>
    );
  }
);
