import { ErrorMessage } from "@hookform/error-message";
import {
  ErrorMessage as RaftyErrorMessage,
  FieldControl,
  Label,
  Text,
} from "@rafty/ui";
import { Fragment, PropsWithChildren, forwardRef } from "react";
import { useFormContext } from "react-hook-form";

export type FieldWrapper = FieldControl & {
  label?: string;
  description?: string;
};

export const FieldWrapper = forwardRef<HTMLDivElement, FieldWrapper>(
  ({ label, description, children, ...props }, forwardedRef) => {
    const LabelAndDescriptionWrapper =
      label && description
        ? ({ children }: PropsWithChildren) => <div>{children}</div>
        : Fragment;

    return (
      <div className="w-full space-y-1">
        <FieldControl {...props} ref={forwardedRef}>
          <LabelAndDescriptionWrapper>
            {label && <Label className="leading-3">{label}</Label>}
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
FieldWrapper.displayName = "FieldWrapper";

type FieldErrorMessage = Pick<FieldWrapper, "name">;

function FieldErrorMessage({ name }: FieldErrorMessage) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <RaftyErrorMessage>{message}</RaftyErrorMessage>}
    />
  );
}
