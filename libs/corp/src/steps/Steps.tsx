import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "@rafty/ui";
import { cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

export const stepsClass = cva(
  "gap-2 pb-6 aria-disabled:cursor-not-allowed aria-disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "p-2 text-sm",
        md: "p-2.5",
        lg: "p-3 text-lg",
      },
      direction: {
        vertical: "flex flex-col",
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
  onClick?: (current: number) => void;
  items: {
    title?: ReactNode;
    subTitle?: ReactNode;
    description?: ReactNode;
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
    return (
      <div
        ref={forwardedRef}
        {...props}
        aria-disabled={isDisabled}
        className={stepsClass({ size, direction })}
      >
        {items.map(({ description, icon, subTitle, title }, index, arr) => {
          const isLast = index === arr.length - 1;

          return (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: title is ReactNode
              key={index}
              className={classNames(
                direction === "vertical" && "p-3.5",
                onClick &&
                  current !== index &&
                  "cursor-pointer [&>*]:hover:text-blue-600",
                "group/item relative flex h-full w-full items-center",
              )}
              onClick={() => onClick?.(index)}
              onKeyDown={(e) => e.key === "Enter" && onClick?.(index)}
            >
              {icon ?? (
                <div className="dark:bg-secondary-900 bg-white p-1">
                  <span
                    className={classNames(
                      stepIconClass({ size }),
                      current === index
                        ? "bg-blue-500 text-white"
                        : current > index
                          ? "bg-blue-100 text-blue-500"
                          : "bg-secondary-300 text-secondary-500",
                      onClick &&
                        current !== index &&
                        "group-hover/item:ring-1 group-hover/item:ring-blue-500",
                    )}
                  >
                    {current > index ? (
                      <CheckIcon height={16} width={16} className="stroke-2" />
                    ) : (
                      index + 1
                    )}
                  </span>
                </div>
              )}
              <div
                className={classNames(
                  current < index && "text-secondary-400",
                  "dark:bg-secondary-900 dark:text-secondary-200 bg-white p-1",
                )}
              >
                <div className="flex items-center gap-1.5">
                  {typeof title === "string" ? <h3>{title}</h3> : title}
                  {typeof subTitle === "string" ? (
                    <h5 className="text-secondary-400 text-sm">{subTitle}</h5>
                  ) : (
                    subTitle
                  )}
                </div>
                {typeof description === "string" ? (
                  <p
                    className={classNames(
                      index < current && "text-secondary-400",
                      "absolute text-sm",
                    )}
                  >
                    {description}
                  </p>
                ) : (
                  description
                )}
              </div>
              {!isLast && direction === "horizontal" && (
                <div
                  className={classNames(
                    current <= index ? "bg-secondary-300" : "bg-blue-500",
                    "absolute -z-30 h-px w-full flex-1",
                  )}
                />
              )}
              {!isLast && direction === "vertical" && (
                <div
                  className={classNames(
                    stepVerticalLineClass({ size, active: current > index }),
                  )}
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
