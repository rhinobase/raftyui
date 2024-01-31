import { useThread } from "@fibr/react";
import { FieldControl, Label, Text, classNames } from "@rafty/ui";
import { Fragment, PropsWithChildren } from "react";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { TooltipWrapper, TooltipWrapperProps } from "./TooltipWrapper";

export type FieldWrapperProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = TooltipWrapperProps<
  {
    name: string;
    label?: string;
    description?: string;
    required?: boolean;
    disabled?: boolean;
    hidden?: boolean;
  } & T
>;

export function FieldWrapper({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  const { name, label, description, required, disabled, hidden } =
    useThread<FieldWrapperProps>();

  const LabelAndDescriptionWrapper =
    label && description
      ? ({ children }: PropsWithChildren) => <div>{children}</div>
      : Fragment;

  return (
    <TooltipWrapper>
      <FieldControl
        name={name}
        className={classNames(hidden && "hidden", "gap-2", className)}
        isRequired={required}
        isDisabled={disabled}
      >
        <LabelAndDescriptionWrapper>
          {label && <Label className="leading-3">{label}</Label>}
          {description && (
            <Text className="text-secondary-600 dark:text-secondary-400 text-xs font-medium leading-[10px]">
              {description}
            </Text>
          )}
        </LabelAndDescriptionWrapper>
        {children}
        <FieldErrorMessage name={name} />
      </FieldControl>
    </TooltipWrapper>
  );
}
