"use client";
import { RatingGroup, type RatingGroupRootProps } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import type { ValueOrFunction } from "../types";
import { getValue } from "../utils";

export const ratingControlClasses = cva("flex flex-wrap", {
  variants: {
    size: {
      sm: "gap-0.5",
      md: "gap-1",
      lg: "gap-1.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const ratingIconClasses = cva("", {
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
    size: "md",
    highlighted: false,
  },
});

export type Rating = Omit<RatingGroupRootProps, "onValueChange"> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  onValueChange?: (value: number) => void;
};

export const Rating = forwardRef<ElementRef<typeof RatingGroup.Root>, Rating>(
  (
    {
      size = "md",
      onValueChange,
      isDisabled = false,
      isLoading = false,
      isReadOnly = false,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <RatingGroup.Root
        {...props}
        disabled={disabled}
        readOnly={readOnly}
        onValueChange={({ value }) => onValueChange?.(value)}
        ref={forwardedRef}
      >
        <RatingGroup.Control className={ratingControlClasses({ size })}>
          <RatingGroup.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingGroup.Item
                  key={item}
                  index={item}
                  className="cursor-pointer outline-none data-[disabled]:cursor-not-allowed data-[readonly]:cursor-default data-[disabled]:opacity-70"
                >
                  <RatingGroup.ItemContext>
                    {({ half, highlighted }) =>
                      half ? (
                        <div className="relative flex">
                          <FaStarHalf
                            className={ratingIconClasses({ size, highlighted })}
                          />
                          <FaStarHalf
                            className={ratingIconClasses({
                              size,
                              className: "absolute -scale-x-100 transform",
                            })}
                          />
                        </div>
                      ) : (
                        <FaStar
                          className={ratingIconClasses({ size, highlighted })}
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

Rating.displayName = "Rating";
