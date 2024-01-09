import { Spinner, classNames, getValidChildren } from "@rafty/ui";
import { cva } from "class-variance-authority";
import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import {
  TimelineContext,
  TimelineProvider,
  useTimelineContext,
} from "./context";

export type Timeline = HTMLAttributes<HTMLUListElement> &
  Partial<TimelineContext> & {
    loadingDot?: ReactElement;
    loading?: boolean | ReactNode;
    connector?: () => JSX.Element;
    reverse?: boolean;
  };

export const Timeline = forwardRef<HTMLUListElement, Timeline>(
  (
    {
      loading,
      loadingDot,
      mode = "left",
      reverse = false,
      children,
      className,
      connector: Connector = TimelineConnector,
      ...props
    },
    forwardedRef,
  ) => {
    const validChildren = getValidChildren(children);

    const key = useId();

    const components = validChildren.flatMap((child, index) => [
      child,
      <Connector key={`${key}-${index}-connector`} />,
    ]);

    if (loading)
      components.push(
        <TimelineItem
          key={`${key}-loading`}
          className="py-1"
          dot={loadingDot ?? <TimelineSpinner />}
        >
          {loading}
        </TimelineItem>,
      );
    else components.pop();

    return (
      <TimelineProvider
        value={{
          mode,
        }}
      >
        <ul
          ref={forwardedRef}
          className={classNames(
            "flex h-full w-full",
            reverse ? "flex-col-reverse" : "flex-col",
            className,
          )}
          {...props}
        >
          {components}
        </ul>
      </TimelineProvider>
    );
  },
);
Timeline.displayName = "Timeline";

export type TimelineItem = Omit<HTMLAttributes<HTMLLIElement>, "color"> & {
  dot?: ReactNode;
  label?: ReactNode;
  color?: string;
};

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItem>(
  ({ dot, label, color, children, className, ...props }, forwardedRef) => {
    const { mode } = useTimelineContext();

    return (
      <li
        ref={forwardedRef}
        className={classNames(
          "flex w-full items-center gap-3",
          className,
          mode === "right" && "flex-row-reverse",
        )}
        {...props}
      >
        {dot ?? (
          <div
            className="dark:bg-secondary-950 border-primary-500 h-4 w-4 rounded-full border-[4px] bg-white"
            style={{
              borderColor: color,
            }}
          />
        )}
        {children !== true && (
          <p
            className={classNames(
              "text-secondary-800 dark:text-secondary-300 flex-1",
              mode === "right" && "flex justify-end",
            )}
          >
            {children}
          </p>
        )}
        {label && (
          <p className="dark:text-secondary-400 text-secondary-500 text-sm">
            {label}
          </p>
        )}
      </li>
    );
  },
);

const timelineConnectorClasses = cva("flex h-full", {
  variants: {
    mode: {
      left: "ml-2 flex-row",
      right: "mr-2 flex-row-reverse",
    },
  },
});

function TimelineConnector() {
  const { mode } = useTimelineContext();
  return (
    <div className={timelineConnectorClasses({ mode })}>
      <span className="bg-secondary-300 dark:bg-secondary-500 flex h-full w-px justify-start" />
    </div>
  );
}

function TimelineSpinner() {
  return <Spinner size="sm" />;
}
