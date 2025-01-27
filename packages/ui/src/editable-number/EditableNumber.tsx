"use client";
import { Editable, type EditableRootProps } from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import { EditableItem } from "../editable-text/EditableText.js";
import { useFieldControlContext } from "../field-control/index.js";
import { InputField } from "../input-field/index.js";
import type { ValueOrFunction } from "../types/index.js";
import { type SizeType, classNames, getValue } from "../utils/index.js";

export type EditableNumber = Omit<
  EditableRootProps,
  "value" | "onValueChange" | "defaultValue" | "activationMode"
> & {
  size?: SizeType;
  value?: number;
  onValueChange?: (value?: number) => void;
  defaultValue?: number;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
};

export const EditableNumber = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableNumber
>(function EditableNumber(
  {
    size = "md",
    name,
    disabled,
    readOnly,
    className,
    value,
    defaultValue,
    onValueChange,
    isDisabled,
    isLoading,
    isReadOnly,
    isInvalid,
    ...props
  },
  forwardedRef
) {
  const fieldControlContext = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const _name = name ?? fieldControlContext.name;
  const _disabled =
    (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
    (getValue(isLoading) ?? fieldControlContext.isLoading);
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _readOnly =
    readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

  const editableNumberProps: EditableRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
    value: value ? String(value) : undefined,
    defaultValue: defaultValue ? String(defaultValue) : undefined,
    onValueChange: ({ value }) => {
      const val = value.length !== 0 ? Number(value) : undefined;

      onValueChange?.(val);
    },
    className: classNames("w-full", className),
    activationMode: "dblclick",
  };

  return (
    <Editable.Root {...editableNumberProps} ref={forwardedRef}>
      <Editable.Context>
        {() => (
          <EditableItem size={size} readOnly={_readOnly} disabled={_disabled}>
            <InputField
              type="number"
              inputMode="numeric"
              size={size}
              isInvalid={_invalid}
            />
          </EditableItem>
        )}
      </Editable.Context>
    </Editable.Root>
  );
});
