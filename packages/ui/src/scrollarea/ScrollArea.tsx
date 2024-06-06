"use client";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList, type VariableSizeListProps } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import {
  type ScrollAreaContext,
  ScrollAreaProvider,
  useScrollAreaContext,
} from "./context";

type ScrollAreaOptionalProp = "layout";

// ScrollArea Component
export type ScrollArea = HTMLAttributes<HTMLDivElement> &
  Partial<Pick<ScrollAreaContext, ScrollAreaOptionalProp>> &
  Omit<ScrollAreaContext, ScrollAreaOptionalProp>;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollArea>(
  ({ layout = "vertical", itemCount, itemSize, ...props }, forwardedRef) => (
    <ScrollAreaProvider value={{ layout, itemCount, itemSize }}>
      <div {...props} ref={forwardedRef} />
    </ScrollAreaProvider>
  ),
);
ScrollArea.displayName = "ScrollArea";

type VariableSizeListExcludedProps =
  | "width"
  | "height"
  | "layout"
  | "itemCount"
  | "itemSize";

// ScrollAreaList Component
export type ScrollAreaList = Omit<
  VariableSizeListProps,
  VariableSizeListExcludedProps
>;

export const ScrollAreaList = forwardRef<
  ElementRef<typeof VariableSizeList>,
  ScrollAreaList
>(function ScrollAreaList(props, forwardedRef) {
  const { itemCount, layout, itemSize } = useScrollAreaContext();

  const _itemSize = (index: number) =>
    typeof itemSize === "function" ? itemSize(index) : itemSize;
  const _itemCount = typeof itemCount === "function" ? itemCount() : itemCount;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <VariableSizeList
          {...props}
          width={width}
          height={height}
          layout={layout}
          itemCount={_itemCount}
          itemSize={_itemSize}
          ref={forwardedRef}
        />
      )}
    </AutoSizer>
  );
});

type InfiniteLoaderType = typeof InfiniteLoader;

export type ScrollAreaInfinityList = Omit<
  ComponentPropsWithoutRef<InfiniteLoaderType>,
  "children" | "itemCount"
> &
  Omit<ScrollAreaList, "onItemsRendered" | "ref">;

export function ScrollAreaInfinityList({
  isItemLoaded,
  loadMoreItems,
  minimumBatchSize,
  threshold,
  ...props
}: ScrollAreaInfinityList) {
  const { itemCount } = useScrollAreaContext();

  const _itemCount = typeof itemCount === "function" ? itemCount() : itemCount;

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={_itemCount}
      loadMoreItems={loadMoreItems}
      minimumBatchSize={minimumBatchSize}
      threshold={threshold}
    >
      {({ onItemsRendered, ref }) => (
        <ScrollAreaList
          {...props}
          onItemsRendered={onItemsRendered}
          ref={ref}
        />
      )}
    </InfiniteLoader>
  );
}
