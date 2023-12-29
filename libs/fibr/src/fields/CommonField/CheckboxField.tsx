"use client";
import type { FStringFieldType, FStringListType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { Checkbox, ErrorMessage, Text } from "@rafty/ui";
import { useId } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";

export function CheckboxField({ name, field }: FieldProps<FStringFieldType>) {
  const { control } = useFormContext();

  if (!field.options) return <ErrorMessage>No options present</ErrorMessage>;

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <Options
          items={field.options?.list ?? []}
          name={name}
          type={field.type}
          visible={field.readOnly}
        />
      )}
    />
  );
}

function Options(props: {
  items: FStringListType<string>[];
  name: string;
  type: string;
  visible: boolean | (() => boolean) | undefined;
}) {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });
  const components: JSX.Element[] = [];

  for (const { label, value } of props.items) {
    const key = useId();
    if (typeof value === "string" || typeof value === "number")
      components.push(
        <Checkbox
          id={label}
          key={key}
          checked={field.value?.includes(value)}
          isReadOnly={props.visible as boolean}
          onCheckedChange={() => {
            const prev = (field.value ?? []) as (string | number)[];

            // Checking if value exist
            const index = prev.findIndex((item) => item === value);

            // Adding the new value
            if (index === -1)
              prev.push(props.type === "number" ? Number(value) : value);
            // Removing the value
            else prev.splice(index, 1);

            field.onChange(prev);
          }}
        >
          {label}
        </Checkbox>,
      );
    else
      components.push(
        <div key={key} className="space-y-1">
          <Text className="text-sm font-medium opacity-70">{label}</Text>
          <Options {...props} items={value} />
        </div>,
      );
  }

  return <div className="space-y-2">{components}</div>;
}
