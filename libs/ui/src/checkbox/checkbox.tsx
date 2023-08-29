"use client";
import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Label } from "../field";
import { classNames } from "../utils";
import { useFieldControlContext } from "../field/context";

// Checkbox Component

const CheckBoxClasses = {
  size: { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
};
const CheckBoxIndicatorClasses = {
  size: { sm: "h-2.5 w-2.5", md: "h-3.5 w-3.5", lg: "h-4 w-4" },
};

export type Checkbox = Omit<
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  "disabled" | "required"
> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
};

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  Checkbox
>(
  (
    {
      className,
      children,
      size = "md",
      isReadOnly = false,
      isDisabled = false,
      isRequired = false,
      ...props
    },
    forwardedref,
  ) => {
    const context = useFieldControlContext() ?? {};

    const name = props.name || context.name,
      disabled =
        isDisabled || context.isDisabled || isReadOnly || context.isReadOnly,
      required = isRequired || context.isRequired;

    const checkbox = (
      <CheckboxPrimitive.Root
        {...props}
        name={name}
        disabled={disabled}
        required={required}
        className={classNames(
          CheckBoxClasses.size[size],
          "relative shrink-0 rounded-sm border border-secondary-400 dark:border-secondary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:border-primary-300 ",
          className,
        )}
        ref={forwardedref}
      >
        <CheckboxPrimitive.Indicator className="group flex items-center justify-center h-full">
          <CheckIcon
            className={classNames(
              CheckBoxIndicatorClasses.size[size],
              "stroke-[3] hidden group-data-[state=checked]:block text-white dark:text-secondary-700",
            )}
          />
          <MinusIcon className="hidden group-data-[state=indeterminate]:block text-secondary-600 dark:text-secondary-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    return (
      <div className="flex items-center w-max">
        {checkbox}
        {children && (
          <Label
            htmlFor={props.id ?? name ?? context.name}
            className={classNames(
              (disabled || context.isDisabled) &&
                "cursor-not-allowed opacity-50",
              "pl-2",
            )}
          >
            {children}
          </Label>
        )}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
