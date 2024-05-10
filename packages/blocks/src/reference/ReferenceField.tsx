"use client";
import { useThread } from "@fibr/react";
import {
  Combobox,
  ComboboxClearButton,
  ComboboxContent,
  ComboboxTrigger,
} from "@rafty/ui";
import type { RefObject } from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { ReferenceFieldProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function ReferenceField() {
  const { id, options, placeholder } = useThread<ReferenceFieldProps>();
  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <div className="flex items-center gap-3">
          <Controller
            name={id}
            control={control}
            render={({ field: { name, onChange, ref, value, disabled } }) => (
              <Combobox
                id={name}
                type="single"
                placeholder={placeholder}
                onSelectionChange={onChange}
                selected={value}
                isDisabled={disabled}
                options={options}
                triggerRef={ref as unknown as RefObject<HTMLButtonElement>}
              >
                <ComboboxTrigger />
                <ComboboxClearButton />
                <ComboboxContent />
              </Combobox>
            )}
          />
        </div>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
