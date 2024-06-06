"use client";
import {
  TagsInput,
  type TagsInputRootProps,
  useTagsInputContext,
  useTagsInputItemContext,
} from "@ark-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { Button } from "../button";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export type TagField = TagsInputRootProps & {
  size?: SizeType;
  placeholder?: string;
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
};

export const TagField = forwardRef<ElementRef<typeof TagsInput.Root>, TagField>(
  function TagField(
    {
      placeholder,
      size = "md",
      isLoading = false,
      isDisabled = false,
      isReadOnly = false,
      className,
      ...props
    },
    forwardedRef,
  ) {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <TagsInput.Root
        {...props}
        readOnly={readOnly}
        disabled={disabled}
        className={classNames("relative flex w-full items-center", className)}
        ref={forwardedRef}
      >
        <TagsInput.Context>
          {() => <TagFieldControl size={size} placeholder={placeholder} />}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </TagsInput.Root>
    );
  },
);

const tagFieldControlClasses = cva(
  "border-secondary-300 dark:border-secondary-700 data-[focus]:dark:ring-primary-100/20 data-[focus]:ring-primary-200 data-[focus]:border-primary-500 data-[focus]:dark:border-primary-400 hover:border-primary-500 dark:hover:border-primary-400 data-[disabled]:hover:border-secondary-300 data-[disabled]:hover:dark:border-secondary-700 group/tag-control flex w-full flex-wrap items-center border outline-none transition-all data-[focus]:ring-2",
  {
    variants: {
      size: {
        sm: "pl-1.5 pr-[34px] py-1.5 gap-1.5 rounded-base",
        md: "pl-2 pr-[38px] py-2 gap-2 rounded-md",
        lg: "pl-2.5 pr-[46px] py-2.5 gap-2.5 rounded-lg",
      },
    },
  },
);

const tagFieldControlClearTriggerClasses = cva(
  "absolute p-1 data-[readOnly]:hidden",
  {
    variants: {
      size: {
        sm: "size-[18px] p-0.5 right-2 rounded-sm",
        md: "size-6 p-1 right-2 rounded",
        lg: "size-[26px] p-1 right-2.5 rounded-md",
      },
    },
  },
);

const tagInputTextClasses = {
  size: {
    sm: "text-xs leading-tight",
    md: "text-sm leading-tight",
    lg: "text-base leading-tight",
  },
};

type TagFieldControl = {
  placeholder?: string;
  size: SizeType;
};

function TagFieldControl({ placeholder, size }: TagFieldControl) {
  const { value } = useTagsInputContext();

  return (
    <>
      <TagsInput.Control className={tagFieldControlClasses({ size })}>
        {value.map((value, index) => (
          <TagsInput.Item key={`${index}-${value}`} index={index} value={value}>
            <TagPreviewItem value={value} size={size} />
            {/* @ts-ignore */}
            <TagsInput.ItemInput className={tagInputTextClasses.size[size]} />
          </TagsInput.Item>
        ))}
        <TagsInput.Input
          placeholder={placeholder}
          className={classNames(
            "dark:text-secondary-200 data-[disabled]:bg-secondary-300 flex-1 bg-transparent py-0.5 outline-none",
            // @ts-ignore
            tagInputTextClasses.size[size],
          )}
        />
      </TagsInput.Control>
      <TagsInput.ClearTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          colorScheme="error"
          className={tagFieldControlClearTriggerClasses({ size })}
        >
          <XMarkIcon className="size-full stroke-[3]" />
        </Button>
      </TagsInput.ClearTrigger>
    </>
  );
}

const tagFieldPreviewItemClasses = cva(
  "border-secondary-300 dark:border-secondary-700 data-[highlighted]:dark:border-primary-400 dark:ring-primary-100/20 ring-primary-200 data-[highlighted]:border-primary-500 items-center border transition-all data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60 data-[highlighted]:ring-1",
  {
    variants: {
      size: {
        sm: "gap-0.5 rounded-sm px-0.5 py-0",
        md: "gap-1 rounded-base px-1 py-px",
        lg: "gap-1.5 rounded-md px-1.5 py-0.5",
      },
      editing: {
        true: "hidden",
        false: "flex",
      },
    },
  },
);

const tagFieldPreviewItemDeleteTriggerClasses = cva(
  "text-secondary-500 group-data-[readonly]/tag-control:cursor-default",
  {
    variants: {
      size: {
        sm: "size-2.5",
        md: "size-3",
        lg: "size-3.5",
      },
      disabled: {
        true: "cursor-not-allowed",
        false:
          "cursor-pointer hover:text-red-500 dark:hover:text-red-300 group-data-[readonly]/tag-control:hover:text-secondary-500 dark:group-data-[readonly]/tag-control:hover:text-secondary-500",
      },
    },
  },
);

type TagPreviewItem = { value: string; size: SizeType };

function TagPreviewItem({ size, value }: TagPreviewItem) {
  const { editing, disabled } = useTagsInputItemContext();

  return (
    <TagsInput.ItemPreview
      className={tagFieldPreviewItemClasses({ size, editing })}
    >
      <TagsInput.ItemText
        className={classNames(
          "dark:text-secondary-100 font-light text-black",
          // @ts-ignore
          tagInputTextClasses.size[size],
        )}
      >
        {value}
      </TagsInput.ItemText>
      <TagsInput.ItemDeleteTrigger
        className={tagFieldPreviewItemDeleteTriggerClasses({ size, disabled })}
      >
        <XMarkIcon className="size-full stroke-2" />
      </TagsInput.ItemDeleteTrigger>
    </TagsInput.ItemPreview>
  );
}
