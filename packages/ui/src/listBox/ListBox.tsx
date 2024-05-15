import { CheckIcon } from "@heroicons/react/24/outline";
import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  useState,
} from "react";
import { ScrollArea, ScrollAreaList } from "../scrollarea";
import { classNames, eventHandler } from "../utils";

export type ListBox = {
  itemSize?: number;
  items: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
  className?: HTMLDivElement["className"];
  onValueChange?: (value: string) => void;
};

export function ListBox({
  items,
  itemSize = 40,
  className,
  defaultValue,
  onValueChange,
}: ListBox) {
  const [checked, setChecked] = useState<string>();

  const length = items.length;

  const handleClick = (index: number) => {
    const value = items[index].value;
    setChecked(value);
    onValueChange?.(value);
  };

  return (
    <ScrollArea
      itemCount={length}
      itemSize={itemSize}
      className={classNames(
        "dark:border-secondary-700 h-40 w-full rounded-md border",
        className,
      )}
    >
      <ScrollAreaList>
        {({ index, style }) => {
          const selected = items[index].value === checked;

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              onKeyDown={() => handleClick(index)}
              className={classNames(
                "dark:text-secondary-100 hover:bg-secondary-100/40 dark:border-secondary-700 dark:bg-secondary-900 flex cursor-pointer items-center justify-between border-b bg-white px-4 text-sm transition-all ease-in-out",
                selected && "bg-primary-50/60 hover:bg-primary-50",
              )}
              style={style}
            >
              {items[index].label}
              {selected && <CheckIcon className="size-4" />}
            </div>
          );
        }}
      </ScrollAreaList>
    </ScrollArea>
  );
}
