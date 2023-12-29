"use client";
import type { FBooleanFieldType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { Label, Switch, Text } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";

export function SwitchField({ name, field }: FieldProps<FBooleanFieldType>) {
  const { control } = useFormContext();

  const Field = (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...register } }) => (
        <Switch
          {...register}
          id={field.label}
          checked={value}
          onCheckedChange={onChange}
          isRequired={field.required as boolean | undefined}
          isReadOnly={field.readOnly as boolean}
        />
      )}
    />
  );

  if (field.label || field.description)
    return (
      <div className="flex items-center gap-2">
        {Field}
        <div>
          {field.label && (
            <Label
              isRequired={field.required as boolean | undefined}
              htmlFor={field.label}
            >
              {field.label}
            </Label>
          )}
          {field.description && (
            <Text className="text-sm leading-none opacity-60">
              {field.description}
            </Text>
          )}
        </div>
      </div>
    );
  return Field;
}
