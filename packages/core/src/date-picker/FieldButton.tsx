import { useRef } from "react";
import {
  useButton,
  useFocusRing,
  mergeProps,
  AriaButtonProps,
} from "react-aria";
import { classNames } from "../utils";

export function CalendarButton(props: AriaButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={classNames(
        props.isDisabled
          ? "text-gray-400"
          : "hover:bg-secondary-200/60 active:bg-secondary-300",
        isFocusVisible && "ring-2 ring-offset-2 ring-primary-600",
        "p-2 rounded-md outline-none"
      )}
    >
      {props.children}
    </button>
  );
}

export function FieldButton(
  props: AriaButtonProps & {
    isPressed: boolean;
    variant?: "solid" | "outline" | "ghost";
  }
) {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={classNames(
        isPressed || props.isPressed
          ? "bg-secondary-300 border-secondary-300 dark:bg-secondary-600 dark:border-secondary-600"
          : "bg-gray-100 dark:bg-secondary-700 border-secondary-300 dark:border-secondary-700 group-hover:border-primary-400",
        (props.variant == "solid" || props.variant == "outline") &&
          "group-focus-within:border-primary-500 group-focus-within:group-hover:border-primary-500 border",
        "px-2 -ml-px transition-colors rounded-r-md  outline-none"
      )}
    >
      {props.children}
    </button>
  );
}
