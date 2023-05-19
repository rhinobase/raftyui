import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";
import { useFieldControlContext } from "../field";

// InputField Component (With ErrorMessage)
export type InputField = JSX.IntrinsicElements["input"];
export const InputField = forwardRef<HTMLInputElement, InputField>(
  ({ defaultValue, className, ...props }, forwardedRef) => {
    const controls = useFieldControlContext();
    return (
      <>
        <input
          {...props}
          className={classNames(
            "dark:text-secondary-200 border-secondary-300 block w-full appearance-none rounded-md border bg-transparent px-3 py-2  autofill:bg-transparent dark:border-zinc-700",
            "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
            "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
            "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
            controls.invalid &&
              "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
            className,
          )}
          ref={forwardedRef}
          {...controls}
        />
      </>
    );
  },
);

InputField.displayName = "InputField";
