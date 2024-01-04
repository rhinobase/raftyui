import { Spinner, classNames, getValidChildren } from "@rafty/ui";
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
      ...props
    },
    forwardedRef,
  ) => {
    const validChildren = getValidChildren(children);
    const Border = () => (
      <div
        className={classNames(
          "flex h-full",
          mode === "right" ? "mr-2 flex-row-reverse" : "ml-2 flex-row",
        )}
      >
        <span
          className={classNames(
            "bg-secondary-300 dark:bg-secondary-500 flex h-full w-px justify-start",
          )}
        />
      </div>
    );

    const components = validChildren.flatMap((child) => {
      const key = useId();
      return [child, <Border key={key} />];
    });

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
          {loading ? (
            <>
              {components}
              <TimelineItem
                className="py-1"
                dot={loadingDot ?? <TimelineSpinner />}
              >
                {loading}
              </TimelineItem>
            </>
          ) : (
            components.slice(0, -1)
          )}
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

function TimelineSpinner() {
  return (
    <div className="text-primary-500 dark:text-primary-400">
      <Spinner inheritParent size="sm" />
    </div>
  );
}
