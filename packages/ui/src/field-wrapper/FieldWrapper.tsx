import { ErrorMessage } from "@hookform/error-message";
import { Fragment, type PropsWithChildren, forwardRef } from "react";
import { ErrorMessage as RaftyErrorMessage } from "../error-message";
import { FieldControl } from "../field-control";
import { Label } from "../label";
import { Text } from "../text";
import { classNames } from "../utils";

export type FieldWrapper = FieldControl & {
  label?: string;
  description?: string;
};

export const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapper>(
  function FieldWrapper(
    { label, description, children, className, ...props },
    forwardedRef,
  ) {
    const LabelAndDescriptionWrapper =
      label && description
        ? ({ children }: PropsWithChildren) => <div>{children}</div>
        : Fragment;

    return (
      <div className={classNames("w-full space-y-1", className)}>
        <FieldControl {...props} ref={forwardedRef}>
          <LabelAndDescriptionWrapper>
            {label && <Label className="leading-snug">{label}</Label>}
            {description && (
              <Text className="text-secondary-600 dark:text-secondary-400 text-xs font-medium">
                {description}
              </Text>
            )}
          </LabelAndDescriptionWrapper>
          {children}
        </FieldControl>
        <FieldErrorMessage name={props.name} />
      </div>
    );
  },
);

type FieldErrorMessage = Pick<FieldWrapper, "name">;

function FieldErrorMessage({ name }: FieldErrorMessage) {
  return (
    <ErrorMessage
      name={name}
      render={({ message }) => <RaftyErrorMessage>{message}</RaftyErrorMessage>}
    />
  );
}
