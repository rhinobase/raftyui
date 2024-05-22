"use client";
import { Editable, type EditableRootProps } from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import { EditableItem } from "../editable-text/EditableText";
import { Textarea } from "../textarea";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const editableTextareaPreviewClasses = {
  size: {
    sm: "text-sm pl-2 pr-8 py-1",
    md: "text-md pl-3 pr-10 py-1.5",
    lg: "text-lg pl-4 pr-12 py-2",
  },
};

export type EditableTextarea = Omit<EditableRootProps, "activationMode"> & {
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  size?: "sm" | "md" | "lg";
};

export const EditableTextarea = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableTextarea
>(
  (
    {
      size = "md",
      className,
      isDisabled = false,
      isReadOnly = false,
      isLoading = false,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <Editable.Root
        {...props}
        activationMode="dblclick"
        readOnly={readOnly}
        disabled={disabled}
        className={classNames("w-full", className)}
        ref={forwardedRef}
      >
        <Editable.Context>
          {() => (
            <EditableItem
              size={size}
              readOnly={readOnly}
              disabled={disabled}
              className="min-h-[80px] text-wrap"
              editableTextareaPreviewClasses={editableTextareaPreviewClasses}
            >
              <Textarea size={size} />
            </EditableItem>
          )}
        </Editable.Context>
      </Editable.Root>
    );
  },
);

EditableTextarea.displayName = "EditableTextarea";
