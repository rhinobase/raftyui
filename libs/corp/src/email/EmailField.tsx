import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, InputField } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { forwardRef, useState } from "react";
import { InputWrapper } from "../InputWrapper";

const CROSS_ICON = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const emailFieldClasses = cva("", {
  variants: {
    size: {
      sm: "pr-8",
      md: "pr-9",
      lg: "pr-11",
    },
    suffixIcon: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      suffixIcon: true,
      size: "sm",
      className: "pr-[50px]",
    },
    {
      suffixIcon: true,
      size: "md",
      className: "pr-[58px]",
    },
    {
      suffixIcon: true,
      size: "lg",
      className: "pr-[70px]",
    },
  ],
});

const emptyButtonClasses = cva("absolute z-10 right-2 top-2", {
  variants: {
    size: {
      sm: "!p-0.5",
      md: "!p-0.5",
      lg: "!p-1",
    },
    suffixIcon: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      suffixIcon: true,
      size: "sm",
      className: "right-7",
    },
    {
      suffixIcon: true,
      size: "md",
      className: "right-8",
    },
    {
      suffixIcon: true,
      size: "lg",
      className: "right-9",
    },
  ],
});

export type EmailField = Omit<InputField, "type"> & Omit<InputWrapper, "size">;

export const EmailField = forwardRef<HTMLInputElement, EmailField>(
  (
    {
      size = "md",
      prefixText,
      suffixIcon,
      suffixText,
      prefixIcon,
      className,
      onChange,
      defaultValue = "",
      value,
      ...props
    },
    forwardedRef,
  ) => {
    const [val, setVal] = useState(value ?? defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVal(event.target.value);
      onChange?.(event);
    };

    return (
      <InputWrapper
        size={size}
        prefixText={prefixText}
        prefixIcon={prefixIcon}
        suffixIcon={suffixIcon}
        suffixText={suffixText}
      >
        <InputField
          {...props}
          type="email"
          value={val}
          ref={forwardedRef}
          className={emailFieldClasses({
            size,
            suffixIcon: suffixIcon ? true : false,
            className,
          })}
          onChange={handleChange}
        />
        <Button
          variant="ghost"
          size="icon"
          colorScheme="error"
          onClick={() => setVal("")}
          className={emptyButtonClasses({
            size,
            suffixIcon: suffixIcon ? true : false,
          })}
        >
          <XMarkIcon className={CROSS_ICON[size]} />
        </Button>
      </InputWrapper>
    );
  },
);
EmailField.displayName = "EmailField";
