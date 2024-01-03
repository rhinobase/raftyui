import { HTMLAttributes, forwardRef } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { VariableSizeList, VariableSizeListProps } from "react-window";
import { classNames } from "../utils";
import { ScrollAreaProvider, useScrollAreaContext } from "./context";

// ScrollArea component
export type ScrollArea = Omit<VariableSizeListProps, "height" | "width"> &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const ScrollArea = forwardRef<HTMLDivElement, ScrollArea>(
  (
    { layout = "vertical", itemSize, itemCount, children, className, ...props },
    forwardedref,
  ) => (
    <ScrollAreaProvider value={{ layout, itemCount }}>
      <div
        {...props}
        className={classNames(
          "dark:bg-secondary-950 overflow-hidden bg-white",
          className,
        )}
        ref={forwardedref}
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
  ),
);
ScrollArea.displayName = "ScrollArea";

type ScrollAreaList = Omit<VariableSizeListProps, "itemCount" | "layout">;

const ScrollAreaList = (props: ScrollAreaList) => {
  const { itemCount, layout } = useScrollAreaContext();
  return <VariableSizeList {...props} layout={layout} itemCount={itemCount} />;
};
ScrollAreaList.displayName = "ScrollAreaList";
