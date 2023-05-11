import React from "react";
import { useToggleState } from "react-stately";
import {
  AriaCheckboxProps,
  useFocusRing,
  useSwitch,
  VisuallyHidden,
} from "react-aria";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

const switchClasses = cva("relative rounded-full", {
  variants: {
    size: {
      sm: "h-4 w-8",
      md: "h-6 w-10",
      lg: "h-7 w-12",
    },
    isSelected: {
      true: "bg-primary-500 hover:bg-primary-400 dark:bg-primary-300",
      false: "bg-secondary-400 hover:bg-secondary-500 dark:bg-secondary-700",
    },
  },
});

const switchThumbClasses = cva(
  "absolute top-0.5 rounded-full transition-all duration-200",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      isSelected: {
        true: "",
        false: "bg-secondary-100 dark:bg-secondary-300 left-0.5",
      },
    },
    compoundVariants: [
      {
        size: ["sm", "md"],
        isSelected: true,
        className: "dark:bg-secondary-900 left-[18px] bg-white",
      },

      {
        size: "lg",
        isSelected: true,
        className: "dark:bg-secondary-900 left-[22px] bg-white",
      },
    ],
  }
);

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
        props.isDisabled && "cursor-not-allowed opacity-50",
        "flex items-center",
        isFocusVisible && "ring-1 ring-black ring-offset-2 dark:ring-white"
      )}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={classNames(
          switchClasses({ size, isSelected: state.isSelected })
        )}
      >
        <div
          className={classNames(
            switchThumbClasses({ size, isSelected: state.isSelected })
          )}
        />
      </div>
      {children}
    </label>
  );
}
