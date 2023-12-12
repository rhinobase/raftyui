"use client";
import React from "react";
import { classNames } from "../utils";
import { SHARED_FIX_CLASSES } from "./Perfix";
import { useInputGroupContext } from "./context";

export type Suffix = React.HTMLAttributes<HTMLDivElement>;

export const Suffix = React.forwardRef<HTMLDivElement, Suffix>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useInputGroupContext();

    return (
      <div
        id="suffix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute right-0 top-0 z-10 flex h-full items-center justify-center",
          SHARED_FIX_CLASSES[size],
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Suffix.displayName = "Suffix";
