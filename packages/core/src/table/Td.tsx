import { forwardRef } from "react";
import { removeDuplicate, classNames } from "@rhinobase/lib";
import { useTableContext } from "./context";

type TdProps = {
  colSpan?: number;
  rowSpan?: number;
} & JSX.IntrinsicElements["td"];

// Td Component (Used in Table Component)
export const Td = forwardRef<HTMLTableCellElement, TdProps>(({ children, ...props }, forwardedRef) => {
  const { size } = useTableContext();
  return (
    <td
      {...props}
      colSpan={props.colSpan}
      rowSpan={props.rowSpan}
      className={removeDuplicate(
        classNames(
          size == "sm" && "p-md",
          size == "md" && "px-xl py-lg",
          size == "lg" && "px-3xl py-2xl",
          "text-secondary-600 dark:text-secondary-300 whitespace-nowrap text-sm"
        ),
        props.className
      )}
      ref={forwardedRef}>
      {children}
    </td>
  );
});
