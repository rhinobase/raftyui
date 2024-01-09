import { CheckIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Button, InputField, classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { ReactNode, forwardRef, useState } from "react";
import { InputWrapper } from "../InputWrapper";

const editableTextClasses = cva("", {
  variants: {
    size: {
      sm: "pr-8",
      md: "pr-9",
      lg: "pr-11",
    },
    suffixIcon: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      suffixIcon: true,
      size: "sm",
      className: "pr-[50px]",
    },
    {
      suffixIcon: true,
      size: "md",
      className: "pr-[58px]",
    },
    {
      suffixIcon: true,
      size: "lg",
      className: "pr-[70px]",
    },
  ],
});

const editButtonClasses = cva(
  "absolute z-10 right-2 top-2 text-secondary-600 dark:text-secondary-500",
  {
    variants: {
      size: {
        sm: "!p-0.5",
        md: "!p-[3px] top-[7px]",
        lg: "!p-1",
      },
      suffixIcon: {
        true: "",
        false: "",
      },
      editIcon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        suffixIcon: true,
        size: "sm",
        className: "right-7",
      },
      {
        suffixIcon: true,
        size: "md",
        className: "right-8",
      },
      {
        suffixIcon: true,
        size: "lg",
        className: "right-9",
      },
      {
        editIcon: true,
        size: "sm",
        className: "top-1.5",
      },
      {
        editIcon: true,
        size: "md",
        className: "top-2",
      },
      {
        editIcon: true,
        size: "lg",
        className: "top-2.5",
      },
    ],
  },
);

const ICON = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export type EditableTextField = Omit<
  InputField,
  "type" | "isReadOnly" | "readOnly"
> &
  Omit<InputWrapper, "size"> & {
    editIcon?: ReactNode;
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
      className,
      editIcon,
      ...props
    },
    forwardedRef,
  ) => {
    const [isOpen, setOpen] = useState(true);

    return (
      <InputWrapper
        size={size}
        prefixIcon={prefixIcon}
        prefixText={prefixText}
        suffixIcon={suffixIcon}
        suffixText={suffixText}
      >
        <InputField
          {...props}
          id="editText"
          type="text"
          className={editableTextClasses({
            size,
            suffixIcon: suffixIcon ? true : false,
            className,
          })}
          ref={forwardedRef}
          isReadOnly={isOpen}
        />
        <Button
          size="icon"
          variant="ghost"
          className={editButtonClasses({
            size,
            suffixIcon: suffixIcon ? true : false,
            editIcon: editIcon ? true : false,
          })}
          onClick={() => {
            document.getElementById("editText")?.focus();
            setOpen((prev) => !prev);
          }}
        >
          {isOpen ? (
            editIcon ?? <PencilIcon className={ICON[size]} />
          ) : (
            <CheckIcon className={ICON[size]} />
          )}
        </Button>
      </InputWrapper>
    );
  },
);
EditableTextField.displayName = "EditableTextField";
