import { Spinner, classNames, getValidChildren } from "@rafty/ui";
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
  };

export const Timeline = forwardRef<HTMLDivElement, Timeline>(
  (
    { loading, loadingDot, mode, reverse, children, className, ...props },
    forwardedRef,
  ) => {
    const value = getValidChildren(children);

    const spinner = (
      <div className="text-primary-500 dark:text-primary-400">
        <Spinner inheritParent size="sm" />
      </div>
    );
    if (loading)
      if (typeof loading === "boolean") {
        if (loadingDot) {
          value.push(
            <div
              className={classNames(
                reverse ? "mb-2" : "mt-2",
                mode && "ml-[51%]",
              )}
            >
              {loadingDot}
            </div>,
          );
        } else {
          value.push(spinner);
        }
      } else {
        value.push(
          <div
            className={classNames(
              "flex items-center gap-3",
              reverse ? "mb-2" : "mt-2",
              mode && "ml-[51%]",
            )}
          >
            {loadingDot ?? spinner}
            <p className="dark:text-secondary-300 text-secondary-800">
              {loading}
            </p>
          </div>,
        );
      }
    return (
      <TimelineProvider
        value={{
          mode,
          reverse,
        }}
      >
        <div
          ref={forwardedRef}
          className={classNames(
            "flex h-full w-full flex-col",
            // !loading && "[&>div:last-child]:hidden",
            reverse && "flex-col-reverse",
            className,
          )}
          {...props}
        >
          {value}
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
  const { reverse, mode } = useTimelineContext();

  return (
    <div
      className={classNames(
        mode ? "grid grid-cols-2 gap-3" : "flex flex-col",
        reverse && "flex-col-reverse",
        mode && reverse && "items-end",
        "relative h-full w-full",
      )}
    >
      {mode && label && (
        <div
          className={classNames(
            mode === "right"
              ? "order-2 ml-[30px] justify-end "
              : "flex justify-end",
          )}
        >
          {label}
        </div>
      )}
      <div
        className={classNames(
          "flex w-full gap-3",
          !mode && "items-center",
          mode === "right" && "ml-[30px] justify-end",
          mode && reverse && "items-center",
        )}
      >
        <span
          className={classNames(
            "bg-secondary-300 dark:bg-secondary-500 absolute h-full w-px",
            reverse ? "-top-1.5" : "top-1.5",
            mode ? "left-[52%]" : "left-2",
          )}
        />
        <div
          className={classNames(
            !mode && "dark:bg-secondary-900 bg-white",
            mode === "right" && "order-1",
            "z-10",
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
        </div>
        <p
          className={classNames(
            "text-secondary-800 dark:text-secondary-300",
            label && !mode && "flex-1",
          )}
        >
          {children}
        </p>
        {label && !mode && (
          <p className="text-secondary-400 text-sm">{label}</p>
        )}
      </div>
    </div>
  );
}
