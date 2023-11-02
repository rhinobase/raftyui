"use client";
import React from "react";
import { useFieldControlContext } from "../field/context";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

export const textareaClasses = cva(
  "w-full border appearance-none min-h-[80px] outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
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
      invalid: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        invalid: false,
        className: "bg-secondary-50 dark:bg-secondary-900",
      },
      {
        variant: "ghost",
        invalid: false,
        className: "border-transparent",
      },
      {
        variant: ["solid", "outline", "ghost"],
        invalid: true,
        className:
          "border-red-500 focus:ring-red-200 dark:border-red-400 dark:focus:ring-red-100/20",
      },
      {
        variant: ["solid", "outline"],
        invalid: false,
        className:
          "border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
      },
      {
        variant: ["outline", "ghost"],
        invalid: false,
        className: "bg-transparent",
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
export type Textarea = Omit<JSX.IntrinsicElements["textarea"], "size"> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isUnStyled?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isLoading?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, Textarea>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnStyled = false,
      isDisabled = false,
      isInvalid = false,
      isLoading = false,
      isReadOnly = false,
      isRequired = false,
      ...props
    },
    forwardedRef,
  ) => {
    const context = useFieldControlContext() ?? {};

    const name = props.name || context.name,
      disabled =
        isDisabled ||
        props.disabled ||
        context.isDisabled ||
        isLoading ||
        context.isLoading,
      invalid = isInvalid || context.isInvalid,
      readonly = isReadOnly || props.readOnly || context.isReadOnly,
      required = isRequired || props.required || context.isRequired;

    return (
      <textarea
        {...props}
        name={name}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        className={
          isUnStyled
            ? className
            : classNames(
                textareaClasses({
                  size,
                  variant,
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
