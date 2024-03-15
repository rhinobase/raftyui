"use client";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { type BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { Label } from "../label/Label";
import { classNames } from "../utils";

// Checkbox Component

export const checkboxClasses = cva(
  "border-secondary-400 dark:border-secondary-700 focus-visible:ring-ring data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:border-primary-300 relative shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-2",
  {
    variants: {
      size: { sm: "size-4", md: "size-5", lg: "size-6" },
      disabled: {
        true: "cursor-not-allowed opacity-70",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

export const checkboxIndicatorClasses = cva(
  "dark:text-secondary-700 hidden text-white group-data-[state=checked]:block",
  {
    variants: {
      size: {
        sm: "size-3 stroke-[4]",
        md: "size-4 stroke-[3.5]",
        lg: "size-5 stroke-[3]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const checkboxLabelClasses = cva("", {
  variants: {
    size: {
      sm: "pl-1.5 text-xs",
      md: "pl-2 leading-snug",
      lg: "pl-2.5 text-base leading-snug",
    },
    disabled: {
      true: "cursor-not-allowed opacity-70",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export type Checkbox = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: BooleanOrFunction;
  isDisabled?: BooleanOrFunction;
  isRequired?: BooleanOrFunction;
};

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  Checkbox
>(
  (
    {
      className,
      children,
      size = "md",
      isReadOnly,
      isDisabled,
      isRequired,
      ...props
    },
    forwardedref,
  ) => {
    const fieldControlContext = useFieldControlContext() ?? {};

    const name = props.name || fieldControlContext.name;

    const disabled =
      getValue(isDisabled) ||
      fieldControlContext.isDisabled ||
      props.disabled ||
      fieldControlContext.isLoading;

    const readonly = getValue(isReadOnly) || fieldControlContext.isReadOnly;

    const required =
      getValue(isRequired) ?? props.required ?? fieldControlContext.isRequired;

    const checkbox = (
      <CheckboxPrimitive.Root
        {...props}
        name={name}
        disabled={disabled || readonly}
        required={required}
        className={classNames(checkboxClasses({ size, disabled }), className)}
        ref={forwardedref}
      >
        <CheckboxPrimitive.Indicator className="group flex h-full items-center justify-center">
          <CheckIcon
            className={classNames(checkboxIndicatorClasses({ size }))}
          />
          <MinusIcon className="text-secondary-600 dark:text-secondary-500 hidden group-data-[state=indeterminate]:block" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );

    return (
      <span className="flex items-start">
        {checkbox}
        {children && (
          <Label
            htmlFor={props.id}
            className={checkboxLabelClasses({
              size,
              disabled,
            })}
            isRequired={required}
          >
            {children}
          </Label>
        )}
      </span>
    );
  },
);
Checkbox.displayName = "Checkbox";
