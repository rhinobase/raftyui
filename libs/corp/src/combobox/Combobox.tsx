"use client";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";
import {
  ReactNode,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { ClearButton } from "./ClearButton";
import {
  ComboboxContext,
  ComboboxProvider,
  useComboboxContext,
} from "./context";
import { InternalOptionsRender, InternalTriggerRender } from "./internals";
import { ComboboxOptionType } from "./types";

type RequiredProps = "name" | "options";

type InternalProps =
  | "isOpen"
  | "setOpen"
  | "type"
  | "selected"
  | "onSelectionChange";

// Combobox
export type Combobox = (
  | {
      selected?: string | number;
      onSelectionChange?: (selected?: string | number) => void;
      type: "single";
    }
  | {
      selected?: (string | number)[];
      onSelectionChange?: (selected?: (string | number)[]) => void;
      type: "multi";
    }
) &
  Pick<ComboboxContext, RequiredProps> &
  Partial<Omit<ComboboxContext, RequiredProps | InternalProps>> & {
    triggerRender?: JSX.Element;
    itemRender?: (props: ComboboxOptionType) => ReactNode;
  };

export function Combobox({
  isDisabled = false,
  isInvalid = false,
  isLoading = false,
  isReadonly = false,
  placeholder,
  triggerRender,
  itemRender,
  name,
  options,
  ...props
}: Combobox) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const initValue = props.selected
    ? Array.isArray(props.selected)
      ? props.selected
      : [props.selected]
    : [];

  const isMulti = props.type === "multi";

  useEffect(() => {
    if (isDisabled || isLoading || isReadonly) {
      setOpen(false);
    }
  }, [isDisabled, isLoading, isReadonly]);

  const [selected, dispatch] = useReducer(
    (prev: (string | number)[], cur: string | number | null) => {
      // Checking, if the user wanna deselect the value
      const valueIndex = prev.findIndex((val) => val === cur);
      const isSelected = valueIndex !== -1;

      let value: (string | number)[];

      if (!cur) value = [];
      else if (isMulti) {
        // Removing the value as it already exist
        if (isSelected) {
          const tmp = [...prev];
          tmp.splice(valueIndex, 1);
          value = tmp;
        }
        // Adding the new value
        else value = [...prev, cur];
      } else {
        // Deselecting the value
        if (isSelected) value = [];
        // Adding the selected value
        else value = [cur];
      }

      if (isMulti) {
        props.onSelectionChange?.(value);
      } else {
        props.onSelectionChange?.(value.length > 0 ? value[0] : undefined);
      }

      if (!isMulti) setOpen(false);

      return value;
    },
    initValue,
  );

  useEffect(() => {
    setContentWidth(triggerRef.current?.offsetWidth ?? 0);
  }, []);

  return (
    <ComboboxProvider
      value={{
        name,
        type: props.type,
        options,
        placeholder,
        isDisabled,
        isLoading,
        isInvalid,
        isReadonly,
        isOpen,
        setOpen,
        selected,
        onSelectionChange: dispatch,
      }}
    >
      <Popover open={isOpen} onOpenChange={setOpen}>
        <ComboboxTrigger
          ref={triggerRef}
          className="w-full justify-between text-start !font-medium"
        >
          {triggerRender ?? (
            <span className="flex-1">
              <InternalTriggerRender />
            </span>
          )}
        </ComboboxTrigger>
        <div className="mt-1 flex flex-row-reverse">
          <ClearButton />
        </div>
        <ComboboxContent style={{ width: contentWidth }}>
          {itemRender ?? InternalOptionsRender}
        </ComboboxContent>
      </Popover>
    </ComboboxProvider>
  );
}

// Combobox Trigger
export const ComboboxTrigger = forwardRef<HTMLButtonElement, PopoverTrigger>(
  (
    {
      isDisabled,
      isLoading,
      className,
      variant = "outline",
      role = "combobox",
      rightIcon,
      ...props
    },
    forwardedRef,
  ) => {
    const {
      isOpen,
      isDisabled: isParentDisabled,
      isLoading: isParentLoading,
      isReadonly: isParentReadonly,
    } = useComboboxContext();

    const disabled = isDisabled || isParentDisabled || isParentReadonly;
    const loading = isLoading || isParentLoading;

    const right_icon = rightIcon ?? (
      <ChevronUpDownIcon
        className={classNames(
          "h-3.5 w-3.5 shrink-0 stroke-2",
          isOpen
            ? "text-primary-500 dark:text-primary-400"
            : "text-secondary-500 dark:text-secondary-400",
        )}
      />
    );

    return (
      <PopoverTrigger
        {...props}
        variant={variant}
        role={role}
        rightIcon={right_icon}
        className={classNames("!font-medium", className)}
        isDisabled={disabled}
        isLoading={loading}
        ref={forwardedRef}
      />
    );
  },
);
ComboboxTrigger.displayName = "ComboboxTrigger";

// Combobox Content
export type ComboboxContent = Omit<PopoverContent, "children"> & {
  children: (props: ComboboxOptionType) => ReactNode;
  showSearch?: boolean;
};

export function ComboboxContent({
  className,
  children: Children,
  showSearch = true,
  ...props
}: ComboboxContent) {
  const { placeholder, options } = useComboboxContext();

  return (
    <PopoverContent
      {...props}
      className={classNames("!max-w-none !p-0", className)}
    >
      <Command>
        {showSearch && <CommandInput placeholder={placeholder?.search} />}
        <CommandList className="!p-1">
          {options.map((option, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Children key={index} {...option} />
          ))}
          <CommandEmpty>No data found</CommandEmpty>
        </CommandList>
      </Command>
    </PopoverContent>
  );
}

// Combobox Item
export type ComboboxItem = CommandItem;
export const ComboboxItem = CommandItem;
ComboboxItem.displayName = "ComboboxItem";

// Combobox Items Group
export type ComboboxItemsGroup = CommandGroup;
export const ComboboxItemsGroup = CommandGroup;
ComboboxItemsGroup.displayName = "ComboboxItemsGroup";
