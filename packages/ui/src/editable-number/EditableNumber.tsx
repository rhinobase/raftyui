"use client";
import { Editable, type EditableRootProps } from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import { EditableItem } from "../editable-text/EditableText";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export type EditableNumber = Omit<
  EditableRootProps,
  "value" | "onValueChange" | "defaultValue" | "activationMode"
> & {
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  size?: SizeType;
  value?: number;
  onValueChange?: (value?: number) => void;
  defaultValue?: number;
};

export const EditableNumber = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableNumber
>(function EditableNumber(
  {
    size = "md",
    className,
    value,
    defaultValue,
    onValueChange,
    isDisabled = false,
    isLoading = false,
    isReadOnly = false,
    ...props
  },
  forwardedRef,
) {
  const disabled =
    props.disabled || getValue(isDisabled) || getValue(isLoading);
  const readOnly = props.readOnly || getValue(isReadOnly);

  return (
    <Editable.Root
      {...props}
      value={value ? String(value) : undefined}
      defaultValue={defaultValue ? String(defaultValue) : undefined}
      onValueChange={({ value }) => {
        const val = value.length !== 0 ? Number(value) : undefined;

        onValueChange?.(val);
      }}
      activationMode="dblclick"
      readOnly={readOnly}
      disabled={disabled}
      className={classNames("w-full", className)}
      ref={forwardedRef}
    >
      <Editable.Context>
        {() => (
          <EditableItem size={size} readOnly={readOnly} disabled={disabled}>
            <InputField type="number" inputMode="numeric" size={size} />
          </EditableItem>
        )}
      </Editable.Context>
    </Editable.Root>
  );
});
