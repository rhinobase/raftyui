"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import { type FieldControlContext, FieldControlProvider } from "./context";

export const fieldControlClasses = cva("flex w-full", {
  variants: {
    orientation: {
      col: "flex-col gap-1",
      row: "flex-row items-center gap-2",
      "row-reverse": "flex-row-reverse items-center gap-2 justify-end",
    },
  },
  defaultVariants: {
    orientation: "col",
  },
});

export type FieldControl = HTMLAttributes<HTMLDivElement> &
  Partial<Pick<FieldControlContext, "orientation">> &
  Pick<FieldControlContext, "name"> & {
    isRequired?: ValueOrFunction;
    isDisabled?: ValueOrFunction;
    isReadOnly?: ValueOrFunction;
    isInvalid?: ValueOrFunction;
    isLoading?: ValueOrFunction;
  };

export const FieldControl = forwardRef<HTMLDivElement, FieldControl>(
  function FieldControl(
    {
      name,
      orientation = "col",
      isRequired,
      isDisabled,
      isReadOnly,
      isInvalid,
      isLoading,
      children,
      className,
      ...props
    },
    forwardedRef,
  ) {
    const required = getValue(isRequired) ?? false;
    const disabled = getValue(isDisabled) ?? false;
    const readonly = getValue(isReadOnly) ?? false;
    const invalid = getValue(isInvalid) ?? false;
    const loading = getValue(isLoading) ?? false;

    return (
      <FieldControlProvider
        value={{
          name,
          orientation,
          isRequired: required,
          isDisabled: disabled,
          isReadOnly: readonly,
          isInvalid: invalid,
          isLoading: loading,
        }}
      >
        <div
          {...props}
          className={classNames(
            fieldControlClasses({ orientation }),
            className,
          )}
          ref={forwardedRef}
        >
          {children}
        </div>
      </FieldControlProvider>
    );
  },
);
