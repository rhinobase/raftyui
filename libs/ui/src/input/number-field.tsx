import React from "react";
import { classNames } from "@rafty/utils";
import {
  AriaNumberFieldProps,
  useLocale,
  useNumberField,
  useButton,
} from "react-aria";
import { useNumberFieldState } from "react-stately";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { InputGroup, RightAddon } from "./input-group";
import { InputField } from "./input-field";

// Number Input Field

export type NumberField = Omit<AriaNumberFieldProps, "size"> & {
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const NumberField = ({
  variant = "outline",
  size = "md",
  className,
  ...props
}: NumberField) => {
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const ref = React.useRef(null);
  const { inputProps, incrementButtonProps, decrementButtonProps } =
    useNumberField(props, state, ref);

  const IncrementButton = useButton(incrementButtonProps, ref);
  const DecrementButton = useButton(decrementButtonProps, ref);

  return (
    <InputGroup>
      <InputField
        {...inputProps}
        variant={variant}
        size={size}
        className={className}
        ref={ref}
      />
      <RightAddon
        data-cy="button"
        className={classNames(
          variant !== "ghost" &&
            "!border-secondary-300 dark:!border-secondary-700 !border !border-l-0",
          "flex-col !bg-transparent !px-0"
        )}
      >
        <Button
          {...IncrementButton.buttonProps}
          variant="ghost"
          size="sm"
          className="!rounded-none !rounded-tr-md !py-0"
        >
          <ChevronUpIcon
            className={classNames(
              size === "sm" && "h-[15px]",
              size === "md" && "h-[18px]",
              size === "lg" && "h-[22px]",
              "w-3 stroke-[3]"
            )}
          />
        </Button>
        <div
          className={classNames(
            variant !== "ghost" &&
              "bg-secondary-300 dark:bg-secondary-700 h-[1px] w-full"
          )}
        />
        <Button
          {...DecrementButton.buttonProps}
          variant="ghost"
          size="sm"
          className="!rounded-none !rounded-br-md !py-0"
        >
          <ChevronDownIcon
            className={classNames(
              size === "sm" && "h-[14px]",
              size === "md" && "h-[17px]",
              size === "lg" && "h-[21px]",
              "w-3 stroke-[3]"
            )}
          />
        </Button>
      </RightAddon>
    </InputGroup>
  );
};
NumberField.displayName = "NumberField";
