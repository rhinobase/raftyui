import { ThreadType, createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { type ReactNode } from "react";
import { FieldWrapper } from "../FieldWrapper";
import { InputWrapper } from "../InputWrapper";

// export type TextField = Omit<InputField, "type"> & Omit<InputWrapper, "size">;

// export const TextField = forwardRef<HTMLInputElement, TextField>(
//   (
//     { size = "md", prefixIcon, prefixText, suffixIcon, suffixText, ...props },
//     forwardedRef,
//   ) => {
//     return (
//       <InputWrapper
//         size={size}
//         prefixIcon={prefixIcon}
//         prefixText={prefixText}
//         suffixIcon={suffixIcon}
//         suffixText={suffixText}
//       >
//         <InputField {...props} type="text" ref={forwardedRef} />
//       </InputWrapper>
//     );
//   },
// );
// TextField.displayName = "TextField";

export type StringField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  prefixIcon?: ReactNode;
  prefixText?: string;
  suffixIcon?: ReactNode;
  suffixText?: string;
};

export function StringField() {
  // Getting component config
  const config = useThread<StringField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputWrapper
        size="md"
        prefixText={config.prefixText}
        prefixIcon={config.prefixIcon}
        suffixIcon={config.suffixIcon}
        suffixText={config.suffixText}
      >
        <InputField size={size} />
      </InputWrapper>
    </FieldWrapper>
  );
}

export const string = createThread<StringField>("string");
