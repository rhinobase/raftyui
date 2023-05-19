import React, { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { useFieldControlContext } from "./context";

// Field Label Component
export type FieldLabel = JSX.IntrinsicElements["label"];
export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabel>(
  ({ children, className, ...props }, forwardedRef) => {
    const { name, required } = useFieldControlContext();

    return (
      <label
        {...props}
        htmlFor={name}
        className={classNames(
          "text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium",
          className,
        )}
        ref={forwardedRef}
      >
        {children}{" "}
        {required && (
          <span className="text-error-500 dark:error-red-400">*</span>
        )}
      </label>
    );
  },
);
FieldLabel.displayName = "FieldLabel";
