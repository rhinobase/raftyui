import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { forwardRef } from "react";
import { InputField } from "../input-field";
import { InputGroup, Prefix } from "../input-group";
import { classNames } from "../utils";

const ICON_CLASSES = {
  sm: "h-4 w-4",
  md: "h-[18px] w-[18px]",
  lg: "h-5 h-5",
};

export type SearchField = Omit<InputField, "value" | "onChange" | "type"> & {
  search?: InputField["value"];
  onSearch?: (value: string) => void;
};

export const SearchField = forwardRef<HTMLInputElement, SearchField>(
  ({ search, onSearch, size = "md", ...props }, forwardedRef) => {
    return (
      <InputGroup className="w-full" size={size}>
        <Prefix>
          <MagnifyingGlassIcon
            className={classNames(
              ICON_CLASSES[size],
              "stroke-2 opacity-40 dark:stroke-white",
            )}
          />
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
