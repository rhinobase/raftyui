import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

// Error Message Component
export type ErrorMessage = HTMLAttributes<HTMLParagraphElement>;

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessage>(
  ({ children, className, ...props }, forwardedRef) => {
    if (children)
      return (
        <p
          {...props}
          className={classNames(
            "my-0.5 text-sm text-red-600 dark:text-red-400",
            className,
          )}
          ref={forwardedRef}
        >
          {children}
        </p>
      );
    return undefined;
  },
);
ErrorMessage.displayName = "ErrorMessage";
