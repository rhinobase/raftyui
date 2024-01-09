import { InputGroup, LeftAddon, Prefix, RightAddon, Suffix } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { PropsWithChildren, ReactNode } from "react";

const textClasses = cva("opacity-70", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
});

export type InputWrapper = {
  size: "sm" | "md" | "lg";
  prefixText?: string;
  suffixText?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
};

export function InputWrapper({
  size,
  prefixIcon,
  prefixText,
  suffixIcon,
  suffixText,
  children,
}: PropsWithChildren<InputWrapper>) {
  return (
    <InputGroup size={size}>
      {prefixText && (
        <LeftAddon className={textClasses({ size })}>{prefixText}</LeftAddon>
      )}
      {prefixIcon && <Prefix className="opacity-70">{prefixIcon}</Prefix>}
      {children}
      {suffixIcon && <Suffix className="opacity-70">{suffixIcon}</Suffix>}
      {suffixText && (
        <RightAddon className={textClasses({ size })}>{suffixText}</RightAddon>
      )}
    </InputGroup>
  );
}
