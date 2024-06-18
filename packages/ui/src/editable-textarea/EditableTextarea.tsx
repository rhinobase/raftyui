"use client";
import { Editable, type EditableRootProps } from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import { EditableItem } from "../editable-text/EditableText";
import { useFieldControlContext } from "../field-control";
import { Textarea } from "../textarea";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export const editableTextareaPreviewClasses = {
  size: {
    sm: "text-sm pl-2 pr-8 py-1",
    md: "text-md pl-3 pr-10 py-1.5",
    lg: "text-lg pl-4 pr-12 py-2",
  },
};

export type EditableTextarea = Omit<
  EditableRootProps,
  "activationMode" | "onValueChange"
> & {
  size?: SizeType;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  onValueChange?: (value?: string) => void;
};

export const EditableTextarea = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableTextarea
>(function EditableTextarea(
  {
    size = "md",
    name,
    disabled,
    readOnly,
    className,
    isDisabled,
    isLoading,
    isReadOnly,
    isInvalid,
    onValueChange,
    ...props
  },
  forwardedRef,
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

  const editableTextareaProps: EditableRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
    className: classNames("w-full", className),
    activationMode: "dblclick",
    onValueChange: ({ value }) => onValueChange?.(value),
  };

  return (
    <Editable.Root {...editableTextareaProps} ref={forwardedRef}>
      <Editable.Context>
        {() => (
          <EditableItem
            size={size}
            readOnly={_readOnly}
            disabled={_disabled}
            className="min-h-[80px] text-wrap"
            editableTextareaPreviewClasses={editableTextareaPreviewClasses}
          >
            <Textarea size={size} isInvalid={_invalid} />
          </EditableItem>
        )}
      </Editable.Context>
    </Editable.Root>
  );
});
