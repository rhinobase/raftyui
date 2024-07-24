"use client";
import { useThread } from "@fibr/react";
import { FileUpload } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { FileInputFieldProps } from "../types";
import { FieldWrapper, InputWrapper, TooltipWrapper } from "../utils";

export function FileInputField() {
  const { id } = useThread<FileInputFieldProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <InputWrapper>
          <Controller
            name={id}
            control={control}
            render={({ field: { name, disabled, value, onChange, ref } }) => (
              <FileUpload
                name={name}
                disabled={disabled}
                onFileChange={({ acceptedFiles }) => onChange(acceptedFiles)}
                ref={ref}
              />
            )}
          />
        </InputWrapper>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
