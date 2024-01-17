"use client";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorMessage as RaftyErrorMessage } from "@rafty/ui";
import React from "react";
import { useFormContext } from "react-hook-form";

type FieldErrorMessage = { name: string };

export function FieldErrorMessage({ name }: FieldErrorMessage) {
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
