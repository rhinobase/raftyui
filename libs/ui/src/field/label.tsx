import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { classNames } from "@rafty/ui";
import { useFieldControlContext } from "./context";

// Label Component

export type Label = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> & { isRequired?: boolean };

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  Label
>(({ children, className, isRequired: isReq, ...props }, forwardedRef) => {
  const { name, isRequired } = useFieldControlContext() ?? {
    name: props.htmlFor,
    isRequired: isReq,
  };

  return (
    <LabelPrimitive.Root
      {...props}
      htmlFor={name}
      className={classNames(
        "text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium",
        className
      )}
      ref={forwardedRef}
    >
      {children}
      {isRequired && (
        <span className="text-error-500 dark:error-red-400">*</span>
      )}
    </LabelPrimitive.Root>
  );
});
Label.displayName = "Label";
