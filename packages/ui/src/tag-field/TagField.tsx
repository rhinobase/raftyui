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
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type TagFieldContext,
  TagFieldProvider,
  useTagFieldContext,
} from "./context";

export type TagField = ComponentPropsWithoutRef<typeof TagsInput.Root> & {
  isReadOnly?: ValueOrFunction<boolean>;
  isDisabled?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
  inputPlaceholder?: string;
} & Partial<TagFieldContext>;

export const TagField = forwardRef<ElementRef<typeof TagsInput.Root>, TagField>(
  (
    {
      inputPlaceholder,
      size = "md",
      isLoading = false,
      isDisabled = false,
      isReadOnly,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <TagFieldProvider value={{ size }}>
        <TagsInput.Root
          {...props}
          readOnly={readOnly}
          disabled={disabled}
          ref={forwardedRef}
          className="w-full space-y-2"
        >
          <TagsInput.Context>
            {() => <TagFieldItem placeholder={inputPlaceholder} />}
          </TagsInput.Context>
        </TagsInput.Root>
      </TagFieldProvider>
    );
  },
);

TagField.displayName = "TagField";

const CONTROL_Size = {
  sm: "px-1.5 py-1",
  md: "px-2 py-1.5",
  lg: "px-3 py-2",
};

const TEXT_SIZE = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

type TagFieldItem = {
  placeholder?: string;
};

function TagFieldItem({ placeholder }: TagFieldItem) {
  const { empty, value } = useTagsInputContext();
  const { size } = useTagFieldContext();

  return (
    <>
      <TagsInput.Control
        className={classNames(
          "border-secondary-300 dark:border-secondary-700 data-[focus]:dark:ring-primary-100/20 data-[focus]:ring-primary-200 data-[focus]:border-primary-500 data-[focus]:dark:border-primary-400 hover:border-primary-500 dark:hover:border-primary-400 data-[disabled]:hover:border-secondary-300 data-[disabled]:hover:dark:border-secondary-700 flex flex-wrap items-center gap-2 rounded-md border transition-all data-[focus]:ring-2",
          CONTROL_Size[size],
        )}
      >
        {value.map((value, index) => (
          <TagsInput.Item key={`${index}-${1}`} index={index} value={value}>
            <TagPreviewItem value={value} />
            <TagsInput.ItemInput
              className={classNames("outline-none", TEXT_SIZE[size])}
            />
          </TagsInput.Item>
        ))}
        <TagsInput.Input
          placeholder={placeholder}
          className={classNames(
            "dark:text-secondary-200 data-[disabled]:bg-secondary-300 flex-1 bg-transparent outline-none",
            TEXT_SIZE[size],
          )}
        />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild>
        <Button
          variant="outline"
          size={size}
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
  const { size } = useTagFieldContext();

  return (
    <TagsInput.ItemPreview
      className={classNames(
        "border-secondary-300 dark:border-secondary-700 data-[highlighted]:dark:border-primary-400 dark:ring-primary-100/20 ring-primary-200 data-[highlighted]:border-primary-500 flex items-center gap-1 rounded border px-1.5 py-px transition-all data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60 data-[highlighted]:ring-1",
        editing && "hidden",
      )}
    >
      <TagsInput.ItemText
        className={classNames(
          "dark:text-secondary-200 text-black",
          TEXT_SIZE[size],
        )}
      >
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
