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
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  classNames,
} from "@rafty/ui";
import {
  PropsWithChildren,
  ReactNode,
  forwardRef,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { ClearButton } from "./ClearButton";
import { OptionsRender } from "./OptionsRender";
import { TriggerRender } from "./TriggerRender";
import {
  ComboboxContext,
  ComboboxProvider,
  useComboboxContext,
} from "./context";

type RequiredProps = "name" | "options";

type InternalProps =
  | "triggerRef"
  | "contentWidth"
  | "isOpen"
  | "setOpen"
  | "type";

export type ComboboxOption = {
  label: string;
  value: string | number | ComboboxOption[];
};

export type Combobox = (
  | {
      value?: string | number;
      onChange?: (value?: string | number) => void;
      type: "single";
    }
  | {
      value?: (string | number)[];
      onChange?: (value?: (string | number)[]) => void;
      type: "multi";
    }
) &
  Pick<ComboboxContext, RequiredProps> &
  Partial<Omit<ComboboxContext, RequiredProps | InternalProps>>;

export function Combobox({
  isDisabled = false,
  isInvalid = false,
  isLoading = false,
  isReadonly = false,
  placeholder,
  children,
  ...props
}: PropsWithChildren<Combobox>) {
  const triggerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const initValue = props.value
    ? Array.isArray(props.value)
      ? props.value
      : [props.value]
    : [];

  const isMulti = props.type === "multi";

  useEffect(() => {
    if (isDisabled || isLoading || isReadonly) {
      setOpen(false);
    }
  }, [isDisabled, isLoading, isReadonly]);

  const [value, dispatch] = useReducer(
    (prev: (string | number)[], cur: string | number | null) => {
      // Checking, if the user wanna deselect the value
      const valueIndex = prev.findIndex((val) => val === cur);
      const isSelected = valueIndex !== -1;

      let value: (string | number)[];

      if (cur === null) value = [];
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
        props.onChange?.(value);
      } else {
        props.onChange?.(value.length > 0 ? value[0] : undefined);
      }

      if (!isMulti) setOpen(false);

      return value;
    },
    initValue,
  );

  useEffect(() => {
    // @ts-ignore
    setContentWidth(triggerRef.current?.offsetWidth);
  }, []);

  return (
    <ComboboxProvider
      value={{
        name: props.name,
        type: props.type,
        options: props.options,
        placeholder,
        triggerRef,
        contentWidth,
        isDisabled,
        isLoading,
        isInvalid,
        isReadonly,
        isOpen,
        setOpen,
        value,
        onChange: dispatch,
      }}
    >
      <Popover open={isOpen} onOpenChange={setOpen}>
        {children ?? (
          <>
            <ComboboxTrigger
              variant="outline"
              role="combobox"
              className="w-full justify-between text-start !font-medium"
              rightIcon={
                <ChevronUpDownIcon
                  className={classNames(
                    "h-3.5 w-3.5 shrink-0 stroke-2",
                    isOpen
                      ? "text-primary-500 dark:text-primary-400"
                      : "text-secondary-500 dark:text-secondary-400",
                  )}
                />
              }
            >
              <span className="flex-1">
                <TriggerRender />
              </span>
            </ComboboxTrigger>
            <div className="mt-1 flex flex-row-reverse">
              <ClearButton />
            </div>
            <PopoverContent
              className="!max-w-none !p-0"
              style={{ width: contentWidth }}
            >
              <Command>
                <CommandInput placeholder={placeholder?.search} />
                <CommandList className="!p-1">
                  <OptionsRender
                    value={value}
                    options={props.options}
                    onChange={dispatch}
                  />
                  <CommandEmpty>No data found</CommandEmpty>
                </CommandList>
              </Command>
            </PopoverContent>
          </>
        )}
      </Popover>
    </ComboboxProvider>
  );
}

export function ComboboxTrigger({
  isDisabled,
  isLoading,
  className,
  ...props
}: PopoverTrigger) {
  const {
    triggerRef,
    isDisabled: isParentDisabled,
    isLoading: isParentLoading,
    isReadonly: isParentReadonly,
  } = useComboboxContext();

  const disabled = isDisabled || isParentDisabled || isParentReadonly;
  const loading = isLoading || isParentLoading;

  return (
    <PopoverTrigger
      {...props}
      className={classNames("!font-medium", className)}
      isDisabled={disabled}
      isLoading={loading}
      ref={triggerRef}
    />
  );
}

export type ComboboxContent = Omit<PopoverContent, "children"> & {
  children?: (data: ComboboxOption, index: number) => ReactNode;
  showSearch?: boolean;
};

export function ComboboxContent({
  className,
  children,
  showSearch = true,
  ...props
}: ComboboxContent) {
  const { contentWidth, placeholder, options } = useComboboxContext();

  return (
    <PopoverContent
      {...props}
      className={classNames("!max-w-none !p-0", className)}
      style={{ width: contentWidth }}
    >
      <Command>
        {showSearch && <CommandInput placeholder={placeholder?.search} />}
        <CommandList className="!p-1">
          {options.map((option, index) => children?.(option, index))}
          <CommandEmpty>No data found</CommandEmpty>
        </CommandList>
      </Command>
    </PopoverContent>
  );
}

export type ComboboxItem = CommandItem;

export const ComboboxItem = forwardRef<HTMLDivElement, ComboboxItem>(
  (props, forwardedRef) => <CommandItem {...props} ref={forwardedRef} />,
);
ComboboxItem.displayName = "ComboboxItem";

export type ComboboxItemsGroup = CommandGroup;

export const ComboboxItemsGroup = forwardRef<
  HTMLDivElement,
  ComboboxItemsGroup
>((props, forwardedRef) => <CommandGroup {...props} ref={forwardedRef} />);
ComboboxItemsGroup.displayName = "ComboboxItemsGroup";
