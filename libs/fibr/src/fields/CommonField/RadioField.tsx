"use client";
import type { FStringFieldType, FStringListType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { RadioGroup, RadioGroupItem, Text } from "@rafty/ui";
import { useId } from "react";
import { Controller, useFormContext } from "react-hook-form";

export function RadioField({ name, field }: FieldProps<FStringFieldType>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...register } }) => (
        <RadioGroup
          {...register}
          onValueChange={onChange}
          required={field.required as boolean | undefined}
          isDisabled={field.readOnly as boolean | undefined}
        >
          {field.options && <Options items={field.options.list} />}
        </RadioGroup>
      )}
    />
  );
}

function Options({ items }: { items: FStringListType<string>[] }) {
  const components: JSX.Element[] = [];

  for (const { label, value } of items) {
    const key = useId();
    if (typeof value === "string" || typeof value === "number")
      components.push(
        <RadioGroupItem key={key} value={value as string} id={label}>
          {label}
        </RadioGroupItem>,
      );
    else
      components.push(
        <div key={key} className="space-y-1">
          <Text className="text-sm font-medium opacity-70">{label}</Text>
          <Options items={value} />
        </div>,
      );
  }

  return <div className="space-y-2">{components}</div>;
}
