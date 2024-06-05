"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { Button } from "../button";
import { useFieldControlContext } from "../field-control";
import { useBoolean } from "../hooks";
import { InputField } from "../input-field";
import { InputGroup, Suffix } from "../input-group";
import { getValue } from "../utils";

const passwordFieldButtonClasses = cva("", {
  variants: {
    size: {
      sm: "rounded-sm p-0.5",
      md: "rounded p-1",
      lg: "rounded p-1.5",
    },
  },
});

const passwordFieldButtonIconClasses = cva("", {
  variants: {
    size: {
      sm: "size-3 stroke-[2.5]",
      md: "size-3.5 stroke-2",
      lg: "size-4 stroke-2",
    },
  },
});

// Password Field
export type PasswordField = InputField;

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ size = "md", ...props }, forwardedRef) => {
    const [showPassword, toggle] = useBoolean(false);
    const Icon = showPassword ? EyeSlashIcon : EyeIcon;

    const fieldControlContext = useFieldControlContext() ?? {
      isDisabled: props.isDisabled,
      isReadOnly: props.isReadOnly,
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
              props.disabled ||
              getValue(fieldControlContext.isDisabled) ||
              props.readOnly ||
              getValue(fieldControlContext.isReadOnly)
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
PasswordField.displayName = "PasswordField";
