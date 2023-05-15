import * as React from "react";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from "react-aria";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { PopoverContent } from "@rhino/popover";
import { classNames } from "@rhino/utils";
import { cva } from "class-variance-authority";
import { ListBox } from "@rhino/combobox";
export { Item as SelectItem } from "react-stately";

const selectClasses = cva(
  "w-full appearance-none relative flex items-center justify-between overflow-hidden cursor-default outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm rounded",
        md: "px-3 py-1.5 rounded-md",
        lg: "px-4 py-2 text-lg rounded-md",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline: "",
        ghost: "",
      },
      state: {
        true: "",
        false: "border-secondary-300",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline"],
        className: "border shadow-sm",
      },
      {
        variant: ["solid", "outline"],
        size: ["sm", "md", "lg"],
        state: true,
        className:
          "ring-primary-200 border border-primary-500 dark:ring-primary-100/20 dark:border-primary-400 outline-none ring-2",
      },
      {
        variant: ["outline", "ghost"],
        size: ["sm", "md", "lg"],
        className: "bg-transparent dark:bg-secondary-900",
      },
    ],
  }
);

export type Select = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Select<T extends object>(props: AriaSelectProps<T> & Select) {
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

  const { focusProps } = useFocusRing();

  return (
    <div className="relative">
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...mergeProps(buttonProps, focusProps)}
        className={classNames(
          selectClasses({
            state: state.isOpen,
            variant,
            size,
          }),
          className
        )}
        ref={ref}
      >
        <span
          {...valueProps}
          className={classNames(
            state.selectedItem ? "text-gray-800" : "text-gray-500",
            "text-md"
          )}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </span>
        <ChevronUpDownIcon
          className={classNames(
            state.isOpen ? "text-primary-500" : "text-gray-500",
            "w-5 h-5"
          )}
        />
      </button>
      <PopoverContent
        triggerState={state}
        triggerRef={ref}
        placement="bottom start"
        className="w-full -ml-3"
      >
        <ListBox {...menuProps} state={state} size={size} />
      </PopoverContent>
    </div>
  );
}
