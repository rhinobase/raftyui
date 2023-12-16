"use client";
import { cva } from "class-variance-authority";
import { TextareaHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { classNames } from "../utils";

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
        size: ["sm", "md", "lg"],
        className: classNames(
          "border border-secondary-300 dark:border-secondary-700 outline-none",
          "hover:border-primary-500 dark:hover:border-primary-400 disabled:hover:border-secondary-300 dark:disabled:hover:border-secondary-700",
          "focus:border-primary-500 dark:focus:border-primary-400",
          "focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-100/20",
        ),
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
export type Textarea = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isUnstyled?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isLoading?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
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
          isUnstyled
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
