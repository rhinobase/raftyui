import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

// InputField Component (With ErrorMessage)
export type InputField = JSX.IntrinsicElements["input"] & { invalid?: boolean };
export const InputField = forwardRef<HTMLInputElement, InputField>(
  ({ defaultValue, className, invalid, ...props }, forwardedRef) => {
    return (
      <>
        <input
          {...props}
          className={classNames(
            "px-lg py-md dark:text-secondary-200 border-secondary-300 dark:border-secondary-700 block w-full appearance-none rounded-md border bg-transparent text-base shadow-sm autofill:bg-transparent",
            "focus:ring-primary-200 focus:border-primary-400 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
            "read-only:focus:ring-0",
            "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
            invalid &&
              "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
            props.required &&
              "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
            className,
          )}
          ref={forwardedRef}
        />
      </>
    );
  },
);
