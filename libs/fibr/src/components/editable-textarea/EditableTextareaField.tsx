import { eventHandler, getValue } from "@rafty/shared";
import {
  Button,
  Textarea,
  classNames,
  mergeRefs,
  useFieldControlContext,
} from "@rafty/ui";
import { forwardRef, useEffect, useRef, useState } from "react";

export type EditableTextareaField = Omit<Textarea, "Unstyled">;

export const EditableTextareaField = forwardRef<
  HTMLTextAreaElement,
  EditableTextareaField
>(
  (
    { size = "md", variant = "outline", isInvalid, className, ...props },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [isEditMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useState<string>();

    const fieldControlContext = useFieldControlContext() ?? {};

    const invalid = getValue(isInvalid) || fieldControlContext.isInvalid;

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
            isEditMode && "hidden",
            "w-full justify-start font-medium",
            className,
          )}
          onClick={handleEditField}
          onKeyDown={handleEditField}
        >
          {inputValue ?? "Enter value"}
        </Button>
        <Textarea
          {...props}
          size={size}
          variant={variant}
          isInvalid={invalid}
          className={classNames(!isEditMode && "hidden", className)}
          ref={mergeRefs(inputRef, forwardedRef)}
          onKeyDown={(event) => {
            if (
              event.key === "Escape" ||
              (event.shiftKey && event.key === "Enter")
            )
              setEditMode(false);
          }}
        />
      </>
    );
  },
);
EditableTextareaField.displayName = "EditableTextareaField";
