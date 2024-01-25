"use client";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { eventHandler } from "@rafty/shared";
import {
  Button,
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
  mergeRefs,
} from "@rafty/ui";
import _ from "lodash";
import {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  ComboboxContext,
  ComboboxProvider,
  useComboboxContext,
} from "./context";
import { InternalContentRender, InternalTriggerRender } from "./internals";

type RequiredProps = "name" | "options";

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
        type: "single";
      }
    | {
        selected?: (string | number)[];
        onSelectionChange?: (selected?: (string | number)[]) => void;
        type: "multi";
      }
  ) &
    Pick<ComboboxContext, RequiredProps> &
    Partial<Omit<ComboboxContext, RequiredProps | InternalProps>>
>;

export function Combobox({
  isDisabled = false,
  isInvalid = false,
  isLoading = false,
  isReadonly = false,
  placeholder,
  name,
  options,
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
  (
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
  ) => {
    const {
      isOpen,
      isDisabled: isParentDisabled,
      isLoading: isParentLoading,
      isReadonly: isParentReadonly,
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
ComboboxTrigger.displayName = "ComboboxTrigger";

// Combobox Content
export type ComboboxContent = Omit<PopoverContent, "children"> &
  PropsWithChildren<{
    showSearch?: boolean;
  }>;

export function ComboboxContent({
  className,
  style,
  children = <InternalContentRender />,
  showSearch = true,
  ...props
}: ComboboxContent) {
  const { placeholder, triggerRef } = useComboboxContext();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(triggerRef.current?.offsetWidth ?? 0);
  }, [triggerRef]);

  return (
    <PopoverContent
      {...props}
      className={classNames("max-w-none p-0", className)}
      style={_.merge({ width }, style)}
    >
      <Command>
        {showSearch && <CommandInput placeholder={placeholder?.search} />}
        {children}
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

// Combobox Clear Button
export const ComboboxClearButton = forwardRef<HTMLButtonElement, Button>(
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
ComboboxClearButton.displayName = "ComboboxClearButton";
