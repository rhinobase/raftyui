"use client";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";
import { addonsCommonClasses } from "./utils";

export type LeftAddon = HTMLAttributes<HTMLDivElement>;

export const LeftAddon = forwardRef<HTMLDivElement, LeftAddon>(
  ({ className, ...props }, forwardedRef) => {
    const { size } = useInputGroupContext();

    return (
      <div
        id="left-addon"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "dark:text-secondary-200 flex items-center rounded-l-md",
          "bg-secondary-200 dark:bg-secondary-800",
          "border-y border-l",
          "border-secondary-300 dark:border-secondary-700",
          addonsCommonClasses.size[size],
          className,
        )}
      />
    );
  },
);
LeftAddon.displayName = "LeftAddon";
