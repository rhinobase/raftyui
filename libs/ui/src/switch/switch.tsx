import React from "react";
import { useToggleState } from "react-stately";
import {
  AriaCheckboxProps,
  useFocusRing,
  useSwitch,
  VisuallyHidden,
} from "react-aria";
import { classNames } from "@rafty/utils";

const switchClasses = {
  size: {
    sm: "h-4 w-8",
    md: "h-6 w-10",
    lg: "h-7 w-12",
  },
};

const switchThumbClasses = {
  size: {
    sm: "h-3 w-3 group-aria-selected:left-[18px]",
    md: "h-5 w-5 group-aria-selected:left-[18px]",
    lg: "h-6 w-6 group-aria-selected:left-[22px]",
  },
};

export type Switch = AriaCheckboxProps & {
  size?: "sm" | "md" | "lg";
  isSelected?: boolean;
};

export function Switch({ size = "md", children, ...props }: Switch) {
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label
      className={classNames(
        "flex items-center cursor-pointer w-max gap-2",
        "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        isFocusVisible && "ring-1 ring-primary-200 dark:ring-primary-100/20"
      )}
      aria-selected={state.isSelected}
      aria-disabled={props.isDisabled}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={classNames(
          switchClasses.size[size],
          "group relative rounded-full transition-all",
          "bg-secondary-400 hover:bg-secondary-500 dark:bg-secondary-700 hover:dark:bg-secondary-600",
          "aria-selected:bg-primary-500 aria-selected:hover:bg-primary-400 aria-selected:dark:bg-primary-300 aria-selected:dark:hover:bg-primary-400",
          "aria-disabled:hover:bg-secondary-400 dark:aria-disabled:hover:bg-secondary-700"
        )}
        aria-selected={state.isSelected}
        aria-disabled={props.isDisabled}
      >
        <div
          className={classNames(
            switchThumbClasses.size[size],
            "bg-secondary-100 dark:bg-secondary-300 absolute left-0.5 top-0.5 rounded-full transition-all duration-200",
            "group-aria-selected:bg-white group-aria-selected:dark:bg-secondary-900"
          )}
        />
      </div>
      <span className="font-medium">{children}</span>
    </label>
  );
}
