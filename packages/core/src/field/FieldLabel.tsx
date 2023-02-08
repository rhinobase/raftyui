import React, { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { useFieldControl } from "./context";

// Field Label Component
export type FieldLabel = JSX.IntrinsicElements["label"];
export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabel>(
  ({ children, className, ...props }, forwardedRef) => {
    const { name, required } = useFieldControl();

    return (
      <label
        {...props}
        htmlFor={name}
        className={classNames(
          "select-none text-sm font-medium text-secondary-800 dark:text-secondary-200",
          className
        )}
        ref={forwardedRef}
      >
        {children}{" "}
        {required && (
          <span className="text-error-500 dark:error-red-400">*</span>
        )}
      </label>
    );
  }
);
