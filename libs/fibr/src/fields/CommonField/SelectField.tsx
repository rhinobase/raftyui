"use client";
import type { FStringFieldType, FStringListType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { Select, SelectItem } from "@rafty/ui";
import { useId } from "react";
import { useFormContext } from "react-hook-form";

export function SelectField({ name, field }: FieldProps<FStringFieldType>) {
  const { register } = useFormContext();

  return (
    <Select
      {...register(name, { valueAsNumber: field.type === "number" })}
      isRequired={field.required as boolean | undefined}
      isReadOnly={field.readOnly as boolean}
    >
      {field.options && <Options items={field.options?.list} />}
    </Select>
  );
}

function Options({ items }: { items: FStringListType<string>[] }) {
  const components: JSX.Element[] = [];

  for (const { label, value } of items) {
    const key = useId();
    if (typeof value === "string" || typeof value === "number")
      components.push(
        <SelectItem key={key} value={value as string}>
          {label}
        </SelectItem>,
      );
    else components.push(<Options key={key} items={value} />);
  }

  return components;
}
