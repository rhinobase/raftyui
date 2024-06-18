import { type HTMLAttributes, forwardRef } from "react";
import { classNames } from "../utils";

export type Skeleton = HTMLAttributes<HTMLDivElement>;

export const Skeleton = forwardRef<HTMLDivElement, Skeleton>(function Skeleton(
  { className, ...props },
  forwardedRef,
) {
  return (
    <div
      {...props}
      className={classNames(
        "bg-secondary-300 dark:bg-secondary-700 animate-pulse",
        className,
      )}
      ref={forwardedRef}
    />
  );
});
