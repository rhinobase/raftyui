"use client";
import { useThread } from "@fibr/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  InputField,
  Suffix,
  eventHandler,
  useBoolean,
} from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import type { PasswordProps } from "../types";
import { FieldWrapper, InputWrapper, TooltipWrapper } from "../utils";

export function PasswordField() {
  const [showPassword, toggle] = useBoolean(false);

  const Icon = showPassword ? EyeSlashIcon : EyeIcon;

  const { id, placeholder } = useThread<PasswordProps>();

  const { register } = useFormContext();

  const handler = eventHandler(() => toggle());

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <InputWrapper>
          <InputField
            id={id}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...register(id)}
          />
          <Suffix className="pointer-events-auto">
            <Button
              type="button"
              size="icon"
              aria-label="show and hide password"
              variant="ghost"
              onPointerDown={handler}
              onKeyDown={handler}
              className="rounded p-1"
            >
              <Icon className="size-4 stroke-2" />
            </Button>
          </Suffix>
        </InputWrapper>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
