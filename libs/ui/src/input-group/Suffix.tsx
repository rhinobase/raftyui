"use client";
import { HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";
import { prefixAndSuffixCommonClasses } from "./utils";

export type Suffix = HTMLAttributes<HTMLDivElement>;

export const Suffix = forwardRef<HTMLDivElement, Suffix>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size, inputRef } = useInputGroupContext();

    const onClick = () => {
      if (inputRef.current) inputRef.current.focus();
    };

    return (
      <div
        id="suffix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute right-0 top-0 z-10 flex h-full items-center justify-center",
          prefixAndSuffixCommonClasses[size],
          className,
        )}
        onClick={onClick}
      >
        {children}
      </div>
    );
  },
);
Suffix.displayName = "Suffix";
