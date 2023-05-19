import React from "react";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import { useSelect, HiddenSelect, useButton } from "react-aria";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PopoverContent } from "@rafty/popover";
import { classNames } from "@rafty/utils";
import { ListBox } from "./listbox";
import { Button } from "@rafty/button";
export { Item as SelectItem } from "react-stately";

export type Select<T> = AriaSelectProps<T> & {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Select<T extends object>(props: Select<T>) {
  // Create state based on the incoming props
  const state = useSelectState(props);

  const {
    size = "md",
    variant = "outline",
    className,
    placeholder = "Select an option",
  } = props;

  // Get props for child elements from useSelect
  const ref = React.useRef(null);
  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  return (
    <div className="relative">
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <Button
        {...buttonProps}
        {...valueProps}
        size={size}
        variant={variant}
        className={classNames("!w-full !justify-between", className)}
        rightIcon={
          <ChevronUpDownIcon
            className={classNames(
              state.isOpen ? "text-primary-500" : "text-gray-500",
              "h-5 w-5"
            )}
          />
        }
        ref={ref}
      >
        <span
          className={classNames(
            state.selectedItem
              ? "dark:text-secondary-200 text-gray-800"
              : "text-gray-500",
            "text-md"
          )}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </span>
      </Button>
      <PopoverContent
        triggerState={state}
        triggerRef={ref}
        placement="bottom start"
        className="-ml-3 w-full"
      >
        <ListBox {...menuProps} state={state} size={size} />
      </PopoverContent>
    </div>
  );
}
