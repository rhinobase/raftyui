import React, {
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  forwardRef,
  useRef,
} from "react";
import { classNames } from "../utils";
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaCheckboxProps,
  VisuallyHidden,
  useCheckbox,
} from "react-aria";
import { CheckboxGroupState, useToggleState } from "react-stately";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useCheckboxGroupState } from "react-stately";
import { useCheckboxGroup, useCheckboxGroupItem } from "react-aria";
import { mergeRefs } from "../utils/mergeRefs";
import { cva } from "class-variance-authority";

const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
  null
);

export type CheckboxGroup = AriaCheckboxGroupProps & {
  children: React.ReactNode;
};

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroup>(
  (
    { children, description, errorMessage, validationState, ...props },
    forwardedRef
  ) => {
    const state = useCheckboxGroupState(props);
    const { groupProps, descriptionProps, errorMessageProps } =
      useCheckboxGroup(props, state);

    return (
      <div {...groupProps} ref={forwardedRef}>
        <CheckboxGroupContext.Provider value={state}>
          {children}
        </CheckboxGroupContext.Provider>
        {description && (
          <div {...descriptionProps} style={{ fontSize: 12 }}>
            {description}
          </div>
        )}
        {errorMessage && validationState === "invalid" && (
          <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

const labelClasses = cva("flex items-center group", {
  variants: {
    isDisabled: {
      true: "opacity-60 dark:opacity-50 cursor-not-allowed",
      false: "hover:opacity-80",
    },
    isSelected: {
      true: "text-primary-500 dark:text-primary-300",
      false: "",
    },
  },
});
const checkboxClasses = cva(
  "text-white border-2 rounded w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 transition ease-in-out duration-150",
  {
    variants: {
      isIndeterminate: {
        true: "border-secondary-500",
        false: "",
      },
      isSelected: {
        true: "",
        false: "border-secondary-500",
      },
    },
    compoundVariants: [
      {
        isIndeterminate: false,
        isSelected: true,
        className:
          "bg-primary-500 group-active:border-primary-600 border-primary-500 dark:border-primary-300 dark:bg-primary-300 group-active:bg-primary-600",
      },
    ],
  }
);

type CheckboxComponent = {
  isDisabled?: boolean;
  isSelected?: boolean;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  children: ReactNode;
  ref: RefObject<HTMLInputElement>;
  isIndeterminate?: boolean;
};

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxComponent>(
  (
    {
      isDisabled = false,
      isSelected,
      inputProps,
      children,
      ref,
      isIndeterminate = false,
    },
    forwardedRef
  ) => {
    const Icon = isIndeterminate ? MinusIcon : CheckIcon;
    return (
      <label className={classNames(labelClasses({ isDisabled, isSelected }))}>
        <VisuallyHidden>
          <input {...inputProps} ref={mergeRefs(forwardedRef, ref)} />
        </VisuallyHidden>

        <div
          className={classNames(
            checkboxClasses({ isIndeterminate, isSelected })
          )}
          aria-hidden="true"
        >
          <Icon
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={isIndeterminate ? 44 : isSelected ? 44 : 66}
            className={classNames(
              isIndeterminate
                ? "text-secondary-600 dark:text-secondary-400"
                : isSelected
                ? "text-white"
                : "text-transparent",
              "w-4 h-4 transition-all duration-300"
            )}
          />
        </div>
        <span className="select-none text-gray-700 dark:text-secondary-200 font-medium">
          {children}
        </span>
      </label>
    );
  }
);

const SingletonCheckbox = forwardRef<HTMLInputElement, AriaCheckboxProps>(
  ({ children, isIndeterminate, ...props }, forwardedRef) => {
    const ref = useRef<HTMLInputElement>(null);

    const state = useToggleState(props);
    const { inputProps } = useCheckbox(props, state, ref);

    const isDisabled = props.isDisabled;
    const isSelected = state.isSelected;

    return (
      <CheckboxComponent
        isDisabled={isDisabled}
        isSelected={isSelected}
        inputProps={inputProps}
        ref={mergeRefs(forwardedRef, ref)}
        isIndeterminate={isIndeterminate}
      >
        {children}
      </CheckboxComponent>
    );
  }
);

type Subbox = {
  props: AriaCheckboxGroupItemProps;
  state: CheckboxGroupState;
  children: ReactNode;
};

const Subbox = forwardRef<HTMLInputElement, Subbox>(
  ({ props, state, children }, forwardedRef) => {
    const ref = React.useRef(null);
    const { inputProps } = useCheckboxGroupItem(props, state, ref);

    const isDisabled = state?.isDisabled || props.isDisabled;
    let isSelected = false;
    if (props.value) isSelected = state?.isSelected(props.value) ?? false;

    return (
      <CheckboxComponent
        isDisabled={isDisabled}
        isSelected={isSelected}
        inputProps={inputProps}
        ref={mergeRefs(ref, forwardedRef)}
      >
        {children}
      </CheckboxComponent>
    );
  }
);

export type CheckBox = AriaCheckboxGroupItemProps | AriaCheckboxProps;
export const Checkbox = forwardRef<HTMLInputElement, CheckBox>(
  ({ children, ...props }, forwardedRef) => {
    const state = React.useContext(CheckboxGroupContext);
    if (!state)
      return <SingletonCheckbox {...props}>{children}</SingletonCheckbox>;

    return (
      <Subbox
        props={props as AriaCheckboxGroupItemProps}
        state={state}
        ref={forwardedRef}
      >
        {children}
      </Subbox>
    );
  }
);
