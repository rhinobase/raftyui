import { forwardRef } from "react";
import { classNames } from "@rhinobase/lib";
import { useFieldControl } from "./context";

// export interface IFieldLabel {
//   children: JSX.Element | string;
//   caption?: string;
//   tooltip?: string;
//   hide?: boolean;
//   wrapping?: boolean;
//   alignment?: "left" | "right";
//   width?: number;
//   unit?: "px" | "%" | "col";
//   className?: string;
// }
// Field Label Component
export const FieldLabel = forwardRef<HTMLLabelElement, JSX.IntrinsicElements["label"]>(
  ({ children, className, ...props }, forwardedRef) => {
    const { name, required } = useFieldControl();

    return (
      <label
        {...props}
        htmlFor={name}
        className={classNames("select-none text-sm font-medium text-secondary-800 dark:text-secondary-200", className)}
        ref={forwardedRef}>
        {children} {required && <span className="text-error-500 dark:error-red-400">*</span>}
      </label>
    );
  }
);
