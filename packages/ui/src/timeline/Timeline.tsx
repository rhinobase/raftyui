"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode, forwardRef, useId } from "react";
import { Spinner } from "../spinner/index.js";
import type { ValueOrFunction } from "../types/index.js";
import { classNames, getValidChildren, getValue } from "../utils/index.js";
import {
  type TimelineContext,
  TimelineProvider,
  useTimelineContext,
} from "./context.js";

export const timelineClasses = cva("flex size-full", {
  variants: {
    size: {
      sm: "gap-0.5",
      md: "gap-1",
      lg: "gap-1.5",
    },
    reverse: {
      true: "flex-col-reverse",
      false: "flex-col",
    },
  },
  defaultVariants: {
    size: "md",
    reverse: false,
  },
});

export type Timeline = HTMLAttributes<HTMLUListElement> &
  Partial<TimelineContext> & {
    isLoading?: ValueOrFunction;
    loadingDot?: ReactNode;
    loadingText?: ReactNode;
    isReverse?: ValueOrFunction;
    connector?: () => JSX.Element;
  };

export const Timeline = forwardRef<HTMLUListElement, Timeline>(
  function Timeline(
    {
      isLoading,
      loadingDot,
      loadingText,
      align = "left",
      isReverse,
      size = "md",
      children,
      className,
      connector: Connector = TimelineConnector,
      ...props
    },
    forwardedRef
  ) {
    const validChildren = getValidChildren(children);

    const key = useId();

    const components = validChildren.flatMap((child, index) => [
      child,
      <Connector key={`${index}-${key}-connector`} />,
    ]);

    if (isLoading)
      components.push(
        <TimelineItem
          key={`${key}-loading`}
          icon={loadingDot ?? <Spinner size="sm" />}
        >
          {loadingText}
        </TimelineItem>
      );
    else components.pop();

    return (
      <TimelineProvider
        value={{
          align,
          size,
        }}
      >
        <ul
          {...props}
          className={classNames(
            timelineClasses({ size, reverse: getValue(isReverse) }),
            className
          )}
          ref={forwardedRef}
        >
          {components}
        </ul>
      </TimelineProvider>
    );
  }
);

export const timelineItemClasses = cva("flex w-full items-center", {
  variants: {
    size: {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
    },
    align: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
  },
  defaultVariants: {
    size: "md",
    align: "left",
  },
});

export const timelineItemIconClasses = cva(
  "dark:bg-secondary-950 rounded-full bg-white",
  {
    variants: {
      size: {
        sm: "size-3 border-[3px]",
        md: "size-4 border-[4px]",
        lg: "size-5 border-[5px]",
      },
      status: {
        success: "border-green-500 dark:border-green-300",
        warning: "border-amber-500 dark:border-amber-300",
        error: "border-red-500 dark:border-red-300",
        info: "border-blue-500 dark:border-blue-300",
      },
    },
    defaultVariants: {
      size: "md",
      status: "info",
    },
  }
);

export const timelineItemTextClasses = cva(
  "text-secondary-800 dark:text-secondary-300 flex-1 font-medium",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      align: {
        right: "text-right",
        left: "text-left",
      },
    },
    defaultVariants: {
      align: "left",
      size: "md",
    },
  }
);

export const timelineItemDescriptionClasses = cva(
  "dark:text-secondary-400 text-secondary-500 empty:hidden",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type TimelineItem = HTMLAttributes<HTMLLIElement> & {
  icon?: ReactNode;
  description?: ReactNode;
  status?: "success" | "warning" | "error" | "info";
};

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItem>(
  function TimelineItem(
    { icon, description, status = "info", children, className, ...props },
    forwardedRef
  ) {
    const { align, size } = useTimelineContext();

    const isChildrenString = typeof children === "string";
    const isDescriptionString = typeof description === "string";

    return (
      <li
        {...props}
        className={classNames(timelineItemClasses({ size, align }), className)}
        ref={forwardedRef}
      >
        {icon ?? <div className={timelineItemIconClasses({ size, status })} />}
        {isChildrenString ? (
          <p className={timelineItemTextClasses({ align, size })}>{children}</p>
        ) : (
          children
        )}
        {isDescriptionString ? (
          <p className={timelineItemDescriptionClasses({ size })}>
            {description}
          </p>
        ) : (
          description
        )}
      </li>
    );
  }
);

export const timelineConnectorClasses = cva("flex h-full", {
  variants: {
    size: {
      sm: "ml-1.5",
      md: "ml-2",
      lg: "ml-2.5",
    },
    align: {
      left: "",
      right: "flex-row-reverse",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      align: "left",
      className: "ml-1.5",
    },
    {
      size: "md",
      align: "left",
      className: "ml-2",
    },
    {
      size: "lg",
      align: "left",
      className: "ml-2",
    },
    {
      size: "sm",
      align: "right",
      className: "mr-1.5",
    },
    {
      size: "md",
      align: "right",
      className: "mr-2",
    },
    {
      size: "lg",
      align: "right",
      className: "mr-2",
    },
  ],
  defaultVariants: {
    align: "left",
    size: "md",
  },
});

function TimelineConnector() {
  const { align, size } = useTimelineContext();

  return (
    <div className={timelineConnectorClasses({ align, size })}>
      <span className="bg-secondary-300 dark:bg-secondary-500 flex h-full w-px justify-start" />
    </div>
  );
}
