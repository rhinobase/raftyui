"use client";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef, useState } from "react";
import {
  DragDropContext,
  Draggable,
  type DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { List, ListItem } from "../list";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

const reorderableListItemClasses = cva(
  "hover:bg-secondary-50 ring-primary-400 outline-none focus-visible:ring-1 dark:hover:bg-secondary-800",
  {
    variants: {
      size: {
        sm: "px-1.5 text-sm rounded-sm",
        md: "px-2 rounded",
        lg: "px-2.5 text-lg rounded-md",
      },
      dragging: {
        true: "bg-secondary-50 dark:bg-secondary-800",
        false: "",
      },
    },
  },
);

const reorderableListClasses = cva("w-full select-none", {
  variants: {
    hidden: {
      true: "hidden",
      false: "",
    },
  },
});

export type ReorderableList = Partial<DragDropContext> & {
  data: string[];
  onOrderChange?: (items: string[]) => void;
  size?: "sm" | "md" | "lg";
  hidden?: ValueOrFunction;
} & Pick<List, "className">;

export const ReorderableList = forwardRef<
  ElementRef<typeof DragDropContext>,
  ReorderableList
>(({ data, onOrderChange, size = "md", className, ...props }, forwardedRef) => {
  const [updatedData, setUpdatedData] = useState(data);

  const isHidden = getValue(props.hidden);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = [...updatedData];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setUpdatedData(items);
    onOrderChange?.(items);
  };

  return (
    <DragDropContext {...props} onDragEnd={handleOnDragEnd} ref={forwardedRef}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <List
            {...provided.droppableProps}
            className={classNames(
              reorderableListClasses({ hidden: isHidden }),
              className,
            )}
            ref={provided.innerRef}
          >
            {updatedData.map((value, index) => (
              <Draggable
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
                draggableId={String(index)}
                index={index}
              >
                {(provided, snapshot) => (
                  <ListItem
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={reorderableListItemClasses({
                      size,
                      dragging: snapshot.isDragging,
                    })}
                    ref={provided.innerRef}
                  >
                    {value}
                  </ListItem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
});
ReorderableList.displayName = "ReorderableList";
