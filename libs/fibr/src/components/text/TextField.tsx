import { ThreadWithNameType } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { forwardRef } from "react";
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

export function TextField(props: ThreadWithNameType) {
  return (
    <FieldWrapper name={props.name} label={props.label}>
      <InputWrapper size="md">
        <InputField />
      </InputWrapper>
    </FieldWrapper>
  );
}