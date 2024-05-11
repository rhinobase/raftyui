"use client";
import {
  TagsInput,
  useTagsInputContext,
  useTagsInputItemContext,
} from "@ark-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Button } from "../button";
import { classNames } from "../utils";

export type TagField = Pick<
  ComponentPropsWithoutRef<typeof TagsInput.Root>,
  | "asChild"
  | "blurBehavior"
  | "defaultValue"
  | "delimiter"
  | "id"
  | "inputValue"
  | "max"
  | "maxLength"
  | "name"
  | "onValueChange"
  | "readOnly"
  | "value"
  | "disabled"
  | "editable"
> & { placeholder?: string };

export const TagField = forwardRef<ElementRef<typeof TagsInput.Root>, TagField>(
  ({ placeholder, ...props }, forwardedRef) => (
    <TagsInput.Root {...props} ref={forwardedRef} className="w-full space-y-2">
      <TagsInput.Context>
        {() => <TagFieldItem placeholder={placeholder} />}
      </TagsInput.Context>
    </TagsInput.Root>
  ),
);

TagField.displayName = "TagField";

type TagFieldItem = {
  placeholder?: string;
};

function TagFieldItem({ placeholder }: TagFieldItem) {
  const { empty, value } = useTagsInputContext();

  return (
    <>
      <TagsInput.Control className="border-secondary-300 dark:border-secondary-700 data-[focus]:dark:ring-primary-100/20 data-[focus]:ring-primary-200 data-[focus]:border-primary-500 data-[focus]:dark:border-primary-400 hover:border-primary-500 dark:hover:border-primary-400 data-[disabled]:hover:border-secondary-300 data-[disabled]:hover:dark:border-secondary-700 flex flex-wrap items-center gap-2 rounded-md border px-2 py-1.5 transition-all data-[focus]:ring-2">
        {value.map((value, index) => (
          <TagsInput.Item key={`${index}-${1}`} index={index} value={value}>
            <TagPreviewItem value={value} />
            <TagsInput.ItemInput className="px-1 py-[3px] text-sm outline-none" />
          </TagsInput.Item>
        ))}
        <TagsInput.Input
          placeholder={placeholder}
          className="dark:text-secondary-200 data-[disabled]:bg-secondary-300 flex-1 bg-transparent text-sm outline-none"
        />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild>
        <Button
          variant="outline"
          className={classNames(empty && "hidden", "w-full")}
        >
          Clear all
        </Button>
      </TagsInput.ClearTrigger>
    </>
  );
}

function TagPreviewItem(props: { value: string }) {
  const { editing, disabled } = useTagsInputItemContext();

  return (
    <TagsInput.ItemPreview
      className={classNames(
        "border-secondary-300 dark:border-secondary-700 data-[highlighted]:dark:border-primary-400 dark:ring-primary-100/20 ring-primary-200 data-[highlighted]:border-primary-500 flex items-center gap-1 rounded border px-1.5 py-0.5 transition-all data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60 data-[highlighted]:ring-1",
        editing && "hidden",
      )}
    >
      <TagsInput.ItemText className="dark:text-secondary-200 text-sm text-black">
        {props.value}
      </TagsInput.ItemText>
      <TagsInput.ItemDeleteTrigger
        className={classNames(
          "data-[readonly]:cursor-default",
          disabled ? "cursor-not-allowed" : "cursor-pointer",
        )}
      >
        <XMarkIcon className="size-3.5 stroke-black stroke-2 dark:stroke-slate-200" />
      </TagsInput.ItemDeleteTrigger>
    </TagsInput.ItemPreview>
  );
}
