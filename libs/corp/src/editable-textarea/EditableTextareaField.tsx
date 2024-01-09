import { CheckIcon, PencilIcon } from "@heroicons/react/24/outline";
import { Button, Textarea, classNames } from "@rafty/ui";
import { ReactNode, forwardRef, useState } from "react";

const ICON = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export type EditableTextareaField = Omit<
  Textarea,
  "isReadOnly" | "readOnly"
> & {
  editIcon?: ReactNode;
};

export const EditableTextareaField = forwardRef<
  HTMLTextAreaElement,
  EditableTextareaField
>(({ size = "md", className, editIcon, ...props }, forwardedRef) => {
  const [isOpen, setOpen] = useState(true);

  const onClick = () => {
    if (isOpen) document.getElementById("textArea")?.focus();
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <Textarea
        {...props}
        size={size}
        ref={forwardedRef}
        className={classNames("pr-10", className)}
        isReadOnly={isOpen}
        id="textArea"
      />
      <Button
        size="icon"
        variant="ghost"
        className="text-secondary-600 dark:text-secondary-500 absolute right-3 top-2 !p-1"
        onClick={onClick}
      >
        {isOpen ? (
          editIcon ?? <PencilIcon className={ICON[size]} />
        ) : (
          <CheckIcon className={ICON[size]} />
        )}
      </Button>
    </div>
  );
});
EditableTextareaField.displayName = "EditableTextareaField";
