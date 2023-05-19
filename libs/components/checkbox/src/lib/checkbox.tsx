import React, {
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  forwardRef,
  useRef,
} from "react";
import { classNames, mergeRefs } from "@rafty/utils";
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
    "group-aria-checked:bg-primary-500 group-active:group-aria-checked:border-primary-600 group-aria-checked:border-primary-500 group-aria-checked:dark:border-primary-300 group-aria-checked:dark:bg-primary-300 group-active:group-aria-checked:bg-primary-600",
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

    const internalProps: { [key: string]: boolean | undefined } = {
      "aria-disabled": isDisabled,
      "aria-checked": undefined,
    };

    if (!isIndeterminate) internalProps["aria-checked"] = isSelected;

    return (
      <label
        className={classNames(
          "group flex items-center",
          "aria-checked:text-primary-500 aria-checked:dark:text-primary-300",
          "aria-disabled:cursor-not-allowed aria-disabled:opacity-60 aria-disabled:dark:opacity-50"
        )}
        {...internalProps}
      >
        <VisuallyHidden>
          <input {...inputProps} ref={mergeRefs(forwardedRef, ref)} />
        </VisuallyHidden>

        <div
          className={classNames(
            checkboxClasses.isIndeterminate[Number(isIndeterminate)],
            "border-secondary-500 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 text-white transition duration-150 ease-in-out"
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
              "h-4 w-4 transition-all duration-300"
            )}
          />
        </div>
        <span className="dark:text-secondary-200 select-none font-medium text-gray-700">
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
