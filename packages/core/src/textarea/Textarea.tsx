import { forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import React from "react";

// InputField Component (With ErrorMessage)
export type Textarea = JSX.IntrinsicElements["textarea"];
export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <textarea
        {...props}
        className={classNames(
          "border-secondary-300 min-h-40 focus:ring-primary-200 focus:border-primary-400 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 dark:text-secondary-200 h-auto w-full rounded-md border bg-transparent px-2 py-2 outline-none focus:ring-2 dark:border-zinc-700",
          className,
        )}
        ref={forwardedRef}
      />
    );
  },
);

Textarea.displayName = "Textarea";
