"use client";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils/index.js";
import { useInputGroupContext } from "./context.js";
import { addonsCommonClasses } from "./utils.js";

export type RightAddon = HTMLAttributes<HTMLDivElement>;

export const RightAddon = forwardRef<HTMLDivElement, RightAddon>(
  function RightAddon({ className, ...props }, forwardedRef) {
    const { size } = useInputGroupContext();

    return (
      <div
        id="right-addon"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "dark:text-secondary-200 flex items-center rounded-r-md",
          "bg-secondary-200 dark:bg-secondary-800",
          "border-y border-r",
          "border-secondary-300 dark:border-secondary-700",
          // @ts-ignore
          addonsCommonClasses.size[size],
          className,
        )}
      />
    );
  },
);
RightAddon.displayName = "RightAddon";
