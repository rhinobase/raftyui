import { CheckIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { forwardRef, useEffect, useReducer } from "react";
import { ScrollArea, ScrollAreaList } from "../scrollarea";
import type { ValueOrFunction } from "../types";
import { classNames, eventHandler, getValue } from "../utils";

export type Listbox = {
  itemSize?: number;
  items: {
    value: string;
    label?: string;
  }[];
  className?: HTMLDivElement["className"];
  isDisabled?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  hidden?: ValueOrFunction;
  name?: string;
  size?: "sm" | "md" | "lg";
} & (
  | {
      value?: string;
      defaultValue?: string;
      onValueChange?: (value?: string) => void;
      type?: "single";
    }
  | {
      value?: string[];
      defaultValue?: string[];
      onValueChange?: (value?: string[]) => void;
      type: "multi";
    }
);

const listboxItemClasses = cva(
  "dark:text-secondary-100 dark:border-secondary-700 border-secondary-300 select-none flex items-center justify-between border-b px-4 transition-all ease-in-out",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
      disabled: {
        true: "",
        false: "",
      },
      selected: {
        true: "",
        false: "",
      },
      readOnly: {
        true: "",
        false: "",
      },
      loading: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        disabled: false,
        selected: true,
        readOnly: [true, false],
        loading: false,
        className:
          "bg-primary-50/60 hover:bg-primary-50 dark:bg-primary-800 dark:hover:bg-primary-700",
      },
      {
        disabled: true,
        className: "bg-secondary-200/40 dark:bg-secondary-800 opacity-60",
      },
      {
        loading: true,
        className: "bg-secondary-200/40 dark:bg-secondary-800 opacity-60",
      },
      {
        disabled: false,
        selected: [true, false],
        readOnly: false,
        loading: false,
        className: "cursor-pointer",
      },
      {
        disabled: false,
        readOnly: [true, false],
        selected: false,
        loading: false,
        className: "hover:bg-secondary-100/60 dark:hover:bg-secondary-800",
      },
    ],
    defaultVariants: {
      disabled: false,
      selected: false,
      readOnly: false,
      loading: false,
    },
  },
);

const listboxClasses = cva(
  "dark:border-secondary-700 border-secondary-300 dark:bg-secondary-900 w-full overflow-hidden rounded-md border bg-white",
  {
    variants: {
      size: {
        sm: "h-[135px]",
        md: "h-[180px]",
        lg: "h-[225px]",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
      loading: {
        true: "cursor-progress",
        false: "",
      },
    },
  },
);

const checkIconClasses = cva("stroke-2", {
  variants: {
    size: {
      sm: "size-3",
      md: "size-4",
      lg: "size-5",
    },
    loading: {
      true: "stroke-secondary-500/70 dark:stroke-secondary-400",
      false: "",
    },
    disabled: {
      true: "stroke-secondary-500/70 dark:stroke-secondary-400",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      loading: false,
      className: "stroke-primary-500 dark:stroke-primary-300",
    },
  ],
});

const listboxItemSizeClasses = {
  size: {
    sm: 30,
    md: 40,
    lg: 50,
  },
};

export const Listbox = forwardRef<HTMLDivElement, Listbox>(
  (
    {
      name,
      items,
      className,
      hidden: isHidden = false,
      isDisabled = false,
      isLoading = false,
      isReadOnly = false,
      itemSize,
      defaultValue,
      onValueChange,
      type,
      value,
      size = "md",
    },
    forwardedRef,
  ) => {
    const val = value ?? defaultValue;

    const initValue = val ? (Array.isArray(val) ? val : [val]) : [];

    const isMulti = type === "multi";

    const [selected, setSelected] = useReducer(
      (prev: string[], cur: string) => {
        let selectedValues = [...prev];

        if (isMulti) {
          if (selectedValues.includes(cur))
            selectedValues = selectedValues.filter((val) => val !== cur);
          else selectedValues.push(cur);
        } else {
          selectedValues = [cur];
        }

        return selectedValues;
      },
      initValue,
    );

    const disabled = getValue(isDisabled);
    const loading = getValue(isLoading);
    const readOnly = getValue(isReadOnly);
    const hidden = getValue(isHidden);

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
      if (isMulti) onValueChange?.(selected);
      else onValueChange?.(selected.length > 0 ? selected[0] : undefined);
    }, [selected]);

    const handleSelect = (index: number) => {
      if (readOnly || disabled || loading) return;

      const value = items[index].value;

      return eventHandler(() => setSelected(value));
    };

    return (
      <ScrollArea
        id={name}
        hidden={hidden}
        itemCount={items.length}
        itemSize={listboxItemSizeClasses.size[size] ?? itemSize}
        className={classNames(
          listboxClasses({ disabled, loading, size }),
          className,
        )}
        ref={forwardedRef}
      >
        <ScrollAreaList>
          {({ index, style }) => {
            const isSelected = selected.includes(items[index].value);

            return (
              <div
                key={index}
                onClick={handleSelect(index)}
                onKeyDown={handleSelect(index)}
                className={listboxItemClasses({
                  disabled,
                  selected: isSelected,
                  readOnly,
                  loading,
                  size,
                })}
                style={style}
              >
                {items[index].label ?? items[index].value}
                {isSelected && (
                  <CheckIcon
                    className={checkIconClasses({ size, disabled, loading })}
                  />
                )}
              </div>
            );
          }}
        </ScrollAreaList>
      </ScrollArea>
    );
  },
);
