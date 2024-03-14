"use client";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { Label } from "../label";
import { classNames } from "../utils";
import {
  type RadioGroupContext,
  RadioGroupProvider,
  useRadioGroupContext,
} from "./context";

// RadioGroup Component
export const radioGroupClasses = cva("flex flex-col", {
  variants: {
    size: {
      sm: "gap-1",
      md: "gap-1.5",
      lg: "gap-2",
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

export type RadioGroup = ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
  Partial<RadioGroupContext> & {
    isRequired?: BooleanOrFunction;
    isReadOnly?: BooleanOrFunction;
  };

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroup
>(
  (
    { className, size = "md", isDisabled, isRequired, isReadOnly, ...props },
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
          className={classNames(
            radioGroupClasses({ size, disabled }),
            className,
          )}
          ref={forwardedRef}
        />
      </RadioGroupProvider>
    );
  },
);
RadioGroup.displayName = "RadioGroup";

// RadioGroupItem Component
export const radioGroupItemClasses = cva(
  "border-secondary-400 dark:border-secondary-700 data-[state=checked]:border-primary-500 dark:data-[state=checked]:border-primary-300 ring-offset-background focus-visible:ring-ring aspect-square rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      size: {
        sm: "size-3.5",
        md: "size-5",
        lg: "size-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const radioGroupItemIndicatorClasses = cva(
  "bg-primary-500 dark:bg-primary-300 rounded-full",
  {
    variants: {
      size: {
        sm: "size-2",
        md: "size-2.5",
        lg: "size-3.5",
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
      md: "pl-2",
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
>(({ className, children, ...props }, forwardedref) => {
  const { size, isDisabled } = useRadioGroupContext();

  const disabled = getValue(isDisabled) || props.disabled;

  const radioItem = (
    <RadioGroupPrimitive.Item
      {...props}
      className={classNames(radioGroupItemClasses({ size }), className)}
      ref={forwardedref}
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
