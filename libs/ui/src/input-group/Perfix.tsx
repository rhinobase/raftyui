import React from "react";
import { classNames } from "../utils";

export type Prefix = React.HTMLAttributes<HTMLDivElement>;

export const Prefix = React.forwardRef<HTMLDivElement, Prefix>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        id="prefix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute left-0 top-0 z-10 flex h-full w-10 items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Prefix.displayName = "Prefix";
