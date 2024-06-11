"use client";
import {
  Editable,
  type EditableRootProps,
  useEditableContext,
} from "@ark-ui/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type ElementRef, type PropsWithChildren, forwardRef } from "react";
import { Button } from "../button";
import { useFieldControlContext } from "../field-control";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export type EditableText = Omit<EditableRootProps, "activationMode"> & {
  size?: SizeType;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
};

export const EditableText = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableText
>(function EditableText(
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

  const editableTextProps: EditableRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
    className: classNames("w-full", className),
    activationMode: "dblclick",
  };

  return (
    <Editable.Root {...editableTextProps} ref={forwardedRef}>
      <Editable.Context>
        {() => (
          <EditableItem size={size} readOnly={readOnly} disabled={disabled}>
            <InputField size={size} isInvalid={_invalid} />
          </EditableItem>
        )}
      </Editable.Context>
    </Editable.Root>
  );
});

export const editableTextPreviewClasses = {
  size: {
    sm: "text-sm pl-2 pr-8 py-1 h-[30px]",
    md: "text-md pl-3 pr-10 py-1.5 h-[38px]",
    lg: "text-lg pl-4 pr-12 py-2 h-[46px]",
  },
};

export const editTriggerClasses = cva(
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
    defaultVariants: {
      disabled: false,
      readOnly: false,
      size: "md",
    },
  },
);

export const editIconClasses = {
  size: {
    sm: "size-3 stroke-[3]",
    md: "size-4 stroke-2",
    lg: "size-5 stroke-2",
  },
};

export type EditableItem = PropsWithChildren<
  {
    className?: string;
    editableTextareaPreviewClasses?: {
      size: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  } & Pick<EditableText, "size" | "readOnly" | "disabled">
>;

export function EditableItem({
  size = "md",
  readOnly,
  disabled,
  className,
  editableTextareaPreviewClasses,
  children,
}: EditableItem) {
  const { editing, previewProps } = useEditableContext();

  return (
    <>
      <Editable.Area>
        <Editable.Input asChild>{children}</Editable.Input>
        <Editable.Preview asChild>
          <div
            className={classNames(
              "hover:bg-secondary-100 border-secondary-300 dark:hover:bg-secondary-700/60 dark:border-secondary-700 data-[disabled]:bg-secondary-200/60 relative cursor-pointer rounded-md border transition-all ease-in-out aria-[readonly]:cursor-default data-[disabled]:cursor-not-allowed",
              className,
              editableTextareaPreviewClasses?.size[size] ??
                editableTextPreviewClasses.size[size],
            )}
          >
            <p className="truncate">{previewProps.children}</p>
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
