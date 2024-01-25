import { PencilIcon } from "@heroicons/react/24/outline";
import { eventHandler, getValue } from "@rafty/shared";
import {
  Button,
  InputField,
  classNames,
  inputFieldClasses,
  useFieldControlContext,
  useInputGroupContext,
} from "@rafty/ui";
import React, { forwardRef, useState } from "react";

export type EditableInputField = Omit<InputField, "Unstyled">;

export const EditableInputField = forwardRef<
  HTMLInputElement,
  EditableInputField
>(
  (
    { size = "md", variant = "outline", isInvalid, className, ...props },
    forwardedRef,
  ) => {
    const [isEditMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState<string>("Enter Value");

    const fieldControlContext = useFieldControlContext() ?? {};

    const invalid = getValue(isInvalid) || fieldControlContext.isInvalid;

    const inputGroupContext = useInputGroupContext() ?? {
      isLeftAddon: false,
      isRightAddon: false,
      isPrefix: false,
      isSuffix: false,
      size,
    };

    const handleEditField = eventHandler(() => setEditMode(true));

    return (
      <>
        <Button
          className={classNames(
            inputFieldClasses({
              size: inputGroupContext.size,
              variant,
              invalid,
              isLeftAddon: inputGroupContext.isLeftAddon,
              isRightAddon: inputGroupContext.isRightAddon,
              isPrefix: inputGroupContext.isPrefix,
              isSuffix: inputGroupContext.isSuffix,
            }),
            !isEditMode && "hidden",
            className,
          )}
          rightIcon={<PencilIcon className="h-4 w-4" />}
          onClick={handleEditField}
          onKeyDown={handleEditField}
        >
          {inputValue}
        </Button>
        <InputField {...props} size={size} variant={variant} />
      </>
    );
  },
);
EditableInputField.displayName = "EditableInputField";
