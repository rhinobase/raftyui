"use client";
import { RatingGroup, type RatingGroupRootProps } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useFieldControlContext } from "../field-control";
import type { ValueOrFunction } from "../types";
import { type SizeType, getValue } from "../utils";

export const ratingControlClasses = cva(
  "flex flex-wrap outline-none data-[readonly]:cursor-default data-[disabled]:opacity-70",
  {
    variants: {
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-1.5",
      },
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
      loading: {
        true: "cursor-progress",
        false: "",
      },
    },
    compoundVariants: [
      {
        disabled: false,
        loading: false,
        className: "cursor-pointer",
      },
    ],
    defaultVariants: {
      disabled: false,
      loading: false,
      size: "md",
    },
  },
);

export const ratingItemClasses = cva(
  "dark:ring-offset-secondary-950 ring-primary-300 dark:ring-primary-100 outline-none ring-offset-2 ring-offset-white focus-visible:ring-2",
  {
    variants: {
      size: {
        sm: "rounded-sm",
        md: "rounded-base",
        lg: "rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const ratingItemIconClasses = cva("", {
  variants: {
    size: {
      sm: "size-5",
      md: "size-6",
      lg: "size-7",
    },
    highlighted: {
      true: "fill-yellow-400 dark:fill-yellow-300",
      false: "fill-secondary-300 dark:fill-secondary-700",
    },
  },
  defaultVariants: {
    highlighted: false,
    size: "md",
  },
});

export type Rating = Omit<RatingGroupRootProps, "onValueChange"> & {
  size?: SizeType;
  onValueChange?: (value: number) => void;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isReadOnly?: ValueOrFunction;
};

export const Rating = forwardRef<ElementRef<typeof RatingGroup.Root>, Rating>(
  function Rating(
    {
      name,
      disabled,
      readOnly,
      size = "md",
      onValueChange,
      isDisabled,
      isLoading,
      isReadOnly,
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
      disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled;
    const _loading = getValue(isLoading) ?? fieldControlContext.isLoading;
    const _readOnly =
      readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

    const ratingProps: RatingGroupRootProps = {
      ...props,
      name: _name,
      disabled: _disabled || _loading,
      readOnly: _readOnly,
      onValueChange: ({ value }) => onValueChange?.(value),
    };

    return (
      <RatingGroup.Root {...ratingProps} ref={forwardedRef}>
        <RatingGroup.Control
          className={ratingControlClasses({
            size,
            disabled: _disabled,
            loading: _loading,
          })}
        >
          <RatingGroup.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingGroup.Item
                  key={item}
                  index={item}
                  className={ratingItemClasses({ size })}
                >
                  <RatingGroup.ItemContext>
                    {({ half, highlighted }) =>
                      half ? (
                        <div className="relative flex">
                          <FaStarHalf
                            className={ratingItemIconClasses({
                              size,
                              highlighted,
                            })}
                          />
                          <FaStarHalf
                            className={ratingItemIconClasses({
                              size,
                              highlighted: false,
                              className: "absolute -scale-x-100 transform",
                            })}
                          />
                        </div>
                      ) : (
                        <FaStar
                          className={ratingItemIconClasses({
                            size,
                            highlighted,
                          })}
                        />
                      )
                    }
                  </RatingGroup.ItemContext>
                </RatingGroup.Item>
              ))
            }
          </RatingGroup.Context>
          <RatingGroup.HiddenInput />
        </RatingGroup.Control>
      </RatingGroup.Root>
    );
  },
);
