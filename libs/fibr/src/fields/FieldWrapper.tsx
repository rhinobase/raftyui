"use client";
import { ErrorMessage } from "@hookform/error-message";
import {
  ErrorMessage as RaftyErrorMessage,
  FieldControl,
  Label,
  Text,
  classNames,
} from "@rafty/ui";
import React from "react";
import { useFormContext } from "react-hook-form";

export type FieldWrapper = {
  children: React.ReactNode;
  className?: string;
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
};

export function FieldWrapper({
  name,
  children,
  label,
  description,
  className,
  required,
}: FieldWrapper) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FieldControl
      name={name}
      className={classNames("!gap-2", className)}
      isRequired={required}
    >
      {label && description && (
        <div>
          <Label className="!leading-3">{label}</Label>
          <Text className="text-sm leading-[10px] opacity-70">
            {description}
          </Text>
        </div>
      )}
      {label && !description && <Label className="!leading-3">{label}</Label>}
      {children}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <RaftyErrorMessage>{message}</RaftyErrorMessage>
        )}
      />
    </FieldControl>
  );
}
