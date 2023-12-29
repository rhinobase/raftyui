import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import { VariableSizeList, VariableSizeListProps } from "react-window";
import { classNames } from "../utils";
import {
  ScrollAreaContext,
  ScrollAreaProvider,
  useScrollAreaContext,
} from "./context";

// ScrollArea component
export type ScrollArea = Omit<
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
  "children"
> &
  Partial<ScrollAreaContext> & {
    itemCount: number;
  } & Pick<VariableSizeListProps, "children">;

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollArea
>(
  (
    { className, children, orientation = "vertical", itemCount, ...props },
    forwardedref,
  ) => {
    return (
      <ScrollAreaProvider value={{ orientation, itemCount }}>
        <ScrollAreaPrimitive.Root
          ref={forwardedref}
          className={classNames(
            "dark:bg-secondary-950 overflow-hidden bg-white",
            className,
          )}
          {...props}
        >
          <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
            <ScrollAreaList itemSize={() => 50}>{children}</ScrollAreaList>
            <ScrollAreaScrollBar />
          </ScrollAreaPrimitive.Viewport>
          <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
      </ScrollAreaProvider>
    );
  },
);
ScrollArea.displayName = "ScrollArea";

type ScrollAreaList = Omit<
  VariableSizeListProps,
  "itemCount" | "layout" | "height" | "width"
> &
  Partial<Pick<VariableSizeListProps, "width" | "height">>;

const ScrollAreaList = ({
  height = 300,
  width = 200,
  ...props
}: ScrollAreaList) => {
  const { itemCount, orientation } = useScrollAreaContext();
  return (
    <VariableSizeList
      height={height}
      width={width}
      layout={orientation}
      itemCount={itemCount}
      {...props}
    />
  );
};
ScrollAreaList.displayName = "ScrollAreaList";

type ScrollAreaScrollBar = Omit<
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  "orientation"
> & {
  thumbClassName?: HTMLAttributes<HTMLDivElement>["className"];
};

const ScrollAreaScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollAreaScrollBar
>(({ className, thumbClassName, children, ...props }, forwardedref) => {
  const { orientation } = useScrollAreaContext();

  return (
    <>
      <ScrollAreaPrimitive.Scrollbar
        {...props}
        orientation={orientation}
        className={classNames(
          "flex touch-none select-none bg-black/30 p-0.5 transition-colors duration-200 ease-out hover:bg-black/50",
          "data-[orientation=vertical]:w-2.5",
          "data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col",
          className,
        )}
        ref={forwardedref}
      >
        <ScrollAreaPrimitive.Thumb
          className={classNames(
            "bg-secondary-300 relative flex-1 rounded-[10px]",
            "before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']",
            thumbClassName,
          )}
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className="bg-black/50" />
    </>
  );
});
ScrollAreaScrollBar.displayName = "ScrollAreaScrollBar";
