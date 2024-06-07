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
import { useFieldControlContext } from "../field-control";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

export type TagField = TagsInputRootProps & {
  size?: SizeType;
  placeholder?: string;
  isDisabled?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
};

export const TagField = forwardRef<ElementRef<typeof TagsInput.Root>, TagField>(
  function TagField(
    {
      name,
      disabled,
      readOnly,
      placeholder,
      size = "md",
      isLoading,
      isDisabled,
      isReadOnly,
      isInvalid,
      className,
      ...props
    },
    forwardedRef,
  ) {
    const fieldControlContext = useFieldControlContext() ?? {
      isDisabled: false,
      isLoading: false,
      isReadOnly: false,
      isRequired: false,
      isInvalid: false,
    };

    const _name = name ?? fieldControlContext.name;
    const _disabled =
      (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
      (getValue(isLoading) ?? fieldControlContext.isLoading);
    const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
    const _readOnly =
      readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

    const tagFieldProps = {
      ...props,
      name: _name,
      disabled: _disabled,
      readOnly: _readOnly,
      className: classNames("relative flex w-full items-center", className),
    };

    return (
      <TagsInput.Root {...tagFieldProps} ref={forwardedRef}>
        <TagsInput.Context>
          {() => (
            <TagFieldControl
              size={size}
              placeholder={placeholder}
              invalid={_invalid}
            />
          )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </TagsInput.Root>
    );
  },
);

const tagFieldControlClasses = cva(
  classNames(
    "group/tag-control flex w-full flex-wrap items-center border transition-all",
    "outline-none data-[focus]:ring-2 ring-offset-2 ring-offset-white dark:ring-offset-secondary-950",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 data-[readOnly]:cursor-default",
  ),
  {
    variants: {
      size: {
        sm: "pl-1.5 pr-[34px] py-1.5 gap-1.5 rounded-base",
        md: "pl-2 pr-[38px] py-2 gap-2 rounded-md",
        lg: "pl-2.5 pr-[46px] py-2.5 gap-2.5 rounded-lg",
      },
      invalid: {
        true: "border-red-500 dark:border-red-300 ring-red-300 dark:ring-red-100",
        false:
          "border-secondary-300 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-300 data-[focus]:border-primary-500 dark:data-[focus]:border-primary-300 data-[disabled]:hover:border-secondary-300 data-[disabled]:hover:dark:border-secondary-700 ring-primary-300 dark:ring-primary-100",
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
  invalid: boolean;
};

function TagFieldControl({ placeholder, size, invalid }: TagFieldControl) {
  const { value } = useTagsInputContext();

  return (
    <>
      <TagsInput.Control className={tagFieldControlClasses({ size, invalid })}>
        {value.map((value, index) => (
          <TagsInput.Item key={`${index}-${value}`} index={index} value={value}>
            <TagPreviewItem value={value} size={size} />
            {/* @ts-ignore */}
            <TagsInput.ItemInput
              className={classNames(
                "outline-none",
                // @ts-ignore
                tagInputTextClasses.size[size],
              )}
            />
          </TagsInput.Item>
        ))}
        <TagsInput.Input
          placeholder={placeholder}
          className={classNames(
            "dark:text-secondary-200 data-[disabled]:bg-secondary-300 flex-1 bg-transparent py-0.5 outline-none disabled:cursor-not-allowed data-[readonly]:cursor-default",
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
  classNames(
    "border-secondary-300 dark:border-secondary-700 data-[highlighted]:dark:border-primary-400 data-[highlighted]:border-primary-500 items-center border transition-all data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60",
    "data-[highlighted]:ring-1 ring-offset-1 ring-primary-300 dark:ring-primary-100",
  ),
  {
    variants: {
      size: {
        sm: "gap-1 rounded-sm pl-1 pr-0.5 py-0",
        md: "gap-1.5 rounded-base pl-1.5 pr-1 py-px",
        lg: "gap-2 rounded-md pl-2 pr-1.5 py-0.5",
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
        <XMarkIcon className="size-full stroke-[2.5]" />
      </TagsInput.ItemDeleteTrigger>
    </TagsInput.ItemPreview>
  );
}
