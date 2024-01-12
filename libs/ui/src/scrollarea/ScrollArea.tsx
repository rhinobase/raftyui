import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList, VariableSizeListProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { classNames } from "../utils";
import { ScrollAreaProvider, useScrollAreaContext } from "./context";

// ScrollArea Component
export type ScrollArea = Pick<VariableSizeListProps, "layout" | "itemCount"> &
  HTMLAttributes<HTMLDivElement>;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollArea>(
  ({ layout = "vertical", itemCount, className, ...props }, forwardedref) => (
    <ScrollAreaProvider value={{ layout, itemCount }}>
      <div
        {...props}
        className={classNames(
          "dark:bg-secondary-950 overflow-hidden bg-white",
          className,
        )}
        ref={forwardedref}
      />
    </ScrollAreaProvider>
  ),
);
ScrollArea.displayName = "ScrollArea";

// ScrollAreaList Component
export type ScrollAreaList = Omit<
  VariableSizeListProps,
  "width" | "height" | "itemCount" | "layout" | "itemSize"
> & { itemSize: number | ((index: number) => number) };

export const ScrollAreaList = forwardRef<
  ElementRef<typeof VariableSizeList>,
  ScrollAreaList
>(({ itemSize, ...props }, forwardedref) => {
  const { itemCount, layout } = useScrollAreaContext();
  return (
    <AutoSizer>
      {({ height, width }) => (
        <VariableSizeList
          {...props}
          itemSize={(index) =>
            typeof itemSize === "function" ? itemSize(index) : itemSize
          }
          width={width}
          height={height}
          layout={layout}
          itemCount={itemCount}
          ref={forwardedref}
        />
      )}
    </AutoSizer>
  );
});
ScrollAreaList.displayName = "ScrollAreaList";

export type ScrollAreaInfinityList = Omit<
  ComponentPropsWithoutRef<typeof InfiniteLoader>,
  "children"
> &
  ScrollAreaList;

export const ScrollAreaInfinityList = forwardRef<
  ElementRef<typeof InfiniteLoader>,
  ScrollAreaInfinityList
>(
  (
    {
      isItemLoaded,
      itemCount,
      loadMoreItems,
      minimumBatchSize,
      threshold,
      ...props
    },
    forwardedRef,
  ) => (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
      minimumBatchSize={minimumBatchSize}
      threshold={threshold}
      ref={forwardedRef}
    >
      {({ onItemsRendered, ref }) => (
        <ScrollAreaList
          {...props}
          onItemsRendered={onItemsRendered}
          ref={ref}
        />
      )}
    </InfiniteLoader>
  ),
);
ScrollAreaInfinityList.displayName = "ScrollAreaInfinityList";
