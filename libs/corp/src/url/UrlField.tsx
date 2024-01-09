import { InputField } from "@rafty/ui";
import { forwardRef } from "react";
import { InputWrapper } from "../InputWrapper";

export type UrlField = Omit<InputField, "type"> & Omit<InputWrapper, "size">;

export const UrlField = forwardRef<HTMLInputElement, UrlField>(
  (
    { size = "md", prefixIcon, suffixIcon, prefixText, suffixText, ...props },
    forwardedRef,
  ) => {
    return (
      <InputWrapper
        size={size}
        prefixText={prefixText}
        prefixIcon={prefixIcon}
        suffixIcon={suffixIcon}
        suffixText={suffixText}
      >
        <InputField {...props} type="url" ref={forwardedRef} />
      </InputWrapper>
    );
  },
);
UrlField.displayName = "UrlField";
