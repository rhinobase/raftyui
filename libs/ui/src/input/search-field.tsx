import React, { useRef } from "react";
import { AriaSearchFieldProps, useSearchField, useButton } from "react-aria";
import { useSearchFieldState } from "react-stately";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { InputGroup, Suffix } from "./input-group";
import { InputField } from "./input-field";

// Search Field

export type SearchField = Omit<AriaSearchFieldProps, "size"> & {
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const SearchField = ({
  className,
  variant = "outline",
  size = "md",
  ...props
}: SearchField) => {
  const state = useSearchFieldState(props);
  const ref = useRef(null);
  const { inputProps, clearButtonProps } = useSearchField(props, state, ref);

  const { buttonProps } = useButton(clearButtonProps, ref);

  return (
    <InputGroup>
      <InputField
        {...inputProps}
        variant={variant}
        size={size}
        className={className}
        ref={ref}
      />
      <Suffix>
        <Button {...buttonProps} variant="ghost" size="icon" className="!z-[2]">
          <XMarkIcon className="h-3 w-3 stroke-[3]" />
        </Button>
      </Suffix>
    </InputGroup>
  );
};
SearchField.displayName = "SearchField";
