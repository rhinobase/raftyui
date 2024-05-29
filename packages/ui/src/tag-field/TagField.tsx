"use client";
import {
  TagsInput,
  useTagsInputContext,
  useTagsInputItemContext,
} from "@ark-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
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
  inputPlaceholder?: string;
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
} & Partial<TagFieldContext>;

export const TagField = forwardRef<ElementRef<typeof TagsInput.Root>, TagField>(
  (
    {
      inputPlaceholder,
      size = "md",
      isLoading = false,
      isDisabled = false,
      isReadOnly = false,
      className,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <TagFieldProvider
        value={{
          size,
        }}
      >
        <TagsInput.Root
          {...props}
          readOnly={readOnly}
          disabled={disabled}
          className={classNames("w-full space-y-2", className)}
          ref={forwardedRef}
        >
          <TagsInput.Context>
            {() => <TagFieldItem placeholder={inputPlaceholder} />}
          </TagsInput.Context>
          <TagsInput.HiddenInput />
        </TagsInput.Root>
      </TagFieldProvider>
    );
  },
);

TagField.displayName = "TagField";

export const tagInputControlClasses = {
  size: {
    sm: "px-1.5 py-1",
    md: "px-2 py-1.5",
    lg: "px-3 py-2",
  },
};

export const tagInputTextClasses = {
  size: {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  },
};

export const iconClasses = cva("stroke-black stroke-2 dark:stroke-slate-200", {
  variants: {
    size: {
      sm: "size-3",
      md: "size-3.5",
      lg: "size-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TagFieldItem = {
  placeholder?: string;
};

function TagFieldItem({ placeholder }: TagFieldItem) {
  const { value } = useTagsInputContext();
  const { size } = useTagFieldContext();

  return (
    <>
      <TagsInput.Control
        className={classNames(
          "border-secondary-300 dark:border-secondary-700 data-[focus]:dark:ring-primary-100/20 data-[focus]:ring-primary-200 data-[focus]:border-primary-500 data-[focus]:dark:border-primary-400 hover:border-primary-500 dark:hover:border-primary-400 data-[disabled]:hover:border-secondary-300 data-[disabled]:hover:dark:border-secondary-700 group/tag-input flex flex-wrap items-center gap-2 rounded-md border outline-none transition-all data-[focus]:ring-2",
          tagInputControlClasses.size[size],
        )}
      >
        {value.map((value, index) => (
          <TagsInput.Item key={`${index}-${value}`} index={index} value={value}>
            <TagPreviewItem value={value} />
            <TagsInput.ItemInput className={tagInputTextClasses.size[size]} />
          </TagsInput.Item>
        ))}
        <TagsInput.Input
          placeholder={placeholder}
          className={classNames(
            "dark:text-secondary-200 data-[disabled]:bg-secondary-300 flex-1 bg-transparent outline-none",
            tagInputTextClasses.size[size],
          )}
        />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild>
        <Button
          variant="outline"
          size={size}
          className={classNames(
            "data-[readOnly]:border-secondary-300/80 data-[readOnly]:text-secondary-400/90 data-[readOnly]:dark:border-secondary-500/80 data-[readOnly]:dark:text-secondary-400/70 data-[readOnly]:dark:hover:bg-secondary-900 w-full data-[readOnly]:cursor-not-allowed data-[readOnly]:ring-offset-0 data-[readOnly]:hover:bg-white data-[readOnly]:focus:ring-0",
          )}
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
  console.log(disabled);

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
          tagInputTextClasses.size[size],
        )}
      >
        {props.value}
      </TagsInput.ItemText>
      <TagsInput.ItemDeleteTrigger
        className={classNames(
          "group-data-[readonly]/tag-input:cursor-default",
          disabled && "cursor-not-allowed",
        )}
      >
        <XMarkIcon className={iconClasses({ size })} />
      </TagsInput.ItemDeleteTrigger>
    </TagsInput.ItemPreview>
  );
}
