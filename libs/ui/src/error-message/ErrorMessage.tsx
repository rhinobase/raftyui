import React from "react";
import { classNames } from "../utils";

// Error Message Component
export type ErrorMessage = React.HTMLAttributes<HTMLParagraphElement>;

export const ErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  ErrorMessage
>(({ className, ...props }, forwardedRef) => {
  return (
    <p
      {...props}
      className={classNames(
        "my-0.5 text-sm text-red-600 dark:text-red-400",
        className,
      )}
      ref={forwardedRef}
    />
  );
});
ErrorMessage.displayName = "ErrorMessage";
