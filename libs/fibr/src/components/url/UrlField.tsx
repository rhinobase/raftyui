import { ThreadType, createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { type ReactNode } from "react";
import { FieldWrapper } from "../FieldWrapper";
import { InputWrapper } from "../InputWrapper";

// export type UrlField = Omit<InputField, "type"> & Omit<InputWrapper, "size">;

// export const UrlField = forwardRef<HTMLInputElement, UrlField>(
//   (
//     { size = "md", prefixIcon, suffixIcon, prefixText, suffixText, ...props },
//     forwardedRef,
//   ) => {
//     return (
//       <InputWrapper
//         size={size}
//         prefixText={prefixText}
//         prefixIcon={prefixIcon}
//         suffixIcon={suffixIcon}
//         suffixText={suffixText}
//       >
//         <InputField {...props} type="url" ref={forwardedRef} />
//       </InputWrapper>
//     );
//   },
// );
// UrlField.displayName = "UrlField";

export type UrlField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  prefixIcon?: ReactNode;
  prefixText?: string;
  suffixIcon?: ReactNode;
  suffixText?: string;
};

export function UrlField() {
  // Getting component config
  const config = useThread<UrlField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputWrapper
        size={size}
        prefixText={config.prefixText}
        prefixIcon={config.prefixIcon}
        suffixIcon={config.suffixIcon}
        suffixText={config.suffixText}
      >
        <InputField type="url" size={size} />
      </InputWrapper>
    </FieldWrapper>
  );
}

export const url = createThread<UrlField>("url");
