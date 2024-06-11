"use client";
import {
  List,
  ListItem,
  type ValueOrFunction,
  classNames,
  getValue,
} from "@rafty/ui";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef, useState } from "react";
import {
  DragDropContext,
  Draggable,
  type DropResult,
  Droppable,
} from "react-beautiful-dnd";

const reorderableListClasses = cva("w-full select-none", {
  variants: {
    hidden: {
      true: "hidden",
      false: "block",
    },
  },
});

const reorderableListItemClasses = cva(
  "outline-none focus-visible:ring-2 ring-primary-300 dark:ring-primary-100",
  {
    variants: {
      size: {
        sm: "px-1.5 text-sm rounded-sm",
        md: "px-2 rounded",
        lg: "px-2.5 text-lg rounded-md",
      },
      dragging: {
        true: "bg-white dark:bg-secondary-950",
        false: "",
      },
    },
  },
);

export type ReorderableList = Partial<DragDropContext> & {
  data: string[];
  onOrderChange?: (items: string[]) => void;
  size?: "sm" | "md" | "lg";
  isHidden?: ValueOrFunction;
} & Pick<List, "className">;

export const ReorderableList = forwardRef<
  ElementRef<typeof DragDropContext>,
  ReorderableList
>(function ReorderableList(
  { data, onOrderChange, size = "md", className, isHidden = false, ...props },
  forwardedRef,
) {
  const [updatedData, setUpdatedData] = useState(data);

  const hidden = getValue(isHidden);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = updatedData;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUpdatedData(items);
    onOrderChange?.(items);
  };

  return (
    <DragDropContext {...props} onDragEnd={handleOnDragEnd} ref={forwardedRef}>
      <Droppable droppableId="droppable" direction="vertical">
        {({ droppableProps, innerRef, placeholder }) => (
          <List
            {...droppableProps}
            className={classNames(
              reorderableListClasses({ hidden }),
              className,
            )}
            ref={innerRef}
          >
            {updatedData.map((value, index) => (
              <Draggable
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                draggableId={String(index)}
                index={index}
              >
                {(
                  { dragHandleProps, draggableProps, innerRef },
                  { isDragging },
                ) => (
                  <ListItem
                    {...draggableProps}
                    {...dragHandleProps}
                    className={reorderableListItemClasses({
                      size,
                      dragging: isDragging,
                    })}
                    ref={innerRef}
                  >
                    {value}
                  </ListItem>
                )}
              </Draggable>
            ))}
            {placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
});
