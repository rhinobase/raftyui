"use client";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control/index.js";
import { Label } from "../label/index.js";
import { type ValueOrFunction, classNames, getValue } from "../utils/index.js";
import {
  type RadioGroupContext,
  RadioGroupProvider,
  useRadioGroupContext,
} from "./context.js";

export const radioGroupClasses = cva(
  "flex data-[orientation=vertical]:flex-col data-[orientation=horizontal]:flex-row data-[orientaion-horizontal]:flex-wrap",
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

type RadioProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>;

export type RadioGroup = RadioProps &
  Partial<Pick<RadioGroupContext, "size">> & {
    isDisabled?: ValueOrFunction;
    isInvalid?: ValueOrFunction;
    isLoading?: ValueOrFunction;
    isReadOnly?: ValueOrFunction;
    isRequired?: ValueOrFunction;
  };

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroup
>(function RadioGroup(
  {
    name,
    disabled,
    required,
    className,
    size = "md",
    isDisabled,
    isRequired,
    isReadOnly,
    isInvalid,
    isLoading,
    orientation = "vertical",
    ...props
  },
  forwardedRef,
) {
  const fieldControlContext = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const _name = name ?? fieldControlContext.name;
  const _disabled =
    (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
    (getValue(isLoading) ?? fieldControlContext.isLoading) ||
    (getValue(isReadOnly) ?? fieldControlContext.isReadOnly);
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _required =
    required ?? getValue(isRequired) ?? fieldControlContext.isRequired;

  const radioProps: RadioProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    required: _required,
    orientation,
    className: classNames(radioGroupClasses({ size }), className),
  };

  return (
    <RadioGroupProvider
      value={{ size, disabled: _disabled, invalid: _invalid }}
    >
      <RadioGroupPrimitive.Root {...radioProps} ref={forwardedRef} />
    </RadioGroupProvider>
  );
});

export const radioGroupItemClasses = cva(
  classNames(
    "peer/radio-item aspect-square rounded-full border transition-all ease-in-out",
    "data-[state=checked]:border-primary-500 dark:data-[state=checked]:border-primary-300",
    "outline-none focus-visible:ring-2 ring-offset-2 ring-primary-300 dark:ring-primary-100 ring-offset-white dark:ring-offset-secondary-950",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
  ),
  {
    variants: {
      size: {
        sm: "size-[14px]",
        md: "size-[20px]",
        lg: "size-[24px]",
      },
      disabled: {
        true: "cursor-not-allowed opacity-70",
        false: "",
      },
      invalid: {
        true: "border-red-500 dark:border-red-300 ring-red-300 dark:ring-red-100",
        false:
          "border-secondary-300 dark:border-secondary-700 ring-primary-300 dark:ring-primary-100",
      },
    },
    compoundVariants: [
      {
        disabled: false,
        invalid: false,
        className: "hover:border-primary-500 dark:hover:border-primary-300",
      },
    ],
    defaultVariants: {
      disabled: false,
      invalid: false,
      size: "md",
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

export const radioGroupItemLabelClasses = cva(
  "peer-data-[disabled]/radio-item:cursor-not-allowed peer-data-[disabled]/radio-item:opacity-70",
  {
    variants: {
      size: {
        sm: "pl-1 text-xs",
        md: "pl-1.5 text-sm",
        lg: "pl-2 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type RadioGroupItem = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

export const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItem
>(function RadioGroupItem({ className, children, ...props }, forwardedRef) {
  const { size, disabled, invalid } = useRadioGroupContext();

  const Component = (componentProps: Pick<RadioGroupItem, "className">) => (
    <RadioGroupPrimitive.Item
      {...props}
      className={componentProps.className}
      ref={forwardedRef}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className={radioGroupItemIndicatorClasses({ size })} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (children)
    return (
      <div className={classNames("flex w-max items-center", className)}>
        <Component
          className={radioGroupItemClasses({ size, invalid, disabled })}
        />
        <Label
          htmlFor={props.id}
          className={radioGroupItemLabelClasses({ size })}
          isRequired={false}
        >
          {children}
        </Label>
      </div>
    );
  return (
    <Component
      className={classNames(
        radioGroupItemClasses({ size, invalid, disabled }),
        className,
      )}
    />
  );
});
