import { ThreadWithNameType } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { forwardRef } from "react";
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

export function UrlField(props: ThreadWithNameType) {
  return (
    <FieldWrapper name={props.name} label={props.label}>
      <InputWrapper size="md">
        <InputField type="url" />
      </InputWrapper>
    </FieldWrapper>
  );
}
