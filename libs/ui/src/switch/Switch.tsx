"use client";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { classNames } from "../utils";

export const switchClasses = cva(
  "focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-secondary-400 dark:data-[state=unchecked]:bg-secondary-600 peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-10",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const switchThumbClasses = cva(
  "bg-secondary-100 dark:data-[state=checked]:bg-secondary-900 data-[state=checked]:bg-secondary-100 pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-3",
        md: "size-5 data-[state=checked]:translate-x-4",
        lg: "size-6 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

// Switch component
export type Switch = Omit<
  ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
  "value" | "disabled" | "required"
> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: BooleanOrFunction;
  isDisabled?: BooleanOrFunction;
  isRequired?: BooleanOrFunction;
};

export const Switch = forwardRef<
  ElementRef<typeof SwitchPrimitives.Root>,
  Switch
>(
  (
    {
      className,
      size = "md",
      defaultChecked = false,
      isReadOnly,
      isDisabled,
      isRequired,
      ...props
    },
    forwardedRef,
  ) => {
    const context = useFieldControlContext() ?? {};

    const name = props.name || context.name;
    const disabled =
      getValue(isDisabled) ||
      context.isDisabled ||
      getValue(isReadOnly) ||
      context.isReadOnly;
    const required = getValue(isRequired) || context.isRequired;

    return (
      <SwitchPrimitives.Root
        {...props}
        defaultChecked={defaultChecked}
        name={name}
        disabled={disabled}
        required={required}
        className={classNames(switchClasses({ size }), className)}
        ref={forwardedRef}
      >
        <SwitchPrimitives.Thumb className={switchThumbClasses({ size })} />
      </SwitchPrimitives.Root>
    );
  },
);
Switch.displayName = "Switch";
