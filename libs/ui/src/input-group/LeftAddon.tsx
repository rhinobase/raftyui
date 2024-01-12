import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";
import { addonsCommonClasses } from "./utils";

export type LeftAddon = HTMLAttributes<HTMLDivElement>;

export const LeftAddon = forwardRef<HTMLDivElement, LeftAddon>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size, inputRef } = useInputGroupContext();

    const onClick = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    return (
      <div
        id="leftaddon"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "dark:text-secondary-200 flex items-center rounded-l-md",
          "bg-secondary-200 dark:bg-secondary-800",
          "border-y border-l",
          "border-secondary-300 dark:border-secondary-700",
          addonsCommonClasses[size],
          className,
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
LeftAddon.displayName = "LeftAddon";
