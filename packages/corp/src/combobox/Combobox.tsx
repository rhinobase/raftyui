"use client";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  classNames,
  eventHandler,
  mergeRefs,
} from "@rafty/ui";
import {
  type PropsWithChildren,
  type ReactNode,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  type ComboboxContext,
  ComboboxProvider,
  useComboboxContext,
} from "./context";
import { InternalOptionsRender, InternalTriggerRender } from "./internals";
import type { ComboboxOptionType } from "./types";

type UserProps = "id" | "options";

type InternalProps =
  | "isOpen"
  | "setOpen"
  | "type"
  | "selected"
  | "onSelectionChange";

// Combobox
export type Combobox = PropsWithChildren<
  (
    | {
        selected?: string | number;
        onSelectionChange?: (selected?: string | number) => void;
        type?: "single";
      }
    | {
        selected?: (string | number)[];
        onSelectionChange?: (selected?: (string | number)[]) => void;
        type: "multi";
      }
  ) &
    Partial<Pick<ComboboxContext, UserProps>> &
    Partial<Omit<ComboboxContext, UserProps | InternalProps>>
>;

export function Combobox({
  isDisabled = false,
  isInvalid = false,
  isLoading = false,
  isReadOnly = false,
  placeholder,
  id,
  options = [],
  children,
  ...props
}: Combobox) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState(false);

  const initValue = props.selected
    ? Array.isArray(props.selected)
      ? props.selected
      : [props.selected]
    : [];

  const isMulti = props.type === "multi";

  useEffect(() => {
    if (isDisabled || isLoading || isReadOnly) {
      setOpen(false);
    }
  }, [isDisabled, isLoading, isReadOnly]);

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

      if (!isMulti) setOpen(false);

      return value;
    },
    initValue,
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isMulti) props.onSelectionChange?.(selected);
    else
      props.onSelectionChange?.(selected.length > 0 ? selected[0] : undefined);
  }, [selected]);

  return (
    <ComboboxProvider
      value={{
        id,
        type: props.type,
        options,
        placeholder,
        isDisabled,
        isLoading,
        isInvalid,
        isReadOnly,
        isOpen,
        setOpen,
        selected,
        onSelectionChange: dispatch,
        triggerRef,
      }}
    >
      <Popover open={isOpen} onOpenChange={setOpen}>
        {children}
      </Popover>
    </ComboboxProvider>
  );
}

// Combobox Trigger
export const ComboboxTrigger = forwardRef<HTMLButtonElement, PopoverTrigger>(
  function ComboboxTrigger(
    {
      isDisabled,
      isLoading,
      className,
      variant = "outline",
      role = "combobox",
      rightIcon,
      children = <InternalTriggerRender />,
      ...props
    },
    forwardedRef,
  ) {
    const {
      id,
      isOpen,
      isDisabled: isParentDisabled,
      isLoading: isParentLoading,
      isReadOnly: isParentReadonly,
      triggerRef,
    } = useComboboxContext();

    const disabled = isDisabled || isParentDisabled || isParentReadonly;
    const loading = isLoading || isParentLoading;

    const right_icon = rightIcon ?? (
      <ChevronUpDownIcon
        className={classNames(
          "size-3.5 shrink-0 stroke-2",
          isOpen
            ? "text-primary-500 dark:text-primary-400"
            : "text-secondary-500 dark:text-secondary-400",
        )}
      />
    );

    return (
      <PopoverTrigger
        id={id}
        {...props}
        variant={variant}
        role={role}
        rightIcon={right_icon}
        className={classNames(
          "w-full justify-between text-start font-medium",
          className,
        )}
        isDisabled={disabled}
        isLoading={loading}
        ref={mergeRefs(forwardedRef, triggerRef)}
      >
        <span className="flex-1">{children}</span>
      </PopoverTrigger>
    );
  },
);

// Combobox Content
export type ComboboxContent = Omit<PopoverContent, "children"> & {
  showSearch?: boolean;
  shouldFilter?: boolean;
  search?: CommandInput["value"];
  onSearchChange?: CommandInput["onValueChange"];
  children?: (props: {
    option: ComboboxOptionType;
    index: number;
  }) => ReactNode;
  isLoading?: boolean;
};

export function ComboboxContent({
  className,
  style,
  children: Children = InternalOptionsRender,
  showSearch = true,
  shouldFilter,
  search,
  onSearchChange,
  isLoading,
  ...props
}: ComboboxContent) {
  const { placeholder, triggerRef, options } = useComboboxContext();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(triggerRef.current?.offsetWidth ?? 0);
  }, [triggerRef]);

  return (
    <PopoverContent
      {...props}
      className={classNames("max-w-none p-0", className)}
      style={{ width, ...style }}
    >
      <Command shouldFilter={shouldFilter}>
        {showSearch && (
          <CommandInput
            placeholder={placeholder?.search}
            value={search}
            onValueChange={onSearchChange}
          />
        )}
        <CommandList className="p-1">
          {options.map((option, index) => (
            <Children
              key={`${index}-${option.value}`}
              option={option}
              index={index}
            />
          ))}
          <CommandEmpty className="text-secondary-500 dark:text-secondary-400 flex h-10 select-none items-center justify-center py-0 empty:hidden">
            {!isLoading && <>No results found {search && `for "${search}".`}</>}
          </CommandEmpty>
          {isLoading && (
            <CommandLoading progress={50}>
              <span className="text-secondary-500 dark:text-secondary-400 flex h-10 w-full select-none items-center justify-center gap-2 text-sm font-medium">
                <Spinner size="sm" /> Loading...
              </span>
            </CommandLoading>
          )}
        </CommandList>
      </Command>
    </PopoverContent>
  );
}

// Combobox Item
export type ComboboxItem = CommandItem;
export const ComboboxItem = CommandItem;

// Combobox Items Group
export type ComboboxItemsGroup = CommandGroup;
export const ComboboxItemsGroup = CommandGroup;

// Combobox Clear Button
export const ComboboxClearButton = forwardRef<HTMLButtonElement, Button>(
  function ComboboxClearButton(
    {
      children,
      size = "sm",
      variant = "ghost",
      colorScheme = "error",
      className,
      ...props
    },
    forwardedRef,
  ) {
    const {
      type,
      selected,
      onSelectionChange,
      isDisabled,
      isLoading,
      isReadOnly,
    } = useComboboxContext();

    if (selected.length === 0 || isDisabled || isReadOnly || isLoading) return;

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
        className={classNames("font-medium", className)}
        ref={forwardedRef}
      >
        {children ?? buttonText}
      </Button>
    );
  },
);
