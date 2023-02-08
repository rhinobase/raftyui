import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

// InputField Component (With ErrorMessage)
export const InputField = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements["input"]
>(({ defaultValue, className, ...props }, forwardedRef) => {
  return (
    <>
      <input
        {...props}
        className={classNames(
          "px-lg py-base dark:text-secondary-200 block w-full appearance-none rounded-md border bg-transparent shadow-sm autofill:bg-transparent dark:border-zinc-700",
          "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-500/30 dark:focus:border-primary-400 focus:outline-none focus:ring-2",
          "read-only:focus:ring-0",
          "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
          className
        )}
        ref={forwardedRef}
      />
    </>
  );
});
