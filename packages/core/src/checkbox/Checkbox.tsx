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
  AriaCheckboxProps,
  VisuallyHidden,
  useCheckbox,
} from "react-aria";
import {
  CheckboxGroupProps,
  CheckboxGroupState,
  useToggleState,
} from "react-stately";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useCheckboxGroupState } from "react-stately";
import { useCheckboxGroup, useCheckboxGroupItem } from "react-aria";
import { mergeRefs } from "../utils/mergeRefs";

const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
  null
);

type CheckboxGroup = CheckboxGroupProps & { children: React.ReactNode };

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroup>(
  (
    { children, label, description, errorMessage, validationState, ...props },
    forwardedRef
  ) => {
    const state = useCheckboxGroupState(props);
    const { groupProps, labelProps, descriptionProps, errorMessageProps } =
      useCheckboxGroup(props, state);

    return (
      <div {...groupProps} ref={forwardedRef}>
        <span {...labelProps}>{label}</span>
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

type CheckboxComponent = {
  isDisabled?: boolean;
  isSelected?: boolean;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  children: ReactNode;
  ref: RefObject<HTMLInputElement>;
};

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxComponent>(
  ({ isDisabled, isSelected, inputProps, children, ref }, forwardedRef) => {
    return (
      <label
        className={classNames(
          isDisabled && "text-zinc-400 dark:text-zinc-600",
          isSelected && "text-primary-500 dark:text-primary-300",
          "flex items-center group"
        )}
      >
        <VisuallyHidden>
          <input {...inputProps} ref={mergeRefs(forwardedRef, ref)} />
        </VisuallyHidden>

        <div
          className={classNames(
            isSelected
              ? "bg-primary-500 group-active:bg-primary-600"
              : "bg-white",
            "text-white",
            "border-2",
            "rounded",
            isDisabled
              ? "border-gray-300"
              : isSelected
              ? "border-primary-500 group-active:border-primary-600"
              : "border-gray-500 group-active:border-gray-600",
            "w-5",
            "h-5",
            "flex",
            "flex-shrink-0",
            "justify-center",
            "items-center",
            "mr-2",
            "transition",
            "ease-in-out",
            "duration-150"
          )}
          aria-hidden="true"
        >
          <CheckIcon
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={isSelected ? 44 : 66}
            className="w-4 h-4 text-white"
            style={{
              transition: "all 400ms",
            }}
          />
        </div>
        <span
          className={classNames(
            isDisabled
              ? "text-gray-400"
              : "text-gray-700 group-active:text-gray-800",
            "select-none"
          )}
        >
          {children}
        </span>
      </label>
    );
  }
);

const SingletonCheckbox = forwardRef<HTMLInputElement, AriaCheckboxProps>(
  ({ children, ...props }, forwardedRef) => {
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
      >
        {children}
      </CheckboxComponent>
    );
  }
);

type Subbox = {
  props: AriaCheckboxGroupItemProps;
  state: CheckboxGroupState;
  ref: React.RefObject<HTMLInputElement>;
  children: ReactNode;
};

const Subbox = forwardRef<HTMLInputElement, Subbox>(
  ({ props, state, ref, children }, forwardedRef) => {
    console.log(props, state);

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
    const ref = useRef<HTMLInputElement>(null);

    const state = React.useContext(CheckboxGroupContext);
    if (!state)
      return <SingletonCheckbox {...props}>{children}</SingletonCheckbox>;

    return (
      <Subbox
        props={props as AriaCheckboxGroupItemProps}
        state={state}
        ref={mergeRefs(ref, forwardedRef)}
      >
        {children}
      </Subbox>
    );
  }
);
