import { useThread } from "@fibr/react";
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

export type InputWrapperProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  size?: "sm" | "md" | "lg";
  prefixText?: string;
  suffixText?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
} & T;

export function InputWrapper({ children }: PropsWithChildren) {
  const {
    size = "md",
    prefixIcon,
    suffixIcon,
    prefixText,
    suffixText,
  } = useThread<InputWrapperProps>();

  return (
    <InputGroup size={size} className="w-full">
      {prefixText && (
        <LeftAddon className={addonTextClasses({ size })}>
          {prefixText}
        </LeftAddon>
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
}
