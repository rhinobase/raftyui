import { ThreadType, createThread, useThread } from "@fibr/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { Button, InputField } from "@rafty/ui";
import {
  ReactElement,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { FieldWrapper } from "../FieldWrapper";
import { InputWrapper } from "../InputWrapper";

const ICON = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

// export type EditableTextField = Omit<InputField, "type"> &
//   Omit<InputWrapper, "size"> & {
//     editIcon?: ReactElement;
//   } & ThreadWithNameType;

// export const EditableTextField = forwardRef<
//   HTMLInputElement,
//   EditableTextField
// >(
//   (
//     {
//       size = "md",
//       prefixIcon,
//       prefixText,
//       suffixIcon,
//       suffixText,
//       editIcon,
//       value,
//       onChange,
//       onBlur,
//       onKeyDown,
//       ...props
//     },
//     forwardedRef,
//   ) => {
//     const [isOpen, setOpen] = useState(false);
//     const [val, setVal] = useState(value);

//     const change = (event: React.ChangeEvent<HTMLInputElement>) => {
//       setVal(event.target.value);
//       onChange?.(event);
//     };

//     const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//       event.key === "Escape" && setOpen(false);
//       onKeyDown?.(event);
//     };

//     const blure = (event: React.FocusEvent<HTMLInputElement, Element>) => {
//       setOpen(false);
//       onBlur?.(event);
//     };

//     useEffect(() => {
//       if (isOpen) document.getElementById("editText")?.focus();
//     }, [isOpen]);

//     return (
//       <FieldWrapper name={props.name} label={props.label}>
//         <InputWrapper
//           size={size}
//           prefixIcon={prefixIcon}
//           prefixText={prefixText}
//           suffixIcon={suffixIcon}
//           suffixText={suffixText}
//         >
//           {isOpen ? (
//             <InputField
//               {...props}
//               id="editText"
//               type="text"
//               value={val}
//               onChange={change}
//               onKeyDown={keyDown}
//               onBlur={blure}
//               ref={forwardedRef}
//             />
//           ) : (
//             <Button
//               size={size}
//               className="!w-full !justify-between"
//               onClick={() => setOpen((prev) => !prev)}
//               rightIcon={editIcon ?? <PencilIcon className={ICON[size]} />}
//             >
//               {val ?? "Enter Value"}
//             </Button>
//           )}
//         </InputWrapper>
//       </FieldWrapper>
//     );
//   },
// );
// EditableTextField.displayName = "EditableTextField";

export type EditableTextField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  prefixIcon?: ReactNode;
  prefixText?: string;
  suffixIcon?: ReactNode;
  suffixText?: string;
};

export function EditableTextField() {
  const [isOpen, setOpen] = useState(false);
  const [val, setVal] = useState<string>();

  // Getting component config
  const config = useThread<EditableTextField>();
  const { size = "md" } = config;

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  const keyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Escape" && setOpen(false);
  };

  const blure = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) document.getElementById("editText")?.focus();
  }, [isOpen]);

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputWrapper
        size={size}
        prefixText={config.prefixText}
        prefixIcon={config.prefixIcon}
        suffixIcon={config.suffixIcon}
        suffixText={config.suffixText}
      >
        {isOpen ? (
          <InputField
            id="editText"
            type="text"
            value={val}
            onChange={change}
            onKeyDown={keyDown}
            onBlur={blure}
          />
        ) : (
          <Button
            className="w-full justify-between"
            onClick={() => setOpen((prev) => !prev)}
            rightIcon={<PencilIcon className="h-4 w-4" />}
          >
            {val ?? "Enter Value"}
          </Button>
        )}
      </InputWrapper>
    </FieldWrapper>
  );
}

export const editableText = createThread<EditableTextField>("editable-text");
