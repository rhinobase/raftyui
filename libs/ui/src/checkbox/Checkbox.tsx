"use client";
import React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils";
import { useFieldControlContext } from "../field-control/context";
import { cva } from "class-variance-authority";
import { Label } from "../label/Label";

// Checkbox Component

export const CheckBoxClasses = cva(
  "border-secondary-400 dark:border-secondary-700 focus-visible:ring-ring data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:border-primary-300 relative shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const CheckBoxIndicatorClasses = cva(
  "dark:text-secondary-700 hidden text-white group-data-[state=checked]:block",
  {
    variants: {
      size: {
        sm: "h-3 w-3 stroke-[4]",
        md: "h-4 w-4 stroke-[3.5]",
        lg: "h-5 w-5 stroke-[3]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const CHECKBOX_LABEL_CLASSES = {
  sm: "pl-1.5 !text-sm",
  md: "pl-2 !text-base",
  lg: "pl-2.5 !text-lg",
} as const;

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
        className={classNames(CheckBoxClasses({ size }), className)}
        ref={forwardedref}
      >
        <CheckboxPrimitive.Indicator className="group flex h-full items-center justify-center">
          <CheckIcon
            className={classNames(CheckBoxIndicatorClasses({ size }))}
          />
          <MinusIcon className="text-secondary-600 dark:text-secondary-500 hidden group-data-[state=indeterminate]:block" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    return (
      <div className="flex w-max items-center">
        {checkbox}
        {children && (
          <Label
            htmlFor={props.id}
            className={classNames(
              CHECKBOX_LABEL_CLASSES[size],
              disabled && "cursor-not-allowed opacity-50",
            )}
            isRequired={required}
          >
            {children}
          </Label>
        )}
      </div>
    );
  },
);
Checkbox.displayName = "Checkbox";
