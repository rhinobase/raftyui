import { forwardRef } from "react";
import { AriaProgressBarProps, useProgressBar } from "react-aria";
import { classNames } from "@rhino/utils";
import { cva } from "class-variance-authority";

const progressClasses = cva("", {
  variants: {
    size: {
      sm: "h-2",
      md: "h-3",
      lg: "h-4",
    },
    colorScheme: {
      error: "bg-error-500 dark:bg-error-300",
      warning: "bg-warning-500 dark:bg-warning-300",
      primary: "bg-primary-500 dark:bg-primary-300",
      success: "bg-success-500 dark:bg-success-300",
    },
    isIndeterminate: {
      true: "",
    },
  },
  compoundVariants: [
    {
      isIndeterminate: true,
      colorScheme: "error",
      className: "bg-gradient-to-r from-error-300 via-error-500 to-error-300",
    },
    {
      isIndeterminate: true,
      colorScheme: "primary",
      className:
        "bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300",
    },
    {
      isIndeterminate: true,
      colorScheme: "success",
      className:
        "bg-gradient-to-r from-success-300 via-success-500 to-success-300",
    },
    {
      isIndeterminate: true,
      colorScheme: "warning",
      className:
        "bg-gradient-to-r from-warning-300 via-warning-500 to-warning-300",
    },
  ],
});

export type Progress = AriaProgressBarProps &
  JSX.IntrinsicElements["div"] & {
    size?: "sm" | "md" | "lg";
    colorScheme?: "error" | "warning" | "primary" | "success";
    isInterminate?: boolean;
  };

export const Progress = forwardRef<HTMLDivElement, Progress>(
  ({ ...props }, forwardedref) => {
    const {
      value = 0,
      minValue = 0,
      maxValue = 100,
      size = "md",
      className,
      colorScheme = "primary",
      isIndeterminate,
    } = props;

    const { progressBarProps } = useProgressBar(props);

    // Calculate the width of the progress bar as a percentage
    const percentage = (value - minValue) / (maxValue - minValue);
    const barWidth = `${Math.round(percentage * 100)}%`;

    return (
      <div
        {...progressBarProps}
        {...props}
        className={classNames(
          isIndeterminate && "relative",
          "bg-secondary-200 dark:bg-secondary-700 w-full overflow-hidden",
          progressClasses({ size }),
          className
        )}
        ref={forwardedref}
      >
        {isIndeterminate ? (
          <div
            className={classNames(
              progressClasses({ size, colorScheme, isIndeterminate }),
              "w-1/3 absolute top-0 animate-progress-loading"
            )}
          />
        ) : (
          <div
            style={{ width: barWidth }}
            className={classNames(
              progressClasses({ size, colorScheme }),
              "transition-all duration-200"
            )}
          />
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";
