"use client";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control/index.js";
import { Label } from "../label/index.js";
import type { ValueOrFunction } from "../types/index.js";
import { type SizeType, classNames, getValue } from "../utils/index.js";

export const checkboxClasses = cva(
  "peer/checkbox relative shrink-0 border outline-none focus-visible:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950 transition-all ease-in-out",
  {
    variants: {
      size: {
        sm: "size-4 p-px rounded-sm",
        md: "size-5 p-0.5 rounded-sm",
        lg: "size-6 p-0.5 rounded",
      },
      disabled: {
        true: "cursor-not-allowed data-[state=checked]:bg-secondary-500 data-[state=checked]:border-secondary-500 dark:data-[state=checked]:bg-secondary-300 dark:data-[state=checked]:border-secondary-300",
        false:
          "data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:border-primary-300",
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
      size: "md",
      disabled: false,
      invalid: false,
    },
  }
);

export const checkboxLabelClasses = cva(
  "font-medium peer-data-[disabled]/checkbox:cursor-not-allowed peer-data-[disabled]/checkbox:opacity-80",
  {
    variants: {
      size: {
        sm: "pl-1 text-xs",
        md: "pl-1.5 text-sm",
        lg: "pl-2 text-base",
      },
    },
    compoundVariants: [{ size: ["md", "lg"], className: "leading-snug" }],
    defaultVariants: {
      size: "md",
    },
  }
);

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

export type Checkbox = CheckboxProps & {
  size?: SizeType;
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isRequired?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
};

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  Checkbox
>(function Checkbox(
  {
    name,
    disabled,
    required,
    className,
    children,
    size = "md",
    isReadOnly,
    isDisabled,
    isRequired,
    isInvalid,
    isLoading,
    ...props
  },
  forwardedRef
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
    (getValue(isLoading) ?? fieldControlContext.isLoading);
  const _readOnly = getValue(isReadOnly) ?? fieldControlContext.isReadOnly;
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _required =
    required ?? getValue(isRequired) ?? fieldControlContext.isRequired;

  const checkboxProps: CheckboxProps = {
    ...props,
    name: _name,
    disabled: _disabled || _readOnly,
    required: _required,
  };

  const Component = (componentProps: Pick<Checkbox, "className">) => (
    <CheckboxPrimitive.Root
      {...checkboxProps}
      className={componentProps.className}
      ref={forwardedRef}
    >
      <CheckboxPrimitive.Indicator className="group">
        <CheckIcon className="dark:text-secondary-700 hidden stroke-[3] text-white group-data-[state=checked]:block" />
        <MinusIcon className="text-secondary-600 dark:text-secondary-400 hidden stroke-[3] group-data-[state=indeterminate]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (children)
    return (
      <span className={classNames("flex items-start", className)}>
        <Component
          className={checkboxClasses({
            size,
            invalid: _invalid,
            disabled: _disabled || _readOnly,
          })}
        />
        <Label
          htmlFor={props.id}
          className={checkboxLabelClasses({
            size,
          })}
          isRequired={required}
        >
          {children}
        </Label>
      </span>
    );

  return (
    <Component
      className={classNames(
        checkboxClasses({ size, invalid: _invalid, disabled: _disabled }),
        className
      )}
    />
  );
});
