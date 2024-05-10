"use client";
import { useThread } from "@fibr/react";
import { Switch as RaftySwitch } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { SwitchProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function Switch() {
  const { id } = useThread<SwitchProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftySwitch
              id={name}
              name={name}
              checked={value}
              onCheckedChange={onChange}
              isDisabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
