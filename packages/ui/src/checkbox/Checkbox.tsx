"use client";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { useFieldControlContext } from "../field-control";
import { Label } from "../label";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

const checkboxClasses = cva(
  "border-secondary-400 dark:border-secondary-700 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:border-primary-300 relative shrink-0 rounded-sm border outline-none ring-offset-2 focus-visible:ring-2 ring-primary-300 dark:ring-primary-100 ring-offset-white dark:ring-offset-secondary-950",
  {
    variants: {
      size: { sm: "size-4 p-px", md: "size-5 p-0.5", lg: "size-6 p-0.5" },
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

const checkboxLabelClasses = cva("", {
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
  compoundVariants: [{ size: ["md", "lg"], className: "leading-snug" }],
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export type Checkbox = ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & {
  size?: SizeType;
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isRequired?: ValueOrFunction;
};

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  Checkbox
>(function Checkbox(
  {
    className,
    children,
    size = "md",
    isReadOnly,
    isDisabled,
    isRequired,
    ...props
  },
  forwardedRef,
) {
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

  const Component = (componentProps: Pick<Checkbox, "className">) => (
    <CheckboxPrimitive.Root
      {...props}
      name={name}
      disabled={disabled || readonly}
      required={required}
      className={componentProps.className}
      ref={forwardedRef}
    >
      <CheckboxPrimitive.Indicator className="group flex h-full items-center justify-center">
        <CheckIcon className="dark:text-secondary-700 hidden stroke-[3] text-white group-data-[state=checked]:block" />
        <MinusIcon className="text-secondary-600 dark:text-secondary-400 hidden stroke-[3] group-data-[state=indeterminate]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (children)
    return (
      <span className={classNames("flex items-start", className)}>
        <Component className={checkboxClasses({ size, disabled })} />
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
      </span>
    );

  return (
    <Component
      className={classNames(checkboxClasses({ size, disabled }), className)}
    />
  );
});
