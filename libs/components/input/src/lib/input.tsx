import React, {
  InputHTMLAttributes,
  RefObject,
  forwardRef,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFieldControlContext } from "@rhino/field";
import { classNames, mergeRefs } from "@rhino/utils";
import { cva } from "class-variance-authority";
import {
  AriaNumberFieldProps,
  AriaSearchFieldProps,
  AriaTextFieldProps,
  useLocale,
  useNumberField,
  useSearchField,
  useTextField,
} from "react-aria";
import { useNumberFieldState, useSearchFieldState } from "react-stately";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  XMarkIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@rhino/button";
import { InputGroup, Suffix, RightAddon } from "./input-group";
import { useInputGroupContext } from "./context";

type InitialState = boolean | (() => boolean);

function useBoolean(initialState: InitialState = false) {
  const [value, setValue] = useState(initialState);
  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    []
  );
  return [value, callbacks] as const;
}

const inputFieldClasses = cva(
  "w-full z-[1] appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "py-1 text-sm",
        md: "py-1.5",
        lg: "py-2 text-lg",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline:
          "read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
        ghost: "border border-transparent",
      },
      invalid: {
        true: "border-error-500 focus:ring-error-200 dark:border-error-400 dark:focus:ring-error-100/20",
      },
      isLeftAddon: {
        true: "",
      },
      isRightAddon: {
        true: "",
      },
      isPrefix: {
        true: "",
      },
      isSuffix: {
        true: "",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline"],
        size: ["sm", "md", "lg"],
        className:
          "border border-secondary-300 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
      },
      {
        variant: ["outline", "ghost"],
        size: ["sm", "md", "lg"],
        className: "bg-transparent",
      },
      {
        size: "sm",
        isLeftAddon: false,
        className: "rounded-l",
      },
      {
        size: "sm",
        isRightAddon: false,
        className: "rounded-r",
      },
      {
        size: "sm",
        isPrefix: true,
        isSuffix: false,
        className: "pl-8 pr-2",
      },
      {
        size: "sm",
        isPrefix: false,
        isSuffix: true,
        className: "pl-2 pr-8",
      },
      {
        size: "sm",
        isPrefix: true,
        isSuffix: true,
        className: "px-8",
      },
      {
        size: "sm",
        isPrefix: false,
        isSuffix: false,
        className: "px-2",
      },
      {
        size: ["md", "lg"],
        isLeftAddon: false,
        className: "rounded-l-md",
      },
      {
        size: ["md", "lg"],
        isRightAddon: false,
        className: "rounded-r-md",
      },
      {
        size: "md",
        isPrefix: true,
        isSuffix: false,
        className: "pl-9 pr-3",
      },
      {
        size: "md",
        isPrefix: false,
        isSuffix: true,
        className: "pl-3 pr-9",
      },
      {
        size: "md",
        isPrefix: true,
        isSuffix: true,
        className: "px-9",
      },
      {
        size: "md",
        isPrefix: false,
        isSuffix: false,
        className: "px-3",
      },
      {
        size: "lg",
        isPrefix: true,
        isSuffix: false,
        className: "pl-10 pr-4",
      },
      {
        size: "lg",
        isPrefix: false,
        isSuffix: true,
        className: "pl-4 pr-10",
      },
      {
        size: "lg",
        isPrefix: true,
        isSuffix: true,
        className: "px-10",
      },
      {
        size: "lg",
        isPrefix: false,
        isSuffix: false,
        className: "px-4",
      },
    ],
  }
);

export type Input = {
  className?: string;
  type?: string;
  variant: "solid" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputRef: RefObject<HTMLInputElement>;
};

export const Input = forwardRef<HTMLInputElement, Input>(
  (
    { inputProps, type = "text", className, variant, size, inputRef },
    forwardedRef
  ) => {
    const controls = useFieldControlContext() ?? {};
    const inputGroupProps = useInputGroupContext() ?? {
      isLeftAddon: false,
      isRightAddon: false,
      isPrefix: false,
      isSuffix: false,
    };
    return (
      <input
        {...controls}
        {...inputProps}
        type={type}
        className={classNames(
          inputFieldClasses({
            size: size,
            variant,
            invalid: controls.isInvalid,
            isLeftAddon: inputGroupProps.isLeftAddon,
            isRightAddon: inputGroupProps.isRightAddon,
            isPrefix: inputGroupProps.isPrefix,
            isSuffix: inputGroupProps.isSuffix,
          }),
          className
        )}
        ref={mergeRefs(inputRef, forwardedRef)}
      />
    );
  }
);

// Input Field
export type InputField = Omit<AriaTextFieldProps, "size"> & {
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const InputField = forwardRef<HTMLInputElement, InputField>(
  ({ className, variant = "outline", size = "md", ...props }, forwardedRef) => {
    const ref = useRef(null);
    const { inputProps } = useTextField(props, ref);
    return (
      <Input
        inputProps={inputProps}
        variant={variant}
        size={size}
        className={className}
        inputRef={ref}
      />
    );
  }
);
InputField.displayName = "InputField";

// Number Input Field
export type NumberField = Omit<AriaNumberFieldProps, "size"> & {
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const NumberField = forwardRef<HTMLInputElement, NumberField>(
  ({ variant = "outline", size = "md", className, ...props }, forwardedRef) => {
    const { locale } = useLocale();
    const state = useNumberFieldState({ ...props, locale });
    const ref = React.useRef(null);
    const { inputProps, incrementButtonProps, decrementButtonProps } =
      useNumberField(props, state, ref);

    return (
      <InputGroup>
        <Input
          inputProps={inputProps}
          variant={variant}
          size={size}
          className={className}
          inputRef={ref}
        />
        <RightAddon
          className={classNames(
            variant !== "ghost" && "!border !border-l-0 !border-secondary-300",
            "flex-col !px-0 !bg-transparent"
          )}
        >
          <Button
            {...incrementButtonProps}
            variant="ghost"
            size="sm"
            className="!py-0 !rounded-none !rounded-tr-md"
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
              variant !== "ghost" && "h-[1px] w-full bg-secondary-300"
            )}
          />
          <Button
            {...decrementButtonProps}
            variant="ghost"
            size="sm"
            className="!py-0 !rounded-none !rounded-br-md"
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
  }
);
NumberField.displayName = "NumberField";

// Search Field
export type SearchField = Omit<AriaSearchFieldProps, "size"> & {
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const SearchField = forwardRef<HTMLInputElement, SearchField>(
  ({ className, variant = "outline", size = "md", ...props }, forwardedRef) => {
    const state = useSearchFieldState(props);
    const ref = useRef(null);
    const { inputProps, clearButtonProps } = useSearchField(props, state, ref);

    return (
      <InputGroup>
        <Input
          inputProps={inputProps}
          variant={variant}
          size={size}
          className={className}
          inputRef={ref}
        />
        <Suffix>
          <Button
            variant="ghost"
            size="icon"
            {...clearButtonProps}
            className="!z-[2]"
          >
            <XMarkIcon className="w-3 h-3 stroke-[3]" />
          </Button>
        </Suffix>
      </InputGroup>
    );
  }
);
SearchField.displayName = "SearchField";

// Password Field
export type PasswordField = Omit<AriaTextFieldProps, "size"> & {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid" | "ghost";
};

export const PasswordField = forwardRef<HTMLInputElement, PasswordField>(
  ({ className, size = "md", variant = "outline", ...props }, forwardedRef) => {
    const [showPassword, { toggle }] = useBoolean();
    const ref = useRef(null);
    const { inputProps } = useTextField(props, ref);

    return (
      <InputGroup>
        <Input
          inputProps={inputProps}
          type={showPassword ? "text" : "password"}
          variant={variant}
          size={size}
          className={className}
          inputRef={ref}
        />
        <Suffix>
          <Button
            size="icon"
            aria-label="show and hide password"
            variant="ghost"
            onClick={toggle}
            className="!z-[2]"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-4 w-4 stroke-2" />
            ) : (
              <EyeIcon className="h-4 w-4 stroke-2" />
            )}
          </Button>
        </Suffix>
      </InputGroup>
    );
  }
);
PasswordField.displayName = "PasswordField";
