"use client";
import {
  Editable,
  type EditableRootProps,
  useEditableContext,
} from "@ark-ui/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type EditableNumber = Omit<
  EditableRootProps,
  "value" | "onValueChange" | "defaultValue" | "activationMode"
> & {
  isReadOnly?: ValueOrFunction<boolean>;
  isDisabled?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
  size?: "sm" | "md" | "lg";
  value?: number;
  onValueChange?: (value?: number) => void;
  defaultValue?: number;
};

export const EditableNumber = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableNumber
>(
  (
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
  ) => {
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
            <EditableItem size={size} readOnly={readOnly} disabled={disabled} />
          )}
        </Editable.Context>
      </Editable.Root>
    );
  },
);

EditableNumber.displayName = "EditableNumber";

const editableNumberPreviewClasses = {
  size: {
    sm: "text-sm pl-2 pr-6 py-1 h-[30px]",
    md: "text-md pl-3 pr-8 py-1.5 h-[38px]",
    lg: "text-lg pl-4 pr-10 py-2 h-[46px]",
  },
};

const editTriggerClasses = cva(
  "absolute outline-none disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "right-2 top-2 size-3",
        md: "right-3 top-2.5 size-4",
        lg: "right-4 top-3 size-5",
      },
      readOnly: {
        true: "cursor-default",
        false: "",
      },
    },
  },
);

function EditableItem({
  size = "md",
  readOnly,
  disabled,
}: Pick<EditableNumber, "size" | "readOnly" | "disabled">) {
  const { editing, previewProps } = useEditableContext();

  return (
    <>
      <Editable.Area>
        <Editable.Input asChild>
          <InputField type="number" size={size} />
        </Editable.Input>
        <Editable.Preview asChild>
          <div
            className={classNames(
              "hover:bg-secondary-100 border-secondary-300 dark:hover:bg-secondary-700/60 dark:border-secondary-700 data-[disabled]:bg-secondary-200/60 relative cursor-pointer rounded-md border transition-all ease-in-out aria-[readonly]:cursor-default data-[disabled]:cursor-not-allowed",
              editableNumberPreviewClasses.size[size],
            )}
          >
            <p className="truncate">{previewProps.children}</p>
            <Editable.EditTrigger
              className={editTriggerClasses({ size, readOnly })}
            >
              <PencilIcon
                className={classNames(
                  "stroke-secondary-600 dark:stroke-secondary-400 h-full w-full stroke-2",
                  !readOnly &&
                    !disabled &&
                    "transition-all ease-in-out hover:stroke-black dark:hover:stroke-white",
                )}
              />
            </Editable.EditTrigger>
          </div>
        </Editable.Preview>
      </Editable.Area>
      {editing && (
        <Editable.Control className="mt-2 flex gap-2">
          <Editable.SubmitTrigger asChild>
            <Button size="sm" title="Enter">
              Save
            </Button>
          </Editable.SubmitTrigger>
          <Editable.CancelTrigger asChild>
            <Button size="sm" title="Esc">
              Cancel
            </Button>
          </Editable.CancelTrigger>
        </Editable.Control>
      )}
    </>
  );
}
