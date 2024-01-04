import { Spinner, classNames } from "@rafty/ui";
import {
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";
import {
  TimelineContext,
  TimelineProvider,
  useTimelineContext,
} from "./context";

export type Timeline = HTMLAttributes<HTMLDivElement> &
  Partial<TimelineContext> & {
    loadingDot?: ReactElement;
    loading?: boolean | ReactNode;
    reverse?: boolean;
  };

export const Timeline = forwardRef<HTMLDivElement, Timeline>(
  (
    {
      loading,
      loadingDot,
      mode = "left",
      reverse = false,
      children,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <TimelineProvider
        value={{
          mode,
        }}
      >
        <div
          ref={forwardedRef}
          className={classNames(
            "relative flex w-full gap-10",
            reverse ? "flex-col-reverse" : "flex-col",
            className,
          )}
          {...props}
        >
          {children}
          {loading && (
            <TimelineItem dot={loadingDot ?? <TimelineSpinner />}>
              {loading}
            </TimelineItem>
          )}
          <span
            className={classNames(
              "bg-secondary-300 dark:bg-secondary-500 absolute z-0 h-full w-px",
              mode === "right" ? "right-2" : "left-2",
            )}
          />
        </div>
      </TimelineProvider>
    );
  },
);
Timeline.displayName = "Timeline";

export type TimelineItem = {
  dot?: ReactNode;
  label?: ReactNode;
  color?: string;
};

export function TimelineItem({
  children,
  color,
  dot,
  label,
}: PropsWithChildren<TimelineItem>) {
  const { mode } = useTimelineContext();

  return (
    <div
      className={classNames(
        "dark:bg-secondary-900 relative z-[1] flex h-full w-full items-center gap-3 bg-white",
        mode === "right" && "flex-row-reverse",
      )}
    >
      {dot ?? (
        <div
          className="dark:bg-secondary-950 border-primary-500 h-4 w-4 rounded-full border-[4px] bg-white"
          style={{
            borderColor: color,
          }}
        />
      )}
      <p
        className={classNames(
          "text-secondary-800 dark:text-secondary-300 flex-1",
          mode === "right" && "flex justify-end",
        )}
      >
        {children}
      </p>
      {label && (
        <p className="dark:text-secondary-400 text-secondary-500 text-sm">
          {label}
        </p>
      )}
    </div>
  );
}

function TimelineSpinner() {
  return (
    <div className="text-primary-500 dark:text-primary-400">
      <Spinner inheritParent size="sm" />
    </div>
  );
}
