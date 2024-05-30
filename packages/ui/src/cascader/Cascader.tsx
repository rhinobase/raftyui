"use client";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { classNames, mergeRefs, getValue as raftyGetValue } from "../utils";
import { useDropdown } from "./useDropdown";
import { useNormalizedItems } from "./useNormalizedItems";

export const cascaderDropdownMenu = cva(
  "shadow-md dark:bg-secondary-800 dark:border-secondary-700 dark:text-white absolute",
  {
    variants: {
      size: {
        sm: "min-w-32",
        md: "min-w-40",
        lg: "min-w-52",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const cascaderDropdownMenuItem = cva("", {
  variants: {
    size: {
      sm: "text-sm py-1 px-4 min-h-9",
      md: "text-base px-5 py-2",
      lg: "text-lg py-3 px-6",
    },
    disabled: {
      true: "cursor-not-allowed opacity-60",
      false:
        "hover:bg-secondary-100 dark:hover:bg-secondary-700 cursor-pointer",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const cascaderClearButtonClasses = cva("absolute p-1", {
  variants: {
    size: {
      sm: "size-[18px] p-0.5 right-6 top-1.5 rounded-sm",
      md: "size-6 p-1 right-7 rounded top-2",
      lg: "size-[26px] p-1 right-8 rounded-md top-2.5",
    },
  },
});

const iconClasses = {
  size: {
    sm: "size-3.5",
    md: "size-4",
    lg: "size-5",
  },
};

export const cascaderDownButtonClasses = cva(
  "absolute stroke-secondary-600 dark:stroke-secondary-400 select-none pointer-events-none",
  {
    variants: {
      size: {
        sm: "right-1.5 top-2",
        md: "right-2 rounded top-3",
        lg: "right-2.5 top-3.5",
      },
    },
  },
);

export type FieldNames = {
  value: string;
  label: string;
  children: string;
};

export interface Item {
  value: string | number;
  label: string;
  disabled?: boolean;
  children?: Item[];
}

export interface NormalizeItem extends Item {
  value: string;
  label: string;
  children?: NormalizeItem[];
}

export type Cascader = {
  expandTrigger?: "click" | "hover";
  fieldNames?: FieldNames;
  items: Item[];
  onSelect?: (value?: string, selectedItems?: Omit<Item, "children">[]) => void;
  separator?: string;
  value?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  isDisabled?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  defaultValue?: string;
};

export const Cascader = forwardRef<HTMLDivElement, Cascader>(
  (
    {
      expandTrigger = "click",
      fieldNames = {
        value: "value",
        label: "label",
        children: "children",
      },
      items = [],
      onSelect,
      separator = " / ",
      value,
      defaultValue,
      size = "md",
      isDisabled = false,
      isReadOnly = false,
      ...props
    },
    forwardedRef,
  ) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState(defaultValue);

    console.log(inputValue);

    const disabled = raftyGetValue(isDisabled);

    const { visible, showDropdownMenu, hideDropdownMenu } =
      useDropdown(dropdownRef);
    const { normalizeItem, getSelectedItems } = useNormalizedItems(fieldNames);

    const getValue = () => {
      if (inputValue) {
        const selectedItems = getSelectedItems(items, inputValue);
        return selectedItems
          .map((item) => item[fieldNames.label as keyof Item])
          .join(separator);
      }
      return undefined;
    };

    const handleSelect = (item: Item) => {
      if (!onSelect || item.disabled) return;
      const selectedItems = getSelectedItems(
        items,
        item[fieldNames.value as keyof Item] as string,
      );
      onSelect(
        selectedItems.slice(-1)[0][fieldNames.value as keyof Item] as string,
        selectedItems,
      );
      hideDropdownMenu();
      setInputValue(item[fieldNames.value as keyof Item] as string);
    };

    const renderItems = (items: Item[]) => (
      <ul className={cascaderDropdownMenu({ size })}>
        {items.map((item, index) => {
          const {
            children,
            disabled = false,
            label,
            value,
          } = normalizeItem(item);

          if (Array.isArray(children) && children.length >= 1)
            return (
              <li
                className={cascaderDropdownMenuItem({
                  size,
                  disabled,
                  className:
                    "hover:bg-secondary-100 dark:hover:bg-secondary-700 flex items-center justify-between [&>ul]:left-full [&>ul]:top-0 [&>ul]:hidden [&>ul]:min-h-full [&>ul]:hover:block",
                })}
                key={`${index}-${value}`}
              >
                {label}
                <ChevronRightIcon
                  className={classNames(
                    "stroke-secondary-600 dark:stroke-secondary-400",
                    iconClasses.size[size],
                  )}
                />
                {renderItems(children)}
              </li>
            );

          return (
            <li
              key={`${index}-${value}`}
              className={cascaderDropdownMenuItem({ size, disabled })}
              onClick={() => {
                handleSelect(item);
                setInputValue(item.label);
              }}
              onKeyDown={() => {
                handleSelect(item);
                setInputValue(item.label);
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    );

    const renderInput = () => {
      const commonProps = {
        disabled,
        onClick:
          expandTrigger === "click" && !isReadOnly
            ? showDropdownMenu
            : undefined,
        readOnly: true,
        defaultValue: getValue(),
      };

      return (
        <>
          <InputField
            {...commonProps}
            size={size}
            name={props.name}
            placeholder={props.placeholder}
            className={classNames(
              "relative pr-12",
              !disabled && "cursor-pointer",
            )}
          />
          <ChevronDownIcon
            className={classNames(
              cascaderDownButtonClasses({ size }),
              iconClasses.size[size],
            )}
          />
          {inputValue && (
            <Button
              variant="ghost"
              size="icon"
              colorScheme="error"
              isDisabled={disabled}
              onClick={() => {
                onSelect?.(undefined, undefined);
                setInputValue(undefined);
              }}
              className={cascaderClearButtonClasses({ size })}
            >
              <XMarkIcon className="size-full stroke-[3]" />
            </Button>
          )}
        </>
      );
    };

    return (
      <div
        className="relative w-full select-none"
        ref={mergeRefs(forwardedRef, dropdownRef)}
      >
        {renderInput()}
        {visible && renderItems(items)}
      </div>
    );
  },
);

export default Cascader;
