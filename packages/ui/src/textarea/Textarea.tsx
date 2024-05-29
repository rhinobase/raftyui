"use client";
import { type TextareaHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { inputFieldClasses } from "../input-field";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const textareaClasses = {
  size: {
    sm: "min-h-16",
    md: "min-h-20",
    lg: "min-h-24",
  },
};

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
                inputFieldClasses({
                  size,
                  variant,
                  disabled,
                  readonly,
                  invalid,
                }),
                textareaClasses.size[size],
                className,
              )
        }
        ref={forwardedRef}
      />
    );
  },
);

Textarea.displayName = "Textarea";
