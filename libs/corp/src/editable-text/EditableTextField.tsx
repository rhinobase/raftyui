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
import {
  ReactNode,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

export type EditableTextField = Omit<
  InputField,
  "Unstyled" | "onChange" | "onBlur" | "onKeyDown"
> & {
  onChange?: (value: string | undefined) => void;
};

export const EditableTextField = forwardRef<
  HTMLInputElement,
  EditableTextField
>(
  (
    {
      size = "md",
      variant = "outline",
      isInvalid,
      className,
      onChange,
      ...props
    },
    forwardedRef,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isEditMode, setEditMode] = useState(false);
    const [inputValue, setInputValue] = useReducer(
      (_: string | undefined, cur: string | undefined) => {
        onChange?.(cur);
        return cur;
      },
      undefined,
    );

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
      else setInputValue(inputRef.current?.value);
    }, [isEditMode]);

    const handleEditField = eventHandler(() => {
      setEditMode(true);
    });

    let buttonChild: ReactNode;

    if (inputValue) {
      if (inputValue !== "") buttonChild = inputValue;
    } else buttonChild = "Enter value";

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
            (inputGroupContext.isLeftAddon || inputGroupContext.isRightAddon) &&
              "rounded-none",
            !inputGroupContext.isLeftAddon && "rounded-l-md",
            !inputGroupContext.isRightAddon && "rounded-r-md",
            className,
          )}
          onClick={handleEditField}
          onKeyDown={handleEditField}
        >
          {buttonChild}
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
          onBlur={() => {
            setEditMode(false);
          }}
        />
      </>
    );
  },
);
EditableTextField.displayName = "EditableTextField";
