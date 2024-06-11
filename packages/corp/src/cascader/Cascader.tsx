"use client";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  InputField,
  InputGroup,
  type SizeType,
  Suffix,
  type ValueOrFunction,
  classNames,
  eventHandler,
  mergeRefs,
  getValue as raftyGetValue,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef, useRef, useState } from "react";
import { useDropdown } from "./useDropdown";
import {
  type CascaderItemType,
  type NormalizeItem,
  type ValueType,
  useNormalizedItems,
} from "./useNormalizedItems";

export type Cascader = {
  items: CascaderItemType[];
  onValueChange?: (
    value?: ValueType,
    selectedItems?: Omit<CascaderItemType, "children">[],
  ) => void;
  separator?: string;
  value?: ValueType;
  name?: string;
  size?: SizeType;
  placeholder?: string;
  isDisabled?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  defaultValue?: ValueType;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export const Cascader = forwardRef<HTMLDivElement, Cascader>(function Cascader(
  {
    items = [],
    onValueChange,
    separator = " / ",
    value,
    defaultValue,
    size = "md",
    isDisabled = false,
    isReadOnly = false,
    className,
    ...props
  },
  forwardedRef,
) {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<ValueType | undefined>(defaultValue);

  const disabled = raftyGetValue(isDisabled);
  const readOnly = raftyGetValue(isReadOnly);

  const { isDropdownVisible, toggleDropdownVisible } = useDropdown(ref);

  const { normalizeItem, getSelectedItems } = useNormalizedItems({
    value: "value",
    label: "label",
    children: "children",
  });

  let inputValue = "";
  if (selected) {
    const selectedItems = getSelectedItems(items, selected);
    inputValue = selectedItems.map(({ label }) => label).join(separator);
  }

  const handleSelect = (item: CascaderItemType) =>
    eventHandler(() => {
      if (!onValueChange || item.disabled) return;

      const selectedItems = getSelectedItems(items, item.value);

      onValueChange(selectedItems.slice(-1)[0].value, selectedItems);
      setSelected(item.value);
      toggleDropdownVisible(false);
    });

  return (
    <div
      className={classNames("relative w-full cursor-pointer", className)}
      ref={mergeRefs(forwardedRef, ref)}
    >
      <CascaderInput
        name={props.name}
        size={size}
        placeholder={props.placeholder}
        disabled={disabled}
        readOnly={readOnly}
        inputValue={inputValue}
        selected={selected}
        openMenu={() => {
          if (!readOnly) toggleDropdownVisible();
        }}
        onClear={() => {
          onValueChange?.(undefined, undefined);
          setSelected(undefined);
        }}
      />
      {isDropdownVisible && (
        <CascadeContent
          items={items}
          size={size}
          onSelect={handleSelect}
          normalizeItem={normalizeItem}
        />
      )}
    </div>
  );
});

const cascaderDownButtonClasses = cva(
  "stroke-secondary-400 dark:stroke-secondary-600 stroke-[3]",
  {
    variants: {
      size: {
        sm: "size-3",
        md: "size-3.5",
        lg: "size-4",
      },
    },
  },
);

const cascaderClearButtonClasses = cva("absolute p-1", {
  variants: {
    size: {
      sm: "size-[18px] p-0.5 right-7 rounded-sm",
      md: "size-6 p-1 right-8 rounded-base",
      lg: "size-[26px] p-1 right-9 rounded-base",
    },
    readOnly: {
      true: "pointer-events-none cursor-default",
      false: "",
    },
  },
});

type CascaderInput = {
  name?: string;
  placeholder?: string;
  size: SizeType;
  disabled?: boolean;
  readOnly?: boolean;
  selected?: ValueType;
  inputValue: string;
  openMenu: () => void;
  onClear: () => void;
};

function CascaderInput(props: CascaderInput) {
  return (
    <InputGroup size={props.size} className="[&>div]:flex [&>div]:items-center">
      <InputField
        name={props.name}
        placeholder={props.placeholder}
        value={props.inputValue}
        onClick={props.openMenu}
        onKeyDown={(event) => {
          if (event.key === "Enter") props.openMenu();
        }}
        disabled={props.disabled}
        readOnly
        className="cursor-pointer"
      />
      <Suffix>
        <ChevronDownIcon
          className={cascaderDownButtonClasses({ size: props.size })}
        />
      </Suffix>
      {props.selected && (
        <Button
          variant="ghost"
          size="icon"
          colorScheme="error"
          isDisabled={props.disabled}
          onClick={props.onClear}
          onKeyDown={(event) => {
            if (event.key === "Enter") props.onClear();
          }}
          className={cascaderClearButtonClasses({
            size: props.size,
            readOnly: props.readOnly,
          })}
        >
          <XMarkIcon className="size-full stroke-[3]" />
        </Button>
      )}
    </InputGroup>
  );
}

const cascaderContentClasses = cva(
  "dark:bg-secondary-800 dark:text-white absolute bg-white",
  {
    variants: {
      size: {
        sm: "min-w-32 shadow",
        md: "min-w-36 shadow-md",
        lg: "min-w-40 shadow-lg",
      },
    },
  },
);

const cascaderContentItemClasses = cva(
  "flex items-center justify-between gap-1 [&>ul]:left-full [&>ul]:top-0 [&>ul]:hidden [&>ul]:min-h-full [&>ul]:hover:block",
  {
    variants: {
      size: {
        sm: "text-xs px-2.5 py-2",
        md: "text-sm px-3.5 py-2.5",
        lg: "text-base px-[18px] py-3",
      },
      disabled: {
        true: "cursor-not-allowed opacity-60",
        false:
          "hover:bg-secondary-100 dark:hover:bg-secondary-700 cursor-pointer",
      },
    },
  },
);

const cascaderContentItemIconClasses = cva(
  "stroke-secondary-600 dark:stroke-secondary-400 stroke-[2.5]",
  {
    variants: {
      size: {
        sm: "size-2.5",
        md: "size-3",
        lg: "size-3.5",
      },
    },
  },
);

type CascadeContent = {
  items: CascaderItemType[];
  size: SizeType;
  onSelect: (
    item: CascaderItemType,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  ) => (event: React.BaseSyntheticEvent<object, any, any>) => void;
  normalizeItem: (item: CascaderItemType) => NormalizeItem;
};

function CascadeContent({
  size,
  items,
  normalizeItem,
  onSelect,
}: CascadeContent) {
  const contentRender = (items: CascaderItemType[]) => (
    <ul className={cascaderContentClasses({ size })}>
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
              key={`${index}-${value}`}
              className={cascaderContentItemClasses({
                size,
                disabled,
              })}
            >
              {label}
              <ChevronRightIcon
                className={cascaderContentItemIconClasses({ size })}
              />
              {contentRender(children)}
            </li>
          );

        return (
          <li
            key={`${index}-${value}`}
            className={cascaderContentItemClasses({ size, disabled })}
            onClick={onSelect(item)}
            onKeyDown={onSelect(item)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );

  return contentRender(items);
}
