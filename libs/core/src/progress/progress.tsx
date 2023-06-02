import { forwardRef } from "react";
import { AriaProgressBarProps, useProgressBar } from "react-aria";
import { classNames } from "@rafty/utils";

const progressClasses = {
  size: {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  },
  colorScheme: {
    error:
      "bg-error-500 dark:bg-error-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-error-300 group-data-[indeterminate=true]:via-error-500 group-data-[indeterminate=true]:to-error-300",
    warning:
      "bg-warning-500 dark:bg-warning-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-warning-300 group-data-[indeterminate=true]:via-warning-500 group-data-[indeterminate=true]:to-warning-300",
    primary:
      "bg-primary-500 dark:bg-primary-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-primary-300 group-data-[indeterminate=true]:via-primary-500 group-data-[indeterminate=true]:to-primary-300",
    success:
      "bg-success-500 dark:bg-success-300 group-data-[indeterminate=true]:bg-gradient-to-r group-data-[indeterminate=true]:from-success-300 group-data-[indeterminate=true]:via-success-500 group-data-[indeterminate=true]:to-success-300",
  },
};

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
          "bg-secondary-200 dark:bg-secondary-700 group w-full overflow-hidden",
          progressClasses.size[size],
          className
        )}
        ref={forwardedref}
        data-indeterminate={isIndeterminate}
      >
        {isIndeterminate ? (
          <div
            className={classNames(
              progressClasses.size[size],
              progressClasses.colorScheme[colorScheme],
              "animate-progress-loading absolute top-0 w-1/3"
            )}
          />
        ) : (
          <div
            style={{ width: barWidth }}
            className={classNames(
              progressClasses.size[size],
              progressClasses.colorScheme[colorScheme],
              "transition-all duration-200"
            )}
          />
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";
