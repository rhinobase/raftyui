"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { forwardRef, useEffect, useReducer } from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import { eventHandler } from "../utils";

export type TagField = Omit<
  InputField,
  "onChange" | "type" | "defaultValue" | "value"
> & {
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  separator?: string;
};

export const TagField = forwardRef<HTMLInputElement, TagField>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      separator = " ",
      ...props
    },
    forwardedRef,
  ) => {
    console.log("Rendering");
    const [tags, dispatch] = useReducer(
      (
        prev: string[],
        cur: string | string[] | { value: string[]; force: true } | null,
      ) => {
        if (!cur) return [];

        if (typeof cur === "object" && "force" in cur) return cur.value;

        let value: string[] = [];

        if (Array.isArray(cur)) {
          value = Array.from(new Set([...prev, ...cur]));
        } else {
          // Checking, if the user wanna deselect the value
          const valueIndex = prev.findIndex((val) => val === cur);
          const isSelected = valueIndex !== -1;

          // Removing the value as it already exist
          if (isSelected) {
            value = [...prev];
            value.splice(valueIndex, 1);
          }
          // Adding the new value
          else value = [...prev, cur];
        }

        onChange?.(value);

        return value;
      },
      defaultValue ?? [],
    );

    // Synchronize internal state with controlled value
    // biome-ignore lint/correctness/useExhaustiveDependencies: tags are getting updated in the dispatch
    useEffect(() => {
      if (!controlledValue) return;

      const array2Sorted = tags.slice().sort();
      const isSame =
        controlledValue.length === tags.length &&
        controlledValue
          .slice()
          .sort()
          .every((value, index) => value === array2Sorted[index]);

      if (!isSame) dispatch(controlledValue);
    }, [controlledValue]);

    const handlePress = eventHandler((event) => {
      const data = event.currentTarget.value.trim();
      if (typeof data === "string") {
        const segments = data.split(separator).filter((seg) => seg !== "");
        if (segments.length !== 0) dispatch(segments);
      }
      event.currentTarget.value = "";
    });

    const removeTag = (tag: string) => eventHandler(() => dispatch(tag));

    const clearAll = eventHandler(() => dispatch(null));

    return (
      <div className="w-full">
        <div className="flex w-full items-center gap-2">
          <InputField
            {...props}
            type="text"
            onKeyDown={handlePress}
            ref={forwardedRef}
          />
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
                onClick={removeTag(tag)}
                onKeyDown={removeTag(tag)}
              >
                <XMarkIcon className="size-3.5 stroke-[2]" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

TagField.displayName = "TagField";
