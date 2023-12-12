import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { InputField } from "../input-field";
import { InputGroup, Prefix } from "../input-group";

// Define a type for the SearchField, extending properties from InputFieldType
export type SearchField = Omit<InputField, "value" | "onChange"> & {
  search?: InputField["value"];
  onSearch?: (value: string) => void;
};

// SearchField component using forwardRef to expose the input element reference
export const SearchField = React.forwardRef<HTMLInputElement, SearchField>(
  ({ search, onSearch, ...props }, forwardedRef) => {
    // Render the SearchField UI with an InputGroup, Prefix icon, and InputField
    return (
      <InputGroup className="!w-full">
        <Prefix>
          <MagnifyingGlassIcon />
        </Prefix>
        <InputField
          {...props}
          type="search"
          value={search}
          onChange={(e) => onSearch?.(e.target.value)}
          ref={forwardedRef}
        />
      </InputGroup>
    );
  },
);

SearchField.displayName = "SearchField";
