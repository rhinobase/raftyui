import { eventHandler, getValue } from "@rafty/shared";
import {
  Button,
  InputField,
  classNames,
  inputFieldClasses,
  mergeRefs,
  useFieldControlContext,
  useInputGroupContext,
} from "@rafty/ui";
import { forwardRef, useEffect, useRef, useState } from "react";

export type EditableTextField = Omit<InputField, "Unstyled">;

export const EditableTextField = forwardRef<
  HTMLInputElement,
  EditableTextField
>(
  (
    { size = "md", variant = "outline", isInvalid, className, ...props },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isEditMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState<string>();

    const fieldControlContext = useFieldControlContext() ?? {};

    const invalid = getValue(isInvalid) || fieldControlContext.isInvalid;

    const inputGroupContext = useInputGroupContext() ?? {
      isLeftAddon: false,
      isRightAddon: false,
      isPrefix: false,
      isSuffix: false,
      size,
    };

    useEffect(() => {
      if (isEditMode) inputRef.current?.focus();
    }, [isEditMode]);

    const handleEditField = eventHandler(() => {
      setEditMode(true);
    });

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
            isEditMode && "hidden",
            "w-full justify-start font-medium",
            inputGroupContext.isLeftAddon && "rounded-l-none",
            inputGroupContext.isRightAddon && "rounded-r-none",
            className,
          )}
          onClick={handleEditField}
          onKeyDown={handleEditField}
        >
          {inputValue ?? "Enter value"}
        </Button>
        <InputField
          {...props}
          size={size}
          variant={variant}
          isInvalid={invalid}
          className={classNames(!isEditMode && "hidden", className)}
          ref={mergeRefs(inputRef, forwardedRef)}
          onKeyDown={(event) => {
            if (["Enter", "Escape"].includes(event.key)) setEditMode(false);
          }}
        />
      </>
    );
  },
);
EditableTextField.displayName = "EditableTextField";
