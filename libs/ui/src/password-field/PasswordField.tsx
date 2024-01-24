"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { forwardRef, useState } from "react";
import { Button } from "../button";
import { useBoolean } from "../hooks";
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

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ size = "md", ...props }, forwardedRef) => {
    const [showPassword, toggle] = useBoolean(false);
    const Icon = showPassword ? EyeSlashIcon : EyeIcon;

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
            className="rounded p-1"
          >
            <Icon className={classNames(ICON_CLASSES[size], "stroke-2")} />
          </Button>
        </Suffix>
      </InputGroup>
    );
  },
);
PasswordField.displayName = "PasswordField";
