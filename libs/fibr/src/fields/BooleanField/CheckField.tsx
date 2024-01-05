"use client";
import type { FBooleanFieldType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { Checkbox, Label, Text } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";

export function CheckField({ name, field }: FieldProps<FBooleanFieldType>) {
  const { control } = useFormContext();
  const readOnly = field.readOnly as boolean;

  const required = field.required as boolean | undefined;

  const CheckboxField = (props: { children?: React.ReactNode }) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ...register } }) => (
          <Checkbox
            {...register}
            checked={value}
            onCheckedChange={onChange}
            id={field.label}
            isReadOnly={readOnly}
            isRequired={required}
          >
            {props.children}
          </Checkbox>
        )}
      />
    );
  };

  if (field.description)
    return (
      <div className="flex items-center gap-2">
        <CheckboxField />
        <div>
          {field.label && (
            <Label isRequired={required} htmlFor={field.label}>
              {field.label}
            </Label>
          )}
          <Text className="text-sm leading-none opacity-60">
            {field.description}
          </Text>
        </div>
      </div>
    );
  return <CheckboxField>{field.label}</CheckboxField>;
}
