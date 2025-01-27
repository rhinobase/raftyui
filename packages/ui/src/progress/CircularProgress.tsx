"use client";
import { Progress as ArkProgress } from "@ark-ui/react";
import { type ElementRef, forwardRef } from "react";
import { classNames } from "../utils/index.js";
import { type Progress, ProgressValue, progressClasses } from "./Progress.js";

export const sizeStyle = {
  size: {
    sm: "30px",
    md: "40px",
    lg: "50px",
  },
  thickness: {
    sm: "3px",
    md: "4px",
    lg: "5px",
  },
};

export const circularProgressCircleRangeClasses = {
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
>(function CircularProgress(
  { className, size = "md", colorScheme = "primary", style, ...props },
  forwardedRef
) {
  return (
    <ArkProgress.Root
      {...props}
      className={classNames(progressClasses({ size }), className)}
      style={{
        // @ts-ignore
        "--size": sizeStyle.size[size],
        "--thickness": sizeStyle.thickness[size],
        ...style,
      }}
      ref={forwardedRef}
    >
      <ArkProgress.Circle>
        <ArkProgress.CircleTrack className="stroke-secondary-200 dark:stroke-secondary-700" />
        <ArkProgress.CircleRange
          className={
            circularProgressCircleRangeClasses.colorScheme[colorScheme]
          }
        />
      </ArkProgress.Circle>
      <ProgressValue size={size} />
    </ArkProgress.Root>
  );
});
