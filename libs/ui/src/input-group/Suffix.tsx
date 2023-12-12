import React from "react";
import { classNames } from "../utils";

export type Suffix = React.HTMLAttributes<HTMLDivElement>;

export const Suffix = React.forwardRef<HTMLDivElement, Suffix>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        id="suffix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute right-0 top-0 z-10 flex h-full w-10 items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Suffix.displayName = "Suffix";
