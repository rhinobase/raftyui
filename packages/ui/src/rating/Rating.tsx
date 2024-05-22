"use client";
import { RatingGroup } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";

export const ratingControlClasses = cva("flex flex-wrap", {
  variants: {
    size: {
      sm: "gap-0.5",
      md: "gap-1",
      lg: "gap-2",
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
      true: "fill-yellow-400/80 stroke-yellow-400/80 dark:fill-yellow-500 dark:stroke-yellow-500",
      false:
        "fill-secondary-200 stroke-secondary-200 dark:fill-secondary-700 dark:stroke-secondary-700",
    },
  },
  defaultVariants: {
    size: "md",
    highlighted: false,
  },
});

export type Rating = ComponentPropsWithoutRef<typeof RatingGroup.Root> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
};

export const Rating = forwardRef<ElementRef<typeof RatingGroup.Root>, Rating>(
  (
    {
      isDisabled = false,
      isLoading = false,
      isReadOnly = false,
      size = "md",
      ...props
    },
    forwarededRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <RatingGroup.Root
        {...props}
        disabled={disabled}
        readOnly={readOnly}
        ref={forwarededRef}
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
                            className={classNames(
                              ratingIconClasses({ size }),
                              "absolute -scale-x-100 transform",
                            )}
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
