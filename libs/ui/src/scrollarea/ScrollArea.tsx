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
import {
  ScrollAreaContext,
  ScrollAreaProvider,
  useScrollAreaContext,
} from "./context";

type ScrollAreaOptionalProp = "layout";

// ScrollArea Component
export type ScrollArea = HTMLAttributes<HTMLDivElement> &
  Partial<Pick<ScrollAreaContext, ScrollAreaOptionalProp>> &
  Omit<ScrollAreaContext, ScrollAreaOptionalProp>;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollArea>(
  (
    { layout = "vertical", itemCount, itemSize, className, ...props },
    forwardedRef,
  ) => (
    <ScrollAreaProvider value={{ layout, itemCount, itemSize }}>
      <div
        {...props}
        className={classNames("dark:bg-secondary-950 bg-white", className)}
        ref={forwardedRef}
      />
    </ScrollAreaProvider>
  ),
);
ScrollArea.displayName = "ScrollArea";

type VariableSizeListExcludedProps =
  | "width"
  | "height"
  | "itemCount"
  | "layout"
  | "itemSize";

// ScrollAreaList Component
export type ScrollAreaList = Omit<
  VariableSizeListProps,
  VariableSizeListExcludedProps
>;

export const ScrollAreaList = forwardRef<
  ElementRef<typeof VariableSizeList>,
  ScrollAreaList
>((props, forwardedRef) => {
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
ScrollAreaList.displayName = "ScrollAreaList";

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
