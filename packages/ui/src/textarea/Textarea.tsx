"use client";
import { cva } from "class-variance-authority";
import { type TextareaHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export const textareaClasses = cva(
  "w-full border appearance-none min-h-[80px] outline-none dark:text-secondary-200",
  {
    variants: {
      size: {
        sm: "rounded px-2 py-1 text-sm",
        md: "rounded-md px-3 py-1.5",
        lg: "rounded-md px-4 py-2 text-lg",
      },
      variant: {
        solid: "",
        outline: "",
        ghost: "",
      },
      disabled: {
        true: "",
        false: "",
      },
      readonly: {
        true: "",
        false: "",
      },
      invalid: {
        true: "border-red-500 focus:ring-red-200 dark:border-red-400 dark:focus:ring-red-100/20",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        disabled: false,
        readonly: false,
        className: "bg-secondary-50 dark:bg-secondary-900",
      },
      {
        disabled: true,
        readonly: false,
        className: "bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed",
      },
      {
        variant: ["solid", "outline"],
        disabled: false,
        className:
          "hover:border-primary-500 dark:hover:border-primary-400 ease-in-out transition-all",
      },
      {
        variant: ["solid", "outline"],
        className: "border-secondary-300 dark:border-zinc-700",
      },
      {
        disabled: false,
        readonly: false,
        className:
          "focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:ring-2",
      },
      {
        variant: ["outline", "ghost"],
        disabled: false,
        readonly: false,
        className: "bg-transparent",
      },
      {
        variant: "ghost",
        className: "border-transparent",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "outline",
      invalid: false,
    },
  },
);

// TextArea Component (With ErrorMessage)
export type Textarea = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isUnstyled?: boolean;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  isRequired?: ValueOrFunction;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
      isDisabled,
      isInvalid,
      isLoading,
      isReadOnly,
      isRequired,
      ...props
    },
    forwardedRef,
  ) => {
    const context = useFieldControlContext() ?? {
      isDisabled: false,
      isLoading: false,
      isReadOnly: false,
      isRequired: false,
    };

    const name = props.name || context.name;
    const disabled =
      getValue(isDisabled) ||
      props.disabled ||
      context.isDisabled ||
      getValue(isLoading) ||
      context.isLoading;
    const invalid = getValue(isInvalid) || context.isInvalid;
    const readonly =
      getValue(isReadOnly) || props.readOnly || context.isReadOnly;
    const required =
      getValue(isRequired) || props.required || context.isRequired;

    return (
      <textarea
        {...props}
        name={name}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        className={
          isUnstyled
            ? className
            : classNames(
                textareaClasses({
                  size,
                  variant,
                  disabled,
                  readonly,
                  invalid,
                }),
                className,
              )
        }
        ref={forwardedRef}
      />
    );
  },
);

Textarea.displayName = "Textarea";
