"use client";
import { Button } from "@rafty/ui";
import { KeyboardEventHandler, MouseEventHandler, forwardRef } from "react";
import { useComboboxContext } from "./context";

export const ClearButton = forwardRef<HTMLButtonElement, Button>(
  (
    {
      children,
      size = "sm",
      variant = "ghost",
      colorScheme = "error",
      ...props
    },
    forwardedRef,
  ) => {
    const { type, value, onChange, isDisabled, isLoading, isReadonly } =
      useComboboxContext();

    const disabled = isDisabled || isReadonly || isLoading;

    let buttonText;
    if (type === "single") buttonText = "Clear";
    else buttonText = "Clear All";

    const clearAll: MouseEventHandler<HTMLButtonElement> &
      KeyboardEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault();
      event.stopPropagation();
      onChange(null);
    };

    if (value.length > 0)
      return (
        <Button
          {...props}
          size={size}
          variant={variant}
          colorScheme={colorScheme}
          isDisabled={disabled}
          onClick={clearAll}
          onKeyDown={(e) => e.key === "Enter" && clearAll(e)}
          ref={forwardedRef}
        >
          {children ?? buttonText}
        </Button>
      );
  },
);
ClearButton.displayName = "ClearButton";
