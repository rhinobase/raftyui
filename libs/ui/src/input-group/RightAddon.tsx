import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";
import { addonsCommonClasses } from "./utils";

export type RightAddon = HTMLAttributes<HTMLDivElement>;

export const RightAddon = forwardRef<HTMLDivElement, RightAddon>(
  ({ className, ...props }, forwardedRef) => {
    const { size } = useInputGroupContext();

    return (
      <div
        {...props}
        ref={forwardedRef}
        className={classNames(
          "dark:text-secondary-200 flex items-center rounded-r-md",
          "bg-secondary-200 dark:bg-secondary-800",
          "border-y border-r",
          "border-secondary-300 dark:border-secondary-700",
          addonsCommonClasses[size],
          className,
        )}
      />
    );
  },
);
RightAddon.displayName = "RightAddon";
