import { HTMLAttributes, forwardRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList, VariableSizeListProps } from "react-window";
import { classNames } from "../utils";
import {
  ScrollAreaContext,
  ScrollAreaProvider,
  useScrollAreaContext,
} from "./context";

// ScrollArea component
export type ScrollArea = Omit<HTMLAttributes<HTMLDivElement>, "children"> &
  Partial<ScrollAreaContext> &
  Pick<VariableSizeListProps, "children" | "itemCount" | "itemSize">;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollArea>(
  (
    {
      className,
      children,
      orientation = "vertical",
      itemCount,
      itemSize,
      ...props
    },
    forwardedref,
  ) => {
    return (
      <ScrollAreaProvider value={{ orientation, itemCount }}>
        <div
          ref={forwardedref}
          className={classNames(
            "dark:bg-secondary-950 overflow-hidden bg-white",
            className,
          )}
          {...props}
        >
          <AutoSizer>
            {({ height, width }) => (
              <ScrollAreaList itemSize={itemSize} width={width} height={height}>
                {children}
              </ScrollAreaList>
            )}
          </AutoSizer>
        </div>
      </ScrollAreaProvider>
    );
  },
);
ScrollArea.displayName = "ScrollArea";

type ScrollAreaList = Omit<VariableSizeListProps, "itemCount" | "layout">;

const ScrollAreaList = (props: ScrollAreaList) => {
  const { itemCount, orientation } = useScrollAreaContext();
  return (
    <VariableSizeList layout={orientation} itemCount={itemCount} {...props} />
  );
};
ScrollAreaList.displayName = "ScrollAreaList";
