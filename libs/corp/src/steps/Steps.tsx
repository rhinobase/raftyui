import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

export const stepsClass = cva(
  "gap-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "p-2 text-sm",
        md: "p-2.5",
        lg: "p-3 text-lg",
      },
      direction: {
        vertical: "flex flex-col w-full",
        horizontal: "flex w-full",
      },
    },
    defaultVariants: {
      size: "md",
      direction: "horizontal",
    },
  },
);

export const stepIconClass = cva(
  "flex items-center justify-center rounded-full",
  {
    variants: {
      size: {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const stepVerticalLineClass = cva(
  "absolute top-5 -z-30 h-full w-px flex-1",
  {
    variants: {
      size: {
        sm: "left-[30px]",
        md: "left-[34px]",
        lg: "left-[38px]",
      },
      active: {
        true: "bg-blue-500",
        false: "bg-secondary-300",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type Steps = Omit<HTMLAttributes<HTMLDivElement>, "onClick"> & {
  current?: number;
  initial?: number;
  direction?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
  onClick?: (value: number) => void;
  items: {
    title?: string;
    subTitle?: string;
    description?: string;
    icon?: ReactNode;
  }[];
};

export const Steps = forwardRef<HTMLDivElement, Steps>(
  (
    {
      size = "md",
      items,
      isDisabled = false,
      direction = "horizontal",
      current = 0,
      initial = 0,
      onClick,
      ...props
    },
    forwardedRef,
  ) => {
    const isDescription = items.map(({ description }) => description);

    return (
      <div
        ref={forwardedRef}
        {...props}
        aria-disabled={isDisabled}
        className={stepsClass({ size, direction })}
      >
        {items.map(({ description, icon, subTitle, title }, index, arr) => {
          const value = index + initial;
          const isLast = index === arr.length - 1;

          return (
            <div
              key={title}
              className={classNames(
                direction === "vertical" && "p-3.5",
                onClick &&
                  current !== value &&
                  "cursor-pointer [&>*]:hover:text-blue-600",
                "group/item relative flex h-full w-full items-center",
              )}
              onClick={() => onClick?.(value)}
              onKeyDown={() => onClick?.(value)}
            >
              <div className="dark:bg-secondary-900 bg-white p-1">
                {icon ?? (
                  <span
                    className={classNames(
                      stepIconClass({ size }),
                      current === value
                        ? "bg-blue-500 text-white"
                        : current > value
                          ? "bg-blue-100 text-blue-500"
                          : "bg-secondary-300 text-secondary-500",
                      onClick &&
                        current !== value &&
                        "group-hover/item:ring-1 group-hover/item:ring-blue-500",
                    )}
                  >
                    {current > value ? (
                      <CheckIcon height={16} width={16} className="stroke-2" />
                    ) : (
                      value + 1
                    )}
                  </span>
                )}
              </div>

              <div
                className={classNames(
                  current < value && "text-secondary-400",
                  "dark:bg-secondary-900 dark:text-secondary-200 bg-white px-1",
                )}
              >
                {(title || subTitle) && (
                  <div className="flex items-center gap-1.5">
                    {title && <h3>{title}</h3>}
                    {subTitle && (
                      <h5 className="text-secondary-400 text-sm">{subTitle}</h5>
                    )}
                  </div>
                )}
                {description && (
                  <p
                    className={classNames(
                      value < current && "text-secondary-400",
                      "absolute text-sm",
                    )}
                  >
                    {description}
                  </p>
                )}
              </div>
              {!isLast && direction === "horizontal" && (
                <div
                  className={classNames(
                    current <= value ? "bg-secondary-300" : "bg-blue-500",
                    "absolute -z-30 h-px w-full flex-1",
                  )}
                />
              )}
              {!isLast && direction === "vertical" && (
                <div
                  className={stepVerticalLineClass({
                    size,
                    active: current > value,
                  })}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  },
);
Steps.displayName = "Steps";
