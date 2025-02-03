"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { Button } from "../button/index.js";
import { useFieldControlContext } from "../field-control/index.js";
import { useBoolean } from "../hooks/index.js";
import { InputField } from "../input-field/index.js";
import { InputGroup, Suffix } from "../input-group/index.js";
import { getValue } from "../utils/index.js";

export const passwordFieldButtonClasses = cva("", {
  variants: {
    size: {
      sm: "rounded-sm p-0.5",
      md: "rounded p-1",
      lg: "rounded p-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const passwordFieldButtonIconClasses = cva("", {
  variants: {
    size: {
      sm: "size-3 stroke-[2.5]",
      md: "size-3.5 stroke-2",
      lg: "size-4 stroke-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type PasswordField = InputField;

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  function PasswordField({ size = "md", ...props }, forwardedRef) {
    const [showPassword, toggle] = useBoolean(false);
    const Icon = showPassword ? EyeSlashIcon : EyeIcon;

    const fieldControlContext = useFieldControlContext() ?? {
      isDisabled: false,
      isLoading: false,
      isReadOnly: false,
      isRequired: false,
      isInvalid: false,
    };

    return (
      <InputGroup className="w-full" size={size}>
        <InputField
          {...props}
          type={showPassword ? "text" : "password"}
          ref={forwardedRef}
        />
        <Suffix className="pointer-events-auto">
          <Button
            type="button"
            size="icon"
            aria-label="show and hide password"
            variant="ghost"
            onClick={() => toggle()}
            disabled={
              (props.disabled ?? getValue(fieldControlContext.isDisabled)) ||
              (props.readOnly ?? getValue(fieldControlContext.isReadOnly))
            }
            className={passwordFieldButtonClasses({ size })}
          >
            <Icon className={passwordFieldButtonIconClasses({ size })} />
          </Button>
        </Suffix>
      </InputGroup>
    );
  },
);
