"use client";
import { eventHandler } from "@rafty/shared";
import { Button, classNames } from "@rafty/ui";
import { forwardRef } from "react";
import { useComboboxContext } from "./context";

export const ClearButton = forwardRef<HTMLButtonElement, Button>(
  (
    {
      children,
      size = "sm",
      variant = "ghost",
      colorScheme = "error",
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const {
      type,
      selected,
      onSelectionChange,
      isDisabled,
      isLoading,
      isReadonly,
    } = useComboboxContext();

    if (selected.length === 0 || isDisabled || isReadonly || isLoading) return;

    let buttonText = "Clear";
    if (type === "multi") buttonText = "Clear All";

    // Remove all the selected items
    const clearAll = eventHandler(() => onSelectionChange(null));

    return (
      <Button
        {...props}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        onClick={clearAll}
        onKeyDown={clearAll}
        className={classNames("!font-medium", className)}
        ref={forwardedRef}
      >
        {children ?? buttonText}
      </Button>
    );
  },
);

ClearButton.displayName = "ClearButton";
