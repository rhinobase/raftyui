"use client";
import * as LabelPrimitive from "@radix-ui/react-label";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { classNames } from "../utils";

// Label Component
export type Label = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
  isRequired?: BooleanOrFunction;
};

export const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, Label>(
  ({ children, className, isRequired, htmlFor, ...props }, forwardedRef) => {
    const { name, isRequired: isParentRequired } =
      useFieldControlContext() ?? {};

    const required = getValue(isRequired) || isParentRequired;

    return (
      <LabelPrimitive.Root
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
      </LabelPrimitive.Root>
    );
  },
);
Label.displayName = "Label";
