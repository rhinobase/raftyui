import { PencilIcon } from "@heroicons/react/24/outline";
import { Button, InputField } from "@rafty/ui";
import { ReactElement, forwardRef, useEffect, useState } from "react";
import { InputWrapper } from "../InputWrapper";

const ICON = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export type EditableTextField = Omit<InputField, "type"> &
  Omit<InputWrapper, "size"> & {
    editIcon?: ReactElement;
  };

export const EditableTextField = forwardRef<
  HTMLInputElement,
  EditableTextField
>(
  (
    {
      size = "md",
      prefixIcon,
      prefixText,
      suffixIcon,
      suffixText,
      editIcon,
      value,
      onChange,
      onBlur,
      onKeyDown,
      ...props
    },
    forwardedRef,
  ) => {
    const [isOpen, setOpen] = useState(false);
    const [val, setVal] = useState(value);

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVal(event.target.value);
      onChange?.(event);
    };

    const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.key === "Escape" && setOpen(false);
      onKeyDown?.(event);
    };

    const blure = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      setOpen(false);
      onBlur?.(event);
    };

    useEffect(() => {
      if (isOpen) document.getElementById("editText")?.focus();
    }, [isOpen]);

    return (
      <InputWrapper
        size={size}
        prefixIcon={prefixIcon}
        prefixText={prefixText}
        suffixIcon={suffixIcon}
        suffixText={suffixText}
      >
        {isOpen ? (
          <InputField
            {...props}
            id="editText"
            type="text"
            value={val}
            onChange={change}
            onKeyDown={keyDown}
            onBlur={blure}
            ref={forwardedRef}
          />
        ) : (
          <Button
            size={size}
            className="!w-full !justify-between"
            onClick={() => setOpen((prev) => !prev)}
            rightIcon={editIcon ?? <PencilIcon className={ICON[size]} />}
          >
            {val ?? "Enter Value"}
          </Button>
        )}
      </InputWrapper>
    );
  },
);
EditableTextField.displayName = "EditableTextField";
