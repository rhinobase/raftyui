"use client";
import React from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";

export const SHARED_FIX_CLASSES = {
  sm: "w-8",
  md: "w-9",
  lg: "w-10",
};

export type Prefix = React.HTMLAttributes<HTMLDivElement>;

export const Prefix = React.forwardRef<HTMLDivElement, Prefix>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useInputGroupContext();

    return (
      <div
        id="prefix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute left-0 top-0 z-10 flex h-full items-center justify-center",
          SHARED_FIX_CLASSES[size],
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Prefix.displayName = "Prefix";
