import { ThreadType, createThread, useThread } from "@fibr/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Button, Textarea } from "@rafty/ui";
import { ReactElement, useEffect, useState } from "react";
import { FieldWrapper } from "../FieldWrapper";

const ICON = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

// export type EditableTextareaField = Textarea & {
//   editIcon?: ReactElement;
// };

// export const EditableTextareaField = forwardRef<
//   HTMLTextAreaElement,
//   EditableTextareaField
// >(
//   (
//     { size = "md", className, editIcon, onChange, onKeyDown, onBlur, ...props },
//     forwardedRef,
//   ) => {
//     const [isOpen, setOpen] = useState(false);
//     const [val, setVal] = useState<string>();

//     const change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//       setVal(event.target.value);
//       onChange?.(event);
//     };

//     const keyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
//       event.key === "Escape" && setOpen(false);
//       onKeyDown?.(event);
//     };

//     const blure = (event: React.FocusEvent<HTMLTextAreaElement, Element>) => {
//       setOpen(false);
//       onBlur?.(event);
//     };

//     useEffect(() => {
//       if (isOpen)
//         document.getElementById("textArea")?.focus({ preventScroll: true });
//     }, [isOpen]);

//     return (
//       <>
//         {isOpen ? (
//           <Textarea
//             {...props}
//             id="textArea"
//             size={size}
//             value={val}
//             onChange={change}
//             onKeyDown={keyDown}
//             onBlur={blure}
//             className={classNames("pr-10", className)}
//             ref={forwardedRef}
//           />
//         ) : (
//           <Button
//             size={size}
//             className="!w-full !justify-between"
//             onClick={() => setOpen((prev) => !prev)}
//             rightIcon={editIcon ?? <PencilIcon className={ICON[size]} />}
//           >
//             {val ?? "Enter Value"}
//           </Button>
//         )}
//       </>
//     );
//   },
// );
// EditableTextareaField.displayName = "EditableTextareaField";

export type EditableTextareaField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  editIcon?: ReactElement;
};

export function EditableTextareaField() {
  const [isOpen, setOpen] = useState(false);
  const [val, setVal] = useState<string>();

  // Getting component config
  const config = useThread<EditableTextareaField>();
  const { size = "md" } = config;

  const change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(event.target.value);
  };

  const keyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    event.key === "Escape" && setOpen(false);
  };

  const blure = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen)
      document.getElementById("textArea")?.focus({ preventScroll: true });
  }, [isOpen]);

  return (
    <FieldWrapper name={config.name} label={config.label}>
      {isOpen ? (
        <Textarea
          id="textArea"
          value={val}
          onChange={change}
          onKeyDown={keyDown}
          onBlur={blure}
          className="pr-10"
          size={size}
        />
      ) : (
        <Button
          className="w-full justify-between"
          onClick={() => setOpen((prev) => !prev)}
          rightIcon={config.editIcon ?? <PencilIcon className={ICON[size]} />}
        >
          {val ?? "Enter Value"}
        </Button>
      )}
    </FieldWrapper>
  );
}

export const editableTextarea =
  createThread<EditableTextareaField>("editable-textarea");
