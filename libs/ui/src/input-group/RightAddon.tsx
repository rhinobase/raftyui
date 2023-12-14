import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

export type RightAddon = HTMLAttributes<HTMLDivElement>;

export const RightAddon = forwardRef<HTMLDivElement, RightAddon>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        className={classNames(
          "bg-secondary-200 dark:bg-secondary-700 dark:text-secondary-200 flex items-center rounded-r-md px-3",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
RightAddon.displayName = "RightAddon";
