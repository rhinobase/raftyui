"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { InputField } from "../input-field";
import { InputGroup, Prefix } from "../input-group";
import { classNames } from "../utils";

const searchFieldIconClasses = cva(
  "stroke-secondary-400 dark:stroke-secondary-500 stroke-2",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-[18px]",
        lg: "size-5",
      },
    },
  },
);

export type SearchField = Omit<InputField, "onChange" | "type"> & {
  onValueChange?: (value: string) => void;
};

export const SearchField = forwardRef<HTMLInputElement, SearchField>(
  function SearchField(
    { onValueChange, size = "md", className, ...props },
    forwardedRef,
  ) {
    return (
      <InputGroup className={classNames("w-full", className)} size={size}>
        <Prefix>
          <MagnifyingGlassIcon className={searchFieldIconClasses({ size })} />
        </Prefix>
        <InputField
          {...props}
          type="search"
          onChange={(e) => onValueChange?.(e.target.value)}
          ref={forwardedRef}
        />
      </InputGroup>
    );
  },
);
