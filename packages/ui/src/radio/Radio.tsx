"use client";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { Label } from "../label";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type RadioGroupContext,
  RadioGroupProvider,
  useRadioGroupContext,
} from "./context";

// RadioGroup Component
export const radioGroupClasses = cva(
  "flex data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row data-[orientaion-horizontal]:flex-wrap data-[disabled]:opacity-70",
  {
    variants: {
      size: {
        sm: "data-[orientation=vertical]:gap-1.5 data-[orientation=horizontal]:gap-3",
        md: "data-[orientation=vertical]:gap-2 data-[orientation=horizontal]:gap-3.5",
        lg: "data-[orientation=vertical]:gap-2.5 data-[orientation=horizontal]:gap-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type RadioGroup = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
  Partial<RadioGroupContext> & {
    isRequired?: ValueOrFunction;
    isReadOnly?: ValueOrFunction;
  };

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroup
>(
  (
    {
      className,
      size = "md",
      isDisabled,
      isRequired,
      isReadOnly,
      orientation = "vertical",
      ...props
    },
    forwardedRef,
  ) => {
    const fieldControlContext = useFieldControlContext() ?? {};

    const disabled =
      getValue(isDisabled) ||
      props.disabled ||
      fieldControlContext.isDisabled ||
      fieldControlContext.isLoading;

    const readonly = getValue(isReadOnly) || fieldControlContext.isReadOnly;

    const required =
      getValue(isRequired) || props.required || fieldControlContext.isRequired;

    return (
      <RadioGroupProvider value={{ size, isDisabled: disabled }}>
        <RadioGroupPrimitive.Root
          {...props}
          disabled={disabled || readonly}
          required={required}
          orientation={orientation}
          className={classNames(radioGroupClasses({ size }), className)}
          ref={forwardedRef}
        />
      </RadioGroupProvider>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

// RadioGroupItem Component
export const radioGroupItemClasses = cva(
  "border-secondary-400 dark:border-secondary-700 data-[state=checked]:border-primary-500 dark:data-[state=checked]:border-primary-300 aspect-square rounded-full border outline-none focus-visible:ring-2 ring-offset-2 ring-primary-300 dark:ring-primary-100 ring-offset-white dark:ring-offset-secondary-950",
  {
    variants: {
      size: {
        sm: "size-[14px]",
        md: "size-[20px]",
        lg: "size-[24px]",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

export const radioGroupItemIndicatorClasses = cva(
  "bg-primary-500 dark:bg-primary-300 rounded-full",
  {
    variants: {
      size: {
        sm: "size-[8px]",
        md: "size-[10px]",
        lg: "size-[14px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const radioGroupItemLabelClasses = cva("", {
  variants: {
    size: {
      sm: "pl-1.5 text-xs",
      md: "pl-2 text-sm",
      lg: "pl-2.5 text-base",
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

export type RadioGroupItem = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItem
>(({ className, children, ...props }, forwardedRef) => {
  const { size, isDisabled } = useRadioGroupContext();

  const disabled = getValue(isDisabled) || props.disabled;

  const radioItem = (
    <RadioGroupPrimitive.Item
      {...props}
      className={classNames(
        radioGroupItemClasses({ size, disabled }),
        className,
      )}
      ref={forwardedRef}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className={radioGroupItemIndicatorClasses({ size })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (children)
    return (
      <div className="flex w-max items-center">
        {radioItem}
        <Label
          htmlFor={props.id}
          className={radioGroupItemLabelClasses({ size, disabled })}
          isRequired={false}
        >
          {children}
        </Label>
      </div>
    );
  return radioItem;
});
RadioGroupItem.displayName = "RadioGroupItem";
