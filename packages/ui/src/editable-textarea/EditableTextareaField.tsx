"use client";
import {
  type ReactNode,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { useFieldControlContext } from "../field-control";
import { Textarea, textareaClasses } from "../textarea";
import { classNames, eventHandler, getValue, mergeRefs } from "../utils";

export type EditableTextareaField = Omit<
  Textarea,
  "Unstyled" | "onChange" | "onBlur" | "onKeyDown"
> & {
  onChange?: (value: string | undefined) => void;
};

export const EditableTextareaField = forwardRef<
  HTMLTextAreaElement,
  EditableTextareaField
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
    const textareaRef = useRef<HTMLTextAreaElement>(null);
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

    useEffect(() => {
      if (isEditMode) textareaRef.current?.focus();
      else setInputValue(textareaRef.current?.value);
    }, [isEditMode]);

    const handleEditField = eventHandler(() => {
      setEditMode(true);
    });

    let buttonChild: ReactNode;

    if (inputValue) {
      if (inputValue !== "") buttonChild = inputValue;
    } else buttonChild = "Enter value";

    console.log(inputValue);

    return (
      <>
        <pre
          className={classNames(
            textareaClasses({
              size,
              variant,
              invalid,
            }),
            isEditMode && "hidden",
            "text-secondary-600 dark:text-secondary-200 hover:bg-secondary-300 dark:hover:bg-secondary-400/80 min-h-0 w-full cursor-pointer text-sm font-medium",
            className,
          )}
          onClick={handleEditField}
          onKeyDown={handleEditField}
          style={{ fontFamily: "inherit" }}
        >
          {buttonChild}
        </pre>
        <Textarea
          {...props}
          size={size}
          variant={variant}
          isInvalid={invalid}
          className={classNames(!isEditMode && "hidden", className)}
          ref={mergeRefs(textareaRef, forwardedRef)}
          onKeyDown={(event) => {
            if (
              event.key === "Escape" ||
              (event.shiftKey && event.key === "Enter")
            )
              setEditMode(false);
          }}
          onBlur={() => {
            setEditMode(false);
          }}
        />
      </>
    );
  },
);
EditableTextareaField.displayName = "EditableTextareaField";

/*            if (
              event.key === "Escape" ||
              (event.shiftKey && event.key === "Enter")
            )
 */
