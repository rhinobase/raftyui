"use client";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";
import { useInputGroupContext } from "./context";
import { prefixAndSuffixCommonClasses } from "./utils";

export type Prefix = HTMLAttributes<HTMLDivElement>;

export const Prefix = forwardRef<HTMLDivElement, Prefix>(function Prefix(
  { className, ...props },
  forwardedRef,
) {
  const { size } = useInputGroupContext();

  return (
    <div
      id="prefix"
      {...props}
      className={classNames(
        "pointer-events-none absolute left-0 top-0 z-10 flex h-full select-none items-center justify-center",
        // @ts-ignore
        prefixAndSuffixCommonClasses.size[size],
        className,
      )}
      ref={forwardedRef}
    />
  );
});
Prefix.displayName = "Prefix";
