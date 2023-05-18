import React, {
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  forwardRef,
  useRef,
} from "react";
import { classNames, mergeRefs } from "@rhino/utils";
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaCheckboxProps,
  VisuallyHidden,
  useCheckbox,
  useCheckboxGroup,
  useCheckboxGroupItem,
} from "react-aria";
import { CheckboxGroupState, useToggleState } from "react-stately";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useCheckboxGroupState } from "react-stately";
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

const checkboxClasses = {
  isIndeterminate: [
    "group-aria-selected:bg-primary-500 group-active:group-aria-selected:border-primary-600 group-aria-selected:border-primary-500 group-aria-selected:dark:border-primary-300 group-aria-selected:dark:bg-primary-300 group-active:group-aria-selected:bg-primary-600",
    "border-secondary-500",
  ],
};

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
      <label
        className={classNames(
          "group flex items-center",
          "aria-selected:text-primary-500 aria-selected:dark:text-primary-300",
          "aria-disabled:opacity-60 aria-disabled:dark:opacity-50 aria-disabled:cursor-not-allowed"
        )}
        aria-selected={isSelected}
        aria-disabled={isDisabled}
      >
        <VisuallyHidden>
          <input {...inputProps} ref={mergeRefs(forwardedRef, ref)} />
        </VisuallyHidden>

        <div
          className={classNames(
            checkboxClasses.isIndeterminate[Number(isIndeterminate)],
            "w-5 h-5 flex flex-shrink-0 justify-center items-center rounded text-white mr-2 border-2 border-secondary-500 transition ease-in-out duration-150"
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

export type Checkbox = AriaCheckboxGroupItemProps | AriaCheckboxProps;

export const Checkbox = forwardRef<HTMLInputElement, Checkbox>(
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
