import { forwardRef } from "react";
import { useFieldControlContext } from "./context";
import { classNames } from "../utils";

// Field Label Component
export type FieldLabel = JSX.IntrinsicElements["label"];
export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabel>(
  ({ children, className, ...props }, forwardedRef) => {
    const { name, isRequired } = useFieldControlContext();

    return (
      <label
        {...props}
        htmlFor={name}
        className={classNames(
          "text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium",
          className
        )}
        ref={forwardedRef}
      >
        {children}
        {isRequired && (
          <span className="text-error-500 dark:error-red-400">*</span>
        )}
      </label>
    );
  }
);
FieldLabel.displayName = "FieldLabel";
