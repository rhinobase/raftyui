"use client";
import type { FBooleanFieldType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
import { ErrorMessage, classNames } from "@rafty/ui";
import _ from "lodash";
import { useFormContext } from "react-hook-form";
import { CheckField } from "./CheckField";
import { SwitchField } from "./SwitchField";

const LAYOUTS = {
  switch: SwitchField,
  checkbox: CheckField,
} as const;

export function BooleanFields({ name, field }: FieldProps<FBooleanFieldType>) {
  const {
    formState: { errors },
  } = useFormContext();

  const error = _.get(errors, name);
  let Component = CheckField;

  if (field.options?.layout) Component = LAYOUTS[field.options.layout];

  return (
    <div className={classNames(field.hidden ? "hidden" : "block", "w-full")}>
      <Component name={name} field={field} />
      {error && <ErrorMessage>{error.message?.toString()}</ErrorMessage>}
    </div>
  );
}
