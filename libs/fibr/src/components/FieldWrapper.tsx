import { FieldControl, Label, Text, classNames } from "@rafty/ui";
import { Fragment, PropsWithChildren } from "react";
import { FieldErrorMessage } from "./FieldErrorMessage";

export type FieldWrapper = {
  className?: string;
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
};

export function FieldWrapper({
  name,
  label,
  description,
  className,
  required,
  children,
}: PropsWithChildren<FieldWrapper>) {
  const Componenet =
    label && description
      ? ({ children }: PropsWithChildren) => <div>{children}</div>
      : Fragment;

  return (
    <FieldControl
      name={name}
      className={classNames("gap-2", className)}
      isRequired={required}
    >
      {label && (
        <Componenet>
          <Label className="leading-3">{label}</Label>
          {description && (
            <Text className="text-sm leading-[10px] opacity-70">
              {description}
            </Text>
          )}
        </Componenet>
      )}
      {children}
      <FieldErrorMessage name={name} />
    </FieldControl>
  );
}
