"use client";
import { Button, classNames } from "@rafty/ui";
import { KeyboardEventHandler, MouseEventHandler, forwardRef } from "react";
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

    let buttonText;
    if (type === "single") buttonText = "Clear";
    else buttonText = "Clear All";

    const clearAll: MouseEventHandler<HTMLButtonElement> &
      KeyboardEventHandler<HTMLButtonElement> = (event) => {
      // On keyboard, work only when enter is pressed
      if ("key" in event && event.key !== "Enter") return;

      event.preventDefault();
      event.stopPropagation();
      onSelectionChange(null);
    };

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
