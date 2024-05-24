import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import DropdownCascade from "react-dropdown-cascade";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { getValue } from "../utils";

export type Cascader = ComponentPropsWithoutRef<typeof DropdownCascade> & {
  name?: string;
  size?: "sm" | "md" | "lg";
  inputPlaceholder?: string;
  isDisabled?: ValueOrFunction<boolean>;
};

const cascaderSubitem = cva(
  "hover:!bg-secondary-100 dark:hover:!bg-secondary-700 !cursor-pointer after:dark:!border-secondary-100",
  {
    variants: {
      size: {
        sm: "text-sm !py-1 !px-4 after:!p-[2.5px] !min-h-9",
        md: "text-base !px-5",
        lg: "text-lg !py-3 after:!p-[4px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const cascaderDropdownMenu = cva(
  "!shadow-md !animate-none dark:!bg-secondary-800 dark:border-secondary-700 dark:text-white",
  {
    variants: {
      size: {
        sm: "!min-w-32",
        md: "!min-w-40",
        lg: "!min-w-52",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

const cascaderDropdownMenuItem = cva(
  "hover:!bg-secondary-100 dark:hover:!bg-secondary-700",
  {
    variants: {
      size: {
        sm: "text-sm !py-1 !px-4 !min-h-9",
        md: "text-base !px-5",
        lg: "text-lg !py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const Cascader = forwardRef<
  ElementRef<typeof DropdownCascade>,
  Cascader
>(
  (
    {
      name,
      size = "md",
      customStyles,
      inputPlaceholder,
      isDisabled = false,
      ...props
    },
    forwardedRef,
  ) => {
    const disabled = props.disabled || getValue(isDisabled);

    return (
      <DropdownCascade
        {...props}
        disabled={disabled}
        customInput={(props) => (
          <InputField
            {...props}
            placeholder={inputPlaceholder}
            name={name}
            size={size}
            className="cursor-pointer"
          />
        )}
        customStyles={
          customStyles ?? {
            dropdownMenuItem: {
              className: `${cascaderDropdownMenuItem({ size })}`,
            },
            dropdownSubitem: {
              className: `${cascaderSubitem({ size })}`,
            },
            dropdownMenu: {
              className: `${cascaderDropdownMenu({ size })}`,
            },
            dropdown: {
              className: "w-full",
            },
          }
        }
        ref={forwardedRef}
      />
    );
  },
);
