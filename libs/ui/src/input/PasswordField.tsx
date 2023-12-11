"use client";
import React from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { InputGroup, Suffix } from "./InputGroup";
import { InputField } from "./InputField";
import { classNames } from "../utils";

const ICON_CLASSES = {
  sm: "h-3.5 w-3.5",
  md: "h-4 h-4",
  lg: "h-[18px] h-[18px]",
} as const;

// Password Field
export type PasswordField = InputField;

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordField>(
  ({ className, size = "md", variant = "outline", ...props }, forwardedRef) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const Icon = showPassword ? EyeSlashIcon : EyeIcon;

    return (
      <InputGroup>
        <InputField
          {...props}
          type={showPassword ? "text" : "password"}
          variant={variant}
          size={size}
          className={className}
          ref={forwardedRef}
        />
        <Suffix>
          <Button
            type="button"
            size="icon"
            aria-label="show and hide password"
            variant="ghost"
            onClick={() => setShowPassword((prev) => !prev)}
            className={classNames(size === "lg" ? "!p-1.5" : "!rounded !p-1")}
          >
            <Icon className={classNames(ICON_CLASSES[size], "stroke-2")} />
          </Button>
        </Suffix>
      </InputGroup>
    );
  },
);
PasswordField.displayName = "PasswordField";
