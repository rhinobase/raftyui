"use client";
import { type TextareaHTMLAttributes, forwardRef } from "react";
import { useFieldControlContext } from "../field-control";
import { type InputField, inputFieldClasses } from "../input-field";
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
> &
  InputField;

export const Textarea = forwardRef<HTMLTextAreaElement, Textarea>(
  function Textarea(
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
  ) {
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
    const readOnly =
      getValue(isReadOnly) || props.readOnly || context.isReadOnly;
    const required =
      getValue(isRequired) || props.required || context.isRequired;

    return (
      <textarea
        {...props}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        className={
          isUnstyled
            ? className
            : classNames(
                inputFieldClasses({
                  size,
                  variant,
                  disabled,
                  readOnly,
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
