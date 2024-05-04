"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useReducer } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import { eventHandler } from "../utils";

enum ACTION {
  ADD = 0,
  DELETE = 1,
  RESET = 2,
}

export type TagField = Omit<InputField, "onChange" | "ref" | "type"> & {
  initialData?: string[];
  onChange?: (tags: string[]) => void;
};

export const TagField = ({ initialData, onChange, ...props }: TagField) => {
  const [tags, dispatch] = useReducer((prev: string[], cur: string | null) => {
    if (!cur) return [];

    // Checking, if the user wanna deselect the value
    const valueIndex = prev.findIndex((val) => val === cur);
    const isSelected = valueIndex !== -1;

    let value: string[];

    // Removing the value as it already exist
    if (isSelected) {
      value = [...prev];
    }
    // Adding the new value
    else value = [...prev, cur];

    onChange?.(value);

    return value;
  }, initialData ?? []);

  const handlePress = eventHandler((event) => {
    const data = event.currentTarget.value.trim();
    if (data.length !== 0 && data !== " ") dispatch(data);
    event.currentTarget.value = "";
  });

  const clearAll = eventHandler(() => dispatch(null));

  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-2">
        <InputField {...props} type="text" onKeyDown={handlePress} />
        <Button
          variant="ghost"
          onClick={clearAll}
          onKeyDown={clearAll}
          className={tags.length < 2 ? "hidden" : undefined}
        >
          Clear All
        </Button>
      </div>
      <div className="my-1.5 flex min-h-fit flex-wrap items-center justify-center gap-x-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className={
              "bg-secondary-100 dark:bg-secondary-800 my-1 flex items-center justify-center gap-1 rounded-md py-1 pl-3 pr-[2px] font-semibold dark:text-zinc-100"
            }
          >
            <span className="text-sm leading-[0px]">{tag}</span>
            <Button
              colorScheme="error"
              variant="ghost"
              size="sm"
              className="text-secondary-400 p-[1px] hover:text-red-500"
              onClick={clearAll}
              onKeyDown={clearAll}
            >
              <XMarkIcon className="size-3.5 stroke-[2]" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

TagField.displayName = "TagField";
