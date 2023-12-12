"use client";
import { cva } from "class-variance-authority";
import React from "react";
import { classNames } from "../utils";
import { FieldControlContext, FieldControlProvider } from "./context";

// Field Control Component
export const fieldControlClasses = cva("flex w-full", {
  variants: {
    orientation: {
      col: "flex-col gap-1",
      row: "flex-row items-center gap-2",
      "row-reverse": "flex-row-reverse items-center gap-2",
    },
  },
  defaultVariants: {
    orientation: "col",
  },
});

export type FieldControl = React.HTMLAttributes<HTMLDivElement> &
  Partial<FieldControlContext> & {
    name: FieldControlContext["name"];
  };

export const FieldControl = React.forwardRef<HTMLDivElement, FieldControl>(
  (
    {
      name,
      orientation = "col",
      isRequired = false,
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isLoading = false,
      children,
      className,
      ...props
    },
    forwardedRef,
  ) => (
    <FieldControlProvider
      value={{
        name,
        orientation,
        isRequired,
        isDisabled,
        isReadOnly,
        isInvalid,
        isLoading,
      }}
    >
      <div
        {...props}
        className={classNames(fieldControlClasses({ orientation }), className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    </FieldControlProvider>
  ),
);

FieldControl.displayName = "FieldControl";
