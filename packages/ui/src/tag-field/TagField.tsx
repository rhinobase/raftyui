"use client";
import {
  TagsInput,
  useTagsInputContext,
  useTagsInputItemContext,
} from "@ark-ui/react";
import type { UseTagsInputReturn } from "@ark-ui/react/dist/components/tags-input/use-tags-input";
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
        {(tagsInput) => (
          <TagFieldItem tagsInput={tagsInput} placeholder={placeholder} />
        )}
      </TagsInput.Context>
    </TagsInput.Root>
  ),
);

TagField.displayName = "TagField";

type TagFieldItem = {
  tagsInput: UseTagsInputReturn;
  placeholder?: string;
};

function TagFieldItem({ tagsInput, placeholder }: TagFieldItem) {
  const { empty } = useTagsInputContext();

  return (
    <>
      <TagsInput.Control className="border-secondary-200 dark:border-secondary-700 data-[focus]:dark:ring-primary-100/20 data-[focus]:ring-primary-200 data-[focus]:border-primary-500 data-[focus]:dark:border-primary-400 flex flex-wrap items-center gap-3 rounded-md border px-2 py-1.5 transition-all data-[focus]:ring-2">
        {tagsInput.value.map((value, index) => (
          <TagsInput.Item key={`${index}-${1}`} index={index} value={value}>
            <TagPreviewItem value={value} />
            <TagsInput.ItemInput className="px-1 py-0.5 outline-none" />
          </TagsInput.Item>
        ))}
        <TagsInput.Input
          placeholder={placeholder}
          className="dark:text-secondary-200 flex-1 bg-transparent px-1 py-0.5 text-black outline-none"
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
        "border-secondary-200 dark:border-secondary-700 data-[highlighted]:dark:border-primary-400 dark:ring-primary-100/20 ring-primary-200 data-[highlighted]:border-primary-500 data-[disabled]:text-secondary-300 data-[disabled]:dark:text-secondary-500 flex items-center gap-1 rounded border px-1.5 py-0.5 transition-all data-[disabled]:cursor-not-allowed data-[highlighted]:ring-1 data-[disabled]:hover:bg-transparent data-[disabled]:dark:hover:bg-transparent",
        editing && "hidden",
      )}
    >
      <TagsInput.ItemText className="dark:text-secondary-200 text-sm text-black">
        {props.value}
      </TagsInput.ItemText>
      <TagsInput.ItemDeleteTrigger
        className={disabled ? "cursor-not-allowed" : "cursor-pointer"}
      >
        <XMarkIcon className="size-3.5 stroke-black stroke-2 dark:stroke-slate-200" />
      </TagsInput.ItemDeleteTrigger>
    </TagsInput.ItemPreview>
  );
}
