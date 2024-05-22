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
import { Textarea } from "../textarea";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

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
            <EditableItem size={size} readOnly={readOnly} disabled={disabled} />
          )}
        </Editable.Context>
      </Editable.Root>
    );
  },
);

EditableTextarea.displayName = "EditableTextarea";

const editableTextareaPreviewClasses = {
  size: {
    sm: "text-sm pl-2 pr-8 py-1",
    md: "text-md pl-3 pr-10 py-1.5",
    lg: "text-lg pl-4 pr-12 py-2",
  },
};

const editTriggerClasses = cva(
  "absolute outline-none disabled:cursor-not-allowed text-secondary-600 dark:text-secondary-400 top-1",
  {
    variants: {
      size: {
        sm: "right-1 p-1",
        md: "right-1.5 p-1.5",
        lg: "right-2 p-2",
      },
      readOnly: {
        true: "cursor-default",
        false: "",
      },
      disabled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        disabled: false,
        readOnly: false,
        className:
          "transition-all ease-in-out hover:text-black dark:hover:text-white",
      },
    ],
  },
);

const editIconClasses = {
  size: {
    sm: "size-3 stroke-[3]",
    md: "size-4 stroke-2",
    lg: "size-5 stroke-2",
  },
};

function EditableItem({
  size = "md",
  disabled,
  readOnly,
}: Pick<EditableTextarea, "size" | "readOnly" | "disabled">) {
  const { editing, previewProps } = useEditableContext();

  return (
    <>
      <Editable.Area>
        <Editable.Input asChild>
          <Textarea size={size} />
        </Editable.Input>
        <Editable.Preview asChild>
          <div
            className={classNames(
              "hover:bg-secondary-100 border-secondary-300 dark:hover:bg-secondary-700/60 dark:border-secondary-700 data-[disabled]:bg-secondary-200/60 relative min-h-[80px] cursor-pointer text-wrap rounded-md border transition-all ease-in-out aria-[readonly]:cursor-default data-[disabled]:cursor-not-allowed",
              editableTextareaPreviewClasses.size[size],
            )}
          >
            <p>{previewProps.children}</p>
            <Editable.EditTrigger
              className={editTriggerClasses({ size, readOnly, disabled })}
            >
              <PencilIcon className={editIconClasses.size[size]} />
            </Editable.EditTrigger>
          </div>
        </Editable.Preview>
      </Editable.Area>
      {editing && (
        <Editable.Control className="mt-2 flex gap-2">
          <>
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
          </>
        </Editable.Control>
      )}
    </>
  );
}
