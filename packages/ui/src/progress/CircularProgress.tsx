import { Progress as ArkProgress } from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import { classNames } from "../utils";
import {
  type Progress,
  progressClasses,
  progressTextClasses,
} from "./Progress";

const sizeStyle = {
  size: {
    sm: 30,
    md: 40,
    lg: 50,
  },
  thickness: {
    sm: 3,
    md: 4,
    lg: 5,
  },
};

const circularProgressCircleRangeClasses = {
  colorScheme: {
    error: "stroke-red-500 dark:stroke-red-300",
    warning: "stroke-amber-500 dark:stroke-amber-300",
    primary: "stroke-primary-500 dark:stroke-primary-300",
    success: "stroke-green-500 dark:stroke-green-300",
    secondary: "stroke-secondary-400 dark:stroke-secondary-300",
  },
};

export type CircularProgress = Progress;

export const CircularProgress = forwardRef<
  ElementRef<typeof ArkProgress.Root>,
  CircularProgress
>(
  (
    { className, size = "md", colorScheme = "primary", style, ...props },
    forwarededRef,
  ) => (
    <ArkProgress.Root
      {...props}
      className={classNames(progressClasses({ size }), className)}
      style={{
        // @ts-ignore
        "--size": sizeStyle.size[size],
        "--thickness": sizeStyle.thickness[size],
        ...style,
      }}
      ref={forwarededRef}
    >
      <ArkProgress.Circle>
        <ArkProgress.CircleTrack className="stroke-secondary-200 dark:stroke-secondary-700" />
        <ArkProgress.CircleRange
          className={
            circularProgressCircleRangeClasses.colorScheme[colorScheme]
          }
        />
      </ArkProgress.Circle>
      <ArkProgress.ValueText className={progressTextClasses({ size })} />
    </ArkProgress.Root>
  ),
);
CircularProgress.displayName = "CircularProgress";
