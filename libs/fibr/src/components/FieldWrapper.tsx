import { FieldControl, Label, Text, classNames } from "@rafty/ui";
import { Fragment, PropsWithChildren } from "react";
import { FieldErrorMessage } from "./FieldErrorMessage";
import { TooltipWrapper } from "./TooltipWrapper";

export type FieldWrapper = {
  className?: string;
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
  hidden?: boolean;
};

export function FieldWrapper({
  name,
  label,
  description,
  className,
  required,
  disabled,
  children,
  tooltip,
  hidden,
}: PropsWithChildren<FieldWrapper>) {
  const LabelAndDescriptionWrapper =
    label && description
      ? ({ children }: PropsWithChildren) => <div>{children}</div>
      : Fragment;

  const component = (
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
  );

  if (tooltip)
    return <TooltipWrapper content={tooltip}>{component}</TooltipWrapper>;

  return component;
}
