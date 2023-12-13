"use client";
import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";
import { useFieldControlContext } from "../field-control";
import { classNames } from "../utils";

// Label Component
export type Label = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> & { isRequired?: boolean };

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  Label
>(
  (
    { children, className, isRequired: isReq, htmlFor, ...props },
    forwardedRef,
  ) => {
    const { name, isRequired } = useFieldControlContext() ?? {};

    return (
      <LabelPrimitive.Root
        {...props}
        htmlFor={htmlFor ?? name}
        className={classNames(
          (isReq || isRequired) &&
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
