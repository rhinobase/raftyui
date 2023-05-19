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
import { classNames } from "@rafty/utils";
import { ErrorMessage } from "@rafty/field";
import { Text } from "@rafty/text";
import {
  RadioGroupContext,
  RadioGroupProvider,
  useRadioGroupContext,
} from "./context";

// This is the shared context between the Radio Components

const RadioContext = React.createContext<RadioGroupState | null>(null);

export type RadioGroup = Omit<RadioGroupProps, "isDisabled"> &
  Partial<RadioGroupContext> & {
    children: React.ReactNode;
  };

// The Parent Component
export function RadioGroup(props: RadioGroup) {
  const {
    children,
    label,
    description,
    errorMessage,
    validationState,
    size = "md",
    isDisabled = false,
  } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <RadioGroupProvider value={{ size, isDisabled }}>
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
    </RadioGroupProvider>
  );
}

const radioClasses = {
  size: {
    sm: "h-3.5 w-3.5 group-aria-checked:border-4",
    md: "h-[18px] w-[18px] group-aria-checked:border-[5px]",
    lg: "h-6 w-6 group-aria-checked:border-[8px]",
  },
};

export type Radio = AriaRadioProps;

export function Radio({ children, ...props }: Radio) {
  const { size, isDisabled } = useRadioGroupContext();

  return (
    <RadioCard
      {...props}
      isDisabled={isDisabled}
      className="dark:text-secondary-200 flex items-center gap-2 hover:opacity-80"
    >
      <div
        className={classNames(
          "border-secondary-400 dark:border-secondary-600 group-aria-checked:border-primary-500 dark:group-aria-checked:border-primary-300 inline-block rounded-full border-2 hover:opacity-70",
          radioClasses.size[size]
        )}
      />
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
  const { isDisabled: isGroupDisabled } = useRadioGroupContext();

  const disabled = isDisabled || isGroupDisabled;

  return (
    <label
      {...props}
      className={classNames(
        isFocusVisible && "ring-2 ring-black ring-offset-2",
        "group aria-disabled:cursor-not-allowed aria-disabled:opacity-60 dark:aria-disabled:opacity-50",
        className
      )}
      aria-checked={isSelected}
      aria-disabled={disabled}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
}
