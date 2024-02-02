"use client";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { LabelHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { classNames } from "../utils";

// Label Component
export type Label = LabelHTMLAttributes<HTMLLabelElement> & {
  isRequired?: BooleanOrFunction;
};

export const Label = forwardRef<HTMLLabelElement, Label>(
  ({ children, className, isRequired, htmlFor, ...props }, forwardedRef) => {
    const { name, isRequired: isParentRequired } =
      useFieldControlContext() ?? {};

    const required = getValue(isRequired) || isParentRequired;

    return (
      <label
        {...props}
        htmlFor={htmlFor ?? name}
        className={classNames(
          required &&
            "after:ml-0.5 after:text-red-500 after:content-['*'] after:dark:text-red-400",
          "text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </label>
    );
  },
);
Label.displayName = "Label";
