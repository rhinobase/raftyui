import { forwardRef } from "react";
import { removeDuplicate, classNames } from "@rhinobase/lib";
import { useTableContext } from "./context";

type ThProps = {
  colSpan?: number;
  rowSpan?: number;
} & JSX.IntrinsicElements["th"];

// Th Component (Used in Table Component)
export const Th = forwardRef<HTMLTableCellElement, ThProps>(({ children, ...props }, forwardedRef) => {
  const { size } = useTableContext();
  return (
    <th
      {...props}
      colSpan={props.colSpan}
      rowSpan={props.rowSpan}
      className={removeDuplicate(
        classNames(
          size == "sm" && "p-md",
          size == "md" && "px-xl py-lg",
          size == "lg" && "px-3xl py-2xl",
          "text-secondary-600 dark:text-secondary-300 text-left text-sm font-semibold"
        ),
        props.className
      )}
      ref={forwardedRef}>
      {children}
    </th>
  );
});
