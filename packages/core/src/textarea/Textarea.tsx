import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";
import { useFieldControlContext } from "../field";

// InputField Component (With ErrorMessage)
export type Textarea = JSX.IntrinsicElements["textarea"];
export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  ({ className, ...props }, forwardedRef) => {
    const controls = useFieldControlContext();
    return (
      <textarea
        {...props}
        className={classNames(
          "border-secondary-300 min-h-40 focus:ring-primary-200 focus:border-primary-400 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 dark:text-secondary-200 h-auto w-full rounded-md border bg-transparent px-2 py-2 outline-none focus:ring-2 dark:border-zinc-700",
          "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
          "disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
          controls.invalid &&
            "!border-error-500 focus:!ring-error-200 dark:!border-error-400 dark:focus:!ring-error-100/20",
          className,
        )}
        ref={forwardedRef}
        {...controls}
      />
    );
  },
);

Textarea.displayName = "Textarea";
