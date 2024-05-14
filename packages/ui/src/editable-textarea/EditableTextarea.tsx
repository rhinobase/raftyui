"use client";
import { Editable, useEditableContext } from "@ark-ui/react";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Button } from "../button";
import { Textarea } from "../textarea";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type EditableTextarea = ComponentPropsWithoutRef<
  typeof Editable.Root
> & {
  isReadOnly?: ValueOrFunction<boolean>;
  isDisabled?: ValueOrFunction<boolean>;
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
      ...props
    },
    forwardedRef,
  ) => {
    const disabled = props.disabled || getValue(isDisabled);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <Editable.Root
        {...props}
        activationMode="none"
        readOnly={readOnly}
        disabled={disabled}
        className={classNames("w-full", className)}
        ref={forwardedRef}
      >
        <Editable.Context>
          {() => <EditableItem size={size} />}
        </Editable.Context>
      </Editable.Root>
    );
  },
);

EditableTextarea.displayName = "EditableTextarea";

const PREVIEW_CLASS = {
  sm: "text-sm py-[5px]",
  md: "text-md py-[7px]",
  lg: "text-lg py-[9px]",
};

function EditableItem({ size = "md" }: Pick<EditableTextarea, "size">) {
  const { editing, previewProps } = useEditableContext();

  return (
    <>
      <Editable.Area className="mb-2">
        <Editable.Input asChild>
          <Textarea size={size} />
        </Editable.Input>
        <Editable.Preview asChild>
          <p className={classNames("w-full font-medium", PREVIEW_CLASS[size])}>
            {previewProps.children}
          </p>
        </Editable.Preview>
      </Editable.Area>
      <Editable.Control className="gap flex gap-2">
        {editing ? (
          <>
            <Editable.SubmitTrigger asChild>
              <Button size="sm">Save</Button>
            </Editable.SubmitTrigger>
            <Editable.CancelTrigger asChild>
              <Button size="sm">Cancel</Button>
            </Editable.CancelTrigger>
          </>
        ) : (
          <Editable.EditTrigger asChild>
            <Button size="sm">Edit</Button>
          </Editable.EditTrigger>
        )}
      </Editable.Control>
    </>
  );
}
