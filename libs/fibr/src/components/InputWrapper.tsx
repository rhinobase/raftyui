import { InputGroup, LeftAddon, Prefix, RightAddon, Suffix } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { PropsWithChildren, ReactNode } from "react";

const addonTextClasses = cva(
  "text-secondary-600 dark:text-secondary-400 font-medium",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
  },
);

export type InputWrapper = PropsWithChildren<{
  size: "sm" | "md" | "lg";
  prefixText?: string;
  suffixText?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}>;

export const InputWrapper = ({
  size,
  prefixIcon,
  prefixText,
  suffixIcon,
  suffixText,
  children,
}: InputWrapper) => (
  <InputGroup size={size} className="w-full">
    {prefixText && (
      <LeftAddon className={addonTextClasses({ size })}>{prefixText}</LeftAddon>
    )}
    {prefixIcon && <Prefix>{prefixIcon}</Prefix>}
    {children}
    {suffixIcon && <Suffix>{suffixIcon}</Suffix>}
    {suffixText && (
      <RightAddon className={addonTextClasses({ size })}>
        {suffixText}
      </RightAddon>
    )}
  </InputGroup>
);
InputWrapper.displayName = "InputWrapper";
