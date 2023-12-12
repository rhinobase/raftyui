"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import { InputGroup, Suffix } from "../input-group";
import { classNames } from "../utils";

const ICON_CLASSES = {
  sm: "h-3.5 w-3.5",
  md: "h-4 h-4",
  lg: "h-[18px] h-[18px]",
} as const;

// Password Field
export type PasswordField = InputField;

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordField>(
  ({ size = "md", ...props }, forwardedRef) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const Icon = showPassword ? EyeSlashIcon : EyeIcon;

    return (
      <InputGroup>
        <InputField
          {...props}
          size={size}
          type={showPassword ? "text" : "password"}
          ref={forwardedRef}
        />
        <Suffix>
          <Button
            type="button"
            size="icon"
            aria-label="show and hide password"
            variant="ghost"
            onClick={() => setShowPassword((prev) => !prev)}
            className={size !== "lg" ? "!rounded !p-1" : undefined}
          >
            <Icon className={classNames(ICON_CLASSES[size], "stroke-2")} />
          </Button>
        </Suffix>
      </InputGroup>
    );
  },
);
PasswordField.displayName = "PasswordField";
