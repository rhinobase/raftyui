"use client";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";
import { prefixAndSuffixCommonClasses } from "./utils";

export type Suffix = HTMLAttributes<HTMLDivElement>;

export const Suffix = forwardRef<HTMLDivElement, Suffix>(function Suffix(
  { className, ...props },
  forwardedRef,
) {
  const { size } = useInputGroupContext();

  return (
    <div
      id="suffix"
      {...props}
      className={classNames(
        "pointer-events-none absolute right-0 top-0 z-10 flex h-full select-none items-center justify-center",
        // @ts-ignore
        prefixAndSuffixCommonClasses.size[size],
        className,
      )}
      ref={forwardedRef}
    />
  );
});
Suffix.displayName = "Suffix";
