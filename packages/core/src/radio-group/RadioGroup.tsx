import React from "react";
import {
  RadioGroupProps,
  RadioGroupState,
  useRadioGroupState,
} from "react-stately";
import {
  AriaRadioProps,
  VisuallyHidden,
  useFocusRing,
  useRadio,
  useRadioGroup,
  mergeProps,
} from "react-aria";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";
import { ErrorMessage } from "../field";
import { Text } from "../text";

// This is the shared context between the Radio Components

const RadioContext = React.createContext<RadioGroupState | null>(null);

export type RadioGroup = RadioGroupProps & {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

// The Parent Component
export function RadioGroup(props: RadioGroup) {
  const { children, label, description, errorMessage, validationState } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps} aria-label="radio">
        {label}
      </span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      {description && <Text {...descriptionProps}>{description}</Text>}
      {errorMessage && validationState === "invalid" && (
        <ErrorMessage {...errorMessageProps}>{errorMessage}</ErrorMessage>
      )}
    </div>
  );
}

const radioClasses = cva(
  "inline-block rounded-full border-2 border-secondary-400 hover:opacity-70 dark:border-secondary-600 group-data-[selected=true]:border-primary-500 dark:group-data-[selected=true]:border-primary-300",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5 group-data-[selected=true]:border-4",
        md: "h-[18px] w-[18px] group-data-[selected=true]:border-[5px]",
        lg: "h-6 w-6 group-data-[selected=true]:border-[8px]",
      },
    },
  }
);

export type Radio = AriaRadioProps & { size?: "sm" | "md" | "lg" };

export function Radio(props: Radio) {
  const { children, size = "md" } = props;
  return (
    <RadioCard
      {...props}
      className="dark:text-secondary-200 flex items-center gap-2 hover:opacity-80"
    >
      <div className={classNames(radioClasses({ size }))} />
      {children}
    </RadioCard>
  );
}

export type RadioCard = AriaRadioProps & { className?: string };

export function RadioCard(props: RadioCard) {
  const { children, className, isDisabled } = props;
  const state = React.useContext(RadioContext);
  const ref = React.useRef(null);
  const { inputProps } = useRadio(props, state!, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  const isSelected = state!.selectedValue === props.value;

  return (
    <label
      {...props}
      className={classNames(
        isFocusVisible && "ring-2 ring-black ring-offset-2",
        isDisabled && "cursor-not-allowed opacity-50",
        "group",
        className
      )}
      data-selected={isSelected}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
}
