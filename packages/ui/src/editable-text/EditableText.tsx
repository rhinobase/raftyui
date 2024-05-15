"use client";
import { Editable, useEditableContext } from "@ark-ui/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export type EditableText = ComponentPropsWithoutRef<typeof Editable.Root> & {
  isReadOnly?: ValueOrFunction<boolean>;
  isDisabled?: ValueOrFunction<boolean>;
  size?: "sm" | "md" | "lg";
};

export const EditableText = forwardRef<
  ElementRef<typeof Editable.Root>,
  EditableText
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
        activationMode="dblclick"
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

EditableText.displayName = "EditableText";

const PREVIEW_CLASS = {
  sm: "text-sm pl-2 pr-6 py-1 h-[30px]",
  md: "text-md pl-3 pr-8 py-1.5 h-[38px]",
  lg: "text-lg pl-4 pr-10 py-2 h-[46px]",
};

const EDITABLE_TRIGGER = {
  sm: "absolute right-2 top-2 size-3",
  md: "absolute right-3 top-2.5 size-4",
  lg: "absolute right-4 top-3 size-5",
};

function EditableItem({ size = "md" }: Pick<EditableText, "size">) {
  const { editing, previewProps } = useEditableContext();

  return (
    <>
      <Editable.Area className={editing ? "mb-2" : undefined}>
        <Editable.Input asChild>
          <InputField size={size} />
        </Editable.Input>
        <Editable.Preview asChild>
          <div
            className={classNames(
              "hover:bg-secondary-100 border-secondary-300 dark:hover:bg-secondary-700/60 dark:border-secondary-700 relative cursor-pointer rounded-md border transition-all ease-in-out",
              PREVIEW_CLASS[size],
            )}
          >
            <p className="truncate">{previewProps.children}</p>
            <Editable.EditTrigger
              className={classNames(
                "absolute outline-none",
                EDITABLE_TRIGGER[size],
              )}
            >
              <PencilIcon className="stroke-secondary-600 dark:stroke-secondary-400 h-full w-full transition-all ease-in-out hover:stroke-black dark:hover:stroke-white" />
            </Editable.EditTrigger>
          </div>
        </Editable.Preview>
      </Editable.Area>
      <Editable.Control className="gap flex gap-2 empty:hidden">
        {editing && (
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
        )}
      </Editable.Control>
    </>
  );
}
