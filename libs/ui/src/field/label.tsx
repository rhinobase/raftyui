"use client";
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { classNames } from "@rafty/utils";
import { useFieldControlContext } from "./context";

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
          "text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
        {(isReq || isRequired) && (
          <span className="text-error-500 dark:error-red-400">*</span>
        )}
      </LabelPrimitive.Root>
    );
  },
);
Label.displayName = "Label";
